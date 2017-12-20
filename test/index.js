import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSimpleMenu from '../src/scripts/lib/VueSimpleMenu.vue'
import rawMenuData from '../src/scripts/rawMenuData4Test'

describe('VueSimpleMenu.vue', () => {
  describe('# Init', () => {
    it('Component has registered in components list', done => {

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data () {
          return {
            rawMenuData: {}
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
        }
      }).$mount()

      // Find component in components list
      vm.$nextTick(() => {
        expect(typeof vm.$options.components['vue-simple-menu']).to.equal('object')

        done()
      })
    })

    it('Render after mount', done => {

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data() {
          return {
            rawMenuData: {}
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
        }
      }).$mount()

      vm.$nextTick(() => {
        // Find rendered menu component
        expect(!!vm.$el.querySelector('.vue-simple-menu')).to.be.true

        done()
      })
    })

    it('Render empty component when no raw-menu-data', done => {

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data () {
          return {
            rawMenuData: {}
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
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

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data () {
          return {
            rawMenuData
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
        }
      }).$mount()

      vm.$nextTick(() => {
        // If raw data pass, item elements exist
        expect(vm.$el.querySelectorAll('.vue-simple-menu__item').length > 0).to.be.true

        done()
      })
    })

    it('Expect list items when pass raw data async', done => {

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data () {
          return {
            rawMenuData: {}
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
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

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data () {
          return {
            rawMenuData
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
        }
      }).$mount()

      vm.$nextTick(() => {
        // Find child elements
        expect(vm.$el.querySelectorAll('.vue-simple-menu__child').length > 0).to.be.true

        done()
      })
    })

    it('Check create current item name', done => {

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data () {
          return {
            rawMenuData
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
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
      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data () {
          return {
            rawMenuData
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
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

    it('Items with vue-router', done => {
      Vue.use(VueRouter)

      const router = new VueRouter({
        routes: [
          {
            path: '/articles/list',
            component: { template: '<div id="childMenu"></div>' }
          }
        ]
      })

      const vm = new Vue({
        template: `
          <div class="wrapper">
            <vue-simple-menu :raw-menu-data="rawMenuData"></vue-simple-menu>
            <router-view></router-view>
          </div>`,
        router,
        data () {
          return {
            rawMenuData
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
        }
      }).$mount()

      // Emulate click event
      router.push('/articles/list')

      vm.$nextTick(() => {
        expect(!!vm.$el.querySelector('#childMenu')).to.be.true

        // go back (to default route)
        router.go(-1)

        done()
      })
    })

    it('Several menu components in page', done => {
      Vue.use(VueRouter)

      const ArticlesList = {
        name: 'ArticlesList',
        data () {
          return {
            rawMenuDataTwo: {
              item1: {
                id: 'item1',
                name: 'Item 1',
                uri: '//rg.ru'
              },
              item2: {
                id: 'item2',
                name: 'Item 1',
                list: {
                  item1_1: {
                    id: 'item1_1',
                    name: 'Item 1_1',
                    list: {
                      item1_1_1: {
                        id: 'item1_1_1',
                        name: 'Item 1_1_1',
                        uri: '//rg.ru'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
        },
        template: `
        <div id="childMenu">
          ARTICLES LIST
          <div>
            <vue-simple-menu :raw-menu-data="rawMenuDataTwo"></vue-simple-menu>
          </div>
        </div>`
      }

      const router = new VueRouter({
        routes: [
          {
            path: '/articles/list',
            component: ArticlesList
          }
        ]
      })

      const vm = new Vue({
        template: `
          <div class="wrapper">
            <vue-simple-menu :raw-menu-data="rawMenuData"></vue-simple-menu>
            <router-view></router-view>
          </div>`,
        router,
        data () {
          return {
            rawMenuData
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
        }
      }).$mount()

      // Emulate click event
      router.push('/articles/list')

      vm.$nextTick(() => {
        expect(!!vm.$el.querySelector('#childMenu .vue-simple-menu')).to.be.true

        // go back (to default route)
        router.go(-1)

        done()
      })
    })
  })

  describe('# Behavior', () => {
    it('Trigger expand menu on click first level items', done => {

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data () {
          return {
            rawMenuData
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
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

      const vm = new Vue({
        template: '<div class="wrapper"><vue-simple-menu :raw-menu-data="rawMenuData" /></div>',
        data () {
          return {
            rawMenuData
          }
        },
        components: {
          'vue-simple-menu': VueSimpleMenu
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
