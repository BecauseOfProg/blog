<template>
  <main>
    <template v-if="loaded">
      <v-container>
        <v-row>
          <v-col
            :order="$vuetify.breakpoint.mdAndUp ? 2 : 1"
            cols="12"
            md="7">
            <b-card>
              <template #image>
                <v-img
                  :alt="devblog.title"
                  :src="devblog.banner"/>
              </template>
              <div class="text-center mb-5">
                <div>{{ devblog.category }}</div>
                <h1 class="text-h2">{{ devblog.title }}</h1>
                <p>
                  {{
                    $t('publication.publishedBy', {
                      author: devblog.author.displayname,
                      date: dateToText(devblog.timestamp)
                    })
                  }}
                </p>
              </div>

              <markdown-it-vue-light
                v-show="devblog && devblog.content"
                :content="devblog.content"
                class="markdown-body mb-3"/>
            </b-card>
          </v-col>
          <v-col
            :order="$vuetify.breakpoint.mdAndUp ? 1 : 2"
            cols="12"
            md="3"
            offset-md="1">
            <b-card
              :style="$vuetify.breakpoint.mdAndUp && 'position: sticky; top: 80px; max-height: calc(100vh - 160px); overflow-y: scroll'">
              <h3 class="headline mb-3">{{ $t('list.followUs') }}</h3>
              <social-icons big/>
              <v-divider class="my-3"/>

              <h3 class="headline">{{ $t('global.about') }}</h3>
              <p>{{ $t('global.aboutMessage') }}</p>
              <v-btn
                :to="{ name: 'about' }"
                color="darker"
                text>
                <v-icon left>mdi-information-outline</v-icon>
                {{ $t('global.more') }}
              </v-btn>
              <v-divider class="my-3"/>

              <h3 class="headline">{{ $t('devblog.otherPosts') }}</h3>
              <template v-for="other in otherDevblogs">
                <router-link
                  v-if="other.slug !== $route.params.slug"
                  :key="other.slug + 'link'"
                  :to="{ name: 'devblog', params: { slug: other.slug } }"
                  class="darker--text subtitle-1">
                  {{ other.title }}
                </router-link>
                <p
                  v-if="other.slug !== $route.params.slug"
                  :key="other.slug + 'author'"
                  class="mb-3">
                  {{ other.category }} &mdash; {{ dateToText(other.timestamp) }}
                </p>
              </template>
            </b-card>
          </v-col>
          <v-col
            class="text-center"
            cols="12"
            order="3">
            <v-btn color="darker white--text">
              <v-icon left>mdi-github</v-icon>
              {{ $t('projects.more') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <b-loading-screen v-else/>
  </main>
</template>

<script>
import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'
import SocialIcons from '@/components/SocialIcons'
import {devblogs as api} from '@/utils/api'

import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'Post',
  components: {SocialIcons, MarkdownItVueLight},
  data() {
    return {
      devblog: {},
      loaded: false,

      otherDevblogs: []
    }
  },
  mounted() {
    api.get({slug: this.$route.params.slug}).then(response => {
      this.devblog = response.body
      this.loaded = true
    }, () => {
      this.SHOW_SNACKBAR({
        error: true,
        message: this.$i18n.t('errors.unknownDevblog')
      })
      this.$router.push({name: 'devblogs'})
    })

    api.get().then(response => {
      this.otherDevblogs = response.body
    })
  },
  metaInfo() {
    if (this.loaded) {
      return {
        title: `${this.devblog.title} — BecauseOfProg`,
        meta: [
          {
            property: 'og:title',
            content: `${this.devblog.title} — BecauseOfProg`
          },
          {
            property: 'og:description',
            content: this.$t('devblog.title', {category: this.devblog.category})
          }
        ]
      }
    }
  }
}
</script>
