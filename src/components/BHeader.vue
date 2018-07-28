<template>
  <div>
    <v-navigation-drawer temporary v-model="drawer" light absolute>
      <v-toolbar flat dense>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              BecauseOfProg
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in draweritems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="primary" fixed dense>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link to="/">
        <v-avatar tile size="45px">
          <img src="https://cdn.becauseofprog.fr/logos/bop-transparent.png" alt="BOP">
        </v-avatar>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu v-for="drop in dropdowns" :key="drop.name" open-on-hover bottom offset-y transition="slide-y-transition">
          <v-btn flat small slot="activator"><v-icon left>arrow_drop_down</v-icon>{{ drop.name }}</v-btn>
          <v-list>
            <v-list-tile v-for="item in drop.items" :key="item.name" :to="drop.url + '/' + item.url">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>account_box</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
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
              icon: 'info',
              url: 'about'
            },
            {
              name: 'Application',
              icon: 'apps',
              url: 'about/application'
            },            

          ]
        }
      },
      drawer: false,
      draweritems: [
        {
          title: 'Catégories',
          icon: 'description'
        },
        {
          title: 'Types',
          icon: 'star'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getAllTypes', 'getAllCategories'])
  },
  mounted () {
    this.dropdowns.types.items = this.getAllTypes
    this.dropdowns.categories.items = this.getAllCategories
  },
}
</script>

<style>
</style>
