<template>
  <b-card
    class="mb-10"
    fluid
    style="padding-bottom: 0px !important">
    <v-expansion-panels flat>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span class="text-body-1">Recherche par filtres</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col
              class="text-center"
              cols="12">
              <v-chip
                v-if="showAllButton"
                :to="{ name: 'blog' }"
                exact
                outlined
              >
                <v-icon
                  dense
                  left>
                  {{ mdiTextBoxMultipleOutline }}
                </v-icon>
                Toutes les publications
              </v-chip>
            </v-col>
            <v-col
              class="text-center"
              cols="12">
              <p v-if="!showTypes && authors.length === 0" class="text-center text-subtitle-1">Thématique principale</p>
              <CategoryChips/>
            </v-col>
            <template v-if="showTypes">
              <v-divider/>
              <v-col
                class="text-center"
                cols="12">
                <p class="text-subtitle-1">Type de contenu</p>
                <v-chip
                  v-for="type in types"
                  :key="type.id"
                  :to="{ name: 'blog', query: { type: type.id }}"
                  outlined
                  exact
                >
                  <v-icon
                    dense
                    left>
                    {{ type.icon }}
                  </v-icon>
                  {{ $t(`types.${type.id}`) }}
                </v-chip>
              </v-col>
            </template>
            <template v-if="authors.length > 0">
              <v-divider/>
              <v-col
                class="text-center"
                cols="12">
                <p class="text-subtitle-1">Auteur</p>
                <v-chip
                  v-for="author in authors"
                  :key="author.username"
                  :to="{ name: 'blog', query: { author: author.username }}"
                  outlined
                  exact
                >
                  <v-avatar
                    left>
                    <v-img :src="author.picture"></v-img>
                  </v-avatar>
                  {{ author.displayname }}
                </v-chip>
              </v-col>
            </template>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </b-card>
</template>

<script>
import { mdiTextBoxMultipleOutline } from '@mdi/js'
import { categories, types } from '@/utils/data'

export default {
  name: 'FiltersSearch',
  props: {
    showAllButton: {
      type: Boolean,
      default: false
    },
    showTypes: {
      type: Boolean,
      default: false
    },
    authors: {
      type: Array,
      default: () => []
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
