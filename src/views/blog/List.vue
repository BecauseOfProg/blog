<template>
  <main>
    <categories-bar/>
    <b-top-banner
      :icon="head.icon"
      :src="head.image"
      :title="head.title"
      tall/>
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          md="10"
          offset-md="1">
          <categories-chips include-all/>
          <v-text-field
            v-model="params.search"
            :label="`${$t('global.search')}...`"
            color="darker"
            outlined
            prepend-inner-icon="mdi-magnify"
            type="search"
            @keydown.enter="fetchPublications(null, true)"/>
          <template v-if="publications.length">
            <v-scale-transition>
              <v-row>
                <template v-for="(publication, index) in publications">
                  <v-col
                    v-if="index === 0"
                    :key="publication.url"
                    cols="12">
                    <v-row>
                      <v-col
                        cols="12"
                        md="6">
                        <router-link :to="{ name: 'publication', params: { url: publication.url }}">
                          <v-img
                            v-ripple
                            :alt="publication.title"
                            :src="imageProxy(publication.banner, 896, 504)"/>
                        </router-link>
                      </v-col>
                      <v-col
                        class="d-flex flex-column justify-center"
                        cols="12"
                        md="6">
                        <router-link
                          :to="{ name: 'publication', params: { url: publication.url }}"
                          class="text--text">
                          <h3 class="text-h3 mb-8 lexture-title">
                            <b-read-indicator :publication="publication.url"/>
                            {{ publication.title }}
                          </h3>
                        </router-link>
                        <p class="lecture-text">{{ publication.description }}</p>
                        <v-row
                          class="d-flex justify-space-between ma-0">
                          {{
                            $t('publication.publishedBy', {
                              author: publication.author.displayname,
                              date: dateToText(publication.timestamp)
                            })
                          }}
                          <router-link
                            v-ripple
                            :to="{ name: 'category', params: { category: category(publication.category).id }}"
                            class="overline text--text">
                            <v-icon>{{ category(publication.category).icon }}</v-icon>
                            {{ $t(`categories.${category(publication.category).id}`) }}
                          </router-link>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    v-else
                    :key="publication.url"
                    :md="((index - 1) % 10) % 6 === 0 || (index - 1) % 10 === 0 ? 8 : 4"
                    cols="12">
                    <b-publication-card :publication="publication"/>
                  </v-col>
                </template>
              </v-row>
            </v-scale-transition>
            <v-progress-linear
              v-if="loading"
              class="mt-5"
              color="darker"
              indeterminate/>
            <span
              v-else-if="params.page !== pages"
              v-intersect="onIntersect"/>
            <gradient-rule
              v-else
              round/>
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
                class="d-flex align-center flex-column mt-2"
                cols="5">
                <h3 class="headline mb-3">{{ $t('list.followUs') }}</h3>
                <social-icons big/>
              </v-col>
              <v-col
                class="d-flex align-center flex-column mt-2"
                cols="5">
                <h3 class="headline">{{ $t('global.about') }}</h3>
                <p class="font-weight-light blue-grey--text text-center">{{ $t('global.aboutMessage') }}</p><br>
                <v-btn
                  :to="{ name: 'about' }"
                  color="darker"
                  text>
                  {{ $t('global.more') }}
                </v-btn>
              </v-col>
            </v-row>
          </b-card>
        </v-col>
      </v-row>
      <scroll-to-top/>
    </v-container>
  </main>
</template>

<script>
import {publications as api} from '@/utils/api'
import {categories, getCategory, getType, types} from '@/utils/data'
import {imageProxy} from '@/utils/helpers'
import CategoriesChips from '@/components/CategoriesChips.vue'
import CategoriesBar from '@/components/CategoriesBar.vue'
import GradientRule from '@/components/GradientRule.vue'
import SocialIcons from '@/components/SocialIcons.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'

export default {
  name: 'List',
  components: {CategoriesChips, CategoriesBar, GradientRule, ScrollToTop, SocialIcons},
  data() {
    return {
      fab: false,
      head: {
        title: '',
        icon: '',
        image: undefined
      },
      params: {
        page: 0
      },
      search: '',
      publications: [],
      loading: false,
      pages: 0,
      empty: false,

      categories,
      types
    }
  },
  mounted() {
    this.head.title = ['global.allPublications']
    this.head.icon = 'mdi-text-box-multiple-outline'

    if (this.$route.params.category) {
      this.params = {
        ...this.params,
        category: this.$route.params.category
      }
      let category = getCategory(this.$route.params.category)
      this.head.title = ['list.category', {category: this.$t(`categories.${category.id}`)}]
      this.head.icon = category.icon
      this.head.image = `/img/category/${category.id}.png`
    }
    if (this.$route.params.type) {
      this.params = {
        ...this.params,
        type: this.$route.params.type
      }
      let type = getType(this.$route.params.type)
      this.head.title = ['list.type', {type: this.$t(`types.${type.id}`)}]
      this.head.icon = type.icon
      this.head.image = `/img/type/${type.id}.png`
    }
    if (this.$route.query.search) {
      this.params = {
        ...this.params,
        search: this.$route.query.search
      }
    }

    this.fetchPublications()
  },
  methods: {
    imageProxy,
    category(id) {
      return getCategory(id)
    },
    onIntersect(entries) {
      let isIntersecting = entries[0].isIntersecting
      if (isIntersecting && !this.loading) this.fetchPublications()
    },
    fetchPublications(_, reset = false) {
      this.loading = true
      if (reset) this.params.page = 1
      else this.params.page += 1
      api.get(this.params).then(response => {
        this.publications = reset ? response.body.data : [
          ...this.publications,
          ...response.body.data
        ]
        if (!this.publications.length) this.empty = true
        this.pages = response.body.pages
        this.loading = false
      })
    }
  },
  watch: {
    page() {
      this.fetchPublications()
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
