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
                  :alt="post.title"
                  :src="post.banner"/>
              </template>
              <div class="text-center mb-5">
                <div>{{ post.category }}</div>
                <h1 class="text-h2">{{ post.title }}</h1>
                <p>{{
                  $t('article.publishedBy', {
                    author: post.author.displayname,
                    date: dateToText(post.timestamp)
                  })
                }}</p>
              </div>

              <markdown-it-vue-light
                v-show="post && post.content"
                :content="post.content"
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
              <h3 class="headline">{{ $t('list.followUs') }}</h3>
              <social-icons big/>
              <v-divider/>

              <h3 class="headline">{{ $t('global.about') }}</h3>
              <p>{{ $t('global.aboutMessage') }}</p>
              <v-btn
                :to="{ name: 'about' }"
                class="mb-2"
                color="darker"
                text>
                <v-icon left>mdi-information-outline</v-icon>
                {{ $t('global.more') }}
              </v-btn>
              <v-divider/>

              <h3 class="headline">{{ $t('devblog.otherPosts') }}</h3>
              <template v-for="other in otherPosts">
                <router-link
                  :key="other.url + 'link'"
                  :to="{ name: 'devblog', params: { url: other.url } }"
                  class="darker--text subtitle-1">
                  {{ other.title }}
                </router-link>
                <p
                  :key="other.url + 'author'"
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
            <v-btn color="darker">
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
import SocialIcons from '@/views/parts/SocialIcons'
import {posts} from '@/utils/api'
import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'Post',
  components: {SocialIcons, MarkdownItVueLight},
  data() {
    return {
      post: {},
      loaded: false,

      otherPosts: []
    }
  },
  mounted() {
    posts.get({url: this.$route.params.url}).then(response => {
      this.post = response.body.data
      this.loaded = true
    }, error => {
      console.log(error)
      this.$router.push({name: 'devblogs'})
    })

    posts.get().then(response => {
      this.otherPosts = response.body.data
    })
  }
}
</script>
