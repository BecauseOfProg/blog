<template>
  <v-row
    class="mt-5"
    justify="space-around"
  >
    <v-col>
      <v-btn
        :href="universal"
        color="green darken-1 white--text"
      >
        <v-icon left>
          mdi-android
        </v-icon>
        {{ $t('application.download.download') }} ≈18Mo
      </v-btn>
    </v-col>
    <v-col>
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            color="green lighten-2 white--text"
            v-bind="attrs"
            v-on="on"
          >
            {{ $t('application.download.specificArch') }} ≈9Mo
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="arch in archs"
            :key="arch"
            :href="`https://becauseofprog.fr/assets/v2/sites/becauseofprog.fr/app/app-${arch}-release.apk`"
          >
            <v-list-item-title>{{ arch }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ApplicationDownload',
  data () {
    return {
      universal: 'https://becauseofprog.fr/assets/v2/sites/becauseofprog.fr/app/app-universal-release.apk',
      archs: [
        'armeabi-v7a',
        'arm64-v8a',
        'x86',
        'x86_64'
      ]
    }
  }
}
</script>
