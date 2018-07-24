// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import Resource from 'vue-resource'
import Meta from 'vue-meta'
import 'vuetify/dist/vuetify.min.css'
import './css/style.css'

import BHeader from './components/BHeader.vue'
import BIntroDiv from './components/BIntroDiv.vue'

import App from './App'
import router from './router'

Vue.component('b-header', BHeader)
Vue.component('b-intro-div', BIntroDiv)

Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})

Vue.use(Resource)

Vue.use(Vuetify, {
  theme: require('./utils/theme.js').default
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
