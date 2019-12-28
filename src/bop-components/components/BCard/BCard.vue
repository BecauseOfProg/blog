<template>
  <v-card
    class="b-card"
    :class="classes"
    elevation="0">
    <slot name="image"/>
    <v-card-text>
      <slot/>
    </v-card-text>
    <v-divider/>
    <v-card-actions>
      <slot name="actions"/>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'BCard',
  props: {
    gradient: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      classes: {
        gradient: this.gradient
      }
    }
  }
}
</script>
