<template>
  <div class="social-icons social-icons--big">
    <v-row class="mx-0">
      <a
        v-for="social in socials"
        :key="social.value"
        :href="social.value">
        <v-icon
          :size="big ? 64 : undefined"
          :color="big ? social.color : 'darker'">
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
  data() {
    return {
      socials: bopSocials
    }
  }
}
</script>
