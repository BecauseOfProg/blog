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
            <h3 class="headline darker--text">Explorez nos catégories</h3>
            <categories-chips include-all/>
          </b-card>
          <v-pagination
            v-if="pages > 0"
            v-model="page"
            :length="pages"
            color="darker"
            class="mt-3 mb-2"/>
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
          <template v-else>
            <div class="mt-3">
              <v-skeleton-loader
                style="width: 100%"
                type="image, card-heading, actions"/>
            </div>
          </template>
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
                  <v-list-item-title>Tous les articles</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider/>
              <v-subheader>CATÉGORIES</v-subheader>
              <v-list-item
                v-for="category in categories"
                :key="category.id"
                :to="{ name: 'category', params: { category: category.id }}"
                color="darker">
                <v-list-item-icon>
                  <v-icon>{{ category.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ category.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider/>
              <v-subheader>TYPES</v-subheader>
              <v-list-item
                v-for="type in types"
                :key="type.id"
                :to="{ name: 'type', params: { type: type.id }}"
                color="darker">
                <v-list-item-icon>
                  <v-icon>{{ type.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ type.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider/>
            <div class="pa-3">
              <span class="headline darker--text mb-3">Nous suivre</span>
              <social-icons big/>
            </div>
            <v-divider/>
            <div class="pa-3">
              <span class="headline darker--text">À propos</span>
              <p>BecauseOfProg, c'est des développeurs rassemblés autour de projets communs tels que le blog.</p>
              <v-btn
                text
                color="darker"
                :to="{ name: 'about' }">
                <v-icon left>mdi-information-outline</v-icon>
                En savoir plus
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
  name: 'ArticleList',
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
        this.head.title = `Catégorie — ${category.name}`
        this.head.icon = category.icon
        this.head.image = `/img/category/${category.id}.png`
      } else if (this.$route.params.type) {
        params['type'] = this.$route.params.type
        let type = getType(this.$route.params.type)
        this.head.title = `Type — ${type.name}`
        this.head.icon = type.icon
        this.head.image = `/img/type/${type.id}.png`
      } else {
        this.head.title = 'Tous les articles'
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
