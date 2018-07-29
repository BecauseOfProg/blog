import Vue from 'vue'
import Resource from 'vue-resource'
import Meta from 'vue-meta'

import '@babel/polyfill'
import './plugins/vuetify'
import './registerServiceWorker'
import './css/style.css'

import BHeader from './components/BHeader.vue'
import BFooter from './components/BFooter.vue'
import BIntroDiv from './components/BIntroDiv.vue'
import BArticleCard from './components/BArticleCard.vue'

import App from './App.vue'

import router from './router/index'
import store from './store/index'

Vue.component('b-header', BHeader)
Vue.component('b-footer', BFooter)
Vue.component('b-intro-div', BIntroDiv)
Vue.component('b-article-card', BArticleCard)

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
