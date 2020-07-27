<template>
  <v-parallax
    :src="src"
    :height="height"
    :class="classes">
    <img
      v-if="image"
      src="https://cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/logos/bop.min.svg"
      alt="BecauseOfProg"
      width="200">
    <v-icon
      v-if="$vuetify.breakpoint.mdAndUp && icon !== null"
      color="white"
      size="70px">{{ icon }}</v-icon>
    <h1 class="white--text text-center">
      <template v-if="typeof title === 'object'">{{ $t.apply(this, title) }}</template>
      <template v-else>{{ $t(title) }}</template>
    </h1>
    <h3
      v-if="subtitle !== null"
      class="grey--text text--lighten-2 font-weight-regular">
      {{ $t(subtitle) }}
    </h3>
    <slot/>
  </v-parallax>
</template>

<script>
export default {
  name: 'BTopBanner',
  props: {
    title: {
      type: [String, Array],
      required: true,
    },
    icon: String,
    src: String,
    subtitle: String,
    tall: Boolean,
    image: Boolean
  },
  computed: {
    classes() {
      return {
        'b-top-banner': true,
        'text-center': true,
        'remove-safe': true,
        gradient: this.src === undefined
      }
    },
    height() {
      if (this.image) {
        if (this.$vuetify.breakpoint.mdAndUp) return 450
        else return 500
      }
      else if (this.tall) return 300
      else return 150
    }
  }
}
</script>
