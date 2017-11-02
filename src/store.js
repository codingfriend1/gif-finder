import Vue from 'vue'
import VueStash from 'vue-stash'
Vue.use(VueStash)

export default {
  search: null,
  visibleGifUrl: null,
  matchingGIFs: [],
  isSearching: false
}
