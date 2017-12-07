<script>
import VueSimpleMenuItem from './VueSimpleMenuItem.vue'

export default {
  /**
   * Install - method for use as vue plugin
   *
   * @param  {object} Vue vue instance
   * @return {void}
   */
  install (Vue) {
    Vue.component('vue-simple-menu', {
      name: 'VueSimpleMenu',
      template: '<vue-simple-menu-item :menu="list" />',
      components: {
        'vue-simple-menu-item': VueSimpleMenuItem
      },
      props: {
        menuData: {
          type: Object,
          required: true
        }
      },
      computed: {
        list: function () {
          return this.generateBranch(this.menuData)
        }
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
        }
      }
    })
  }
}
</script>
