<template>
  <main>
    <template v-if="loaded">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 650 : 500"
        :src="publication.banner"
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
              {{ publication.title }}
            </span>
          </v-col>
          <v-col
            class="pl-10 pr-10 mt-n16"
            cols="12"
            lg="8">
            <b-card class="bordered">
              <span style="font-size: 22px">« {{ publication.description }} »</span>
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
                    <span>
                      {{ $t('publication.publishedBy', {
                        author: publication.author.displayname,
                        date: dateToText(publication.timestamp)
                      }) }}
                    </span>
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
              id="publication-content"
              class="bordered">
              <markdown-it-vue-light
                v-show="publication && publication.content"
                class="markdown-body mb-3"
                :content="publication.content"/>
              <v-divider/>
              <div class="text-center">
                <br><h3 class="headline mb-2 text--text">{{ $t('publication.sharePublication') }}</h3>
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
                <h2 class="headline mb-2 text--text">{{ $t('publication.published') }}</h2>
                <v-chip>
                  <v-icon left>{{ type.icon }}</v-icon>
                  {{ $t(`types.${type.id}`) }}
                </v-chip>
                <v-chip>
                  <v-icon left>{{ category.icon }}</v-icon>
                  {{ $t(`categories.${category.id}`) }}
                </v-chip>
                <v-chip
                  v-for="label in publication.labels"
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
                    <member-card :member="publication.author"/>
                  </v-col>
                  <v-col cols="12">
                    <b-card>
                      <h3 class="headline">{{ $t('publication.comments.leaveComment') }}</h3>
                      <a
                        href="https://discord.becauseofprog.fr"
                        target="_blank">
                        <v-alert
                          v-ripple
                          border="left"
                          colored-border
                          color="#7289DA"
                          icon="mdi-discord"
                          elevation="2">
                          {{ $t('publication.comments.discord') }}
                        </v-alert>
                      </a>
                      <v-form
                        ref="form"
                        v-model="validComment">
                        <v-row>
                          <v-col
                            cols="12"
                            md="6"
                            class="pb-0">
                            <v-text-field
                              v-model="commentForm.username"
                              :label="$t('fields.username')"
                              :rules="usernameRules"
                              color="light"
                              type="text"
                              outlined>
                              <template #message="{ message }">
                                {{ $t(message) }}
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                            class="pb-0">
                            <v-text-field
                              v-model="commentForm.email"
                              :label="$t('fields.email')"
                              :rules="emailRules"
                              color="light"
                              type="email"
                              outlined>
                              <template #message="{ message }">
                                {{ $t(message) }}
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
                              v-model="commentForm.content"
                              :label="$t('fields.content')"
                              :rules="contentRules"
                              color="light"
                              outlined>
                              <template #message="{ message }">
                                {{ $t(message) }}
                              </template>
                            </v-textarea>
                          </v-col>
                          <p class="ml-3 grey--text font-italic">{{ $t('publication.comments.verification') }}</p>
                          <v-col
                            cols="12"
                            class="text-right">
                            <v-btn
                              :loading="sendingComment"
                              :disabled="!validComment"
                              color="darker"
                              text
                              @click="submitComment">
                              {{ $t('publication.comments.send') }}
                              <v-icon right>mdi-send</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                      <v-divider/><br>
                      <h3 class="headline">{{ $t('publication.comments.title') }}</h3>
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
                        {{ $t('publication.comments.any') }}
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
                      <h3 class="headline white--text">{{ $t('publication.links') }}</h3>
                      <p>{{ $t('publication.linksMessage') }}</p>
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
                      <h3 class="headline darker--text">{{ $t('publication.categories') }}</h3>
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

import SocialIcons from '@/components/SocialIcons'
import MemberCard from '@/components/MemberCard'
import CategoriesChips from '@/components/CategoriesChips'

import { categories, types, getCategory, getType } from '@/utils/data'
import { publications as api, comments } from '@/utils/api'
import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'
import 'markdown-it-vue/dist/markdown-it-vue.css'

const defaultCommentForm = {
  username: '',
  email: '',
  content: ''
}

export default {
  name: 'Publication',
  components: { CategoriesChips, MemberCard, SocialIcons, MarkdownItVueLight },
  data() {
    return {
      publication: {},
      loaded: false,

      comments: [],
      commentsPage: 0,
      commentsPages: 0,
      commentsLoading: false,

      commentForm: Object.assign({}, defaultCommentForm),
      usernameRules: [
        v => !!v || 'fields.validation.usernameRequired',
      ],
      emailRules: [
        v => !!v || 'fields.validation.emailRequired',
        v => /.+@.+\..+/.test(v) || 'fields.validation.emailValidation',
      ],
      contentRules: [
        v => !!v || 'fields.validation.contentRequired',
      ],
      validComment: false,
      sendingComment: false,

      categories,
      types
    }
  },
  mounted() {
    api.get({ url: this.$route.params.url }).then(response => {
      this.publication = response.body.data
      this.loaded = true
      this.addReadPublication(this.publication.url)
    }, () => {
      this.SHOW_SNACKBAR({
        error: true,
        message: this.$i18n.t('errors.unknownArticle')
      })
      this.$router.push({ name: 'all-publications' })
    })
    this.fetchComments()
  },
  computed: {
    category() {
      return getCategory(this.publication.category)
    },
    type() {
      return getType(this.publication.type)
    },
    shares() {
      if (this.loaded) {
        return [
          {
            name: 'Twitter', icon: 'mdi-twitter', color: 'blue lighten-2',
            link: `https://twitter.com/intent/tweet?url=https://becauseofprog.fr/article/${this.publication.url}&text=${this.publication.title} (via @BecauseOfProg)`
          },
          {
            name: 'Facebook', icon: 'mdi-facebook', color: 'blue darken-4',
            link: `https://www.facebook.com/sharer/sharer.php?u=https://becauseofprog.fr/article/${this.publication.url}`
          },
          {
            name: 'Diaspora', icon: 'mdi-asterisk', color: 'purple darken-2',
            link: `https://share.diasporafoundation.org/?title=${this.publication.title}&url=https://becauseofprog.fr/article/${this.publication.url}`
          },
          {
            name: 'Mastodon', icon: 'mdi-mastodon', color: 'blue darken-2',
            link: `web+mastodon://share?text=${this.publication.title}%20-%20https://becauseofprog.fr/article/${this.publication.url}`
          },
          {
            name: 'Mail', icon: 'mdi-email-outline', color: 'dark',
            link: `mailto:?subject=${this.publication.title}&body=${this.publication.description} Via BecauseOfProg : https://becauseofprog.fr/article/${this.publication.url}`
          }
        ]
      } else return []
    }
  },
  methods: {
    ...mapMutations(['SHOW_SNACKBAR']),
    ...mapActions(['addReadPublication']),
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
    },
    submitComment() {
      this.sendingComment = true
      comments.save({ post: this.$route.params.url }, this.commentForm).then(() => {
        this.sendingComment = false
        this.SHOW_SNACKBAR({
          error: false,
          message: this.$i18n.t('publication.comments.confirmation')
        })
        this.commentForm = Object.assign({}, defaultCommentForm)
        this.$refs.form.reset()
      }, error => {
        console.log(error)
      })
    }
  },
  metaInfo() {
    if (this.loaded) {
      return {
        title: `${this.publication.title} — BecauseOfProg`,
        meta: [
          {
            property: 'og:title',
            content: `${this.publication.title} — BecauseOfProg`
          },
          {
            property: 'og:description',
            content: this.publication.description
          },
          {
            property: 'og:image',
            content: this.publication.banner
          },
          {
            name: 'author',
            content: `${this.publication.author.displayname} (@${this.publication.author.username})`
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus">
@media screen and (max-width: 500px)
  #title
    font-size: 40px !important
</style>
