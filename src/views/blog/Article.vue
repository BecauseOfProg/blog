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
                    <span>Publié par <strong>{{ article.author.displayname }}</strong> le {{ dateToText(article.timestamp) }}</span>
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
              <v-col class="text-center">
                <span class="headline">Partager l'article</span><br>
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
                </v-btn><br><br>
                <span class="headline">Publié dans</span><br>
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
              </v-col>
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
                      <h3 class="headline darker--text">Nos réseaux sociaux</h3>
                      <p class="mb-3">Nous postons régulièrement des nouvelles, des tips et des astuces. Suivez-nous!</p>
                      <social-icons big/>
                    </b-card>
                  </v-col>
                  <v-col
                    cols="12"
                    class="pt-0">
                    <b-card>
                      <h3 class="headline darker--text">À propos</h3>
                      <p>BecauseOfProg, c'est des développeurs rassemblés autour de projets communs tels que le blog.</p>
                      <template #actions>
                        <v-btn
                          to="/page/about"
                          color="darker"
                          text>
                          <v-icon left>mdi-information-outline</v-icon>
                          En savoir plus
                        </v-btn>
                      </template>
                    </b-card>
                  </v-col>
                  <v-col
                    cols="12"
                    class="pt-0">
                    <b-card gradient>
                      <h3 class="headline white--text">Les liens BecauseOfProg</h3>
                      <p>Nous partageons des liens vers des ressources, des blogs ou des articles intéressants, afin que vous puissiez vous aussi les découvrir.</p>
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
                      <h3 class="headline darker--text">Catégories</h3>
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

export default {
  name: 'Article',
  components: { ThemeSwitcher, CategoriesChips, MemberCard, VueMarkdown, SocialIcons },
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
        message: "Erreur : l'article souhaité est inconnu."
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
