/**
 * File use for create component for global element, include as script tag
 */

import VueSimpleMenu from './lib/VueSimpleMenu.vue'

const VueSimpleMenuPlugin = {
  install (Vue) {
    Vue.component('vue-simple-menu', VueSimpleMenu)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueSimpleMenuPlugin)
}

export default VueSimpleMenuPlugin
