<template>
  <div>
    <h6 class="text-center title text-white">Now there's a gif for every occasion</h6>
    <div class="layout-padding">
      <div class="logo">
        <iframe src="https://giphy.com/embed/CoDp6NnSmItoY" width="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
      <q-search v-model="search" color="primary" class="search-bar" :inverted="true" placeholder="Find your GIF" @keyup.enter="$root.search(search)" />
      <q-btn @click="$root.search(search)" color="secondary" class="full-width search-btn">Find it</q-btn>
    </div>
  </div>
</template>

<script>
import {
  openURL,
  QBtn,
  QIcon,
  QSearch
} from 'quasar'

export default {
  name: 'index',
  components: {
    QBtn,
    QIcon,
    QSearch
  },
  store: [
    'search'
  ],
  methods: {
    launch (url) {
      openURL(url)
    }
  }
}
</script>

<style lang="stylus">
.logo-container
  min-width 350px
  width 90%
  margin-left auto
  margin-right auto
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
  
  img
    width 100%
.search-bar
  margin-top 4em
  
.title
  margin-top 2em
  
.search-btn
  margin-top 1em
</style>
