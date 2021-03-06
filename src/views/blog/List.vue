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
          <v-text-field
            v-model="params.search"
            :label="`${$t('global.search')}...`"
            prepend-inner-icon="mdi-magnify"
            color="darker"
            type="search"
            outlined
            @keydown.enter="fetchArticles(null, true)"/>
          <template v-if="articles.length">
            <v-scale-transition>
              <v-row>
                <template v-for="(article, index) in articles">
                  <v-col
                    v-if="index === 0"
                    :key="article.url"
                    cols="12">
                    <v-row>
                      <v-col
                        cols="12"
                        md="6">
                        <router-link :to="{ name: 'article', params: { url: article.url }}">
                          <v-img
                            v-ripple
                            :src="imageProxy(article.banner, 896, 504)"
                            :alt="article.title"/>
                        </router-link>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                        class="d-flex flex-column justify-center">
                        <router-link
                          :to="{ name: 'article', params: { url: article.url }}"
                          class="text--text">
                          <h3 class="text-h3 mb-8 lexture-title">
                            <b-read-indicator :article="article.url"/>
                            {{ article.title }}
                          </h3>
                        </router-link>
                        <p class="lecture-text">{{ article.description }}</p>
                        <v-row
                          class="d-flex justify-space-between ma-0">
                          {{ $t('article.publishedBy', { author: article.author.displayname, date: dateToText(article.timestamp) }) }}
                          <router-link
                            v-ripple
                            :to="{ name: 'category', params: { category: category(article.category).id }}"
                            class="overline text--text">
                            <v-icon>{{ category(article.category).icon }}</v-icon>
                            {{ $t(`categories.${category(article.category).id}`) }}
                          </router-link>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    v-else
                    :key="article.url"
                    :md="((index - 1) % 10) % 6 === 0 || (index - 1) % 10 === 0 ? 8 : 4"
                    cols="12">
                    <b-article-card :article="article"/>
                  </v-col>
                </template>
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
          <template v-else-if="empty">
            <h3 class="text-center">{{ $t('list.noResults') }}</h3>
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
            <v-row justify="center">
              <v-col
                cols="5"
                class="d-flex align-center flex-column mt-2">
                <h3 class="headline mb-3">{{ $t('list.followUs') }}</h3>
                <social-icons big/>
              </v-col>
              <v-col
                cols="5"
                class="d-flex align-center flex-column mt-2">
                <h3 class="headline">{{ $t('global.about') }}</h3>
                <p class="font-weight-light blue-grey--text text-center">{{ $t('global.aboutMessage') }}</p><br>
                <v-btn
                  text
                  color="darker"
                  :to="{ name: 'about' }">
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
import { imageProxy } from '@/utils/helpers'
import SocialIcons from '@/components/SocialIcons'
import CategoriesChips from '@/components/CategoriesChips'
import CategoriesBar from '@/components/CategoriesBar'

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
      search: '',
      articles: [],
      loading: false,
      pages: 0,
      empty: false,

      categories,
      types
    }
  },
  mounted() {
    this.head.title = ['global.allArticles']
    this.head.icon = 'mdi-text-box-multiple-outline'

    if (this.$route.params.category) {
      this.params = {
        ...this.params,
        category: this.$route.params.category
      }
      let category = getCategory(this.$route.params.category)
      this.head.title = ['list.category', { category: this.$t(`categories.${category.id}`) }]
      this.head.icon = category.icon
      this.head.image = `/img/category/${category.id}.png`
    }
    if (this.$route.params.type) {
      this.params = {
        ...this.params,
        type: this.$route.params.type
      }
      let type = getType(this.$route.params.type)
      this.head.title = ['list.type', { type: this.$t(`types.${type.id}`) }]
      this.head.icon = type.icon
      this.head.image = `/img/type/${type.id}.png`
    }
    if (this.$route.query.search) {
      this.params = {
        ...this.params,
        search: this.$route.query.search
      }
    }

    this.fetchArticles()
  },
  methods: {
    imageProxy,
    category(id) {
      return getCategory(id)
    },
    fetchArticles(_, reset = false) {
      this.loading = true
      if (reset) this.params.page = 1
      else this.params.page += 1
      blogPosts.get(this.params).then(response => {
        this.articles = reset ? response.body.data : this.articles = [
          ...this.articles,
          ...response.body.data
        ]
        if (!this.articles.length) this.empty = true
        this.pages = response.body.pages
        this.loading = false
      })
    }
  },
  watch: {
    page() {
      this.fetchArticles()
    }
  },
  metaInfo() {
    if (this.head.title !== '') {
      return {
        title: `${this.$t.apply(this, this.head.title)} — BecauseOfProg`,
        meta: [
          {
            property: 'og:title',
            content: `${this.$t.apply(this, this.head.title)} — BecauseOfProg`
          },
          {
            property: 'og:image',
            content: this.head.image
          }
        ]
      }
    }
  }
}
</script>
