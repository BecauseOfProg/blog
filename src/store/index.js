import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  snackbar: {
    show: false,
    error: false,
    message: ''
  }
}

const getters = {}

const mutations = {
  SHOW_SNACKBAR(state, data) {
    state.snackbar.show = true
    state.snackbar.error = data.error
    state.snackbar.message = data.message
  }
}

const actions = {}

export default new Vuex.Store({
  state, getters, mutations, actions
})
