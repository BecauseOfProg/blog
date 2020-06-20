<template>
  <v-dialog
    v-model="enabled"
    width="500">
    <template #activator="{ on }">
      <slot
        name="activator"
        v-bind="{ on }"/>
    </template>
    <v-card>
      <v-card-text>
        <h2>Connexion</h2>
        <p>Pour profiter de certaines fonctionnalités du site et empêcher le spam, vous devez vous connecter à votre compte BecauseOfProg.</p>
        <v-alert
          v-if="error !== ''"
          color="darker"
          icon="mdi-alert-circle-outline"
          outlined>
          {{ error }}
        </v-alert>
        <v-col cols="12">
          <v-text-field
            v-model="form.email"
            type="email"
            prepend-inner-icon="mdi-email-outline"
            label="Adresse e-mail"
            color="darker"
            outlined/>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="form.password"
            type="password"
            prepend-inner-icon="mdi-key-variant"
            label="Mot de passe"
            color="darker"
            outlined/>
        </v-col>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          text
          @click="enabled = false">
          Annuler
        </v-btn>
        <v-btn
          color="darker white--text"
          @click="tryLogin">
          Valider
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginDialog',
  data() {
    return {
      enabled: false,
      error: '',
      form: {
        email: '',
        password: ''
      }
    }
  },
  mounted() {
    this.reconnect(this)
  },
  methods: {
    ...mapActions(['reconnect', 'login']),
    tryLogin() {
      this.login(this)
    }
  }
}
</script>
