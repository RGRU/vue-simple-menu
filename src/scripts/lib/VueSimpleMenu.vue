<script>
import VueSimpleMenuItem from './VueSimpleMenuItem.vue'

export default {
  name: 'VueSimpleMenu',
  components: {
    'vue-simple-menu-item': VueSimpleMenuItem
  },
  props: {
    rawMenuData: {
      type: Object,
      required: true
    },
    defaultName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    if (this.rawMenuData) {
      this.list = this.generateBranch(this.rawMenuData)
    }
  },
  watch: {
    rawMenuData () {
      this.list = this.generateBranch(this.rawMenuData)
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
          menuItem.expanded = typeof menuItem.expanded === 'boolean' ? menuItem.expanded : true
        }

        return acc.concat(menuItem)
      }, [])
    }
  },
  template: '<vue-simple-menu-item :menu="list" />'
}
</script>
