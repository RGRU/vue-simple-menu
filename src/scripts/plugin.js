/**
 * File use for create component for global element, include as script tag
 */

import VueSimpleMenu from './lib/VueSimpleMenu.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueSimpleMenu)
}
