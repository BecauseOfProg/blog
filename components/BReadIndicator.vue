<template>
  <v-tooltip
    v-if="read"
    bottom
  >
    <template #activator="{ on }">
      <v-icon
        color="green"
        v-on="on"
      >
        {{ mdiEyeCheck }}
      </v-icon>
    </template>
    <span>{{ $t('publication.wasRead') }}</span>
  </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex'
import { mdiEyeCheck } from '@mdi/js'

export default {
  name: 'BReadIndicator',
  props: {
    publication: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      mdiEyeCheck
    }
  },
  computed: {
    ...mapGetters('read-publications', ['isPublicationRead']),
    read () {
      return this.isPublicationRead(this.publication)
    }
  }
}
</script>
