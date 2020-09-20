<template>
  <main>
    <template v-if="loaded">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 650 : 500"
        :src="article.banner"
        dark>
        <v-row
          align="center"
          justify="center"
          class="darker-bg">
          <v-col
            class="text-center"
            cols="12">
            <span
              id="title"
              class="display-3 white--text ml-2 mr-2">
              {{ article.title }}
            </span>
          </v-col>
          <v-col
            class="pl-10 pr-10 mt-n16"
            cols="12"
            lg="8">
            <b-card class="bordered">
              <span style="font-size: 22px">« {{ article.description }} »</span>
              <template #actions>
                <v-row>
                  <v-col cols="6">
                    <v-tooltip
                      v-for="share in shares"
                      :key="share.name + 'badge'"
                      bottom>
                      <template #activator="{ on }">
                        <v-btn
                          :color="share.color"
                          :href="share.link"
                          target="_blank"
                          icon
                          v-on="on">
                          <v-icon>{{ share.icon }}</v-icon>
                        </v-btn>
                      </template>
                      <span>{{ share.name }}</span>
                    </v-tooltip>
                  </v-col>
                  <v-col
                    cols="6"
                    class="text-right">
                    <v-icon left>mdi-clock-outline</v-icon>
                    <span>{{ $t('article.publishedBy', { author: article.author.displayname, date: dateToText(article.timestamp) }) }}</span>
                  </v-col>
                </v-row>
              </template>
            </b-card>
          </v-col>
        </v-row>
      </v-parallax>
      <v-container class="page-body">
        <v-row>
          <v-col
            cols="12"
            lg="8"
            offset-lg="2">
            <b-card
              id="article-content"
              class="bordered">
              <markdown-it-vue-light
                v-show="article && article.content"
                class="markdown-body mb-3"
                :content="article.content"/>
              <v-divider/>
              <div class="text-center">
                <br><h3 class="headline mb-2 text--text">{{ $t('article.shareArticle') }}</h3>
                <v-btn
                  v-for="share in shares"
                  :key="share.name"
                  :color="share.color"
                  :href="share.link"
                  target="_blank"
                  class="ma-1"
                  outlined>
                  <v-icon left>{{ share.icon }}</v-icon>
                  {{ share.name }}
                </v-btn>
                <br><br><v-divider/><br>
                <h2 class="headline mb-2 text--text">{{ $t('article.published') }}</h2>
                <v-chip>
                  <v-icon left>{{ type.icon }}</v-icon>
                  {{ $t(`types.${type.id}`) }}
                </v-chip>
                <v-chip>
                  <v-icon left>{{ category.icon }}</v-icon>
                  {{ $t(`categories.${category.id}`) }}
                </v-chip>
                <v-chip
                  v-for="label in article.labels"
                  :key="label">
                  {{ label }}
                </v-chip>
              </div>
            </b-card>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col
                cols="12"
                lg="7"
                offset-lg="1">
                <v-row>
                  <v-col
                    cols="12"
                    class="pt-0">
                    <member-card :member="article.author"/>
                  </v-col>
                  <v-col cols="12">
                    <b-card>
                      <h3 class="headline">{{ $t('article.comments.leaveComment') }}</h3>
                      <v-row>
                        <v-col
                          cols="12"
                          md="6">
                          <v-text-field
                            v-model="commentForm.username"
                            :label="$t('article.comments.username')"
                            color="light"
                            type="text"
                            hide-details
                            outlined/>
                        </v-col>
                        <v-col
                          cols="12"
                          md="6">
                          <v-text-field
                            v-model="commentForm.email"
                            :label="$t('article.comments.email')"
                            color="light"
                            type="email"
                            hide-details
                            outlined/>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea
                            v-model="commentForm.content"
                            :label="$t('article.comments.content')"
                            color="light"
                            hide-details
                            outlined/>
                        </v-col>
                        <p class="ml-3 grey--text font-italic">{{ $t('article.comments.verification') }}</p>
                        <v-col
                          cols="12"
                          class="text-right">
                          <v-btn
                            :loading="sendingComment"
                            text
                            color="darker">
                            {{ $t('article.comments.send') }}
                            <v-icon right>mdi-send</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-divider/><br>
                      <h3 class="headline">{{ $t('article.comments.title') }}</h3>
                      <v-list v-if="comments.length">
                        <v-list-item
                          v-for="comment in comments"
                          :key="comment.slug">
                          <v-list-item-avatar>
                            <v-img
                              :src="`https://i.cdn.becauseofprog.fr/gravatar.com/avatar/${comment.encoded_email}`"
                              :alt="comment.username"/>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>
                              <span class="text--primary">{{ comment.username }}</span> &mdash; {{ dateToText(comment.timestamp) }}
                            </v-list-item-title>
                            <p>{{ comment.content }}</p>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                      <p
                        v-else-if="!commentsLoading"
                        class="font-italic">
                        {{ $t('article.comments.any') }}
                      </p>
                      <v-btn
                        v-if="commentsPage !== commentsPages"
                        color="darker"
                        text
                        :loading="commentsLoading"
                        @click="fetchComments">
                        {{ $t('list.loadMore') }}
                      </v-btn>
                    </b-card>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="12"
                lg="3">
                <v-row>
                  <v-col
                    cols="12"
                    class="pt-0">
                    <b-card>
                      <h3 class="headline darker--text">{{ $t('global.socialNetworks') }}</h3>
                      <p class="mb-3">{{ $t('global.socialNetworksMessage') }}</p>
                      <social-icons big/>
                    </b-card>
                  </v-col>
                  <v-col
                    cols="12"
                    class="pt-0">
                    <b-card>
                      <h3 class="headline darker--text">{{ $t('global.about') }}</h3>
                      <p>{{ $t('global.aboutMessage') }}</p>
                      <template #actions>
                        <v-btn
                          to="/page/about"
                          color="darker"
                          text>
                          <v-icon left>mdi-information-outline</v-icon>
                          {{ $t('global.more') }}
                        </v-btn>
                      </template>
                    </b-card>
                  </v-col>
                  <v-col
                    cols="12"
                    class="pt-0">
                    <b-card gradient>
                      <h3 class="headline white--text">{{ $t('article.links') }}</h3>
                      <p>{{ $t('article.linksMessage') }}</p>
                      <template #actions>
                        <v-btn
                          text
                          color="white"
                          href="https://twitter.com/BecauseOfProg">
                          <v-icon left>mdi-twitter</v-icon>
                          Twitter
                        </v-btn>
                        <v-btn
                          text
                          color="white"
                          href="#!">
                          <v-icon left>mdi-rss</v-icon>
                          RSS
                        </v-btn>
                      </template>
                    </b-card>
                  </v-col>
                  <v-col
                    cols="12"
                    class="pt-0">
                    <b-card>
                      <h3 class="headline darker--text">{{ $t('article.categories') }}</h3>
                      <categories-chips/>
                    </b-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <b-loading-screen v-else/>
  </main>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

import SocialIcons from '@/views/parts/SocialIcons'
import MemberCard from '@/views/parts/MemberCard'
import CategoriesChips from '@/views/parts/CategoriesChips'

import { categories, types, getCategory, getType } from '@/utils/data'
import { blogPosts, comments } from '@/utils/api'
import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'Article',
  components: { CategoriesChips, MemberCard, SocialIcons, MarkdownItVueLight },
  data() {
    return {
      article: {},
      loaded: false,

      comments: [],
      commentsPage: 0,
      commentsPages: 0,
      commentsLoading: false,

      commentForm: {
        username: '',
        email: '',
        content: ''
      },
      sendingComment: false,

      categories,
      types
    }
  },
  created() {
  },
  mounted() {
    blogPosts.get({ url: this.$route.params.url }).then(response => {
      this.article = response.body.data
      this.loaded = true
      this.addReadArticle(this.article.url)
    }, error => {
      console.log(error)
      this.SHOW_SNACKBAR({
        error: true,
        message: this.$i18n.t('errors.unknownArticle')
      })
      this.$router.push({ name: 'all-articles' })
    })
    this.fetchComments()
  },
  computed: {
    category() {
      return getCategory(this.article.category)
    },
    type() {
      return getType(this.article.type)
    },
    shares() {
      if (this.loaded) {
        return [
          {
            name: 'Twitter', icon: 'mdi-twitter', color: 'blue lighten-2',
            link: `https://twitter.com/intent/tweet?url=https://becauseofprog.fr/article/${this.article.url}&text=${this.article.title} (via @BecauseOfProg)`
          },
          {
            name: 'Facebook', icon: 'mdi-facebook', color: 'blue darken-4',
            link: `https://www.facebook.com/sharer/sharer.php?u=https://becauseofprog.fr/article/${this.article.url}`
          },
          {
            name: 'Diaspora', icon: 'mdi-asterisk', color: 'purple darken-2',
            link: `https://share.diasporafoundation.org/?title=${this.article.title}&url=https://becauseofprog.fr/article/${this.article.url}`
          },
          {
            name: 'Mastodon', icon: 'mdi-mastodon', color: 'blue darken-2',
            link: `web+mastodon://share?text=${this.article.title}%20-%20https://becauseofprog.fr/article/${this.article.url}`
          },
          {
            name: 'Mail', icon: 'mdi-email-outline', color: 'dark',
            link: `mailto:?subject=${this.article.title}&body=${this.article.description} Via BecauseOfProg : https://becauseofprog.fr/article/${this.article.url}`
          }
        ]
      } else return []
    }
  },
  methods: {
    ...mapMutations(['SHOW_SNACKBAR']),
    ...mapActions(['addReadArticle']),
    fetchComments() {
      this.commentsLoading = true
      this.commentsPage += 1
      comments.get({ post: this.$route.params.url, page: this.commentsPage }).then(response => {
        this.comments = [
          ...this.comments,
          ...response.body.data
        ]
        this.commentsPages = response.body.pages
        if (this.commentsPages === 0) this.commentsPage = 0
        this.commentsLoading = false
      })
    }
  }
}
</script>

<style lang="stylus">
@media screen and (max-width: 500px)
  #title
    font-size: 40px !important
</style>
