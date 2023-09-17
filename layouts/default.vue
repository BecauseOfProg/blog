<template>
  <v-app>
    <v-snackbar
      v-model="snackbar.show"
      right
      timeout="5000"
      top
    >
      {{ $t(snackbar.message) }}
      <template #action="{ attrs }">
        <v-btn
          v-bind="attrs"
          color="darker"
          text
          @click="snackbar.show = false"
        >
          {{ $t('global.close') }}
        </v-btn>
      </template>
    </v-snackbar>
    <div
      class="v-app-bar v-app-bar--fixed top-bar gradient"
      style="height: 8px; width: 100%"
    />
    <v-app-bar
      id="app-navigation"
      app
      dense
      style="margin-top: 8px"
    >
      <router-link
        to="/"
        class="d-flex align-center darker--text"
      >
        <v-img
          alt="BecauseOfProg Logo"
          class="shrink mr-2"
          contain
          src="https://becauseofprog.fr/assets/v2/sites/becauseofprog.fr/assets/logos/bop.min.svg"
          width="40"
        />
        <v-toolbar-title class="font-weight-medium">
          BecauseOfProg
        </v-toolbar-title>
      </router-link>
      <v-spacer />
      <client-only>
        <template v-if="isDesktop">
          <template v-if="showSearchField">
            <v-text-field
              v-model="search"
              :placeholder="$t('topBar.searchField')"
              color="darker"
              hide-details
              single-line
              @keydown.enter="makeSearch"
            />
            <v-btn
              color="darker"
              icon
              @click="showSearchField = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <template v-else>
            <v-btn
              color="darker"
              text
              to="/blog"
            >
              <v-icon left>
                mdi-text-box-multiple-outline
              </v-icon>
              {{ $t('topBar.publications') }}
            </v-btn>
            <v-btn
              color="darker"
              text
              to="/page/projects"
            >
              <v-icon left>
                mdi-package-variant
              </v-icon>
              {{ $t('topBar.projects') }}
            </v-btn>
            <v-tooltip bottom>
              <template #activator="{ on }">
                <v-btn
                  color="darker"
                  icon
                  v-on="on"
                  @click="showSearchField = true"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>
              <span>{{ $t('topBar.search') }}</span>
            </v-tooltip>
          </template>
          <theme-switcher />
        </template>
        <theme-switcher v-else />
      </client-only>
    </v-app-bar>

    <v-main class="v-main-custom-padding">
      <Nuxt :key="$route.path" />
    </v-main>

    <client-only v-if="isMobile">
      <v-bottom-navigation
        v-model="bottomNavigation"
        app
        background-color="#f5f5f5"
        color="darker"
        fixed
      >
        <v-btn
          v-for="item in mobileMenu"
          :key="item.name"
          exact
          :to="{ name: item.route }"
        >
          <span>{{ $t(item.name) }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </client-only>

    <v-footer
      class="gradient v-footer-margin"
    >
      <v-row>
        <v-col cols="6">
          <a
            class="white--text shadow"
            href="https://github.com/BecauseOfProg/blog/blob/master/LICENSE"
            target="_blank"
          >
            &copy; {{ new Date().getFullYear() }}, BecauseOfProg
          </a>
        </v-col>
        <v-col
          class="text-right white--text"
          cols="6"
        >
          <router-link
            class="white--text shadow"
            to="/devblog"
          >
            {{ $t('global.devblog') }}
          </router-link>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

export default {
  name: 'App',
  components: { ThemeSwitcher },
  middleware: 'vuetify-theme',
  data () {
    return {
      bottomNavigation: '',

      showSearchField: false,
      search: ''
    }
  },
  head () {
    return {
      title: 'BecauseOfProg',
      meta: [
        {
          property: 'og:title',
          content: 'BecauseOfProg'
        },
        {
          property: 'og:description',
          content: this.$t('global.shortDescription')
        },
        {
          property: 'og:url',
          content: `https://becauseofprog.fr${this.$router.currentRoute.fullPath}`
        }
      ]
    }
  },
  computed: {
    ...mapState(['snackbar']),
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    },
    isDesktop () {
      return !this.isMobile
    },
    mobileMenu: function () {
      return [
        {
          name: 'mobileMenu.home',
          icon: 'mdi-home-outline',
          route: 'index'
        },
        {
          name: 'mobileMenu.publications',
          icon: 'mdi-text-box-multiple-outline',
          route: 'blog'
        },
        {
          name: 'mobileMenu.search',
          icon: 'mdi-magnify',
          route: 'page-search'
        },
        {
          name: 'mobileMenu.projects',
          icon: 'mdi-package-variant',
          route: 'page-projects'
        }
      ]
    }
  },
  mounted () {
    this.LOAD_READ_PUBLICATIONS()
  },
  methods: {
    ...mapMutations('read-publications', ['LOAD_READ_PUBLICATIONS']),
    makeSearch () {
      this.showSearchField = false
      this.$router.push({
        name: 'blog',
        query: {
          search: this.search
        }
      })
    }
  }
}
</script>

<style>
@media only screen and (max-width: 540px) {
  .v-footer-margin {
    margin-bottom: 65px !important;
  }
}

@media only screen and (min-width: 960px) {
  .v-main-custom-padding {
    padding-top: 56px !important;
  }
}
</style>
