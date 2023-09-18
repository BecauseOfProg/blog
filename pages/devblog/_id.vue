<template>
  <main>
    <template v-if="devblog">
      <v-container>
        <v-row>
          <v-col
            :order="$vuetify.breakpoint.mdAndUp ? 2 : 1"
            cols="12"
            md="7"
          >
            <b-card>
              <template #image>
                <v-img
                  :alt="devblog.title"
                  :src="devblog.banner"
                />
              </template>
              <div class="text-center mb-5">
                <div>{{ devblog.category }}</div>
                <h1 class="text-h2">
                  {{ devblog.title }}
                </h1>
                <p>
                  {{
                    $t('publication.publishedBy', {
                      author: devblog.author.displayname,
                      date: timestampToText(devblog.timestamp)
                    })
                  }}
                </p>
              </div>

              <!--              <markdown-it-vue-light
                v-show="devblog && devblog.content"
                :content="devblog.content"
                class="markdown-body mb-3"
              />-->

              <nuxt-content
                :document="devblog"
              />
            </b-card>
          </v-col>
          <v-col
            :order="$vuetify.breakpoint.mdAndUp ? 1 : 2"
            cols="12"
            md="3"
            offset-md="1"
          >
            <b-card
              :style="$vuetify.breakpoint.mdAndUp && 'position: sticky; top: 80px; max-height: calc(100vh - 160px); overflow-y: scroll'"
            >
              <h3 class="headline mb-3">
                {{ $t('list.followUs') }}
              </h3>
              <social-icons big />
              <v-divider class="my-3" />

              <h3 class="headline">
                {{ $t('global.about') }}
              </h3>
              <p>{{ $t('global.aboutMessage') }}</p>
              <v-divider class="my-3" />

              <h3 class="headline">
                {{ $t('devblog.otherPosts') }}
              </h3>
              <template v-for="other in otherDevblogs">
                <router-link
                  :key="other.id + 'link'"
                  :to="{ name: 'devblog', params: { id: other.id } }"
                  class="darker--text subtitle-1"
                >
                  {{ other.title }}
                </router-link>
                <p
                  v-if="other.id !== $route.params.id"
                  :key="other.id + 'author'"
                  class="mb-3"
                >
                  {{ other.category }} &mdash; {{ timestampToText(other.timestamp) }}
                </p>
              </template>
            </b-card>
          </v-col>
          <v-col
            class="text-center"
            cols="12"

            order="3"
          >
            <v-btn color="darker white--text">
              <v-icon left>
                mdi-github
              </v-icon>
              {{ $t('projects.more') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <b-loading-screen v-else />
  </main>
</template>

<script>
import SocialIcons from '@/components/SocialIcons.vue'

export default {
  name: 'Post',
  components: { SocialIcons },
  data () {
    return {
      devblog: null,
      otherDevblogs: []
    }
  },
  async fetch () {
    const id = this.$route.params.id
    const devblog = await this.$content('devblogs', id).fetch()
    devblog.id = id
    devblog.author = await this.$content('members', devblog.authorId).fetch()
    this.devblog = devblog

    const devblogs = await this.$content('devblogs').without(['body']).where({ slug: { $ne: id } }).sortBy('timestamp', 'desc').limit(3).fetch()
    const authorIds = [...new Set(devblogs.map(v => v.authorId))]
    const authors = await this.$content('members').where({ username: { $in: authorIds } }).fetch()
    devblogs.forEach((v) => {
      v.id = v.slug
      v.author = authors.find(a => a.slug === v.authorId)
    })
    this.otherDevblogs = devblogs
  },
  head () {
    if (!this.devblog) {
      return null
    }

    return {
      title: `${this.devblog.title} — BecauseOfProg`,
      meta: [
        {
          property: 'og:title',
          content: `${this.devblog.title} — BecauseOfProg`
        },
        {
          property: 'og:description',
          content: this.$t('devblog.title', { category: this.devblog.category })
        }
      ]
    }
  }
}
</script>
