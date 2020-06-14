const state = {
  token: '',
  user: {}
}

const getters = {
  isAuthenticated: state => state.token !== ''
}

const mutations = {
  LOGIN(state, data) {
    state.token = data.token
    state.data = data.user
  },
  LOGOUT(state) {
    state.token = ''
    state.data = {}
  }
}

const actions = {
  logout({ commit }) {
    commit('LOGOUT')
    commit('SHOW_SNACKBAR', {
      error: false,
      message: 'Déconnexion de votre compte avec succès.'
    })
  }
}

export default { state, getters, mutations, actions }
