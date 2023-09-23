<template>
  <div class="social-icons social-icons--big">
    <v-row class="mx-0">
      <a
        v-for="social in socials"
        :key="`${social.name}_${social.value}`"
        :href="social.link + social.value"
      >
        <v-icon
          :style="{marginTop: big ? social.marginTopBig : social.marginTopNormal, marginLeft: big ? social.marginLeftBig : social.marginLeftNormal}"
          :size="big ? (social.sizeBig || 64) : (social.sizeNormal || 32)"
          :color="big ? social.color : 'darker'"
          class="social-icon"
        >
          {{ social.icon }}
        </v-icon>
      </a>
    </v-row>
  </div>
</template>

<script>
import { bopSocials } from '@/utils/data'

export default {
  name: 'SocialIcons',
  props: {
    big: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      socials: bopSocials
    }
  }
}
</script>
