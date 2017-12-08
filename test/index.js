import Vue from 'vue'
import VueSimpleMenu from '../src/scripts/lib/VueSimpleMenu.vue'
import rawMenuData from '../src/scripts/rawMenuData'

describe('VueSimpleMenu.vue', () => {
  describe('# Init', () => {
    it('Component has registered in global list', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
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
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
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
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
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
  })

  describe('# Temlpate structure', () => {
    it('Expect list items when pass raw data when created app', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
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
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
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

    it('Check create child branch', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData
          }
        }
      }).$mount()

      vm.$nextTick(() => {
        // Find child elements
        expect(vm.$el.querySelectorAll('.vue-simple-menu__child').length > 0).to.be.true

        done()
      })
    })

    it('Check create current item name', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData
          }
        }
      }).$mount()

      vm.$nextTick(() => {
        // Check item name first level (articles)
        expect(
          vm.$el
            .querySelectorAll('.vue-simple-menu > .vue-simple-menu__item')[0]
            .querySelector('.vue-simple-menu__link').innerHTML
          ).to.equal(rawMenuData.articles.name)

        // Check item name from child level (rubrics -> thema -> item2 -> i2 -> i1 === Вложенность 3.1)
        expect(
          vm.$el
            .querySelector('.vue-simple-menu > .vue-simple-menu__item:nth-child(6)')
            .querySelector('.vue-simple-menu__child > .vue-simple-menu > .vue-simple-menu__item:nth-child(1)')
            .querySelector('.vue-simple-menu__child > .vue-simple-menu > .vue-simple-menu__item:nth-child(2)')
            .querySelector('.vue-simple-menu__child > .vue-simple-menu > .vue-simple-menu__item:nth-child(2)')
            .querySelector('.vue-simple-menu__child > .vue-simple-menu > .vue-simple-menu__item:nth-child(1)')
            .querySelector('.vue-simple-menu__title')
            .innerHTML
          ).to.equal(rawMenuData.rubrics.list.thema.list.item2.list.i2.list.i1.name)

        done()
      })
    })

    it('Check create link in item name', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData
          }
        }
      }).$mount()

      vm.$nextTick(() => {
        // Check item link first level (articles)
        expect(
          vm.$el
            .querySelectorAll('.vue-simple-menu > .vue-simple-menu__item')[0]
            .querySelector('.vue-simple-menu__link')
            .getAttribute('href')
          ).to.equal(rawMenuData.articles.uri)

        // Check item link from child level (articles -> thema -> item2 -> i2 -> i2 === /test2)
        expect(
          vm.$el
            .querySelector('.vue-simple-menu > .vue-simple-menu__item:nth-child(1)')
            .querySelector('.vue-simple-menu__child > .vue-simple-menu > .vue-simple-menu__item:nth-child(2)')
            .querySelector('.vue-simple-menu__child > .vue-simple-menu > .vue-simple-menu__item:nth-child(2)')
            .querySelector('.vue-simple-menu__link')
            .getAttribute('href')
          ).to.equal(rawMenuData.articles.list.item2.list.i2.list.i2.uri)

        done()
      })
    })
  })

  describe('# Behavoir', () => {
    it('Trigger expand menu on click first level items', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData
          }
        }
      }).$mount()

      // Emulate click event
      // https://developer.mozilla.org/ru/docs/Web/API/Document/createEvent
      const event = document.createEvent('Event')
      event.initEvent('click', true, true)

      vm.$nextTick(() => {
        let targetItem = vm.$el.querySelector('.wrapper > .vue-simple-menu > .vue-simple-menu__item:nth-child(3)')
        let expandStartState = targetItem.classList.contains('expanded')

        // Emulate click event
        targetItem.querySelector('.vue-simple-menu__title').dispatchEvent(event)

        // Expand off
        vm.$nextTick(() => {
          expect(targetItem.classList.contains('expanded')).to.not.equal(expandStartState)

          done()
        })
      })
    })

    it('Trigger expand menu on click children items', done => {
      Vue.use(VueSimpleMenu)

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData
          }
        }
      }).$mount()

      // Emulate click event
      // https://developer.mozilla.org/ru/docs/Web/API/Document/createEvent
      const event = document.createEvent('Event')
      event.initEvent('click', true, true)

      vm.$nextTick(() => {
        let targetItem = vm.$el
          .querySelector('.wrapper > .vue-simple-menu > .vue-simple-menu__item:nth-child(1)')
          .querySelector('.vue-simple-menu__child > .vue-simple-menu > .vue-simple-menu__item:nth-child(2)')
          .querySelector('.vue-simple-menu__child > .vue-simple-menu > .vue-simple-menu__item:nth-child(2)')

        let expandStartState = targetItem.classList.contains('expanded')

        // Emulate click event
        targetItem.querySelector('.vue-simple-menu__title').dispatchEvent(event)

        // Expand off
        vm.$nextTick(() => {
          expect(targetItem.classList.contains('expanded')).to.not.equal(expandStartState)

          done()
        })
      })
    })
  })
})
