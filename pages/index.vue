<template>
  <div class="container">
    <navbar />
    <div class="main">
      <board />
      <todo-item :todo="{ done: true, todo: 'Learn vuex' }" :index="0" />
      <todo-item
        :todo="{ done: false, todo: 'Learn type script' }"
        :index="1"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'
import Board from '~/components/Board.vue'
import TodoItem from '~/components/TodoItem.vue'

export default Vue.extend({
  components: {
    Navbar,
    Board,
    TodoItem,
  },
})
</script>

<style scoped>
.container {
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
