import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#b71c1c',
    secondary: '#d32f2f',
    accent: '#f44336',
    error: '#D50000',
    warning: '#FFFF00',
    info: '#00B8D4',
    success: '#76FF03'
  }
})
