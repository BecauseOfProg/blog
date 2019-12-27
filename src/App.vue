<template>
  <v-app>
    <v-app-bar
      class="top-bar light-gradient"
      elevation="0"
      app
      dense/>
    <v-app-bar
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

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
/* the small orange top bar */
.top-bar {
  height: 8px;
}
header:nth-of-type(2) {
  margin-top: 8px !important;
}

.light-gradient {
  background: linear-gradient(90deg, rgba(255,81,76,1) 0%, rgba(255,151,121,1) 100%)
}
</style>
