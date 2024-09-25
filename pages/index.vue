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
    <v-container class="page-body">
      <last-publications
        show-new/>
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
                  src="/img/new-banner.webp"
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
export default {
  name: 'Home',
  async asyncData ({ $content }) {
    const carousel = [
      {
        title: 'BecauseOfProg',
        subtitle: 'Blog autour de la programmation créé par des passionnés'
      },
      {
        background: '/img/others/blurry-code.webp',
        title: 'Nos projets',
        subtitle: 'Nous mettons à disposition des outils et services open-sources',
        button: {
          label: 'En savoir plus',
          link: '/page/projects'
        }
      }
    ]
    const lastDevBlog = (await $content('devblogs').without(['body']).sortBy('timestamp', 'desc').limit(1).fetch())?.[0]
    if (lastDevBlog) {
      carousel.push({
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

    return {
      carousel
    }
  },
  data () {
    return {
      carousel: []
    }
  },
  head () {
    return {
      title: this.$t('mobileMenu.home')
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
