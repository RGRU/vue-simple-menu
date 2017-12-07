import Vue from 'vue'
import VueSimpleMenu from './lib/VueSimpleMenu.vue'
import rawMenuData from './rawMenuData'

// Use menu component
Vue.use(VueSimpleMenu)

// Init vue application
const app = new Vue({
  el: '#app',
  data () {
    return {
      rawMenuData: {}
    }
  }
})

// Emulate async
setTimeout(function () {
  app.rawMenuData = rawMenuData
}, 1000)
