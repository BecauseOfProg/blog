<template>
  <v-row>
    <v-col
      class="text-center"
      cols="12">
      <v-chip
        v-if="includeAll"
        :to="{ name: 'blog' }"
        exact
        active-class="darker white--text"
      >
        <v-icon left>
          {{ mdiTextBoxMultipleOutline }}
        </v-icon>
        {{ $t('global.allCategories') }}
      </v-chip>
    </v-col>
    <v-col
      class="text-center"
      cols="12">
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
    </v-col>
    <template v-if="!excludeTypes">
      <v-col
        class="text-center"
        cols="12">
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
      </v-col>
    </template>
  </v-row>
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
