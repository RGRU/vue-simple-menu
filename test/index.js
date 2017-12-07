import Vue from 'vue'
import VueSimpleMenu from '../src/scripts/lib/VueSimpleMenu.vue'
import rawMenuData from '../src/scripts/rawMenuData'

describe('VueSimpleMenu.vue', function () {
  describe('# Init', function () {
    it('Component has registered in global list', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData: {}
          }
        }
      }).$mount()

      // Find component in global list components
      vm.$nextTick(() => {
        expect(typeof Vue.options.components['vue-simple-menu']).to.equal('function')

        done()
      })
    })

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

      vm.$nextTick(() => {
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

      vm.$nextTick(() => {
        // Find rendered menu component
        expect(!!vm.$el.querySelector('.vue-simple-menu')).to.be.true

        // If raw data no pass, item elements will not create
        expect(vm.$el.querySelectorAll('.vue-simple-menu__item').length === 0).to.be.true

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

      vm.$nextTick(() => {
        // If raw data pass, item elements exist
        expect(vm.$el.querySelectorAll('.vue-simple-menu__item').length > 0).to.be.true

        done()
      })
    })

    it('Expect list items when pass raw data async', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData: {}
          }
        }
      }).$mount()

      vm.$nextTick(() => {
        // If raw data no pass, item elements will not create
        expect(vm.$el.querySelectorAll('.vue-simple-menu__item').length === 0).to.be.true

        // Set raw data
        setTimeout(() => {
          vm.rawMenuData = rawMenuData

          vm.$nextTick(() => {
            // If raw data pass, item elements exist
            expect(vm.$el.querySelectorAll('.vue-simple-menu__item').length > 0).to.be.true

            done()
          })
        }, 1000)
      })
    })

    // it('Check create current item name', done => {
    //   done()
    // })
    //
    // it('Check create link in item name', done => {
    //   done()
    // })
    //
    // it('Check create child branch', done => {
    //   Vue.use(VueSimpleMenu)
    //
    //   const vm = new Vue({
    //     template: '<div><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
    //     data() {
    //       return {
    //         rawMenuData
    //       }
    //     }
    //   }).$mount()
    //
    //   vm.$nextTick(() => {
    //
    //
    //     done()
    //   })
    // })
  })

  // describe('# Behavoir', () => {})
})
