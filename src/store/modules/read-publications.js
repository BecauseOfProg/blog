import { loadFromStorage } from '@/utils/helpers'

const state = []

const getters = {
  isPublicationRead: state => url => state.includes(url)
}

const mutations = {
  LOAD_READ_PUBLICATIONS(state) {
    /*eslint no-unused-vars:0*/
    let publications = loadFromStorage('read-publications').split(',')
    publications.forEach(publication => state.push(publication))
  },
  ADD_READ_PUBLICATION(state, url) {
    console.log(state)
    state.push(url)
  }
}

const actions = {
  addReadPublication({ commit, getters, state }, url) {
    if (!getters.isPublicationRead(url)) {
      commit('ADD_READ_PUBLICATION', url)
      localStorage.setItem('read-publications', state.join(','))
    }
  }
}

export default { state, getters, mutations, actions }
