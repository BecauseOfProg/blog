import { loadFromStorage } from '@/utils/helpers'

const state = []

const getters = {
  isArticleRead: state => url => state.includes(url)
}

const mutations = {
  LOAD_READ_ARTICLES(state) {
    /*eslint no-unused-vars:0*/
    let articles = loadFromStorage('read-articles').split(',')
    articles.forEach(article => state.push(article))
  },
  ADD_READ_ARTICLE(state, url) {
    console.log(state)
    state.push(url)
  }
}

const actions = {
  addReadArticle({ commit, getters, state }, url) {
    if (!getters.isArticleRead(url)) {
      console.log(state)
      commit('ADD_READ_ARTICLE', url)
      localStorage.setItem('read-articles', state.join(','))
    }
  }
}

export default { state, getters, mutations, actions }
