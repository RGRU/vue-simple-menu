<script>
import Vue from 'vue'
import VueSimpleMenuItem from './VueSimpleMenuItem.vue'

Vue.component('menu-item', VueSimpleMenuItem)

export default {
  install (Vue, options) {
    Vue.component('vue-simple-menu', {
      name: 'VueSimpleMenu',
      template: '<menu-item :menu="menuList" />',
      data () {
        return {
          menuData: options.menuData || [],
          menuList: []
        }
      },
      beforeMount () {
        this.menuList = this.initMenu(this.menuData)
      },
      methods: {
        generateBranch (menu) {
          return Object.keys(menu).reduce((acc, item) => {
            let menuItem = {...menu[item]}

            if (menuItem.list) menuItem.list = this.generateBranch(menuItem.list)

            if (menuItem.list && !menuItem.uri) {
              menuItem.expand = true
              menuItem.expanded = true
            }

            return acc.concat(menuItem)
          }, [])
        },
        initMenu (menuData) {
          return this.generateBranch(menuData)
        }
      }
    })
  }
}
</script>
