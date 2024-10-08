<template>
  <main>
    <client-only>
      <v-fade-transition>
        <lazy-categories-bar />
      </v-fade-transition>
    </client-only>
    <b-top-banner
      :icon="head.icon"
      :src="head.image"
      :title="computedTitle"
      tall
    />
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          md="10"
          offset-md="1"
        >
          <v-text-field
            v-model="search"
            autofocus
            :label="`${$t('global.search')}...`"
            color="darker"
            outlined
            :prepend-inner-icon="mdiMagnify"
            type="search"
          />
          <filters-search
            show-all-button
            :authors="authors"
            class="pb-10"
            show-types />
          <template v-if="publications.length">
            <v-scale-transition>
              <v-row>
                <template v-for="(publication, index) in computedPublications">
                  <v-col
                    v-if="index === 0"
                    :key="publication.id"
                    cols="12"
                  >
                    <b-publication-banner :publication="publication" />
                  </v-col>
                  <v-col
                    v-else
                    :key="publication.id"
                    :md="((index - 1) % 10) % 6 === 0 || (index - 1) % 10 === 0 ? 8 : 4"
                    cols="12"
                  >
                    <b-publication-card :publication="publication" />
                  </v-col>
                </template>
              </v-row>
            </v-scale-transition>
          </template>
          <template v-else-if="empty">
            <h3 class="text-center">
              {{ $t('list.noResults') }}
            </h3>
          </template>
        </v-col>
        <v-col
          cols="12"
          lg="8"
          offset-lg="2"
        >
          <b-card>
            <v-row justify="center">
              <v-col
                align-self="center"
                class="d-flex align-center flex-column"
                cols="5"
              >
                <h3 class="headline mb-3">
                  {{ $t('list.followUs') }}
                </h3>
                <social-icons />
              </v-col>
              <v-col
                align-self="center"
                class="d-flex align-center flex-column"
                cols="5"
              >
                <h3 class="headline mt-2">
                  {{ $t('global.about') }}
                </h3>
                <p class="font-weight-light blue-grey--text text-center">
                  {{ $t('global.aboutMessage') }}
                </p><br>
              </v-col>
            </v-row>
          </b-card>
        </v-col>
      </v-row>
      <scroll-to-top />
    </v-container>
  </main>
</template>

<script>
import { mdiMagnify, mdiTextBoxMultipleOutline } from '@mdi/js'
import { categories, types } from '@/utils/data'

export default {
  name: 'List',
  data () {
    return {
      fab: false,
      head: {
        title: '',
        icon: '',
        image: undefined
      },
      params: {},
      search: '',
      publications: [],
      authors: [],
      empty: false,

      categories,
      types,

      mdiMagnify
    }
  },
  async fetch () {
    this.head.title = ['global.allPublications']
    this.head.icon = mdiTextBoxMultipleOutline

    const publications = await this.$content('blog-posts')
      .without(['body'])
      .sortBy('timestamp', 'desc')
      .fetch()

    const authorIds = [...new Set(publications.map(v => v.authorId))]
    this.authors = await this.$content('members').where({ username: { $in: authorIds } }).fetch()

    publications.forEach((v) => {
      v.id = v.slug
      v.author = this.authors.find(a => a.slug === v.authorId) || {}
    })
    this.publications = publications
  },
  head () {
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
  },
  computed: {
    computedPublications () {
      return this.publications.filter((v) => {
        if (this.params.category && v.category !== this.params.category) { return false }
        if (this.params.type && v.type !== this.params.type) { return false }
        if (this.params.author && v.authorId !== this.params.author) { return false }
        if (this.search && !v.title.toLowerCase().includes(this.search.toLowerCase())) { return false }
        return true
      })
    },
    computedTitle () {
      if (this.params.category) {
        const title = `categories.${this.params.category}`
        return `Catégorie ‒ ${this.$t(title)}`
      }

      if (this.params.type) {
        const title = `types.${this.params.type}`
        return `Type ‒ ${this.$t(title)}`
      }

      if (this.params.author) {
        const author = this.authors.find(a => a.slug === this.params.author)
        return `Auteur ‒ ${author.displayname}`
      }
      return 'Toutes les publications'
    }
  },
  watch: {
    search: {
      handler (val) {
        this.$router.push({ query: { ...this.$route.query, search: val || undefined } })

        // scroll to top
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    },
    '$route.query': {
      handler (val) {
        this.params = {}
        if (val.category) {
          this.params = { ...this.params, category: val.category }
        }
        if (val.type) {
          this.params = { ...this.params, type: val.type }
        }
        if (val.author) {
          this.params = { ...this.params, author: val.author }
        }
        if (val.search) {
          this.search = val.search
        }
      },
      deep: true
    }
  },
  mounted () {
    let params = {}

    const categoryId = this.$route.query.category
    if (categoryId) {
      params = { ...params, category: categoryId }
    }

    const typeId = this.$route.query.type
    if (typeId) {
      params = { ...params, type: typeId }
    }

    const authorId = this.$route.query.author
    if (authorId) {
      params = { ...params, author: authorId }
    }

    this.params = params

    const search = this.$route.query.search
    if (search) {
      this.search = search
    }
  }
}
</script>
