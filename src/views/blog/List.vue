<template>
  <main>
    <categories-bar/>
    <b-top-banner
      :title="head.title"
      :icon="head.icon"
      :src="head.image"
      tall/>
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          lg="12">
          <categories-chips include-all/>
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
                  v-for="(article, index) in articles"
                  :key="article.url"
                  cols="12"
                  :md="index % 7 ? 4 : 10"
                  :offset-md="index % 7 ? 0 : 1">
                  <template v-if="index % 7">
                    <b-article-card :article="article"/>
                  </template>
                  <template v-else>
                    <router-link :to="{ name: 'article', params: { url: article.url }}">
                      <v-img
                        v-ripple
                        :src="article.banner"
                        :alt="article.title"
                        class="b-card">
                        <v-row
                          style="height: 100%"
                          class="darker-bg text-center pa-3"
                          justify="center"
                          align="center">
                          <v-col>
                            <h3 class="text-h3 mb-3 white--text">{{ article.title }}</h3>
                            <p class="white--text">{{ article.description }}</p>
                            <span class="overline white--text">Publié par {{ article.author.displayname }} le {{ dateToText(article.timestamp) }}</span>
                          </v-col>
                        </v-row>
                      </v-img>
                    </router-link>
                  </template>
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
        tout ce qui a après vous vous en occupez pas ça va dégager
        <v-col
          cols="12"
          lg="3"
          offset-lg="1">
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
import CategoriesBar from '@/views/parts/CategoriesBar'

export default {
  name: 'List',
  components: { CategoriesChips, CategoriesBar, SocialIcons },
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
