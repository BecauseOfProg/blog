<template>
  <main>
    <b-top-banner
      :title="head.title"
      :icon="head.icon"
      :src="head.image"
      tall/>
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          lg="7"
          offset-lg="1">
          <b-card v-if="$vuetify.breakpoint.mdAndDown">
            <h3 class="headline darker--text">{{ $t('list.exploreCategories') }}</h3>
            <categories-chips include-all/>
          </b-card>
          <v-pagination
            v-if="pages > 0"
            v-model="page"
            :length="pages"
            color="darker"
            class="mt-3 mb-2"/>
          <v-scale-transition>
            <template v-if="loaded">
              <v-row>
                <v-col
                  v-for="article in articles"
                  :key="article.url"
                  cols="12">
                  <b-article-card :article="article"/>
                </v-col>
              </v-row>
            </template>
          </v-scale-transition>
          <v-fade-transition appear>
            <template v-if="!loaded">
              <div class="mt-3">
                <v-skeleton-loader
                  style="width: 100%"
                  type="image, card-heading, actions"/>
              </div>
            </template>
          </v-fade-transition>
        </v-col>
        <v-col
          cols="12"
          lg="3">
          <b-card
            fluid
            tile
            class="bordered">
            <v-list
              class="round"
              subheader
              dense
              tile>
              <v-list-item
                :to="{ name: 'all-articles' }"
                color="darker">
                <v-list-item-icon>
                  <v-icon>mdi-text-box-multiple-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ $t('global.allArticles') }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider/>
              <v-subheader>{{ $t('list.categoriesCaps') }}</v-subheader>
              <v-list-item
                v-for="category in categories"
                :key="category.id"
                :to="{ name: 'category', params: { category: category.id }}"
                color="darker">
                <v-list-item-icon>
                  <v-icon>{{ category.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ $t(`categories.${category.id}`) }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider/>
              <v-subheader>{{ $t('list.typesCaps') }}</v-subheader>
              <v-list-item
                v-for="type in types"
                :key="type.id"
                :to="{ name: 'type', params: { type: type.id }}"
                color="darker">
                <v-list-item-icon>
                  <v-icon>{{ type.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ $t(`types.${type.id}`) }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider/>
            <div class="pa-3">
              <h3 class="headline">{{ $t('list.followUs') }}</h3>
              <social-icons big/>
            </div>
            <v-divider/>
            <div class="pa-3">
              <h3 class="headline">{{ $t('global.about') }}</h3>
              <p>{{ $t('global.aboutMessage') }}</p><br>
              <v-btn
                text
                color="darker"
                :to="{ name: 'about' }">
                <v-icon left>mdi-information-outline</v-icon>
                {{ $t('global.more') }}
              </v-btn>
            </div>
          </b-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { blogPosts } from '@/utils/api'
import { categories, types, getCategory, getType } from '@/utils/data'
import SocialIcons from '@/views/parts/SocialIcons'
import CategoriesChips from '@/views/parts/CategoriesChips'

export default {
  name: 'List',
  components: { CategoriesChips, SocialIcons },
  data() {
    return {
      head: {
        title: '',
        icon: '',
        image: undefined
      },
      articles: [],
      loaded: false,
      page: 1,
      pages: 0,

      categories,
      types
    }
  },
  mounted() {
    this.fetchArticles()
  },
  methods: {
    fetchArticles() {
      this.loaded = false
      let params = {
        page: this.page
      }

      if (this.$route.params.category) {
        params['category'] = this.$route.params.category
        let category = getCategory(this.$route.params.category)
        this.head.title = ['list.category', { category: this.$t(`categories.${category.id}`) }]
        this.head.icon = category.icon
        this.head.image = `/img/category/${category.id}.png`
      } else if (this.$route.params.type) {
        params['type'] = this.$route.params.type
        let type = getType(this.$route.params.type)
        this.head.title = ['list.type', { type: this.$t(`types.${type.id}`) }]
        this.head.icon = type.icon
        this.head.image = `/img/type/${type.id}.png`
      } else {
        this.head.title = ['global.allArticles']
        this.head.icon = 'mdi-text-box-multiple-outline'
      }

      blogPosts.get(params).then(data => {
        if (params.page === this.page) {
          this.articles = data.body.data
          this.pages = data.body.pages
          this.loaded = true
        }
      })
    }
  },
  watch: {
    page() {
      this.fetchArticles()
    }
  }
}
</script>
