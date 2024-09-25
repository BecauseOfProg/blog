<template>
  <v-row>
    <template v-if="lastPublications.length">
      <v-col cols="12">
        <b-publication-banner :publication="lastPublications[0]">
          <template
            v-if="showNew"
            #prepend>
            <v-btn
              class="mb-3"
              color="darker"
              text>
              <v-icon left>
                {{ mdiClockOutline }}
              </v-icon>
              {{ $t('home.new') }}
            </v-btn>
          </template>
        </b-publication-banner>
      </v-col>
      <v-col
        cols="12"
        md="10"
        offset-md="1"
      >
        <v-row>
          <v-col
            v-for="lastPublication in lastPublications.slice(1, 3)"
            :key="`publication-${lastPublication.id}`"
            cols="12"
            md="6"
          >
            <b-publication-card :publication="lastPublication" />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        class="text-center">
        <v-btn
          color="dark"
          class="white--text"
          to="/blog">
          Voir tout
          <v-icon right>
            {{ mdiChevronRight }}
          </v-icon>
        </v-btn>
      </v-col>
    </template>
    <v-col
      v-else
      cols="12">
      <v-skeleton-loader
        style="width: 100%"
        type="image, card-heading, actions"></v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script>
import { mdiClockOutline, mdiChevronRight } from '@mdi/js'

export default {
  name: 'LastPublications',
  props: {
    showNew: {
      type: Boolean,
      default: false
    },
    exclude: {
      type: String,
      default: ''
    }
  },
  async fetch () {
    // Get 3 last publications, sorted by timestamp
    const lastPublications = await this.$content('blog-posts').where({ slug: { $ne: this.exclude } }).without(['body']).sortBy('timestamp', 'desc').limit(3).fetch()
    const authorIds = [...new Set(lastPublications.map(v => v.authorId))]
    const authors = await this.$content('members').where({ username: { $in: authorIds } }).fetch()
    lastPublications.forEach((v) => {
      v.id = v.slug
      v.author = authors.find(a => a.slug === v.authorId) || {}
    })
    this.lastPublications = lastPublications
  },
  data () {
    return {
      lastPublications: [],
      mdiClockOutline,
      mdiChevronRight
    }
  }
}

</script>
