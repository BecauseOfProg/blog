<template>
  <v-app>
    <v-toolbar 
      app 
      dark 
      color="primary" 
      fixed 
      dense>
      <router-link to="/">
        <v-avatar 
          tile 
          size="45px">
          <img 
            src="/img/icon.png" 
            alt="BOP">
        </v-avatar>
      </router-link>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu 
          v-for="drop in header.dropdowns" 
          :key="drop.name" 
          open-on-hover 
          bottom 
          offset-y 
          transition="slide-y-transition">
          <v-btn 
            slot="activator" 
            flat 
            small>{{ drop.name }}<v-icon right>mdi-menu-down</v-icon></v-btn>
          <v-list>
            <v-list-tile 
              v-for="item in drop.items" 
              :key="item.name" 
              :to="drop.url + '/' + item.url">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-spacer/>
        <v-btn icon>
          <v-icon>mdi-account-box</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
    <v-footer 
      height="auto" 
      color="primary">
      <v-layout 
        justify-center 
        row 
        wrap>
        <v-btn 
          v-for="link in footerLinks" 
          :key="link.name" 
          :to="link.link" 
          color="white" 
          flat 
          round>
          {{ link.name }}
        </v-btn>
        <v-flex 
          primary 
          darken-1 
          py-3 
          text-xs-center 
          white--text 
          xs12>
          &copy;2018 — <strong>BecauseOfProg</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      footerLinks: [
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
          link: '/application'
        }
      ],
      header: {
        dropdowns: {
          categories: {
            name: 'Catégories',
            url: '/category',
            items: []
          },
          types: {
            name: 'Types',
            url: '/type',
            items: []
          },
          sections: {
            name: 'Sections',
            url: '',
            items: [
              {
                name: 'A propos',
                icon: 'mdi-information',
                url: 'about'
              },
              {
                name: 'Application',
                icon: 'mdi-apps',
                url: 'application'
              }
            ]
          }
        }
      }
    }
  },
  metaInfo () {
    return {
      titleTemplate: '%s | BecauseOfProg'
    }
  }
}
</script>

<style>
main > div.container {
  padding: 0;
}
</style>
