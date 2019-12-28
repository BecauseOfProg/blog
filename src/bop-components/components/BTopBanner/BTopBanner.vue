<template>
  <div
    id="b-top-banner"
    class="gradient">
    <v-icon
      v-if="$vuetify.breakpoint.mdAndUp"
      color="white"
      size="70px">{{ icon }}</v-icon>
    <h1 class="white--text">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
