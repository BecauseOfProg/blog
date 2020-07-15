import { loadFromStorage } from '@/utils/helpers'

const state = []

const getters = {
  isArticleRead: state => url => state.includes(url)
}

const mutations = {
  LOAD_READ_ARTICLES(state) {
    /*eslint no-unused-vars:0*/
    state = loadFromStorage('read-articles').split(',')
  },
  ADD_READ_ARTICLE(state, url) {
    state.push(url)
  }
}

const actions = {
  addReadArticle({ commit, getters, state }, url) {
    if (!getters.isArticleRead(url)) {
      commit('ADD_READ_ARTICLE', url)
      localStorage.setItem('read-articles', state.join(','))
    }
  }
}

export default { state, getters, mutations, actions }
