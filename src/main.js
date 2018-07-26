import Vue from 'vue'
import Vuetify from 'vuetify'
import Resource from 'vue-resource'
import Meta from 'vue-meta'
import 'vuetify/dist/vuetify.min.css'
import './css/style.css'

import BHeader from './components/BHeader.vue'
import BIntroDiv from './components/BIntroDiv.vue'
import BArticleCard from './components/BArticleCard.vue'

import router from './router'
import store from './store'

Vue.component('b-header', BHeader)
Vue.component('b-intro-div', BIntroDiv)
Vue.component('b-article-card', BArticleCard)

Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid'
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
  store,
  components: { App: require('./App.vue').default },
  template: '<App/>'
})
