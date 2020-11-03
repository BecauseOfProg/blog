<template>
  <b-card :to="{ name: 'article', params: { url: article.url }}">
    <template #image>
      <v-img
        :src="imageProxy(article.banner, 617, 347)"
        :alt="article.title"/>
    </template>
    <span class="headline lecture-title">
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
      {{ article.title }}
    </span>
    <p class="lecture-text mt-2 mb-3">{{ article.description }}</p>
    <!--    <p class="font-weight-light blue-grey&#45;&#45;text">{{ $t('article.publishedBy', { author: article.author.displayname, date: dateToText(article.timestamp) }) }}</p>-->
    <v-chip class="mt-2">
      <v-avatar left>
        <v-img :src="article.author.picture"/>
      </v-avatar>
      {{ article.author.displayname }}
    </v-chip>

    <v-chip class="mt-2">
      {{ dateToText(article.timestamp) }}
    </v-chip>

    <v-chip
      class="mt-2"
      :to="{ name: 'category', params: { category: category.id }}">
      <v-icon left>
        {{ category.icon }}
      </v-icon>
      {{ $t(`categories.${category.id}`) }}
    </v-chip>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { imageProxy } from '@/utils/helpers'
import { getCategory } from '@/utils/data'
import BCard from '../BCard'

export default {
  name: 'BArticleCard',
  components: {
    'b-card': BCard
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['isArticleRead']),
    read() {
      return this.isArticleRead(this.article.url)
    },
    category() {
      return getCategory(this.article.category)
    }
  },
  methods: {
    imageProxy
  }
}
</script>
