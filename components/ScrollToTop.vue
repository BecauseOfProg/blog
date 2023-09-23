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
      <v-icon>{{ mdiChevronUp }}</v-icon>
    </v-btn>
  </v-scale-transition>
</template>

<script>
import { mdiChevronUp } from '@mdi/js'

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
      active: false,
      mdiChevronUp
    }
  },
  mounted () {
    document.addEventListener('scroll', this.checkScroll)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.checkScroll)
  },
  methods: {
    checkScroll (event) {
      if (typeof window === 'undefined') {
        return
      }

      const top = window.pageYOffset || event.target.scrollTop || 0
      this.active = top > this.threshold
    }
  }
}
</script>
