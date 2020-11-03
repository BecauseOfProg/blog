import Vue from 'vue'
import App from '@/App.vue'

// Plugins
import i18n from '@/plugins/i18n'
import router from '@/plugins/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import '@/plugins/resource'
import '@/plugins/service-worker'

// Styles
import 'github-markdown-css/github-markdown.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/css/index.styl'

// Mixins & components
import '@/global-components'
import '@/plugins/luxon'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
