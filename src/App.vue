<template>
  <v-app>
    <b-header></b-header>
    <router-view></router-view>
    <v-footer height="auto" color="primary">
      <v-layout justify-center row wrap>
        <v-btn v-for="link in links" :key="link.name" :to="link.link" color="white" flat round>
          {{ link.name }}
        </v-btn>
        <v-flex primary darken-1 py-3 text-xs-center white--text xs12>
          &copy;2018 — <strong>BecauseOfProg</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      links: [
        {
          name: 'Accueil',
          link: '/'
        },
        {
          name: 'Articles',
          link: '/articles'
        },
        {
          name: 'A propos',
          link: '/about'
        },
        {
          name: 'Application',
          link: '/about/app'
        }
      ]
    }
  }
}
</script>

<style>
</style>
