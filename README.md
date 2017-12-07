# Vue simple menu

Vue component for fast create simple menu block

[![Build Status](https://travis-ci.org/RGRU/vue-simple-menu.svg?branch=master)](https://travis-ci.org/RGRU/vue-simple-menu)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm version](https://badge.fury.io/js/vue-simple-menu.svg)](https://badge.fury.io/js/vue-simple-menu)

## Для кого?

Простое и легкое меню с набором основного функционала, которого хватает в 80% случаев:
  * Элементы меню с прямой ссылкой
  * Элементы меню как раскрывающийся каталог
  * Бесконечная вложенность
  * __В процессе:__ _Стилизация внешнего вида (можно выбрать готовую, либо добвить самому)_

## TODO List

  * stylize temes
  * add to awesome vue github
  * update figure for readme
  * add ru/en languages for docs
  * write article about this component

# Installation and usage

## ES6 via npm

```sh
npm i vue-simple-menu -D
```

### Usage

For example, we have app container, and menu component inside

```html
<div id="app">
  <vue-simple-menu :raw-menu-data="rawMenuData">
</div>
```

Для формирования меню, в него нужно передать в свойство (menuData) данные определенного формата (то, как мы их получаем отдается на откуп разработчику)

Params

| Name | Type | Description |
|:-- |:-- |:-- |
| id | string | Identificator for item. It is link to itself id key (figure 1)<br>Идентификатор в любом формате, какой вы сами придумаете |
| name | string | Name or title for menu item element (figure 2) |
| uri | string | Add link to item element (figure 3) |
| list | array: object | Add children elements to item (figure 4)<br>Структура вложенных объектов повторяет основную родительску |

__Pictures for data params__

__figure 1__ Identificator for item. It is link to itself id key  
![figure1](./assets/figure1.jpg)

__figure 2__ Name or title for menu item element  
![figure2](./assets/figure2.jpg)

__figure 3__ Add link to item element  
![figure3](./assets/figure3.jpg)

__figure 4__ Add children elements to item  
![figure4](./assets/figure4.jpg)

For example file rawMenuData.js

```js
export default {
  item1: {
    id: 'item1',
    name: 'Item 1',

    // Item can be as link
    uri: '//rg.ru'
  },
  item2: {
    id: 'item1',
    name: 'Item 1',
    uri: '//rg.ru'

    // Item can have as child items list
    list: {
      item1_1: {
        id: 'item1_1',
        name: 'Item 1_1',

        // List items may be endless
        list: {
          {
            id: 'item1_1_1',
            name: 'Item 1_1_1',
            uri: '//rg.ru',
          }
        }
      }
      ...
    }
  }
  ...
}
```

And add imported menu component to Vue through `use` method. Menu data pass to component as options in `use` method

```js
import Vue from 'vue'
import VueSimpleMenu from 'vue-simple-menu'

// Data for menu, may get by APi or somehow else
import rawMenuData from './rawMenuData'

// Use menu component
Vue.use(VueSimpleMenu)

// Init vue application
new Vue({
  el: '#app',
  data () {
    return {

      // Init default data for menu
      rawMenuData: {}
    }
  }
})

// Emulate async getting menu data
setTimeout(function () {
  app.rawMenuData = rawMenuData
}, 1000)
```

## Component as global in browser

Pass to your html page scripts below

```html
<!-- Include Vue library -->
<script src="//cdn.jsdelivr.net/npm/vue"></script>

<!-- Include vue-simple-menu component -->
<script src="//unpkg.com/vue-simple-menu"></script>
```

### Usage

Add element for our application with menu

```html
<!-- Our app -->
<div id="app">
  <vue-simple-menu :raw-menu-data="rawMenuData">
</div>
```

And use in you scripts some as:

```js
// Data for menu, may get by APi or somehow else
import rawMenuData from './rawMenuData'

// Init vue app with menu component in template
new Vue({
  el: '#app',
  data () {
    return {
      rawMenuData: menuData
    }
  }
})
```
