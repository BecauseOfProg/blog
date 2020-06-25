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
    localStorage.setItem('token', data.token)
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

    context.waiting = true
    context.$http.post(settings.api + '/auth', credentials).then(response => {
      commit('LOGIN', response.data.data)
      if (context.form.reconnection) localStorage.setItem('doReconnection', 'true')

      context.enabled = false
      context.waiting = false
      context.$refs.form.reset()
      context.error = ''

      commit('SHOW_SNACKBAR', {
        error: false,
        message: 'Connexion à votre compte avec succès.'
      })
    }, error => {
      context.waiting = false
      console.log(error)
      context.error = "Erreur : l'adresse email et/ou le mot de passe est incorrect."
    })
    context.form.password = ''
    context.$refs.form.resetValidation()
  },
  reconnect({ commit }, context) {
    let reconnection = localStorage.getItem('doReconnection')
    if (reconnection === null) {
      localStorage.removeItem('token')
      return
    }

    let token = localStorage.getItem('token')
    if (token === null) return

    context.$http.get(
      `${settings.api}/auth/data`,
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
    localStorage.removeItem('doReconnection')
    localStorage.removeItem('token')

    commit('LOGOUT')
    commit('SHOW_SNACKBAR', {
      error: false,
      message: 'Déconnexion de votre compte avec succès.'
    })
  }
}

export default { state, getters, mutations, actions }
