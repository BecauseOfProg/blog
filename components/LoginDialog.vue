<template>
  <v-dialog
    v-model="enabled"
    width="500"
  >
    <template #activator="{ on }">
      <slot
        name="activator"
        v-bind="{ on }"
      />
    </template>
    <v-card>
      <v-card-text class="pt-2">
        <span class="headline">{{ $t('loginDialog.login') }}</span>
        <p>{{ $t('loginDialog.message') }}</p>
        <v-scale-transition>
          <v-alert
            v-if="error !== ''"
            color="darker"
            icon="mdi-alert-circle-outline"
            outlined
            dismissible
          >
            {{ $t(error) }}
          </v-alert>
        </v-scale-transition>
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="form.email"
            :rules="emailRules"
            prepend-inner-icon="mdi-email-outline"
            :label="$t('fields.email')"
            type="email"
            color="light"
            outlined
            required
          >
            <template #message="{ message }">
              {{ $t(message) }}
            </template>
          </v-text-field>
          <v-text-field
            v-model="form.password"
            :rules="passwordRules"
            prepend-inner-icon="mdi-key-variant"
            :label="$t('fields.password')"
            :type="showPassword ? 'text' : 'password'"
            color="light"
            outlined
            required
          >
            <template #message="{ message }">
              {{ $t(message) }}
            </template>
            <template #append-outer>
              <v-tooltip bottom>
                <template #activator="{ on }">
                  <v-btn
                    icon
                    v-on="on"
                    @click="showPassword = !showPassword"
                  >
                    <v-icon>{{ showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline' }}</v-icon>
                  </v-btn>
                </template>
                <span>{{ $t('loginDialog.' + (showPassword ? 'hidePassword' : 'showPassword')) }}</span>
              </v-tooltip>
            </template>
          </v-text-field>
          <v-switch
            v-model="form.reconnection"
            :label="$t('loginDialog.remember')"
            color="light"
            inset
          />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          @click="cancel"
        >
          {{ $t('global.cancel') }}
        </v-btn>
        <v-btn
          :disabled="!valid"
          :loading="waiting"
          color="light"
          text
          @click="tryLogin"
        >
          {{ $t('global.validate') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

const defaultForm = {
  email: '',
  password: '',
  reconnection: false
}

export default {
  name: 'LoginDialog',
  data () {
    return {
      enabled: false,
      error: '',
      valid: false,
      waiting: false,

      showPassword: false,

      form: Object.assign({}, defaultForm),
      emailRules: [
        v => !!v || 'fields.validation.emailRequired',
        v => /.+@.+\..+/.test(v) || 'fields.validation.emailValidation'
      ],
      passwordRules: [
        v => !!v || 'fields.validation.passwordRequired'
      ]
    }
  },
  mounted () {
    this.reconnect(this)
  },
  methods: {
    ...mapActions(['reconnect', 'login']),
    tryLogin () {
      this.login(this)
    },
    cancel () {
      this.$refs.form.reset()
      this.form = Object.assign({}, defaultForm)
      this.enabled = false
    }
  }
}
</script>
