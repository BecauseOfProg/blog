<template>
  <main>
    <client-only>
      <v-fade-transition>
        <lazy-categories-bar />
      </v-fade-transition>
    </client-only>
    <v-carousel
      :show-arrows="false"
      cycle
      height="400px"
      hide-delimiter-background
      interval="4000"
    >
      <v-carousel-item
        v-for="(item, i) in carousel"
        :key="`carousel1_${i}`"
        :src="item.background === null ? '' : item.background"
        class="gradient"
      >
        <v-row
          :class="item.classes"
          align="center"
          class="fill-height white--text safe ma-0 flex-column"
          justify="center"
        >
          <span class="display-2 mb-3">{{ item.title }}</span>
          <span class="headline mb-3 text-center ml-1 mr-2">{{ item.subtitle }}</span>
          <v-btn
            v-if="item.button != null"
            :to="item.button.link"
            class="gradient normal-weight"
            color="white--text"
          >
            {{ item.button.label }}
          </v-btn>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container v-if="lastPublications" class="page-body">
      <v-row>
        <v-col
          cols="12"
          md="10"
          offset-md="1"
        >
          <b-card
            v-if="lastPublications.length"
            :to="{ name: 'article-id', params: { id: lastPublications[0].id }}"
            fluid
          >
            <v-row class="ma-0">
              <v-col
                class="d-flex pa-0"
                cols="12"
                md="6"
              >
                <v-img
                  id="first-publication"
                  :src="lastPublications[0].banner"
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-btn
                  class="mb-3"
                  color="darker"
                  text
                >
                  <v-icon left>
                    mdi-clock-outline
                  </v-icon>
                  {{ $t('home.new') }}
                </v-btn>
                <h2 class="text-h4 text--text lecture-title mb-3">
                  {{ lastPublications[0].title }}
                </h2>
                <p class="lecture-text">
                  {{ lastPublications[0].description }}
                </p>
              </v-col>
            </v-row>
          </b-card>
          <v-skeleton-loader
            v-else
            style="width: 100%"
            type="image, card-heading, actions"
          />
        </v-col>
        <v-col
          cols="12"
          md="10"
          offset-md="1"
        >
          <v-row>
            <v-col
              v-for="lastPublication in lastPublications.slice(1, 3)"
              :key="`publication-${lastPublication.id}`"
              cols="12"
              md="6"
            >
              <b-publication-card :publication="lastPublication" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <gradient-rule />
    <v-container class="page-body">
      <v-col
        cols="12"
        md="10"
        offset-md="1"
      >
        <v-row>
          <v-col>
            <b-card>
              <h1>{{ $t('global.socialNetworks') }}</h1>
              <p>{{ $t('global.socialNetworksMessage') }}</p>
              <br>
              <social-icons big />
            </b-card>
          </v-col>
          <v-col>
            <b-card>
              <template #image>
                <v-img
                  height="200px"
                  :src="'https://becauseofprog.fr/assets/v2/sites/becauseofprog.fr/assets/new-banner.png'"
                >
                  <h1 class="white--text shadow">
                    {{ $t('pages.aboutUs') }}
                  </h1>
                </v-img>
              </template>
              <p>{{ $t('pages.message') }}</p>
            </b-card>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </main>
</template>

<script>
import { categories, types } from '@/utils/data'

export default {
  name: 'Home',
  data () {
    return {
      carousel: [
        {
          title: 'BecauseOfProg',
          subtitle: 'Blog autour de la programmation créé par des passionnés'
        },
        {
          background: 'https://p.cdn.becauseofprog.fr/1920x/https://becauseofprog.fr/assets/syst-images/dev.jpg',
          title: 'Nos projets',
          subtitle: 'Nous mettons à disposition des outils et services open-sources',
          button: {
            label: 'En savoir plus',
            link: '/page/projects'
          }
        }
      ],
      lastPublications: null,
      categories,
      types
    }
  },
  async fetch () {
    // Get 3 last publications, sorted by timestamp
    const lastPublications = await this.$content('blog-posts').without(['body']).sortBy('timestamp', 'desc').limit(3).fetch()
    const authorIds = [...new Set(lastPublications.map(v => v.authorId))]
    const authors = await this.$content('members').where({ username: { $in: authorIds } }).fetch()
    lastPublications.forEach((v) => {
      v.id = v.slug
      v.author = authors.find(a => a.slug === v.authorId) || {}
    })
    this.lastPublications = lastPublications

    const lastDevBlog = (await this.$content('devblogs').without(['body']).sortBy('timestamp', 'desc').limit(1).fetch())?.[0]
    if (lastDevBlog) {
      this.carousel.push({
        background: lastDevBlog.banner,
        title: 'Sur notre devblog...',
        subtitle: `${lastDevBlog.title} (${lastDevBlog.category})`,
        button: {
          label: 'Voir!',
          link: `/devblog/${lastDevBlog.slug}`
        },
        classes: ['darker-bg']
      })
    }
  }
}
</script>

<style>
#first-publication {
  border-top-left-radius: 20px;
}
@media screen and (max-width: 960px) {
  #first-publication {
    border-top-right-radius: 20px;
  }
}
@media screen and (min-width: 961px) {
  #first-publication {
    border-bottom-left-radius: 20px;
  }
}
</style>
