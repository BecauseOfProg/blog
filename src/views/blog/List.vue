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
          <template v-if="articles.length">
            <v-scale-transition>
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
                            <h3 class="text-h3 mb-3 white--text lexture-title">{{ article.title }}</h3>
                            <p class="white--text lecture-text text-center">{{ article.description }}</p>
                            <span class="overline white--text">
                              {{ $t('article.publishedBy', { author: article.author.displayname, date: dateToText(article.timestamp) }) }}
                            </span>
                            <v-btn
                              :to="{ name: 'category', params: { category: category(article.category).id }}"
                              text
                              color="white">
                              <v-icon left>{{ category(article.category).icon }}</v-icon>
                              {{ $t(`categories.${category(article.category).id}`) }}
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-img>
                    </router-link>
                  </template>
                </v-col>
              </v-row>
            </v-scale-transition>
            <div class="text-center">
              <v-btn
                v-if="params.page !== pages"
                color="darker"
                text
                :loading="loading"
                @click="fetchArticles">
                {{ $t('list.loadMore') }}
              </v-btn>
            </div>
          </template>
          <v-fade-transition
            v-else
            appear>
            <template>
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
          lg="8"
          offset-lg="2">
          <b-card>
            <v-row>
              <v-col cols="6">
                <h3 class="headline">{{ $t('list.followUs') }}</h3>
                <social-icons big/>
              </v-col>
              <v-col cols="6">
                <h3 class="headline">{{ $t('global.about') }}</h3>
                <p>{{ $t('global.aboutMessage') }}</p><br>
                <v-btn
                  text
                  color="darker"
                  :to="{ name: 'about' }">
                  <v-icon left>mdi-information-outline</v-icon>
                  {{ $t('global.more') }}
                </v-btn>
              </v-col>
            </v-row>
          </b-card>
        </v-col>
      </v-row>
      <v-btn
        :small="$vuetify.breakpoint.smAndDown"
        color="light white--text"
        fab
        fixed
        bottom
        right
        @click="$vuetify.goTo('.b-top-banner')">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
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
      params: {
        page: 0
      },
      articles: [],
      loading: false,
      pages: 0,

      categories,
      types
    }
  },
  mounted() {
    if (this.$route.params.category) {
      this.params = {
        ...this.params,
        category: this.$route.params.category
      }
      let category = getCategory(this.$route.params.category)
      this.head.title = ['list.category', { category: this.$t(`categories.${category.id}`) }]
      this.head.icon = category.icon
      this.head.image = `/img/category/${category.id}.png`
    } else if (this.$route.params.type) {
      this.params = {
        ...this.params,
        type: this.$route.params.type
      }
      let type = getType(this.$route.params.type)
      this.head.title = ['list.type', { type: this.$t(`types.${type.id}`) }]
      this.head.icon = type.icon
      this.head.image = `/img/type/${type.id}.png`
    } else {
      this.head.title = ['global.allArticles']
      this.head.icon = 'mdi-text-box-multiple-outline'
    }
    this.fetchArticles()
  },
  methods: {
    category(id) {
      return getCategory(id)
    },
    fetchArticles() {
      this.loading = true
      this.params.page += 1
      blogPosts.get(this.params).then(response => {
        this.articles = [
          ...this.articles,
          ...response.body.data
        ]
        this.pages = response.body.pages
        this.loading = false
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
