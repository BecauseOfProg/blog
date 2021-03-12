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
              style="cursor: pointer"
              v-on="{ ...menu, ...tooltip }">
              <v-img
                :src="user.picture"
                alt="Ma photo de profil"/>
            </v-avatar>
          </template>
          <span>{{ $t('userMenu.myAccount') }}</span>
        </v-tooltip>
      </template>
      <v-list two-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              :src="user.picture"
              alt="Ma photo de profil"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.displayname }} (@{{ user.username }})</v-list-item-title>
            <v-list-item-subtitle>{{ $t('userMenu.bopAccount') }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list subheader>
        <v-subheader>{{ $t('userMenu.settings') }}</v-subheader>
        <v-list-item to="/account">
          <v-list-item-icon>
            <v-icon>mdi-wrench-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $t('userMenu.accountConfig') }}</v-list-item-title>
        </v-list-item>
        <template v-if="user.permissions.length">
          <v-subheader>{{ $t('userMenu.team') }}</v-subheader>
          <template>
            <v-list-item :to="{ name: 'staff' }">
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Espace de gestion</v-list-item-title>
            </v-list-item>
          </template>
        </template>
        <v-divider/>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $t('userMenu.logout') }}</v-list-item-title>
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
          <span>{{ $t('userMenu.login') }}</span>
        </v-tooltip>
      </template>
    </login-dialog>
  </span>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import LoginDialog from '@/components/LoginDialog'

export default {
  name: 'UserMenu',
  components: {LoginDialog},
  computed: {
    ...mapGetters(['isAuthenticated']),
    user() {
      return this.$store.state.user.data
    }
  },
  methods: mapActions(['logout'])
}
</script>
