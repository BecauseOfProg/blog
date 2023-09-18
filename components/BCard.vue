<template>
  <v-card
    :class="{ 'b-card': true, 'b-card--tile': tile, gradient }"
    :to="to"
  >
    <slot name="image" />
    <v-card-text :class="{ 'pa-0': fluid }">
      <slot />
    </v-card-text>
    <template v-if="$slots.actions !== undefined">
      <v-divider />
      <v-card-actions>
        <slot name="actions" />
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
    tile: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: undefined
    }
  }
}
</script>

<style>
.b-card {
  border-radius: 20px !important;
}
.b-card.theme--light {
  box-shadow: 0.25rem 0.25rem 1.25rem rgba(146,125,160,0.2) !important;
}
.b-card.theme--dark {
  box-shadow: 0.25rem 0.25rem 1.25rem rgba(0,0,0,0.2) !important;
}
.b-card.b-card--tile {
  border-radius: 0 !important;
}
.b-card.v-card--link:before {
  border-radius: 20px;
}
.b-card h1,
.b-card h2,
.b-card h3,
.b-card h4,
.b-card h5,
.b-card h6 {
  color: var(--v-darker-base);
  display: block;
  line-height: 32px;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 4px;
}
.b-card .vcardtitle {
  color: var(--v-darker-base);
  margin-bottom: 3px;
}
.b-card p {
  color: var(--v-text-base);
}
.b-card .v-card__actions button {
  font-weight: normal !important;
  color: var(--v-darker-base) !important;
}
.b-card:not(.v-image) .v-responsive__content {
  padding-left: 16px;
  display: flex;
  align-items: flex-end;
}
.b-card.gradient h1,
.b-card.gradient p {
  color: #fff !important;
}
.b-card.gradient h1,
.b-card.gradient p,
.b-card.gradient .v-card__actions button {
  color: #fff !important;
}
</style>
