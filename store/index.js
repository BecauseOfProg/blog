export const state = () => ({
  snackbar: {
    show: false,
    error: false,
    message: ''
  }
})

export const mutations = {
  SHOW_SNACKBAR (state, data) {
    state.snackbar.show = true
    state.snackbar.error = data.error
    state.snackbar.message = data.message
  }
}
