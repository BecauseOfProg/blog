<template>
  <b-card :to="{ name: 'article', params: { url: article.url }}">
    <template #image>
      <v-img
        :src="imageProxy(article.banner, 617, 347)"
        :alt="article.title"/>
    </template>
    <span class="headline lecture-title">{{ article.title }}</span>
    <p class="lecture-text mb-3">{{ article.description }}</p>
    <v-row class="mx-0">
      <v-chip>
        <v-avatar left>
          <v-img :src="article.author.picture"/>
        </v-avatar>
        {{ article.author.displayname }}
      </v-chip>
      <v-chip :to="{ name: 'category', params: { category: category.id }}">
        <v-icon left>
          {{ category.icon }}
        </v-icon>
        {{ $t(`categories.${category.id}`) }}
      </v-chip>
      <v-chip>
        {{ dateToText(article.timestamp) }}
      </v-chip>
    </v-row>
  </b-card>
</template>

<script>
import{ imageProxy } from '../../../utils/helpers'
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
  },
  methods: {
    imageProxy
  }
}
</script>
