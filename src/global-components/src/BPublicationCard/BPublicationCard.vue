<template>
  <b-card
    :to="{ name: 'publication', params: { url: publication.url }}"
    style="height: 100%">
    <template #image>
      <v-img
        :alt="publication.title"
        :src="imageProxy(publication.banner, 617, 347)"/>
    </template>
    <span class="headline lecture-title">
      <b-read-indicator :publication="publication.url"/>
      {{ publication.title }}
    </span>
    <p class="lecture-text mt-2 mb-3">{{ publication.description }}</p>
    <div>
      <v-chip class="mt-2">
        <v-avatar left>
          <v-img :src="publication.author.picture"/>
        </v-avatar>
        {{ publication.author.displayname }}
      </v-chip>

      <v-chip class="mt-2">
        {{ dateToText(publication.timestamp) }}
      </v-chip>

      <v-chip
        :to="{ name: 'category', params: { category: category.id }}"
        class="mt-2">
        <v-icon left>
          {{ category.icon }}
        </v-icon>
        {{ $t(`categories.${category.id}`) }}
      </v-chip>
    </div>
  </b-card>
</template>

<script>
import {imageProxy} from '@/utils/helpers'
import {getCategory} from '@/utils/data'
import BCard from '../BCard'
import BReadIndicator from '../BReadIndicator'

export default {
  name: 'BPublicationCard',
  components: {
    'b-read-indicator': BReadIndicator,
    'b-card': BCard
  },
  props: {
    publication: {
      type: Object,
      required: true
    }
  },
  computed: {
    category() {
      return getCategory(this.publication.category)
    }
  },
  methods: {
    imageProxy
  }
}
</script>
