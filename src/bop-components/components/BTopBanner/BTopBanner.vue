<template>
  <div
    id="b-top-banner"
    class="gradient"
    :class="{ 'b-top-banner__tall': tall }">
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
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    tall: {
      type: Boolean,
      default: false
    }
  }
}
</script>
