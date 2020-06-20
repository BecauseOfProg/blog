import { settings } from '@/utils/data'

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
  login({ commit }, context) {
    let credentials = {
      email: context.form.email,
      password: context.form.password
    }

    context.$http.post(settings.api + '/auth', credentials).then(response => {
      commit('LOGIN', response.data.data)
      localStorage.setItem('token', response.data.data.token)
      context.enabled = false
      context.form.email = ''
      context.error = ''

      commit('SHOW_SNACKBAR', {
        error: false,
        message: 'Connexion à votre compte avec succès.'
      })
    }, error => {
      console.log(error)
      context.error = "Erreur : l'adresse email et/ou le mot de passe est incorrect."
    })
    context.form.password = ''
  },
  reconnect({ commit }, context) {
    let token = localStorage.getItem('token')
    if (token === null)
      return
    context.$http.get(
      settings.api + '/auth/data',
      {
        headers: {
          'Authorization': token
        }
      }
    ).then(response => {
      commit('LOGIN', {
        token,
        user: response.data.data
      })
    }, error => {
      console.log(error)
      localStorage.removeItem('token')
      commit('SHOW_SNACKBAR', {
        error: true,
        message: 'Erreur : le jeton utilisateur est erroné.'
      })
    })
  },
  logout({ commit }) {
    commit('LOGOUT')
    commit('SHOW_SNACKBAR', {
      error: false,
      message: 'Déconnexion de votre compte avec succès.'
    })
  }
}

export default { state, getters, mutations, actions }
