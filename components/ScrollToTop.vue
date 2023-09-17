<template>
  <v-scale-transition>
    <v-btn
      v-if="active"
      :small="$vuetify.breakpoint.smAndDown"
      color="light white--text"
      fab
      fixed
      bottom
      right
      @click="$vuetify.goTo('.b-top-banner')"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-scale-transition>
</template>

<script>
export default {
  name: 'ScrollToTop',
  props: {
    threshold: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      active: false
    }
  },
  mounted () {
    document.addEventListener('scroll', (event) => {
      if (typeof window === 'undefined') { return }
      const top = window.pageYOffset || event.target.scrollTop || 0
      this.active = top > this.threshold
    })
  }
}
</script>
