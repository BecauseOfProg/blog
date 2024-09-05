import { settings } from '@/utils/data'

const state = {}


const mutations = {
  ADD_USER(state, user) {
    state[user.username] = user
  }
}

const actions = {
  async getUser({ state, commit }, username) {
    let user = state[username]
    console.log(user)
    if (user === undefined) {
      let response = await fetch(`${settings.api}/users/${username}`)
      console.log(response)
      let data = await response.json()
      commit('ADD_USER', data)
      user = data
    }
    return user
  }
}

export default { state, mutations, actions }
