<template>
  <span>
    <v-menu
      v-if="isAuthenticated"
      offset-y>
      <template #activator="{ on }">
        <v-avatar
          size="42"
          v-on="on">
          <v-img :src="user.data.picture"/>
        </v-avatar>
      </template>
      <v-list subheader>
        <v-subheader>Mes paramètres</v-subheader>
        <v-list-item to="/account">
          <v-list-item-icon>
            <v-icon>mdi-wrench-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Gestion du compte</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Déconnexion</v-list-item-title>
        </v-list-item>
        <template v-if="user.data.permissions.length">
          <v-divider/>
          <v-subheader>Équipes</v-subheader>
          <v-list-item
            v-if="user.data.permissions.includes('BLOG_WRITE')"
            to="/account/create-article">
            <v-list-item-icon>
              <v-icon>mdi-pencil-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Écrire un article</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
    <login-dialog v-else>
      <template #activator="{ on }">
        <v-btn
          color="darker"
          icon
          v-on="on">
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </template>
    </login-dialog>
  </span>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import LoginDialog from '@/views/parts/LoginDialog'

export default {
  name: 'UserMenu',
  components: { LoginDialog },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  methods: mapActions(['logout'])
}
</script>
