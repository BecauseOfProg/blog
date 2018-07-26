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
      <v-avatar to="/" tile size="45px">
        <img src="https://cdn.becauseofprog.fr/logos/bop-transparent.png" alt="BOP">
      </v-avatar>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/categories" flat small><v-icon left>description</v-icon>Catégories</v-btn>
        <v-btn to="/types" flat small><v-icon left>star</v-icon>Types</v-btn>
        <v-menu bottom offset-y transition="slide-y-transition">
          <v-btn flat small slot="activator"><v-icon left>expand_more</v-icon>Sections</v-btn>
          <v-list>
            <v-list-tile to="/about/application" @click="">
              <v-list-tile-title>Application</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/about" @click="">
              <v-list-tile-title>A propos</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>

<style>
</style>
