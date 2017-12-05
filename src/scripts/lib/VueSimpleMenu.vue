<template>
  <menu-item :menu="menuList" />
</template>
<script>
import Vue from 'vue'
import VueSimpleMenuItem from './VueSimpleMenuItem.vue'

Vue.component('menu-item', VueSimpleMenuItem)

const menuData = {

  // Элементы меню
  articles: {

    // Параметры элемента
    id: 'articles',
    name: 'Статьи',
    uri: '/articles/list',

    // Если есть вложенность
    list: {
      item1: {
        id: 'item1',
        name: 'Вложенность 1.1'
      },
      item2: {
        id: 'item2',
        name: 'Вложенность 2.1',
        uri: '/test',
        list: {
          i1: {
            id: 'i1',
            name: 'Вложенность 2.1'
          },
          i2: {
            id: 'i2',
            name: 'Вложенность 2.2',
            list: {
              i1: {
                id: 'i1',
                name: 'Вложенность 3.1'
              },
              i2: {
                id: 'i2',
                name: 'Вложенность 3.2',
                uri: '/test2'
              },
              i3: {
                id: 'i3',
                name: 'Вложенность 3.3'
              }
            }
          },
          i3: {
            id: 'i3',
            name: 'Вложенность 2.3'
          }
        }
      }
    }
  },

  blocks: {
    id: 'blocks',
    name: 'Блоки',
    uri: '/blocks/list'
  },

  auth: {
    id: 'auth',
    list: {
      roles: {
        id: 'roles',
        name: 'Роли',
        uri: '/roles/list'
      },
      users: {
        id: 'users',
        name: 'Пользователи',
        uri: '/users/list'
      }
    }
  },

  masks: {
    id: 'masks',
    name: 'Маски'
  },

  sujets: {
    id: 'sujets',
    name: 'Сюжеты',
    uri: '/sujets/list'
  },

  rubrics: {
    id: 'rubrics',
    name: 'Рубрики',
    // uri: '/rubrics/list',
    list: {
      thema: {
        id: 'thema',
        name: 'Тематический рубрикатор',
        uri: '/rubrics/thema',
        list: {
          item1: {
            id: 'item1',
            name: 'Вложенность 1.1'
          },
          item2: {
            id: 'item2',
            name: 'Вложенность 2.1',
            uri: '/test',
            list: {
              i1: {
                id: 'i1',
                name: 'Вложенность 2.1'
              },
              i2: {
                id: 'i2',
                name: 'Вложенность 2.2',
                list: {
                  i1: {
                    id: 'i1',
                    name: 'Вложенность 3.1'
                  },
                  i2: {
                    id: 'i2',
                    name: 'Вложенность 3.2',
                    uri: '/test2'
                  },
                  i3: {
                    id: 'i3',
                    name: 'Вложенность 3.3'
                  }
                }
              },
              i3: {
                id: 'i3',
                name: 'Вложенность 2.3'
              }
            }
          }
        }
      },
      org: {
        id: 'thema',
        name: 'Организации',
        uri: '/rubrics/org'
      },
      reg: {
        id: 'thema',
        name: 'Регионы',
        uri: '/rubrics/reg'
      }
    }
  }
}

export default {
  name: 'VueSimpleMenu',
  data () {
    return {
      menuData,
      menuList: []
    }
  },
  beforeMount () {
    this.menuList = this.initMenu(menuData)
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
    initMenu (menu) {
      return this.generateBranch(menu)
    }
  }
}
</script>
