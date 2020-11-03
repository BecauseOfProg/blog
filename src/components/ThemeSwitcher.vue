<template>
  <v-menu offset-y>
    <template #activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip }">
          <v-btn
            color="darker"
            icon
            v-bind="attrs"
            v-on="{ ...menu, ...tooltip }">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('theme.switchTheme') }}</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item @click="setTheme('auto')">
        <v-list-item-icon>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $t('theme.auto') }}</v-list-item-title>
      </v-list-item>
      <v-list-item @click="setTheme('light')">
        <v-list-item-icon>
          <v-icon>mdi-weather-sunny</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $t('theme.light') }}</v-list-item-title>
      </v-list-item>
      <v-list-item @click="setTheme('dark')">
        <v-list-item-icon>
          <v-icon>mdi-weather-night</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $t('theme.dark') }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ThemeSwitcher',
  computed: mapState(['settings']),
  methods: {
    ...mapActions(['setTheme']),
    applyTheme() {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark && this.settings.theme === 'auto') this.$vuetify.theme.dark = true
      else this.$vuetify.theme.dark = this.settings.theme === 'dark'
    },
  },
  mounted() {
    this.applyTheme()
  },
  watch: {
    'settings.theme'() {
      this.applyTheme()
    }
  }
}
</script>