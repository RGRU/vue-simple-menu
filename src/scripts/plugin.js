import VueSimpleMenu from './lib/VueSimpleMenu.vue'

const VueSimpleMenuPlugin = {
  install (Vue, options) {
    Vue.component('vue-simple-menu', VueSimpleMenu)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueStickerPlugin)
}

export default VueStickerPlugin
