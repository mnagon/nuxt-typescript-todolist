import {
  getAccessorType,
  getterTree,
  actionTree,
  mutationTree,
} from 'nuxt-typed-vuex'

interface State {
  todoList: []
}

export const state = (): State => ({
  todoList: [],
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {})

export const actions = actionTree({ state, getters, mutations }, {})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
})
