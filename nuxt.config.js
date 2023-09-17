import path from 'path'
import colors from 'vuetify/es5/util/colors'

const theme = {
  light: '#ff9779',
  dark: '#ff514c',
  darker: '#e33733',
  error: colors.red.darken4,
  info: colors.blue.base,
  success: colors.green.base,
  warning: colors.amber.base
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - BecauseOfProg',
    title: 'BecauseOfProg',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog de programmation et actualités technologiques créé par des passionnés' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/colors',
    '~/assets/elements',
    '~/assets/fonts',
    '~/assets/safe_areas',
    '~/assets/theme'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/date'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // https://pwa.nuxtjs.org/setup
    '@nuxtjs/pwa'
  ],

  pwa: {
    meta: {
      name: 'BecauseOfProg',
      description: 'Blog de programmation et actualités technologiques créé par des passionnés',
      lang: 'fr'
    },
    manifest: {
      name: 'BecauseOfProg',
      short_name: 'BecauseOfProg',
      description: 'Blog de programmation et actualités technologiques créé par des passionnés'
    }
  },

  optimizedImages: {
    optimizeImages: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/http',
    'vue-plausible',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://becauseofprog.fr'
  },

  plausible: {
    apiHost: 'https://plausible.noewen.com'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          ...theme,
          background: '#fafafa',
          sheets: '#fff',
          text: '#000',
          anchor: theme.darker
        },
        dark: {
          ...theme,
          background: '#000',
          sheets: '#2E2E2E',
          text: '#fff',
          anchor: theme.light
        }
      },
      options: {
        customProperties: true
      }
    }
  },

  i18n: {
    locales: [{
      code: 'fr',
      name: 'Français',
      flag: 'flags/fr.svg',
      file: 'fr.json',
      iso: 'fr'
    }],
    defaultLocale: 'fr',
    langDir: path.join(process.cwd(), '/i18n/'),
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      alwaysRedirect: true
    },
    vueI18nLoader: true,
    vueI18n: {
      silentFallbackWarn: true
    },
    strategy: 'no_prefix'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
