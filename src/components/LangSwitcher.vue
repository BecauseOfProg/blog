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
            <v-avatar
              size="22"
            >
              <img
                :src="currentLang"
                alt="lang">
            </v-avatar>
          </v-btn>
        </template>
        <span>{{ $t('lang.switchLang') }}</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        @click="setLang(item.flag)"
      >
        <v-img
          :src="item.img"
          width="20px"
          height="15px"
          style="margin-right: 10px"/>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'LangSwitcher',
  computed: mapState(['settings']),
  data() {
    return {
      currentLang: '/flags/' + 'fr' + '.svg',
      menu: [
        { title: 'Français', img: '/flags/fr.svg', flag: 'fr' },
        { title: 'English', img: '/flags/en.svg', flag: 'en' }
      ]
    }
  },
  mounted() {
    this.$i18n.locale = this.settings.lang
    this.currentLang = this.langFormat(this.settings.lang)
  },
  methods: {
    ...mapActions(['setLang']),
    langFormat(lang) {
      return '/flags/' + lang + '.svg'
    }
  },
  watch: {
    'settings.lang'() {
      this.$i18n.locale = this.settings.lang
      this.currentLang = this.langFormat(this.settings.lang)
    }
  }
}
</script>