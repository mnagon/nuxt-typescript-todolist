<template>
  <div class="todo-item">
    <button class="delete-button">
      <i class="fas fa-trash-alt"></i>
    </button>
    <button class="edit-button">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <div
      class="todo-card"
      :class="{
        done: done,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface State {
  editMode: boolean
}

interface Todo {
  done: boolean
  todo: string
}

export default Vue.extend({
  props: {
    index: {
      type: Number,
      required: true,
    },
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  data(): State {
    return {
      editMode: false,
    }
  },
  computed: {
    done: {
      get(): boolean {
        return this.todo.done
      },
      set(bool: boolean): void {
        this.$emit('change', bool)
      },
    },
  },
})
</script>

<style scoped>
.todo-item {
  margin-top: 20px;
  height: 96px;
  position: relative;
}

.todo-card {
  position: relative;
  height: 100%;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  z-index: 2;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.todo-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 8px;
  background-color: #f6d39e;
}

.todo-card.done::before {
  background-color: #a4ec82;
}

.delete-button,
.edit-button {
  border-color: transparent;
  background-color: transparent;
  font-size: 18px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
}

.delete-button {
  color: #fb8d8d;
  left: 16px;
}

.edit-button {
  color: #6a759b;
  right: 16px;
}
</style>
