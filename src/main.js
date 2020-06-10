import Vue from 'vue'
import App from '@/App.vue'

import router from '@/plugins/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import '@/plugins/bop-components'
import '@/plugins/resource'
import '@/plugins/service-worker'
import '@/plugins/moment'

import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/css/index.styl'
import 'github-markdown-css/github-markdown.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
