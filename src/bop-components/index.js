import * as components from './components'

export default {
/*eslint no-unused-vars:0*/
  install (Vue, _) {
    for (const key in components) {
      const component = components[key]
      Vue.component(key, component)
    }
  }
}
