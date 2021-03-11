<template>
  <main>
    <categories-bar/>
    <v-carousel
      :show-arrows="false"
      interval="4000"
      height="400px"
      hide-delimiter-background
      cycle>
      <v-carousel-item
        v-for="(item, i) in carousel"
        :key="`carousel1_${i}`"
        :src="item.background === null ? '' : item.background"
        class="gradient">
        <v-row
          class="fill-height white--text safe ma-0 flex-column"
          :class="item.classes"
          align="center"
          justify="center">
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
        <v-col
          cols="12"
          md="10"
          offset-md="1">
          <b-card
            v-if="lastPublications.length"
            :to="{ name: 'publication', params: { url: lastPublications[0].url }}"
            fluid>
            <v-row class="ma-0">
              <v-col
                cols="12"
                md="6"
                class="d-flex pa-0">
                <v-img
                  id="first-publication"
                  :src="imageProxy(lastPublications[0].banner, 617.15, 0)"/>
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
                <h2 class="text-h4 text--text lecture-title mb-3">{{ lastPublications[0].title }}</h2>
                <p class="lecture-text">{{ lastPublications[0].description }}</p>
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
              :key="`publication-${i}`"
              cols="12"
              md="6">
              <b-publication-card
                v-if="lastPublications.length"
                :publication="lastPublications[i]"/>
              <v-skeleton-loader
                v-else
                style="width: 100%"
                type="image, card-heading, actions"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <gradient-rule/>
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
              <social-icons big/>
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
import CategoriesBar from '@/components/CategoriesBar'
import GradientRule from '@/components/GradientRule'
import SocialIcons from '@/components/SocialIcons'

import { imageProxy } from '@/utils/helpers'
import { publications, devblogs } from '@/utils/api'
import { categories, types } from '@/utils/data'

export default {
  name: 'Home',
  components: { CategoriesBar, GradientRule, SocialIcons },
  data() {
    return {
      carousel: [
        {
          title: 'BecauseOfProg',
          subtitle: 'Blog autour de la programmation créé par des passionnés',
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
          background: 'https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/syst-images/dev.jpg?w=1920',
          title: 'Nos projets',
          subtitle: 'Nous mettons à disposition des outils et services open-sources',
          button: {
            label: 'En savoir plus',
            link: '/page/projects'
          }
        },
      ],
      lastPublications: [],
      categories,
      types
    }
  },
  mounted() {
    publications.get().then(data => {
      this.lastPublications = data.body.data
    })
    devblogs.get({url: 'last'}).then(response => {
      let devblog = response.body.data
      this.carousel.push({
        background: devblog.banner,
        title: 'Sur notre devblog...',
        subtitle: `${devblog.title} (${devblog.category})`,
        button: {
          label: 'Voir!',
          link: `/devblog/${devblog.url}`
        },
        classes: ['darker-bg']
      })
    })
  },
  methods: { imageProxy }
}
</script>

<style lang="stylus">
#first-publication
  @media screen and (max-width: 960px)
    border-top-right-radius: 20px
  @media screen and (min-width: 961px)
    border-bottom-left-radius: 20px

  border-top-left-radius: 20px

</style>
