<template>
  <v-col>
    <v-chip
      v-if="includeAll"
      :to="{ name: 'all-articles' }"
      active-class="darker white--text">
      <v-icon left>mdi-text-box-multiple-outline</v-icon>
      {{ $t('global.allArticles') }}
    </v-chip>
    <v-chip
      v-for="category in categories"
      :key="category.id"
      :to="{ name: 'category', params: { category: category.id }}"
      active-class="darker white--text">
      <v-icon left>{{ category.icon }}</v-icon>
      {{ $t(`categories.${category.id}`) }}
    </v-chip>
    <template v-if="!excludeTypes">
      <v-chip
        v-for="type in types"
        :key="type.id"
        :to="{ name: 'type', params: { type: type.id }}"
        active-class="darker white--text">
        <v-icon left>{{ type.icon }}</v-icon>
        {{ $t(`types.${type.id}`) }}
      </v-chip>
    </template>
  </v-col>
</template>

<script>
import { categories, types } from '@/utils/data'

export default {
  name: 'CategoriesChips',
  props: {
    includeAll: {
      type: Boolean,
      default: false
    },
    excludeTypes: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      categories,
      types
    }
  }
}
</script>
