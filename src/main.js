import Vue from 'vue'
import App from '@/App.vue'

// Plugins
import router from '@/plugins/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import '@/plugins/bop-components'
import '@/plugins/resource'
import '@/plugins/service-worker'

// Styles
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/css/index.styl'
import 'github-markdown-css/github-markdown.css'

// Mixins
import '@/plugins/moment'

import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
