<template>
  <main>
    <categories-bar/>
    <v-carousel
      :show-arrows="false"
      cycle
      height="400px"
      hide-delimiter-background
      interval="4000">
      <v-carousel-item
        v-for="(item, i) in carousel"
        :key="`carousel1_${i}`"
        :src="item.background === null ? '' : item.background"
        class="gradient">
        <v-row
          :class="['fill-height', 'white--text', 'safe', ...item.classes]"
          align="center"
          justify="center"
          style="flex-direction: column">
          <span class="display-2 mb-3">{{ item.title }}</span>
          <span class="headline mb-3 text-center ml-1 mr-2">{{ item.subtitle }}</span>
          <v-btn
            v-if="item.button != null"
            :to="item.button.link"
            class="gradient normal-weight"
            color="white--text">
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
                    class="mb-3"
                    color="darker"
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
    <v-carousel
      :show-arrows="false"
      cycle
      height="400px"
      hide-delimiter-background
      interval="4000">
      <v-carousel-item
        v-for="(item, i) in carousel2"
        :key="`carousel2_${i}`"
        :src="item.background === null ? '' : item.background"
        class="gradient">
        <v-row
          :class="['fill-height', 'white--text', 'safe', ...item.classes]"
          align="center"
          justify="center"
          style="flex-direction: column">
          <span class="display-2 mb-3">{{ item.title }}</span>
          <span class="headline mb-3 text-center ml-1 mr-2">{{ item.subtitle }}</span>
          <v-btn
            v-if="item.button != null"
            :to="item.button.link"
            class="gradient normal-weight"
            color="white--text">
            {{ item.button.label }}
          </v-btn>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container class="page-body">
      <v-col
        cols="12"
        md="10"
        offset-md="1">
        <v-row
          v-for="(a, b) in 3"
          :key="`news_nb_${b}`">
          <v-col
            v-for="(c, d) in 3"
            :key="`news-${d}`"
            cols="12"
            md="4">
            <b-card>
              <h3 class="headline darker--text">Exemple</h3>
              <p style="height: 100px">Lorem ipsum</p>
              <template #actions>
                <v-btn
                  to="/page/about"
                  color="darker"
                  text>
                  Lire
                </v-btn>
              </template>
            </b-card>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <hr
      class="mt-2 mb-8"
      style="height: 15px; border: none; background: linear-gradient(90deg,#ff514c 0%,#ff9779 100%)">
    <v-container class="page-body">
      <v-col
        cols="12"
        md="10"
        offset-md="1">
        <v-row>
          <v-col>
            <b-card>
              <h1>{{ $t('global.socialNetworks') }}</h1>
              <p>{{ $t('global.socialNetworksMessage') }}</p>
              <br>
              <social-icons/>
            </b-card>
          </v-col>
          <v-col>
            <b-card>
              <template #image>
                <v-img
                  src="https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/new-banner.png?w=724.167"
                  height="200px">
                  <h1 class="white--text shadow">{{ $t('pages.aboutUs') }}</h1>
                </v-img>
              </template>
              <p>{{ $t('pages.message') }}</p>
              <template #actions>
                <v-btn text>{{ $t('global.more') }}</v-btn>
              </template>
            </b-card>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </main>
</template>

<script>
import {imageProxy} from '@/utils/helpers'
import {blogPosts} from '@/utils/api'
import {categories, types} from '@/utils/data'
import CategoriesBar from '@/views/parts/CategoriesBar'
import SocialIcons from "@/views/parts/SocialIcons";

export default {
  name: 'Home',
  components: {SocialIcons, CategoriesBar},
  data() {
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
          background: '/img/category/android.png',
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
      carousel2: [
        {
          background: 'https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/background-projects-5.jpg?w=1920',
          title: 'Nos projets',
          subtitle: 'BecauseOfProg, c\'est aussi de nombreux projets',
          button: {
            label: 'En savoir plus',
            link: '/page/projects'
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
  methods: {imageProxy}
}
</script>
