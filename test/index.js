import Vue from 'vue'
import VueSimpleMenu from '../src/scripts/lib/VueSimpleMenu.vue'
import rawMenuData from '../src/scripts/rawMenuData'

describe('VueSimpleMenu.vue', function () {
  describe('# Init', function () {
    it('Render after mount', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData: {}
          }
        }
      }).$mount()

      Vue.nextTick(() => {
        // Find rendered menu component
        expect(!!vm.$el.querySelector('.vue-simple-menu')).to.be.true

        done()
      })
    })

    it('Render empty component when no raw-menu-data', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData: {}
          }
        }
      }).$mount()

      Vue.nextTick(() => {
        // Find rendered menu component
        expect(!!vm.$el.querySelector('.vue-simple-menu')).to.be.true

        // If raw data no pass, item elements will not create
        expect(!!vm.$el.querySelector('.vue-simple-menu__item')).to.be.false

        done()
      })
    })

    it('Expect list items when pass raw data when created app', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData
          }
        }
      }).$mount()

      Vue.nextTick(() => {
        // If raw data no pass, item elements will not create
        expect(vm.$el.querySelectorAll('.vue-simple-menu__item').length > 0).to.be.true

        done()
      })
    })
  })
})
