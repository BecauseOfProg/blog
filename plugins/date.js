import Vue from 'vue'

function timestampToText (timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

Vue.mixin({
  methods: {
    timestampToText
  }
})
