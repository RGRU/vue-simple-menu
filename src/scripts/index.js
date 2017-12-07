import Vue from 'vue'
import VueSimpleMenu from './lib/VueSimpleMenu.vue'
import rawData from './rawMenuData'

// Use menu component
Vue.use(VueSimpleMenu)

// Init vue application
const app = new Vue({
  el: '#app',
  data () {
    return {
      rawData: {}
    }
  }
})

// Emulate async
setTimeout(function () {
  app.rawData = rawData
}, 1000)
