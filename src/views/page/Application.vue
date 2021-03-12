<template>
  <main>
    <b-top-banner
      image
      subtitle="application.subtitle"
      tall
      title="application.title">
      <application-download/>
    </b-top-banner>
    <div
      v-for="(part, i) in imagedParts"
      :key="part.name"
      :class="{ sheet: i % 2 }"
      class="page-body">
      <v-container>
        <v-row>
          <v-col
            :offset-md="1 - i % 2"
            :order="i % 2 === 0 ? 1 : ($vuetify.breakpoint.mdAndUp ? 12 : 1)"
            cols="12"
            md="3">
            <v-img
              :alt="$t(`application.${part.name}.title`)"
              :src="part.image"/>
          </v-col>
          <v-col
            :offset-md="i % 2"
            :order="i % 2 === 0 ? 12 : ($vuetify.breakpoint.mdAndUp ? 1 : 12)"
            cols="12"
            md="7">
            <v-row
              align="center"
              style="height: 100%">
              <v-col cols="12">
                <p class="text-h4 mb-5">{{ $t(`application.${part.name}.title`) }}</p>
                <p
                  class="text-justify"
                  v-html="$t(`application.${part.name}.description`)"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="page-body sheet">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="8"
            offset-md="2">
            <p class="text-h3 text-center">{{ $t('application.privacy.title') }}</p>
            <p
              class="text-justify"
              v-html="$t('application.privacy.description')"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="page-body gradient">
      <div class="centered-container py-16 text-center white--text">
        <p class="text-h2">{{ $t('application.download.title') }}</p>
        <p
          class="text-h4"
          v-html="$t('application.download.description')"/>
        <application-download/>
      </div>
    </div>
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          md="8"
          offset-md="2">
          <p class="text-h3 text-center">{{ $t('application.pwa.title') }}</p>
          <p
            class="text-justify"
            v-html="$t('application.pwa.description')"/>
          <v-list>
            <template v-for="(browser, i) in browsers">
              <v-list-item :key="browser.name + 'item'">
                <v-list-item-icon>
                  <v-icon color="light">{{ browser.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="mb-2">{{
                    $t(`application.pwa.browsers.${browser.name}.title`)
                  }}
                  </v-list-item-title>
                  <span v-html="$t(`application.pwa.browsers.${browser.name}.content`)"/>
                </v-list-item-content>
              </v-list-item>
              <v-divider
                v-if="i + 1 !== browsers.length"
                :key="browser.name + 'divider'"/>
            </template>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import ApplicationDownload from '@/components/ApplicationDownload'

export default {
  name: 'Application',
  components: {ApplicationDownload},
  data() {
    return {
      imagedParts: [
        {
          name: 'list',
          image: 'https://cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/app/app_home_light.png'
        },
        {
          name: 'publication',
          image: 'https://cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/app/app_article_light.png'
        },
        {
          name: 'theme',
          image: 'https://cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/app/app_home_dark.png'
        }
      ],
      browsers: [
        {
          name: 'chrome',
          icon: 'mdi-google-chrome'
        },
        {
          name: 'android',
          icon: 'mdi-android'
        },
        {
          name: 'firefox',
          icon: 'mdi-firefox'
        },
        {
          name: 'opera',
          icon: 'mdi-opera'
        },
        {
          name: 'opera_mini',
          icon: 'mdi-opera'
        },
        {
          name: 'safari',
          icon: 'mdi-apple-safari'
        },
      ]
    }
  },
  metaInfo() {
    return {
      title: this.$t('application.title'),
      meta: [
        {
          property: 'og:title',
          content: this.$t('application.title')
        },
        {
          property: 'og:description',
          content: this.$t('application.subtitle')
        }
      ]
    }
  }
}
</script>
