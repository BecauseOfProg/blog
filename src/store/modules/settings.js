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

    let strings = {
      fr: {
        auto: "Thème réglé pour s'ajuster à celui de l'appareil.",
        light: 'Thème réglé en mode clair.',
        dark: 'Thème réglé en mode sombre.'
      },
      en: {
        auto: "Theme set to match that of the device.",
        light: 'Theme set in light mode.',
        dark: 'Theme set in dark mode.'
      }
    }

    commit('SHOW_SNACKBAR', {
      error: false,
      message: strings[state.lang][theme]
    })
    localStorage.setItem('theme', theme)
  },
  // LANG
  setLang({ commit }, lang) {
    commit('SET_LANG', lang)

    /*let strings = {
      fr: "français",
      en: "english"
    }

    commit('SHOW_SNACKBAR', {
      error: false,
      message: 'Lang : ' + strings[lang]
    })*/
    localStorage.setItem('lang', lang)
    window.location.reload()
  }
}

export default { state, mutations, actions }
