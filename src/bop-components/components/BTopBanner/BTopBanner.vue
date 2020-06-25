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
    <h1 class="white--text">{{ title }}</h1>
    <h3
      v-if="subtitle !== null"
      class="grey--text font-weight-regular">
      {{ subtitle }}
    </h3>
  </v-parallax>
</template>

<script>
export default {
  name: 'BTopBanner',
  props: {
    icon: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: undefined
    },
    subtitle: {
      type: String,
      default: null
    },
    tall: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true,
    }
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
