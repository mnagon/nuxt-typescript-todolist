<template>
  <div class="board">
    <div class="counter">
      <span class="counter__total">{{ $accessor.todoList.length }}</span>
      <span class="counter__label">TOTAL</span>
    </div>
    <div class="counter">
      <span class="counter__total">{{ $accessor.undoneTodo.length }}</span>
      <span class="counter__label">TODO</span>
    </div>
    <div class="counter">
      <span class="counter__total">{{ $accessor.doneTodo.length }}</span>
      <span class="counter__label">DONE</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.board {
  height: 80px;
  display: flex;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background-color: #fff;
  border-radius: 10px;
}

.counter {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.counter__total,
.counter__label {
  display: block;
  color: #21273d;
  font-weight: 700;
  text-align: center;
}
.counter__total {
  font-size: 20px;
  margin-top: 20px;
}

.counter__label {
  font-size: 14px;
  opacity: 0.5;
  margin-top: 8px;
}

@media only screen and (min-width: 768px) {
  .board {
    flex-direction: column;
    height: 418px;
    width: 122px;
    min-width: 122px;
  }
}
</style>
