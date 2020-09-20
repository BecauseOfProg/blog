import Vue from 'vue'
import { DateTime } from 'luxon';

DateTime.local().setLocale('fr')

const today = new Date().toISOString().substr(0, 10)

function dateToText(timestamp) {
  if (this.$i18n.locale) {
    return DateTime.fromMillis(timestamp * 1000).setLocale(this.$i18n.locale).toLocaleString('DATE_FULL')
  } else return DateTime.fromMillis(timestamp * 1000).toLocaleString('DATE_FULL')
}

Vue.mixin({
  data () {
    return {
      today
    }
  },
  methods: {
    dateToText
  }
})

export { today }
