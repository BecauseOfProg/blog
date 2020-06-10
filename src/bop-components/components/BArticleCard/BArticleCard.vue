<template>
  <b-card :to="{ name: 'article', params: { url: article.url }}">
    <template #image>
      <v-img
        :src="article.banner"
        :alt="article.title"/>
    </template>
    <span class="headline">{{ article.title }}</span>
    <v-row class="mx-0">
      <v-chip class="mr-2">
        <v-avatar left>
          <v-img :src="article.author.picture"/>
        </v-avatar>
        {{ article.author.displayname }}
      </v-chip>
      <v-chip
        :to="{ name: 'category', params: { category: category.id }}"
        class="mr-2">
        <v-icon left>
          {{ category.icon }}
        </v-icon>
        {{ category.name }}
      </v-chip>
      <v-chip>
        {{ dateToText(article.timestamp) }}
      </v-chip>
    </v-row>
  </b-card>
</template>

<script>
import { getCategory } from '../../../utils/data'
import BCard from '../BCard'

export default {
  name: 'BArticleCard',
  components: BCard,
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    category() {
      return getCategory(this.article.category)
    }
  }
}
</script>
