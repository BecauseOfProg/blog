import Vue from 'vue'
import Vuetify from 'vuetify'

import fr from 'vuetify/es5/locale/fr'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const theme = {
  light: '#ff9779',
  dark: '#ff514c',
  darker: '#e33733',
  error: colors.red.darken4,
  info: colors.blue.base,
  success: colors.green.base,
  warning: colors.amber.base
}

export default new Vuetify({
  theme: {
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true,
    },
  },
    lang: {
      locales: { fr },
      current: 'fr',
    },
})
