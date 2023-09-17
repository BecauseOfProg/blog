import { settings } from '@/utils/data'

export const state = () => ({
  token: '',
  data: {}
})

export const getters = {
  isAuthenticated: state => state.token !== ''
}

export const mutations = {
  LOGIN (state, data) {
    state.token = data.token
    state.data = data.user
  },
  LOGOUT (state) {
    state.token = ''
    state.data = {}
  }
}

export const actions = {
  login ({ commit }, context) {
    const credentials = {
      email: context.form.email,
      password: context.form.password
    }

    context.waiting = true
    context.$http.post(settings.api + '/auth', credentials).then((response) => {
      const data = response.data.data
      commit('LOGIN', data)

      if (context.form.reconnection) { localStorage.setItem('token', data.token) }
      context.enabled = false
      context.waiting = false
      context.$refs.form.reset()
      context.error = ''

      commit('SHOW_SNACKBAR', {
        error: false,
        message: 'loginDialog.messages.success'
      })
    }, (error) => {
      console.log(error)

      context.waiting = false
      context.error = 'errors.invalidCredentials'
    })
    context.form.password = ''
    context.$refs.form.resetValidation()
  },
  reconnect ({ commit }, context) {
    const token = localStorage.getItem('token')
    if (token === null) { return }

    context.$http.get(
      `${settings.api}/auth/data`,
      {
        headers: {
          Authorization: token
        }
      }
    ).then((response) => {
      commit('LOGIN', {
        token,
        user: response.data.data
      })
    }, (error) => {
      console.log(error)

      localStorage.removeItem('token')
      commit('SHOW_SNACKBAR', {
        error: true,
        message: 'loginDialog.messages.tokenError'
      })
    })
  },
  logout ({ commit }) {
    localStorage.removeItem('token')

    commit('LOGOUT')
    commit('SHOW_SNACKBAR', {
      error: false,
      message: 'loginDialog.messages.logout'
    })
  }
}
