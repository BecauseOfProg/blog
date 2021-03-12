<template>
  <main>
    <b-top-banner
      icon="mdi-iframe-outline"
      title="global.devblog"/>
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
                color="darker"
                href="https://twitter.com/BecauseOfProg"
                target="_blank"
                text>
                <v-icon left>mdi-twitter</v-icon>
                {{ $t('devblog.followUs') }}
              </v-btn>
            </template>
          </b-card>
        </v-col>
        <v-col
          cols="12"
          md="7">
          <template v-if="devblogs.length">
            <v-scale-transition>
              <v-row>
                <v-col
                  v-for="(devblog, index) in devblogs"
                  :key="devblog.url"
                  :md="index % 6 === 0 ? 12 : 6"
                  cols="12">
                  <b-card :to="{ name: 'devblog', params: { url: devblog.url } }">
                    <template #image>
                      <v-img
                        :alt="devblog.title"
                        :src="imageProxy(devblog.banner, 617, 347)"/>
                    </template>
                    <div>{{ devblog.category }}</div>
                    <p class="display-1 text--primary">{{ devblog.title }}</p>
                    <p>{{
                      $t('publication.publishedBy', {
                        author: devblog.author.displayname,
                        date: dateToText(devblog.timestamp)
                      })
                    }}</p>
                  </b-card>
                </v-col>
              </v-row>
            </v-scale-transition>
            <v-progress-linear
              v-if="loading"
              class="mt-5"
              color="darker"
              indeterminate/>
            <span
              v-else-if="page !== pages"
              v-intersect="onIntersect"/>
            <gradient-rule
              v-else
              round/>
          </template>
          <b-loading-screen v-else/>
        </v-col>
      </v-row>
      <scroll-to-top :threshold="150"/>
    </v-container>
  </main>
</template>

<script>
import {mapMutations} from 'vuex'

import {imageProxy} from '@/utils/helpers'
import {devblogs as api} from '@/utils/api'
import GradientRule from '@/components/GradientRule'
import ScrollToTop from '@/components/ScrollToTop'

export default {
  name: 'DevBlog',
  components: {GradientRule, ScrollToTop},
  data() {
    return {
      devblogs: [],
      page: 0,
      pages: 0,
      loading: false
    }
  },
  mounted() {
    this.fetchDevblogs()
  },
  methods: {
    ...mapMutations(['SHOW_SNACKBAR']),
    imageProxy,
    onIntersect(entries) {
      let isIntersecting = entries[0].isIntersecting
      if (isIntersecting && !this.loading) this.fetchDevblogs()
    },
    fetchDevblogs() {
      this.loading = true
      this.page += 1
      api.get({page: this.page}).then(response => {
        this.pages = response.body.pages
        this.devblogs = [
          ...this.devblogs,
          ...response.body.data
        ]
        this.loading = false
      }, error => {
        this.loading = false
        console.log(error)
        this.SHOW_SNACKBAR({
          error: false,
          message: this.$t('devblog.errors.loadFailed')
        })
      })
    }
  },
  metaInfo() {
    return {
      title: this.$t('devblog.title'),
      meta: [
        {
          property: 'og:title',
          content: this.$t('devblog.title')
        }
      ]
    }
  }
}
</script>
