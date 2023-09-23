<template>
  <b-card
    :to="{ name: 'article-id', params: { id: publication.id }}"
    style="height: 100%"
  >
    <template #image>
      <v-img
        :alt="publication.title"
        :src="publication.banner"
      />
    </template>
    <span class="headline lecture-title">
      <b-read-indicator :publication="publication.id" />
      {{ publication.title }}
    </span>
    <p class="lecture-text mt-2 mb-3 text--secondary">
      {{ publication.description }}
    </p>
    <div>
      <v-chip class="mt-2">
        <v-avatar left>
          <v-img :src="publication.author.picture" />
        </v-avatar>
        {{ publication.author.displayname }}
      </v-chip>

      <v-chip class="mt-2">
        {{ timestampToText(publication.timestamp) }}
      </v-chip>

      <v-chip
        v-if="category"
        class="mt-2"
        :title="$t(`categories.${category.id}`)"
        @click.prevent.stop="$router.push({ name: 'blog', query: { category: category.id }})"
      >
        <v-icon left>
          {{ category.icon }}
        </v-icon>
        {{ $t(`categories.${category.id}`) }}
      </v-chip>
    </div>
  </b-card>
</template>

<script>
import { getCategory } from '@/utils/data'

export default {
  name: 'BPublicationCard',
  props: {
    publication: {
      type: Object,
      required: true
    }
  },
  computed: {
    category () {
      return getCategory(this.publication.category)
    }
  }
}
</script>
