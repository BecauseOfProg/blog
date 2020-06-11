<template>
  <main>
    <template v-if="loaded">
      <v-parallax
        :src="article.banner"
        height="500"
        dark>
        <v-row
          align="center"
          justify="center"
          class="darker-bg">
          <v-col
            class="text-center"
            cols="12">
            <span class="display-3 white--text">{{ article.title }}</span>
          </v-col>
        </v-row>
      </v-parallax>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            lg="8"
            offset-lg="2"
            class="upper-content">
            <b-card class="bordered">
              <span style="font-size: 22px">« {{ article.description }} »</span>
              <template #actions>
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
                <v-spacer/>
                <v-icon left>mdi-clock-outline</v-icon>
                <span>Publié par <strong>{{ article.author.displayname }}</strong> le {{ dateToText(article.timestamp) }}</span>
              </template>
            </b-card>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            offset-lg="3">
            <b-card
              id="article-content"
              class="bordered">
              <vue-markdown class="markdown-body">{{ article.content }}</vue-markdown>
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
                </v-btn><br>
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
                    <b-card>
                      <h1>{{ article.author.displayname }}</h1>
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
                      <h3 class="headline darker--text">Nos réseaux sociaux</h3>
                      <p>Nous postons régulièrement des nouvelles, des tips et des astuces. Suivez-nous!</p>
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
                      <v-col>
                        <v-chip
                          v-for="category in categories"
                          :key="category.id"
                          :to="`/category/${category.id}`"
                          class="mr-1 mb-1">
                          <v-icon left>{{ category.icon }}</v-icon>
                          {{ category.name }}
                        </v-chip>
                        <v-chip
                          v-for="type in types"
                          :key="type.id"
                          :to="`/type/${type.id}`"
                          class="mr-1 mb-1">
                          <v-icon left>{{ type.icon }}</v-icon>
                          {{ type.name }}
                        </v-chip>
                      </v-col>
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
import SocialIcons from '@/views/parts/SocialIcons'
import { categories, types, getCategory, getType } from '@/utils/data'
import { blogPosts } from '@/utils/api'

export default {
  name: 'Article',
  components: { VueMarkdown, SocialIcons },
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
            name: 'Diaspora', icon: 'mdi-asterisk', color: 'grey darken-4',
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
  }
}
</script>
