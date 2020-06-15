<template>
  <main>
    <v-app-bar
      v-if="$vuetify.breakpoint.mdAndUp"
      style="margin-top: 56px"
      class="translucent"
      app>
      <v-btn
        v-for="category in categories"
        :key="category.id"
        :to="{ name: 'category', params: { category: category.id }}"
        text>
        <template v-if="$vuetify.breakpoint.lgAndUp">
          <v-icon left>{{ category.icon }}</v-icon>
        </template>
        {{ category.name }}
      </v-btn>
    </v-app-bar>
    <v-carousel
      height="400px"
      interval="4000"
      hide-delimiter-background
      cycle>
      <v-carousel-item
        v-for="item in carousel"
        :key="item.title"
        :src="item.background == null ? '' : item.background"
        class="gradient">
        <v-row
          style="flex-direction: column"
          class="fill-height white--text"
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
    <v-container>
      <v-row>
        <template v-if="articles.length">
          <v-col cols="12">
            <b-card :to="{ name: 'article', params: { url: articles[0].url }}">
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
                    color="white--text"
                    class="gradient">
                    <v-icon left>mdi-clock-outline</v-icon>
                    Nouveau!
                  </v-btn>
                  <h1 class="display-3 black--text lecture-title">{{ articles[0].title }}</h1>
                  <p class="lecture-text">{{ articles[0].description }}</p>
                </v-col>
              </v-row>
            </b-card>
          </v-col>
          <v-col
            v-for="i in 2"
            :key="`article-${i}`"
            cols="12"
            md="6">
            <b-article-card :article="articles[i]"/>
          </v-col>
        </template>
        <template v-else>
          <v-col cols="12">
            <v-skeleton-loader
              style="width: 100%"
              type="image, card-heading, actions"/>
          </v-col>
          <v-col
            cols="12"
            md="6">
            <v-skeleton-loader
              style="width: 100%"
              type="image, card-heading, actions"/>
          </v-col>
          <v-col
            cols="12"
            md="6">
            <v-skeleton-loader
              style="width: 100%"
              type="image, card-heading, actions"/>
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

export default {
  name: 'Home',
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
          background: 'https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/logos/v2-site.png?w=1920',
          title: 'Sur notre devblog...',
          subtitle: 'La V2 du site !',
          button: {
            label: 'Voir!',
            link: '/article/v2-site-bop'
          }
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
  methods: {
    imageProxy
  }
}
</script>
