// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar, { Toast, ActionSheet, openURL } from 'quasar'
import router from './router'
import store from './store'
import { to } from './services/helpers.service'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    data: {
      store
    },
    methods: {
      async search (query) {
        this.$store.isSearching = true

        let [ err, result ] = await to(axios.get('https://api.giphy.com/v1/gifs/search', {
          params: {
            api_key: 'Lt0ZPVfwAdej0NrmcRsxhLLxHWZA5g4M',
            q: query,
            limit: '3',
            rating: 'pg',
            lang: 'en'
          }
        }))

        this.$store.isSearching = false

        if (!err) {
          this.$store.matchingGIFs = result.data.data
          if (router.currentRoute.path === '/') {
            router.push('/dashboard')
          }
        }
        else {
          Toast.create({
            html: 'Sorry but something went wrong an we could not find your gif...',
            timeout: 4000,
            color: '#f8c1c1'
          })
        }
      },
      shareOptions (event) {
        let gifUrl

        if (event.target.tagName === 'IMG') {
          gifUrl = event.target.src
        }
        else {
          return false
        }

        ActionSheet.create({
          title: 'Share',
          // specify ONLY IF you want gallery mode:
          gallery: true,

          actions: [
            {
              label: 'Share on Twitter',
              // Choose one of the following two:
              icon: 'fa-twitter', // specify ONLY IF using icon
              handler: function () {
                openURL(`https://twitter.com/intent/tweet?text=${gifUrl}`)
              }
            }
          ]
        })
      }
    },
    render: h => h(require('./App').default)
  })
})
