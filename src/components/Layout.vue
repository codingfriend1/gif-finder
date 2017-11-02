<template>
  <q-layout
    ref="layout"
    view="lHh Lpr FFF"
    class="bg-tertiary full-height relative-position"
  >
    <q-toolbar slot="header" class="bg-black">

      <q-toolbar-title>
        There's a GIF for that
      </q-toolbar-title>
    </q-toolbar>

    <router-view />

    <div slot="footer" v-show="matchingGIFs.length || $router.currentRoute.path === '/'" class="footer bg-faded">
      <q-btn v-show="$router.currentRoute.path === '/'" class="full-width" inverted color="faded" @click="launch('https://giphy.com/gifs/laughing-laugh-ricky-gervais-CoDp6NnSmItoY')">via GIPHY</q-btn>
      <div v-show="matchingGIFs.length && $router.currentRoute.path !== '/'">
        <q-btn class="full-width" icon="fa-twitter" inverted color="primary" @click="tweetGif(visibleGifUrl)">Share on twitter</q-btn>
      </div>
    </div>
  </q-layout>
</template>

<script>
import {
  openURL,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn
  },
  store: ['matchingGIFs', 'visibleGifUrl'],
  methods: {
    launch (url) {
      openURL(url)
    },
    tweetGif (gifUrl) {
      openURL(`https://twitter.com/intent/tweet?text=${gifUrl}`)
    }
  }
}
</script>

<style lang="styl">
  .footer
    padding 1em 0.5em 0.5em 0.5em
    text-align center
    box-sizing border-box
</style>
