import Vue from 'vue'
import VueSimpleMenu from './lib/VueSimpleMenu.vue'
import rawMenuData from './rawMenuData'

// Init vue application
const app = new Vue({
  el: '#app',
  data () {
    return {
      rawMenuData: {}
    }
  },
  components: {
    'vue-simple-menu': VueSimpleMenu
  }
})

// Add style for menu
require('../styles/default.sass')

// Emulate async
setTimeout(function () {
  app.rawMenuData = rawMenuData
}, 1000)
