<template>
  <v-tooltip
    v-if="read"
    bottom>
    <template #activator="{ on }">
      <v-icon
        color="green"
        v-on="on">
        mdi-eye-check
      </v-icon>
    </template>
    <span>{{ $t('publication.wasRead') }}</span>
  </v-tooltip>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'BReadIndicator',
  props: {
    publication: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapGetters(['isPublicationRead']),
    read() {
      return this.isPublicationRead(this.publication)
    },
  }
}
</script>
