<template>
  <main>
    <b-top-banner
      title="global.devblog"
      icon="mdi-iframe-outline"/>
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          md="3"
          offset-md="1">
          <b-card class="bordered">
            <h3 class="headline">{{ $t('devblog.title') }}</h3>
            <p class="text-justify">{{ $t('devblog.description') }}</p>
            <template #actions>
              <v-btn
                href="https://twitter.com/BecauseOfProg"
                target="_blank"
                color="darker"
                text>
                {{ $t('devblog.followUs') }}
              </v-btn>
            </template>
          </b-card>
        </v-col>
        <v-col
          cols="12"
          md="7">
          <template v-if="posts.length">
            <v-scale-transition>
              <v-row>
                <v-col
                  v-for="(post, index) in posts"
                  :key="post.url"
                  cols="12"
                  :md="index % 3 === 0 ? 12 : 6">
                  <b-card :to="{ name: 'devblog', params: { url: post.url } }">
                    <template #image>
                      <v-img
                        :src="imageProxy(post.banner, 617, 347)"
                        :alt="post.title"/>
                    </template>
                    <div>{{ post.category }}</div>
                    <p class="display-1 text--primary">{{ post.title }}</p>
                    <p>{{ $t('article.publishedBy', { author: post.author.displayname, date: dateToText(post.timestamp) }) }}</p>
                  </b-card>
                </v-col>
              </v-row>
            </v-scale-transition>
            <div class="text-center">
              <v-btn
                v-if="page !== pages"
                color="darker"
                text
                :loading="loading"
                @click="fetchPosts">
                {{ $t('list.loadMore') }}
              </v-btn>
            </div>
          </template>
          <b-loading-screen v-else/>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'

import { imageProxy } from '@/utils/helpers'
import { posts } from '@/utils/api'

export default {
  name: 'DevBlog',
  data() {
    return {
      posts: [],
      page: 0,
      pages: 0,
      loading: false
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    ...mapMutations(['SHOW_SNACKBAR']),
    imageProxy,
    fetchPosts() {
      this.page += 1
      posts.get({ page: this.page }).then(response => {
        this.pages = response.body.pages
        this.posts = response.body.data
        this.loading = true
      }, error => {
        console.log(error)
        this.SHOW_SNACKBAR({
          error: false,
          message: this.$t('devblog.errors.loadFailed')
        })
      })
    }
  }
}
</script>
