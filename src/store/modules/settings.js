import { loadFromStorage } from '@/utils/helpers'

const state = {
  theme: loadFromStorage('theme', false)
}

const mutations = {
  SET_THEME(state, theme) {
    state.theme = theme
    localStorage.setItem('theme', theme)
  }
}

const actions = {
  setTheme({ commit }, theme) {
    commit('SET_THEME', theme)

    let strings = {
      auto: "Thème réglé pour s'ajuster à celui de l'appareil.",
      light: 'Thème réglé en mode clair.',
      dark: 'Thème réglé en mode sombre.'
    }

    commit('SHOW_SNACKBAR', {
      error: false,
      message: strings[theme]
    })
    localStorage.setItem('theme', theme)
  }
}

export default { state, mutations, actions }
