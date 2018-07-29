import types from '../../utils/types.js'

const state = {
  types
}

const getters = {
  getAllTypes: state => state.types,
  getOneType: state => url => {
    return state.types.filter(type => type.url === url)
  }
}

const typesModule = {
  state,
  getters
}

export default typesModule
