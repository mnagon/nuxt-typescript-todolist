import {
  getAccessorType,
  getterTree,
  actionTree,
  mutationTree,
} from 'nuxt-typed-vuex'

interface Todo {
  done: boolean
  todo: string
}

interface State {
  todoList: Todo[]
}

interface UpdateTodoPayload {
  todo: Todo
  todoIndex: number
}

export const state = (): State => ({
  todoList: [],
})

export const getters = getterTree(state, {
  doneTodo: (state: State): Todo[] =>
    state.todoList.filter((todo) => todo.done),
  undoneTodo: (state: State): Todo[] =>
    state.todoList.filter((todo) => !todo.done),
})

export const mutations = mutationTree(state, {
  SET_TODO_LIST(state, todoList: Todo[]): void {
    state.todoList = todoList
  },
  PUSH_TODO_LIST(state, todo: Todo): void {
    state.todoList.push(todo)
  },
  UPDATE_TODO(state, { todo, todoIndex }: UpdateTodoPayload): void {
    state.todoList[todoIndex].todo = todo.todo
    state.todoList[todoIndex].done = todo.done
  },
  SPLICE_TODO_LIST(state, index: number): void {
    state.todoList.splice(index, 1)
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    fetchTodoList({ commit }): void {
      const todolist: Todo[] = JSON.parse(
        localStorage.getItem('todoList') || '[]'
      )
      commit('SET_TODO_LIST', todolist)
    },
    addTodo({ commit, dispatch }, todo: string): void {
      commit('PUSH_TODO_LIST', { todo, done: false })
      dispatch('updateStorage')
    },
    editTodo(
      { commit, dispatch },
      { todo, todoIndex }: UpdateTodoPayload
    ): void {
      commit('UPDATE_TODO', { todo, todoIndex })
      dispatch('updateStorage')
    },
    deleteTodo({ commit, dispatch }, index: number): void {
      commit('SPLICE_TODO_LIST', index)
      dispatch('updateStorage')
    },
    updateStorage({ state }): void {
      localStorage.setItem('todoList', JSON.stringify(state.todoList))
    },
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
})
