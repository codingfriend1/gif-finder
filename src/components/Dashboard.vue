<template>
  <div class="layout-padding">
    <div class="row sm-gutter search-box">
      <div class="col-9" :class="{'col-12': $q.platform.is.desktop}">
        <q-search v-model="search" color="faded" class="search-bar-dashboard" :inverted="true" placeholder="Find your GIF" @keyup.enter="$root.search(search)" :debounce="0" />
      </div>
      <div class="col-3" v-show="!$q.platform.is.desktop">
        <q-btn @click="$root.search(search)" color="faded" class="full-width search-btn-dashboard mobile-only">Find it</q-btn>
      </div>
    </div>

    <div v-show="!matchingGIFs.length" class="text-white absolute-center text-center">
      <p>No results.</p>
      <p>Type in a search query to find your gif</p>
    </div>

    <div class="gifs-container text-center">

      <q-inner-loading :visible="isSearching">
        <q-spinner-oval size="50px" color="primary"></q-spinner-oval>
      </q-inner-loading>

      <q-gallery-carousel v-if="matchingGIFs.length && $q.platform.is.mobile" @slide="setVisibleGif" infinite dots fullscreen handle-arrow-keys :src="slider"></q-gallery-carousel>

      <div @click="$root.shareOptions">
        <q-gallery v-if="matchingGIFs.length && $q.platform.is.desktop" :src="slider"></q-gallery>
      </div>
      
    </div>
  </div>
</template>

<script>
import {
  QBtn,
  QSearch,
  QInnerLoading,
  QSpinnerOval,
  QGalleryCarousel,
  QGallery
} from 'quasar'

export default {
  components: {
    QBtn,
    QSearch,
    QInnerLoading,
    QSpinnerOval,
    QGalleryCarousel,
    QGallery
  },
  computed: {
    slider () {
      if (!this.visibleGifUrl) {
        this.setVisibleGif()
      }
      return this.matchingGIFs.map(gif => gif.images.original_still.url)
    }
  },
  methods: {
    setVisibleGif (index) {
      index = index || 0
      this.visibleGifUrl = this.$store.matchingGIFs[index].images.original_still.url
    }
  },
  store: ['matchingGIFs', 'search', 'isSearching', 'visibleGifUrl']
}
</script>

<style lang="stylus">
  .q-carousel-track.with-toolbar > div
    padding 0
    
  .absolute-center
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    
  .search-box
    margin-top -30px
    
  .search-bar-dashboard
    margin-top 0
    
  .gifs-container
    text-align center
    margin-top 0.5em
    
    .full-width
      width auto !important
      max-width 100%

    img
      max-width 100%
      border-radius 3px

</style>
