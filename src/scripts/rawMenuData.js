export default {

  // Элементы меню
  articles: {

    // Параметры элемента
    id: 'articles',
    name: 'Статьи - with vue Router',
    vueRouter: true,
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
            name: 'Вложенность 2.2 - vue Router',
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
    expanded: false,
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
        id: 'org',
        name: 'Организации - with vue Router',
        vueRouter: true,
        uri: '/rubrics/org'
      },
      reg: {
        id: 'reg',
        name: 'Регионы - with vue Router',
        vueRouter: true,
        uri: '/rubrics/reg'
      }
    }
  }
}
