<template>
  <v-app>
    <v-snackbar
      v-model="snackbar.show"
      right
      timeout="5000"
      top>
      {{ $t(snackbar.message) }}
      <template #action="{ attrs }">
        <v-btn
          v-bind="attrs"
          color="darker"
          text
          @click="snackbar.show = false">
          {{ $t('global.close') }}
        </v-btn>
      </template>
    </v-snackbar>
    <div
      class="v-app-bar v-app-bar--fixed top-bar gradient"
      style="height: 8px; width: 100%"/>
    <v-app-bar
      id="app-navigation"
      app
      dense
      style="margin-top: 8px">
      <v-spacer v-if="isMobile"/>
      <router-link
        :to="{ name: $route.name === 'publication' && isMobile ? 'all-publications' : 'home' }"
        class="d-flex align-center darker--text">
        <v-img
          alt="BecauseOfProg Logo"
          class="shrink mr-2"
          contain
          src="https://becauseofprog.fr/assets/v2/sites/becauseofprog.fr/assets/logos/bop.min.svg"
          width="40"/>
        <v-toolbar-title class="font-weight-medium">
          BecauseOfProg
        </v-toolbar-title>
      </router-link>
      <v-spacer/>
      <template v-if="isDesktop">
        <template v-if="showSearchField">
          <v-text-field
            v-model="search"
            :placeholder="$t('topBar.searchField')"
            color="darker"
            hide-details
            single-line
            @keydown.enter="makeSearch"/>
          <v-btn
            color="darker"
            icon
            @click="showSearchField = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
        <template v-else>
          <v-btn
            color="darker"
            text
            to="/blog">
            <v-icon left>mdi-text-box-multiple-outline</v-icon>
            {{ $t('topBar.publications') }}
          </v-btn>
          <v-btn
            color="darker"
            text
            to="/page/projects">
            <v-icon left>mdi-package-variant</v-icon>
            {{ $t('topBar.projects') }}
          </v-btn>
          <v-btn
            color="darker"
            text
            to="/page/app">
            <v-icon left>mdi-cellphone-iphone</v-icon>
            {{ $t('topBar.application') }}
          </v-btn>
          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-btn
                color="darker"
                icon
                v-on="on"
                @click="showSearchField = true">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </template>
            <span>{{ $t('topBar.search') }}</span>
          </v-tooltip>
        </template>
        <theme-switcher/>
        <!--<lang-switcher/>-->
        <user-menu/>
      </template>
      <theme-switcher v-else/>
    </v-app-bar>

    <v-main :style="isDesktop ? 'padding-top: 56px' : ''">
      <router-view :key="$route.fullPath"/>
    </v-main>

    <v-bottom-navigation
      v-if="isMobile && $route.name !== 'publication'"
      v-model="bottomNavigation"
      app
      color="darker"
      fixed>
      <v-btn
        v-for="item in mobileMenu"
        :key="item.name"
        :to="{ name: item.route }">
        <span>{{ $t(item.name) }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-footer
      :style="isMobile ? 'margin-bottom: 65px' : ''"
      class="gradient">
      <v-row>
        <v-col cols="6">
          <a
            class="white--text shadow"
            href="https://github.com/BecauseOfProg/blog/blob/master/LICENSE"
            target="_blank">
            &copy; {{ new Date().getFullYear() }}, BecauseOfProg
          </a>
        </v-col>
        <v-col
          class="text-right white--text"
          cols="6">
          <router-link
            class="white--text shadow"
            to="/devblog">
            {{ $t('global.devblog') }}
          </router-link>
          &mdash;
          <router-link
            class="white--text shadow"
            to="/page/about">
            {{ $t('global.about') }}
          </router-link>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import UserMenu from '@/views/members/UserMenu.vue'

export default {
  name: 'App',
  components: {ThemeSwitcher, UserMenu},
  data() {
    return {
      bottomNavigation: '',

      showSearchField: false,
      search: ''
    }
  },
  mounted() {
    this.LOAD_READ_PUBLICATIONS()
  },
  computed: {
    ...mapState(['snackbar']),
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    isDesktop() {
      return !this.isMobile
    },
    mobileMenu: function () {
      return [
        {
          name: 'mobileMenu.home',
          icon: 'mdi-home-outline',
          route: 'home'
        },
        {
          name: 'mobileMenu.publications',
          icon: 'mdi-text-box-multiple-outline',
          route: 'all-publications'
        },
        {
          name: 'mobileMenu.search',
          icon: 'mdi-magnify',
          route: 'search'
        },
        {
          name: 'mobileMenu.projects',
          icon: 'mdi-package-variant',
          route: 'projects'
        }
      ]

    }
  },
  methods: {
    ...mapMutations(['LOAD_READ_PUBLICATIONS']),
    makeSearch() {
      this.showSearchField = false
      this.$router.push({
        name: 'all-publications',
        query: {
          search: this.search
        }
      })
    }
  },
  metaInfo() {
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
  }
}
</script>
