<template>
  <v-app-bar
    v-if="$vuetify.breakpoint.mdAndUp"
    id="categories-bar"
    style="margin-top: 56px; z-index: 4;"
    class="translucent"
    hide-on-scroll
    dark
    app>
    <v-menu
      v-for="category in categories"
      :key="category.id"
      :close-on-content-click="false"
      offset-y>
      <template #activator="{ on, attrs, value }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          @click="loadCategory(category.id)">
          <v-icon
            v-if="$vuetify.breakpoint.lgAndUp && !value"
            left>{{ category.icon }}</v-icon>
          <v-icon
            v-if="value"
            left>mdi-chevron-down</v-icon>
          {{ $t(`categories.${category.id}`) }}
        </v-btn>
      </template>
      <v-card
        tile
        elevation="0">
        <v-card-text>
          <v-progress-linear
            v-if="categoryPublications[category.id] === undefined"
            style="width: 100%"
            color="darker"
            indeterminate/>
          <v-row v-else>
            <v-col
              v-for="publication in categoryPublications[category.id]"
              :key="publication.url + 'menu'"
              v-ripple
              cols="4">
              <router-link :to="{ name: 'publication', params: { url: publication.url }}">
                <v-img
                  :src="publication.banner"
                  :alt="publication.title"
                  :aspect-ratio="16/9"/>
                <h5 class="text-h5 my-2 text--text lecture-title">{{ publication.title }}</h5>
                <p class="text--primary lecture-text">{{ publication.description }}</p>
                <span class="font-weight-light blue-grey--text">
                  {{ publication.author.displayname }}
                  &mdash;
                  {{ dateToText(publication.timestamp) }}
                </span>
              </router-link>
            </v-col>
            <v-col
              cols="12"
              class="text-right">
              <v-btn
                v-if="categoryPublications[category.id].length === 3"
                :to="{ name: 'category', params: { category: category.id }}"
                color="darker white--text">
                {{ $t('list.loadMore') }}
                <v-icon right>mdi-chevron-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { categories } from '@/utils/data'
import { publications } from '@/utils/api'

export default {
  data() {
    return {
      categoryPublications: {},
      categories
    }
  },
  methods: {
    loadCategory(category) {
      if (this.categoryPublications[category] === undefined) {
        publications.get({category}).then(data => {
          this.categoryPublications = {
            ...this.categoryPublications,
            [category]: data.body.data.slice(0, 3)
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-menu__content
  width: 69% !important
  max-width: 69% !important
</style>
