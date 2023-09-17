<template>
  <main>
    <b-top-banner
      icon="mdi-iframe-outline"
      title="global.devblog"
    />
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          md="3"
          offset-md="1"
        >
          <b-card class="bordered">
            <h3 class="headline">
              {{ $t('devblog.title') }}
            </h3>
            <p class="text-justify">
              {{ $t('devblog.description') }}
            </p>
            <template #actions>
              <v-btn
                color="darker"
                href="https://twitter.com/BecauseOfProg"
                target="_blank"
                text
              >
                <v-icon left>
                  mdi-twitter
                </v-icon>
                {{ $t('devblog.followUs') }}
              </v-btn>
            </template>
          </b-card>
        </v-col>
        <v-col
          cols="12"
          md="7"
        >
          <template v-if="devblogs.length">
            <v-scale-transition>
              <v-row>
                <v-col
                  v-for="(devblog, index) in devblogs"
                  :key="devblog.id"
                  :md="index % 6 === 0 ? 12 : 6"
                  cols="12"
                >
                  <b-card :to="{ name: 'devblog-id', params: { id: devblog.id } }">
                    <template #image>
                      <v-img
                        height="400"
                        :alt="devblog.title"
                        :src="devblog.banner"
                      />
                    </template>
                    <div>{{ devblog.category }}</div>
                    <p class="display-1 text--primary">
                      {{ devblog.title }}
                    </p>
                    <p>
                      {{
                        $t('publication.publishedBy', {
                          author: devblog.author.displayname,
                          date: timestampToText(devblog.timestamp)
                        })
                      }}
                    </p>
                  </b-card>
                </v-col>
              </v-row>
            </v-scale-transition>
          </template>
        </v-col>
      </v-row>
      <scroll-to-top :threshold="150" />
    </v-container>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import ScrollToTop from '@/components/ScrollToTop.vue'

export default {
  name: 'DevBlog',
  components: { ScrollToTop },
  data () {
    return {
      devblogs: [],
      page: 0,
      pages: 0
    }
  },
  head () {
    return {
      title: this.$t('devblog.title'),
      meta: [
        {
          property: 'og:title',
          content: this.$t('devblog.title')
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['SHOW_SNACKBAR'])
  },
  async fetch () {
    const devblogs = await this.$content('devblogs').without(['body']).sortBy('timestamp', 'desc').fetch()
    const authorIds = [...new Set(devblogs.map(v => v.authorId))]
    const authors = await this.$content('members').where({ username: { $in: authorIds } }).fetch()
    devblogs.forEach((v) => {
      v.id = v.slug
      v.author = authors.find(a => a.slug === v.authorId)
    })
    this.devblogs = devblogs
  }
}
</script>
