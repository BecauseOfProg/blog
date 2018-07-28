import Vue from 'vue'
import Vuex from 'vuex'

import types from './modules/types'
import categories from './modules/categories'

Vue.use(Vuex)

const state = {}

const mutations = {}

const actions = {}

const getters = {}

const modules = {
  types,
  categories
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules,
  strict: true
})

export default store
