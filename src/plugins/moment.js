import Vue from 'vue'
import moment from 'moment'

moment.locale('fr')

const today = new Date().toISOString().substr(0, 10)

function dateToText(timestamp) {
  return moment(timestamp * 1000).format('LL')
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
