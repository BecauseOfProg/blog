<template>
  <v-app>
    <v-snackbar
      v-model="snackbar.show"
      timeout="5000"
      top
      right>
      {{ snackbar.message }}
      <template #action="{ attrs }">
        <v-btn
          color="darker"
          text
          v-bind="attrs"
          @click="snackbar.show = false">
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <div
      style="height: 8px; width: 100%"
      class="v-app-bar v-app-bar--fixed top-bar gradient"/>
    <v-app-bar
      v-if="$route.name !== 'article'"
      style="margin-top: 8px"
      color="white"
      app
      dense>
      <v-spacer v-if="$vuetify.breakpoint.smAndDown"/>
      <div class="d-flex align-center">
        <v-img
          alt="BecauseOfProg Logo"
          class="shrink mr-2"
          src="https://cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/logos/bop.min.svg"
          width="40"
          contain/>
        <v-toolbar-title>
          <router-link
            to="/"
            class="darker--text">BecauseOfProg
          </router-link>
        </v-toolbar-title>
      </div>
      <v-spacer/>
      <div class="hidden-sm-and-down">
        <v-btn
          to="/blog"
          color="darker"
          text>
          <v-icon left>mdi-text-box-multiple-outline</v-icon>
          Articles
        </v-btn>
        <v-btn
          to="/page/projects"
          color="darker"
          text>
          <v-icon left>mdi-package-variant</v-icon>
          Projets
        </v-btn>
        <v-btn
          to="/page/app"
          color="darker"
          text>
          <v-icon left>mdi-cellphone-iphone</v-icon>
          Application
        </v-btn>
        <v-btn
          color="darker"
          icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          color="darker"
          icon>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
        <v-btn
          to="/account"
          color="darker"
          icon>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main :style="$vuetify.breakpoint.mdAndUp ? 'padding-top: 56px' : ''">
      <router-view :key="$route.fullPath"/>
    </v-main>

    <v-bottom-navigation
      v-if="$vuetify.breakpoint.smAndDown && $route.name !== 'article'"
      v-model="bottomNav"
      color="darker"
      fixed
      app>
      <v-btn
        v-for="item in mobileMenu"
        :key="item.name"
        :to="item.route">
        <span>{{ item.name }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-footer class="gradient">
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
          class="text-right"
          cols="6">
          <a
            class="white--text shadow"
            href="/page/about">
            À propos
          </a>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    bottomNav: '',
    mobileMenu: [
      {
        name: 'Social',
        icon: 'mdi-home',
        route: '/social'
      },
      {
        name: 'Articles',
        icon: 'mdi-text-box-multiple-outline',
        route: '/blog'
      },
      {
        name: 'Recherche',
        icon: 'mdi-magnify',
        route: '/page/search'
      },
      {
        name: 'Pages',
        icon: 'mdi-plus',
        route: '/pages'
      }
    ]
  }),
  computed: {
    ...mapState(['snackbar'])
  }
}
</script>
