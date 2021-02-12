<template>
  <div
    class="todo-item"
    :class="{
      done: todo.done,
      editing,
    }"
  >
    <button class="delete-button" @click="deleteTodo">
      <i class="fas fa-trash-alt"></i>
    </button>
    <button class="edit-button" @click="setEditing(true)">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <div class="todo-card">
      <span class="todo-status">
        {{ todo.done ? 'Done' : 'Undone' }}
      </span>
      <div class="todo-status-icon" @click="toggleDone">
        <img v-if="todo.done" src="~/assets/check.svg" />
      </div>
      <div v-if="!editing" class="todo-text" @click="setEditing(true)">
        {{ todo.todo }}
      </div>
      <input
        v-else
        :id="id"
        v-model.lazy="todoForm"
        class="todo-edit-input"
        type="text"
        @blur="setEditing(false)"
        @keyup.enter="setEditing(false)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface State {
  editing: boolean
  id: string
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
      id: 'input' + this.index,
      editing: false,
    }
  },
  computed: {
    todoForm: {
      get(): string {
        return this.todo.todo
      },
      set(val: string): void {
        const todo: Todo = { done: this.todo.done, todo: val }
        this.$accessor.editTodo({ todo, todoIndex: this.index })
      },
    },
  },

  methods: {
    setEditing(bool: boolean): void {
      this.editing = bool
      if (bool) {
        this.$nextTick(() => {
          document.getElementById(this.id)?.focus()
        })
      }
    },
    deleteTodo(): void {
      this.$accessor.deleteTodo(this.index)
    },
    toggleDone(): void {
      const todo: Todo = { done: !this.todo.done, todo: this.todo.todo }
      this.$accessor.editTodo({ todo, todoIndex: this.index })
    },
  },
})
</script>

<style scoped>
.todo-item {
  height: 96px;
  position: relative;
}

.todo-item:not(:first-child) {
  margin-top: 20px;
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
  padding-left: 8px;
  padding-right: 16px;
}

.todo-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 8px;
  background-color: #b9d4f1;
}

.todo-item.done .todo-card::before {
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

.todo-status {
  display: block;
  position: absolute;
  font-size: 12px;
  color: rgba(106, 117, 155, 0.6);
  left: 20px;
  top: 12px;
}

.todo-status-icon {
  width: 24px;
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #b9d4f1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  color: #fff;
}

.todo-status-icon:hover,
.todo-item.done .todo-status-icon {
  background-color: #a4ec82;
}

.todo-status-icon img {
  width: 12px;
  height: 12px;
}

.todo-edit-input {
  flex-grow: 1;
  font-size: 16px;
  margin-top: 32px;
  color: #21273d;
  border-color: transparent;
  background-color: #c0d4f1;
  margin-right: 96px;
}

.todo-text {
  flex-grow: 1;
  font-size: 16px;
  margin-top: 32px;
  color: #21273d;
  overflow: hidden;
  cursor: text;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@media only screen and (min-width: 768px) {
  .todo-text {
    margin-right: 96px;
  }

  .delete-button,
  .edit-button {
    margin-top: 16px;
    z-index: 3;
  }

  .delete-button {
    left: unset;
    right: 16px;
  }

  .edit-button {
    right: 64px;
  }
}
</style>
