<template>
  <v-card
    :to="to"
    :class="{ 'b-card': true, gradient }">
    <slot name="image"/>
    <v-card-text :class="{ 'pa-0': fluid }">
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
    fluid: {
      type: Boolean,
      default: false
    },
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
