<template>
  <v-parallax
    id="b-top-banner"
    :src="src"
    :height="tall ? 300 : 150"
    :class="classes">
    <v-icon
      v-if="$vuetify.breakpoint.mdAndUp && icon !== null"
      color="white"
      size="70px">{{ icon }}</v-icon>
    <h1 class="white--text">
      <template v-if="typeof title === 'object'">{{ $t.apply(this, title) }}</template>
      <template v-else>{{ $t(title) }}</template>
    </h1>
    <h3
      v-if="subtitle !== null"
      class="grey--text font-weight-regular">
      {{ $t(subtitle) }}
    </h3>
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
    tall: Boolean
  },
  computed: {
    classes() {
      return {
        'remove-safe': true,
        gradient: this.src === undefined
      }
    }
  }
}
</script>
