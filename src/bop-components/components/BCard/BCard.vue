<template>
  <v-card
    :to="to"
    :class="{ gradient }"
    class="b-card"
    elevation="0">
    <slot name="image"/>
    <v-card-text>
      <slot/>
    </v-card-text>
    <template v-if="$slots.actions !== undefined">
      <v-divider/>
      <v-card-actions>
        <slot name="actions"/>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
export default {
  name: 'BCard',
  props: {
    gradient: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>
