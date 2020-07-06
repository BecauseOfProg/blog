import { loadFromStorage } from '@/utils/helpers'

const state = {
  theme: loadFromStorage('theme', false),
  lang: loadFromStorage('lang', false)
}

const mutations = {
  SET_THEME(state, theme) {
    state.theme = theme
    localStorage.setItem('theme', theme)
  },
  SET_LANG(state, lang) {
    state.lang = lang
    localStorage.setItem('lang', lang)
  }
}

const actions = {
  // THEME
  setTheme({ commit }, theme) {
    commit('SET_THEME', theme)

    commit('SHOW_SNACKBAR', {
      error: false,
      message: `theme.messages.${theme}`
    })
    localStorage.setItem('theme', theme)
  },
  // LANG
  setLang({ commit }, lang) {
    commit('SET_LANG', lang)

    commit('SHOW_SNACKBAR', {
      error: false,
      message: 'lang.switched'
    })
    localStorage.setItem('lang', lang)
  }
}

export default { state, mutations, actions }
