<template>
  <span>
    <v-chip
      v-for="category in categories"
      :key="category.id"
      :to="{ name: 'blog', query: { category: category.id }}"
      outlined
      exact
    >
      <v-icon
        dense
        left>
        {{ category.icon }}
      </v-icon>
      {{ $t(`categories.${category.id}`) }}
    </v-chip>
  </span>
</template>

<script>
import { categories } from '@/utils/data'

export default {
  name: 'CategoryChips',
  data () {
    return {
      categories
    }
  }
}
</script>
