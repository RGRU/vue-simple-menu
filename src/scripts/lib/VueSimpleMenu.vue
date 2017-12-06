<script>
import Vue from 'vue'
import VueSimpleMenuItem from './VueSimpleMenuItem.vue'

// Add item component for create item menu
Vue.component('vue-simple-menu-item', VueSimpleMenuItem)

export default {
  /**
   * Install - method for use as vue plugin
   *
   * @param  {object} Vue vue instance
   * @param  {object} options options for init component
   * @return {void}
   */
  install (Vue, options) {
    Vue.component('vue-simple-menu', {
      name: 'VueSimpleMenu',
      template: '<vue-simple-menu-item :menu="menuList" />',
      data () {
        return {
          // Raw menu data
          menuData: options.menuData || [],

          // Complete menu data, for component
          menuList: []
        }
      },
      beforeMount () {
        // Init menu data
        this.menuList = this.initMenu(this.menuData)
      },
      methods: {
        /**
         * generateBranch - recursive function for generate menu branch
         *
         * @param  {object} menuBranch branc menu for precessing
         * @return {array} complete menu data
         */
        generateBranch (menuBranch) {
          return Object.keys(menuBranch).reduce((acc, item) => {
            let menuItem = {...menuBranch[item]}

            // If have child list items,
            // generate child branch
            if (menuItem.list) menuItem.list = this.generateBranch(menuItem.list)

            // If item need expand behavoir
            // add property
            if (menuItem.list && !menuItem.uri) {
              menuItem.expand = true
              menuItem.expanded = true
            }

            return acc.concat(menuItem)
          }, [])
        },

        /**
         * initMenu - create complete menu from raw data
         * Add some features to data
         *
         * @param  {object} menuData raw data for menu
         * @return {array} complete data for menu
         */
        initMenu (menuData) {
          return this.generateBranch(menuData)
        }
      }
    })
  }
}
</script>
