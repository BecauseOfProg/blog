<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <router-link :to="{ name: 'article-id', params: { id: publication.id }}">
        <v-img
          v-ripple
          aspect-ratio="2"
          style="border-radius: 20px"
          :alt="publication.title"
          :src="publication.banner"
        />
      </router-link>
    </v-col>
    <v-col
      class="d-flex flex-column justify-center"
      cols="12"
      md="6"
    >
      <router-link
        :to="{ name: 'article-id', params: { id: publication.id }}"
        class="text--text"
      >
        <slot name="prepend"/>
        <h3 class="text-h4 mb-5">
          <b-read-indicator :publication="publication.id" />
          {{ publication.title }}
        </h3>
      </router-link>
      <p class="lecture-text text--secondary">
        {{ publication.description }}
      </p>
      <v-row class="d-flex justify-space-between ma-0 text--secondary" style="font-size: 12px">
        {{ $t('publication.publishedBy', { author: publication.author.displayname, date: timestampToText(publication.timestamp) }) }}
        <router-link
          v-if="category(publication.category)"
          v-ripple
          :to="{ name: 'blog', query: { category: category(publication.category).id } }"
          class="overline text--text"
          style="line-height: 0"
        >
          <v-icon>{{ category(publication.category).icon }}</v-icon>
          {{ $t(`categories.${category(publication.category).id}`) }}
        </router-link>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { getCategory } from '~/utils/data'

export default {
  name: 'BPublicationBanner',
  props: {
    publication: {
      type: Object,
      required: true
    }
  },
  methods: {
    category (id) {
      return getCategory(id)
    }
  }
}
</script>
