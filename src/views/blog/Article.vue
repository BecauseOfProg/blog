<template>
  <main>
    <v-app-bar
      style="margin-top: 8px"
      dense
      app>
      <v-btn
        color="darker"
        to="/blog"
        icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <a href="/">
        <v-img
          alt="BecauseOfProg Logo"
          class="shrink mr-2"
          src="https://cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/logos/bop.min.svg"
          width="40"
          contain/>
      </a>
      <v-spacer/>
      <lang-switcher/>
      <theme-switcher/>
    </v-app-bar>
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
              class="display-3 white--text">
              {{ article.title }}
            </span>
          </v-col>
          <v-col
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
                    <span>{{ $t('article.publishedBy') }} <strong>{{ article.author.displayname }}</strong> {{ $t('article.publishedBy2') }} {{ dateToText(article.timestamp) }}</span>
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
              <vue-markdown class="markdown-body mb-3">{{ article.content }}</vue-markdown>
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
                  {{ type.name }}
                </v-chip>
                <v-chip>
                  <v-icon left>{{ category.icon }}</v-icon>
                  {{ category.name }}
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
                          Twitter
                        </v-btn>
                        <v-btn
                          text
                          color="white"
                          href="#!">
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
    <template v-else>
      <b-loading-screen/>
    </template>
  </main>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapMutations } from 'vuex'
import SocialIcons from '@/views/parts/SocialIcons'
import MemberCard from '@/views/parts/MemberCard'
import CategoriesChips from '@/views/parts/CategoriesChips'
import { categories, types, getCategory, getType } from '@/utils/data'
import { blogPosts } from '@/utils/api'
import ThemeSwitcher from '../parts/ThemeSwitcher'
import LangSwitcher from '../parts/LangSwitcher'

export default {
  name: 'Article',
  components: { ThemeSwitcher, LangSwitcher, CategoriesChips, MemberCard, VueMarkdown, SocialIcons },
  data() {
    return {
      article: {},
      loaded: false,

      categories,
      types
    }
  },
  mounted() {
    blogPosts.get({ id: this.$route.params.url }).then(response => {
      this.article = response.body.data
      this.loaded = true
    }, error => {
      console.log(error)
      this.SHOW_SNACKBAR({
        error: true,
        message: this.$i18n.t('errors.unknownArticle')
      })
      this.$router.push({ name: 'all-articles' })
    })
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
            link: `https://twitter.com/intent/tweet?url=https://becauseofprog.fr/article/${this.article.id}&text=${this.article.title} (via @BecauseOfProg)`
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
    ...mapMutations(['SHOW_SNACKBAR'])
  }
}
</script>

<style lang="stylus">
@media screen and (max-width: 500px)
  #title
    font-size: 40px !important
</style>
