<template>
  <div>
    <v-toolbar app dark color="primary" fixed dense>
      <router-link to="/">
        <v-avatar tile size="45px">
          <img src="/img/icon.png" alt="BOP">
        </v-avatar>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu v-for="drop in dropdowns" :key="drop.name" open-on-hover bottom offset-y transition="slide-y-transition">
          <v-btn flat small slot="activator">{{ drop.name }}<v-icon right>mdi-menu-down</v-icon></v-btn>
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
          <v-icon>mdi-account-box</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
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
  },
  computed: {
    ...mapGetters(['getAllTypes', 'getAllCategories'])
  },
  mounted() {
    this.dropdowns.types.items = this.getAllTypes
    this.dropdowns.categories.items = this.getAllCategories
  }
}
</script>

<style>
</style>
