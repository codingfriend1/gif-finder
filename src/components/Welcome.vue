<template>
  <div>
    <h6 class="text-center title text-white">Now there's a gif for every occasion</h6>
    <div class="layout-padding">
      <q-search v-model="search" color="primary" class="search-bar" :inverted="true" placeholder="Find your GIF" @keyup.enter="$root.search(search)" :debounce="0" />
      <q-btn @click="$root.search(search)" color="secondary" class="full-width search-btn">Find it</q-btn>

      <div class="gifs" @click="$root.shareOptions">
        <q-gallery ref="gallery" fullscreen :src="gallery"></q-gallery>
      </div>
    </div>
  </div>
</template>

<script>
import { to } from '../services/helpers.service'
import axios from 'axios'
import {
  openURL,
  QBtn,
  QIcon,
  QSearch,
  QGallery
} from 'quasar'

export default {
  name: 'index',
  components: {
    QBtn,
    QIcon,
    QSearch,
    QGallery
  },
  store: [
    'search'
  ],
  data () {
    return {
      gallery: []
    }
  },
  methods: {
    launch (url) {
      openURL(url)
    }
  },
  async created () {
    let [ err, result ] = await to(axios.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: 'Lt0ZPVfwAdej0NrmcRsxhLLxHWZA5g4M',
        limit: '20',
        rating: 'pg',
        lang: 'en'
      }
    }))

    if (!err) {
      this.gallery = result.data.data.map(gif => gif.images.original_still.url)
    }
  }
}
</script>

<style lang="stylus">
.search-bar
  margin-top 0em
  
.title
  margin-top 2em
  
.search-btn
  margin-top 1em
  margin-bottom 1em
</style>
