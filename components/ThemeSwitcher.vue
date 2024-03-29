<template>
  <v-menu offset-y>
    <template #activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip }">
          <v-btn
            alt="Switch theme"
            aria-label="Switch theme"
            v-bind="attrs"
            color="darker"
            icon
            v-on="{ ...menu, ...tooltip }"
          >
            <v-icon>{{ mdiThemeLightDark }}</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('theme.switchTheme') }}</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item @click="setTheme('auto')">
        <v-list-item-icon>
          <v-icon>{{ mdiThemeLightDark }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $t('theme.auto') }}</v-list-item-title>
      </v-list-item>
      <v-list-item @click="setTheme('light')">
        <v-list-item-icon>
          <v-icon>{{ mdiWeatherSunny }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $t('theme.light') }}</v-list-item-title>
      </v-list-item>
      <v-list-item @click="setTheme('dark')">
        <v-list-item-icon>
          <v-icon>{{ mdiWeatherNight }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $t('theme.dark') }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mdiThemeLightDark, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'

export default {
  name: 'ThemeSwitcher',
  data () {
    return {
      mdiThemeLightDark,
      mdiWeatherSunny,
      mdiWeatherNight
    }
  },
  mounted () {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      setTimeout(() => {
        this.applyTheme()
      }, 0)
    }
  },
  methods: {
    applyTheme () {
      if (this.$cookies.get('theme') !== undefined && this.$cookies.get('theme') !== 'auto') {
        const theme = this.$cookies.get('theme', { parseJSON: false })
        this.$set(this.$vuetify.theme, 'dark', theme === 'dark')
        return
      }

      setTimeout(() => {
        this.$set(this.$vuetify.theme, 'dark', this.prefersDark())
      }, 0)
    },
    /**
     * Returns true if auto theme is dark
     * @returns {boolean}
     */
    prefersDark () {
      return !!(window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    },
    /**
     * Set theme
     * @param {'auto'|'dark'|'light'} theme
     */
    setTheme (theme) {
      this.$set(this.$vuetify.theme, 'dark',
        theme === 'auto'
          ? this.prefersDark()
          : theme === 'dark'
      )

      this.$cookies.set('theme', theme, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      })
    }
  }
}
</script>
