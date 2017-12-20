import Vue from 'vue'
import VueSimpleMenu from './lib/VueSimpleMenu.vue'
import rawMenuData from './rawMenuData'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Init vue application
const app = new Vue({
  el: '#app',
  router: new VueRouter({
    routes: [
      { path: '/articles/list', component: { template: '<h1>Статьи</h1>' } },
      { path: '/rubrics/org', component: { template: '<h1>Организации</h1>' } },
      { path: '/rubrics/reg', component: { template: '<h1>Регионы</h1>' } }
    ]
  }),
  data () {
    return {
      rawMenuData: {}
    }
  },
  components: {
    'vue-simple-menu': VueSimpleMenu
  }
})

// Add global style
require('../styles/index.sass')

// Add style for menu
require('../styles/default.sass')

// Emulate async
setTimeout(function () {
  app.rawMenuData = rawMenuData
}, 1000)
