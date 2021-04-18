import { loadFromStorage } from '@/utils/helpers'

const state = []

const getters = {
  isPublicationRead: state => slug => state.includes(slug)
}

const mutations = {
  LOAD_READ_PUBLICATIONS(state) {
    /*eslint no-unused-vars:0*/
    let publications = loadFromStorage('read-publications').split(',')
    publications.forEach(publication => state.push(publication))
  },
  ADD_READ_PUBLICATION(state, slug) {
    console.log(state)
    state.push(slug)
  }
}

const actions = {
  addReadPublication({ commit, getters, state }, slug) {
    if (!getters.isPublicationRead(slug)) {
      commit('ADD_READ_PUBLICATION', slug)
      localStorage.setItem('read-publications', state.join(','))
    }
  }
}

export default { state, getters, mutations, actions }
