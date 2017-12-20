<template>
<ul class="vue-simple-menu">
  <li v-for="item in menu" :key="item.id" class="vue-simple-menu__item" :class="{'vue-simple-menu__item_expand': item.expand, expanded: item.expanded}">

    <template v-if="item.vueRouter">
      <router-link :to="item.uri" class="vue-simple-menu__title vue-simple-menu__link">{{item.name}}</router-link>
    </template>
    <template v-else>
      <a v-if="item.uri" :href="item.uri" class="vue-simple-menu__title vue-simple-menu__link">{{item.name}}</a>
      <span v-else class="vue-simple-menu__title" @click="expandTrigger(item)">{{item.name}}</span>
    </template>

    <div v-if="item.list" class="vue-simple-menu__child">
      <vue-simple-menu-item :menu="item.list"></vue-simple-menu-item>
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
    }
  }
}
</script>
