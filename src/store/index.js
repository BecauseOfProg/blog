import Vue from 'vue'
import Vuex from 'vuex'

import types from './modules/types'

Vue.use(Vuex)

const state = {}

const mutations = {}

const actions = {}

const getters = {}

const modules = {
  types
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
