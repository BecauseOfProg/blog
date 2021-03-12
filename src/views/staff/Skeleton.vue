<template>
  <main>
    <v-navigation-drawer
      v-model="active"
      :mini-variant="mini"
      absolute
      permanent>
      <v-list
        class="py-0"
        dense
        nav>
        <v-list-item v-if="!mini">
          <v-list-item-content>
            <v-list-item-title>Espace de gestion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>

        <v-list-item-group v-model="viewIndex">
          <v-tooltip
            v-for="item in menu"
            :key="item.title"
            :disabled="!mini"
            right>
            <template #activator="{ on }">
              <v-list-item
                color="light"
                exact
                link
                v-on="on">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>{{ item.title }}</span>
          </v-tooltip>
        </v-list-item-group>
      </v-list>
      <template #append>
        <v-divider/>
        <v-row class="px-4 py-2">
          <v-spacer/>
          <v-tooltip
            open-delay="500"
            top>
            <template #activator="{ on }">
              <v-btn
                icon
                v-on="on"
                @click="mini = !mini">
                <v-icon>{{ mini ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
              </v-btn>
            </template>
            <span>{{ mini ? 'Agrandir' : 'Réduire' }}</span>
          </v-tooltip>
        </v-row>
      </template>
    </v-navigation-drawer>
    <component :is="view.component"/>
  </main>
</template>

<script>
import Dashboard from './Dashboard'
import Posts from './Publications'

export default {
  name: 'Skeleton',
  data() {
    return {
      active: true,
      mini: false,
      viewIndex: 0,

      menu: [
        {title: 'Tableau de bord', icon: 'mdi-view-dashboard-outline', component: Dashboard},
        {title: 'Publications', icon: 'mdi-text-box-outline', component: Posts},
        {title: 'Commentaires', icon: 'mdi-message-text-outline', route: 'comments'},
        {title: 'DevBlog', icon: 'mdi-iframe-outline', route: 'devblog'},
        {title: 'Utilisateurs', icon: 'mdi-account-multiple-outline', route: 'users'},
        {title: 'Liens', icon: 'mdi-link-variant', route: 'links'}
      ]
    }
  },
  computed: {
    view() {
      return this.menu[this.viewIndex]
    }
  }
}
</script>
