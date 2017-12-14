<template>
<ul class="vue-simple-menu">
  <li v-for="item in menu" :key="item.id" class="vue-simple-menu__item" :class="{'vue-simple-menu__item_expand': item.expand, expanded: item.expanded}">

    <template v-if="item.vueRouter">
      <router-link :to="item.uri">{{itemName(item.name)}}</router-link>
    </template>
    <template v-else>
      <a v-if="item.uri" :href="item.uri" class="vue-simple-menu__link">{{itemName(item.name)}}</a>
      <span v-else class="vue-simple-menu__title" @click="expandTrigger(item)">{{itemName(item.name)}}</span>
    </template>

    <div v-if="item.list" class="vue-simple-menu__child">
      <vue-simple-menu-item :menu="item.list" />
    </div>
  </li>
</ul>
</template>
<script>
export default {
  name: 'VueSimpleMenuItem',
  props: {
    menu: {
      required: true,
      type: Array
    }
  },
  methods: {
    expandTrigger (item) {
      if (item.expand) item.expanded = !item.expanded
    },
    itemName: (name) => name || 'Заглушка для группы разделов'
  }
}
</script>
<style lang="sass">
.vue-simple-menu
  margin: 0
  padding: 0
  list-style-type: none

  &__item
    padding-left: 20px
    padding-top: 3px
    padding-bottom: 3px

    &_expand
      max-height: 20px
      overflow: hidden
      transition: max-height .3s cubic-bezier(0.54, -0.06, 0, 1)

    &.expanded
      max-height: 300px
      background: rgba(100, 0, 0, .1)

  &__link
    color: blue
    text-decoration: none
</style>
