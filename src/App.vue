<template>
  <v-app>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-app-bar
        style="height: 8px"
        class="top-bar gradient"
        elevation="0"
        app
        dense/>
      <v-app-bar
        style="margin-top: 8px"
        color="white"
        app
        dense>
        <div class="d-flex align-center">
          <v-img
            alt="BecauseOfProg Logo"
            class="shrink mr-2"
            src="https://cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/logos/bop.min.svg"
            width="40"
            contain/>
          <v-toolbar-title class="darker--text">BecauseOfProg</v-toolbar-title>
        </div>
        <v-spacer/>
        <v-btn
          to="/blog"
          color="darker"
          text>
          <v-icon left>mdi-file-document-box-multiple-outline</v-icon>
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
          to="/page/links"
          color="darker"
          text>
          <v-icon left>mdi-link</v-icon>
          Liens
        </v-btn>
        <v-btn
          color="darker"
          icon
          @click="search">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          to="/account"
          color="darker"
          icon>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </v-app-bar>
    </template>

    <v-content :style="$vuetify.breakpoint.mdAndUp ? 'padding-top: 56px' : ''">
      <router-view/>
    </v-content>

    <v-bottom-navigation
      v-if="$vuetify.breakpoint.smAndDown"
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
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    bottomNav: '',
    mobileMenu: [
      {
        name: 'Social',
        icon: 'mdi-rss',
        route: '/social'
      },
      {
        name: 'Articles',
        icon: 'mdi-file-document-box-multiple-outline',
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
      },
    ]
  }),
}
</script>
