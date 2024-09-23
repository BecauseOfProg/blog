<template>
  <v-app-bar
    v-if="$vuetify.breakpoint.mdAndUp"
    id="categories-bar"
    style="margin-top: 56px; z-index: 4;"
    class="translucent"
    hide-on-scroll
    dark
    app
  >
    <v-menu
      v-for="category in categories"
      :key="category.id"
      :close-on-content-click="false"
      offset-y
    >
      <template #activator="{ on, attrs, value }">
        <v-btn
          text
          color="text"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon
            v-if="$vuetify.breakpoint.lgAndUp && !value"
            left
          >
            {{ category.icon }}
          </v-icon>
          <v-icon
            v-if="value"
            left
          >
            {{ mdiChevronDown }}
          </v-icon>
          {{ $t(`categories.${category.id}`) }}
        </v-btn>
      </template>
      <v-card
        tile
        elevation="0"
      >
        <v-card-text>
          <v-progress-linear
            v-if="categoryPublications[category.id] === undefined"
            style="width: 100%"
            color="darker"
            indeterminate
          />
          <v-row v-else>
            <v-col
              v-for="publication in categoryPublications[category.id]"
              :key="`${publication.id}menu`"
              v-ripple
              cols="4"
            >
              <router-link :to="{ name: 'article-id', params: { id: publication.id }}">
                <v-img
                  style="border-top-left-radius: 20px; border-top-right-radius: 20px;"
                  :src="publication.banner"
                  :alt="publication.title"
                  :aspect-ratio="16/9"
                />
                <h5 class="text-h5 my-2 text--text lecture-title">
                  {{ publication.title }}
                </h5>
                <p class="text--secondary lecture-text">
                  {{ publication.description }}
                </p>
                <v-divider class="mb-4" />
                <span class="font-weight-light blue-grey--text">
                  <v-avatar
                    class="mr-1"
                    size="20"
                  >
                    <v-img
                      :src="publication.author.picture"
                      :alt="`img_${publication.author.displayname}`"
                    />
                  </v-avatar>
                  {{ publication.author.displayname }}
                  &mdash;
                  {{ timestampToText(publication.timestamp) }}
                </span>
              </router-link>
            </v-col>
            <v-col
              cols="12"
              class="text-right"
            >
              <v-btn
                v-if="categoryPublications[category.id].length === 3"
                :to="{ name: 'blog', query: { category: category.id }}"
                color="darker white--text"
                elevation="0"
              >
                {{ $t('list.loadMore') }}
                <v-icon right>
                  {{ mdiChevronRight }}
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mdiChevronDown, mdiChevronRight } from '@mdi/js'
import { categories } from '@/utils/data'

export default {
  data () {
    return {
      categoryPublications: {},
      categories,
      mdiChevronDown,
      mdiChevronRight
    }
  },
  async fetch () {
    const promises = []
    for (const category of this.categories) {
      promises.push(this.$content('blog-posts').without(['body']).where({ category: category.id }).sortBy('timestamp', 'desc').limit(3).fetch())
    }
    const publications = await Promise.all(promises)

    const authorIds = [...new Set(publications.map(category => category.map(publication => publication.authorId)).flat())]
    const authors = await this.$content('members').where({ username: { $in: authorIds } }).fetch()

    const categoryPublications = {}
    for (const [index, category] of this.categories.entries()) {
      categoryPublications[category.id] = publications[index]
      categoryPublications[category.id].forEach((v) => {
        v.id = v.slug
        v.author = authors.find(a => a.slug === v.authorId) || {}
      })
    }
    this.categoryPublications = categoryPublications
  }
}
</script>

<style scoped>
.v-menu__content {
  width: 69% !important;
  max-width: 69% !important;
}

* {
  color: black;
}
</style>
