<template>
  <v-col>
    <v-chip
      v-if="includeAll"
      :to="{ name: 'blog' }"
      exact
      active-class="darker white--text"
    >
      <v-icon left>
        {{ mdiTextBoxMultipleOutline }}
      </v-icon>
      {{ $t('global.allPublications') }}
    </v-chip>
    <v-chip
      v-for="category in categories"
      :key="category.id"
      :to="{ name: 'blog', query: { category: category.id }}"
      exact
      active-class="darker white--text"
    >
      <v-icon left>
        {{ category.icon }}
      </v-icon>
      {{ $t(`categories.${category.id}`) }}
    </v-chip>
    <template v-if="!excludeTypes">
      <v-chip
        v-for="type in types"
        :key="type.id"
        :to="{ name: 'blog', query: { type: type.id }}"
        exact
        active-class="darker white--text"
      >
        <v-icon left>
          {{ type.icon }}
        </v-icon>
        {{ $t(`types.${type.id}`) }}
      </v-chip>
    </template>
  </v-col>
</template>

<script>
import { mdiTextBoxMultipleOutline } from '@mdi/js'
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
  data () {
    return {
      categories,
      types,
      mdiTextBoxMultipleOutline
    }
  }
}
</script>
