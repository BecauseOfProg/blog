<template>
  <v-app>
    <v-snackbar
      v-model="snackbar.show"
      timeout="5000"
      top
      right>
      {{ $t(snackbar.message) }}
      <template #action="{ attrs }">
        <v-btn
          color="darker"
          text
          v-bind="attrs"
          @click="snackbar.show = false">
          {{ $t('global.close') }}
        </v-btn>
      </template>
    </v-snackbar>
    <div
      style="height: 8px; width: 100%"
      class="v-app-bar v-app-bar--fixed top-bar gradient"/>
    <v-app-bar
      id="app-navigation"
      style="margin-top: 8px"
      app
      dense>
      <v-spacer v-if="isMobile"/>
      <router-link
        :to="{ name: $route.name === 'article' && isMobile ? 'all-articles' : 'home' }"
        class="d-flex align-center darker--text">
        <v-img
          alt="BecauseOfProg Logo"
          class="shrink mr-2"
          src="https://cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/logos/bop.min.svg"
          width="40"
          contain/>
        <v-toolbar-title class="font-weight-medium">
          BecauseOfProg
        </v-toolbar-title>
      </router-link>
      <v-spacer/>
      <template v-if="isDesktop">
        <template v-if="showSearchField">
          <v-text-field
            v-model="search"
            color="darker"
            :placeholder="$t('topBar.searchField')"
            single-line
            hide-details
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
            to="/blog"
            color="darker"
            text>
            <v-icon left>mdi-text-box-multiple-outline</v-icon>
            {{ $t('topBar.articles') }}
          </v-btn>
          <v-btn
            to="/page/projects"
            color="darker"
            text>
            <v-icon left>mdi-package-variant</v-icon>
            {{ $t('topBar.projects') }}
          </v-btn>
          <v-btn
            to="/page/app"
            color="darker"
            text>
            <v-icon left>mdi-cellphone-iphone</v-icon>
            {{ $t('topBar.application') }}
          </v-btn>
          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-btn
                color="darker"
                icon
                @click="showSearchField = true"
                v-on="on">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </template>
            <span>{{ $t('topBar.search') }}</span>
          </v-tooltip>
        </template>
        <theme-switcher/>
        <lang-switcher/>
        <user-menu/>
      </template>
    </v-app-bar>

    <v-main :style="isDesktop ? 'padding-top: 56px' : ''">
      <router-view :key="$route.fullPath"/>
    </v-main>

    <v-bottom-navigation
      v-if="isMobile && $route.name !== 'article'"
      v-model="bottomNavigation"
      color="darker"
      fixed
      app>
      <v-btn
        v-for="item in mobileMenu"
        :key="item.name"
        :to="item.route">
        <span>{{ $t(item.name) }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-footer
      class="gradient"
      :style="isMobile ? 'margin-bottom: 65px' : ''">
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
import { mapState, mapMutations } from 'vuex'
import ThemeSwitcher from '@/views/parts/ThemeSwitcher'
import LangSwitcher from '@/views/parts/LangSwitcher'
import UserMenu from '@/views/members/UserMenu'

export default {
  name: 'App',
  components: { ThemeSwitcher, UserMenu, LangSwitcher },
  data () {
    return {
      bottomNavigation: '',

      showSearchField: false,
      search: ''
    }
  },
  mounted() {
    this.LOAD_READ_ARTICLES()
  },
  computed: {
    ...mapState(['snackbar']),
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    isDesktop() {
      return !this.isMobile
    },
    mobileMenu: function() {
      return [
        {
          name: 'mobileMenu.home',
          icon: 'mdi-home-outline',
          route: '/'
        },
        {
          name: 'mobileMenu.social',
          icon: 'mdi-twitter-retweet',
          route: '/social'
        },
        {
          name: 'mobileMenu.articles',
          icon: 'mdi-text-box-multiple-outline',
          route: '/blog'
        },
        {
          name: 'mobileMenu.search',
          icon: 'mdi-magnify',
          route: '/page/search'
        }
      ]

    }
  },
  methods: {
    ...mapMutations(['LOAD_READ_ARTICLES']),
    makeSearch() {
      this.showSearchField = false
      this.$router.push({
        name: 'all-articles',
        query: {
          search: this.search
        }
      })
    }
  }
}
</script>
