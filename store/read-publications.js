import { loadFromStorage } from '@/utils/helpers'

export const state = () => []

export const getters = {
  isPublicationRead (state) {
    return id => state.includes(id)
  }
}

export const mutations = {
  LOAD_READ_PUBLICATIONS: (state) => {
    /* eslint no-unused-vars:0 */
    const publications = loadFromStorage('read-publications').split(',')
    publications.forEach(publication => state.push(publication))
  },
  ADD_READ_PUBLICATION: (state, id) => {
    state.push(id)
  }
}

export const actions = {
  addReadPublication ({ commit, getters, state }, id) {
    if (!getters.isPublicationRead(id)) {
      commit('ADD_READ_PUBLICATION', id)
      localStorage.setItem('read-publications', state.join(','))
    }
  }
}
