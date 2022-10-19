import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../i18n/en.json'
import fr from '../i18n/fr.json'

Vue.use(VueI18n)

export const SUPPORT_LOCALES = ['en', 'fr']

function loadLocaleMessages () {
  return {
    fr,
    en
  }
}

export default new VueI18n({
  locale: 'fr',
  messages: loadLocaleMessages()
})
