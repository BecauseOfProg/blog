<template>
  <main>
    <categories-bar/>
    <v-carousel
      height="400px"
      interval="4000"
      hide-delimiter-background
      :show-arrows="false"
      cycle>
      <v-carousel-item
        v-for="item in carousel"
        :key="item.title"
        :src="item.background === null ? '' : item.background"
        class="gradient">
        <v-row
          style="flex-direction: column"
          :class="['fill-height', 'white--text', 'safe', ...item.classes]"
          align="center"
          justify="center">
          <span class="display-2">{{ item.title }}</span>
          <span class="headline">{{ item.subtitle }}</span>
          <v-btn
            v-if="item.button != null"
            :to="item.button.link"
            color="white--text"
            class="gradient normal-weight">
            {{ item.button.label }}
          </v-btn>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container class="page-body">
      <v-row>
        <template v-if="articles.length">
          <v-col
            cols="12"
            md="8"
            offset-md="2">
            <b-card
              v-if="articles.length"
              :to="{ name: 'article', params: { url: articles[0].url }}">
              <v-row>
                <v-col
                  cols="12"
                  md="6">
                  <v-img :src="imageProxy(articles[0].banner, 617.15, 0)"/>
                </v-col>
                <v-col
                  cols="12"
                  md="6">
                  <v-btn
                    color="darker"
                    class="mb-3"
                    text>
                    <v-icon left>mdi-clock-outline</v-icon>
                    {{ $t('home.new') }}
                  </v-btn>
                  <h2 class="text-h4 text--text lecture-title mb-3">{{ articles[0].title }}</h2>
                  <p class="lecture-text">{{ articles[0].description }}</p>
                </v-col>
              </v-row>
            </b-card>
            <v-skeleton-loader
              v-else
              style="width: 100%"
              type="image, card-heading, actions"/>
          </v-col>
          <v-col
            cols="12"
            md="10"
            offset-md="1">
            <v-row>
              <v-col
                v-for="i in 2"
                :key="`article-${i}`"
                cols="12"
                md="6">
                <b-article-card
                  v-if="articles.length"
                  :article="articles[i]"/>
                <v-skeleton-loader
                  v-else
                  style="width: 100%"
                  type="image, card-heading, actions"/>
              </v-col>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { imageProxy } from '@/utils/helpers'
import { blogPosts } from '@/utils/api'
import { categories, types } from '@/utils/data'
import CategoriesBar from '@/views/parts/CategoriesBar'

export default {
  name: 'Home',
  components: { CategoriesBar },
  data () {
    return {
      carousel: [
        {
          background: null,
          title: 'BecauseOfProg',
          subtitle: 'Blog autour de la programmation créé par des passionnés',
          button: null
        },
        {
          background: 'https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/syst-images/dev.jpg?w=1920',
          title: 'Nos projets',
          subtitle: 'Nous mettons à disposition outils et services gratuits',
          button: {
            label: 'En savoir plus',
            link: '/page/projects'
          }
        },
        {
          background: 'https://cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/android_wallpaper.png',
          title: 'Notre application',
          subtitle: "La BecauseOfProg arrive sur vos écrans d'accueil : téléchargez notre application Android!",
          button: {
            label: 'Télécharger!',
            link: '/page/app'
          }
        },
        {
          background: 'https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/logos/v2-site.png?w=1920',
          title: 'Sur notre devblog...',
          subtitle: 'La V2 du site !',
          button: {
            label: 'Voir!',
            link: '/article/v2-site-bop'
          },
          classes: ['darker-bg']
        },
      ],
      articles: [],
      categories,
      types
    }
  },
  mounted() {
    blogPosts.get().then(data => {
      this.articles = data.body.data
    })
  },
  methods: { imageProxy }
}
</script>
