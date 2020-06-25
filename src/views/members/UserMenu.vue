<template>
  <span>
    <v-menu
      v-if="isAuthenticated"
      offset-y>
      <template #activator="{ on: menu }">
        <v-tooltip bottom>
          <template #activator="{ on: tooltip }">
            <v-avatar
              size="42"
              v-on="{ ...menu, ...tooltip }">
              <v-img
                :src="user.picture"
                alt="Ma photo de profil"/>
            </v-avatar>
          </template>
          <span>Mon compte</span>
        </v-tooltip>
      </template>
      <v-list subheader>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              :src="user.picture"
              alt="Ma photo de profil"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.displayname }} ({{ user.username }})</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
        <v-subheader>Mes paramètres</v-subheader>
        <v-list-item to="/account">
          <v-list-item-icon>
            <v-icon>mdi-wrench-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Gestion du compte</v-list-item-title>
        </v-list-item>
        <template v-if="user.permissions.length">
          <v-divider/>
          <v-subheader>Équipes</v-subheader>
          <v-list-item
            v-if="user.permissions.includes('BLOG_WRITE')"
            to="/account/create-article">
            <v-list-item-icon>
              <v-icon>mdi-pencil-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Écrire un article</v-list-item-title>
          </v-list-item>
        </template>
        <v-divider/>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Déconnexion</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <login-dialog v-else>
      <template #activator="{ on: dialog }">
        <v-tooltip bottom>
          <template #activator="{ on: tooltip }">
            <v-btn
              color="darker"
              icon
              v-on="{ ...dialog, ...tooltip }">
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-btn>
          </template>
          <span>Se connecter</span>
        </v-tooltip>
      </template>
    </login-dialog>
  </span>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoginDialog from '@/views/parts/LoginDialog'

export default {
  name: 'UserMenu',
  components: { LoginDialog },
  computed: {
    ...mapGetters(['isAuthenticated']),
    user() {
      return this.$store.state.user.data
    }
  },
  methods: mapActions(['logout'])
}
</script>
