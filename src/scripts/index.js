import Vue from 'vue'
import VueSimpleMenu from './lib/VueSimpleMenu.vue'
import menuData from './menuData'

// Use menu component
Vue.use(VueSimpleMenu)

// Init vue application
const app = new Vue({
  el: '#app',
  data () {
    return {
      menuData: {}
    }
  }
})

// Emulate async
setTimeout(function () {
  app.menuData = menuData
}, 1000)
