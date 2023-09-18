<template>
  <main>
    <b-top-banner
      :icon="mdiMagnify"
      title="global.search"
    />
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          lg="8"
          md="10"
          offset-lg="2"
          offset-md="1"
        >
          <b-card>
            <v-text-field
              v-model="search"
              :label="`${$t('global.search')}...`"
              color="darker"
              :prepend-icon="mdiMagnify"
              type="search"
              @keyup.enter="makeSearch"
            />
            <h4>{{ $t('list.suggestedCategories') }}</h4>
            <categories-chips exclude-types />
          </b-card>
        </v-col>
        <v-col
          cols="12"
          lg="10"
          md="12"
          offset-lg="1"
        >
          <v-row>
            <v-col
              v-for="publication in publications"
              :key="publication.id"
              cols="12"
              lg="4"
              md="6"
            >
              <b-publication-card :publication="publication" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
  name: 'Search',
  data () {
    return {
      publications: [],
      search: '',
      mdiMagnify
    }
  },
  async fetch () {
    const lastPublications = await this.$content('blog-posts').without(['body']).sortBy('timestamp', 'desc').limit(3).fetch()
    const authorIds = [...new Set(lastPublications.map(v => v.authorId))]
    const authors = await this.$content('members').where({ username: { $in: authorIds } }).fetch()
    lastPublications.forEach((v) => {
      v.id = v.slug
      v.author = authors.find(a => a.slug === v.authorId) || {}
    })
    this.publications = lastPublications
  },
  methods: {
    makeSearch () {
      this.$router.push({
        name: 'blog',
        query: {
          search: this.search
        }
      })
    }
  }
}
</script>
