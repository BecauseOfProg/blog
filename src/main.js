import Vue from 'vue'
import Resource from 'vue-resource'
import Meta from 'vue-meta'

import '@babel/polyfill'
import './plugins/vuetify'
import './registerServiceWorker'
import './css/style.css'

import App from './App.vue'

import router from './router/index'
import store from './store/index'

Vue.component('b-header', () => import('./components/BHeader.vue'))
Vue.component('b-footer', () => import('./components/BFooter.vue'))
Vue.component('b-intro-div', () => import('./components/BIntroDiv.vue'))
Vue.component('b-article-card', () => import('./components/BArticleCard.vue'))

Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid'
})

Vue.use(Resource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
