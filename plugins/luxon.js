import Vue from 'vue'
import { DateTime } from 'luxon'

DateTime.local().setLocale('fr')

function dateToText (timestamp) {
  if (this.$i18n.locale) {
    return DateTime.fromMillis(timestamp * 1000).setLocale(this.$i18n.locale).toLocaleString(DateTime.DATE_FULL)
  } else { return DateTime.fromMillis(timestamp * 1000).toLocaleString(DateTime.DATE_FULL) }
}

Vue.mixin({
  methods: {
    dateToText
  }
})
