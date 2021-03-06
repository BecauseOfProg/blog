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
    <span>{{ $t('article.wasRead') }}</span>
  </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BReadIndicator',
  props: {
    article: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapGetters(['isArticleRead']),
    read() {
      return this.isArticleRead(this.article)
    },
  }
}
</script>
