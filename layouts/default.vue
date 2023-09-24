<template>
  <v-app>
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
          src="/img/bop.min.svg"
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
              autofocus
              single-line
              @keydown.enter="makeSearch"
            />
            <v-btn
              alt="Close search field"
              color="darker"
              icon
              @click="showSearchField = false"
            >
              <v-icon>{{ mdiClose }}</v-icon>
            </v-btn>
          </template>
          <template v-else>
            <v-btn
              alt="Blog"
              color="darker"
              text
              to="/blog"
            >
              <v-icon left>
                {{ mdiTextBoxMultipleOutline }}
              </v-icon>
              {{ $t('topBar.publications') }}
            </v-btn>
            <v-btn
              alt="Projects"
              color="darker"
              text
              to="/page/projects"
            >
              <v-icon left>
                {{ mdiPackageVariant }}
              </v-icon>
              {{ $t('topBar.projects') }}
            </v-btn>
            <v-tooltip bottom>
              <template #activator="{ on }">
                <v-btn
                  alt="Search"
                  color="darker"
                  icon
                  v-on="on"
                  @click="showSearchField = true"
                >
                  <v-icon>{{ mdiMagnify }}</v-icon>
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
        :value="bottomNavigation"
        app
        color="darker"
        fixed
      >
        <v-btn
          v-for="item in mobileMenu"
          :key="`mobileMenu_${item.name}`"
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
import { mdiClose, mdiPackageVariant, mdiHomeOutline, mdiMagnify, mdiTextBoxMultipleOutline } from '@mdi/js'
import { mapMutations, mapState } from 'vuex'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

export default {
  name: 'App',
  components: { ThemeSwitcher },
  middleware: 'vuetify-theme',
  data () {
    return {
      showSearchField: false,
      search: '',

      mdiClose,
      mdiTextBoxMultipleOutline,
      mdiPackageVariant,
      mdiMagnify
    }
  },
  head () {
    return {
      title: 'BecauseOfProg',
      meta: [
        {
          property: 'og:title',
          content: 'BecauseOfProg',
          hid: 'og:title'
        },
        {
          property: 'og:description',
          content: this.$t('global.shortDescription'),
          hid: 'og:description'
        },
        {
          property: 'og:url',
          content: `https://becauseofprog.fr${this.$router.currentRoute.fullPath}`,
          hid: 'og:url'
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
    mobileMenu () {
      return [
        {
          name: 'mobileMenu.home',
          icon: mdiHomeOutline,
          route: 'index'
        },
        {
          name: 'mobileMenu.publications',
          icon: mdiTextBoxMultipleOutline,
          route: 'blog',
          subRoutes: ['article-id']
        },
        {
          name: 'mobileMenu.search',
          icon: mdiMagnify,
          route: 'page-search'
        },
        {
          name: 'mobileMenu.projects',
          icon: mdiPackageVariant,
          route: 'page-projects',
          subRoutes: ['devblog', 'devblog-id']
        }
      ]
    },
    bottomNavigation () {
      return this.mobileMenu.findIndex(item => this.$route.name === item.route || (item.subRoutes && item.subRoutes.includes(this.$route.name)))
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
