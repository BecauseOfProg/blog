<template>
  <div class="social-icons social-icons--big">
    <v-row class="mx-0">
      <a
        v-for="social in socials"
        :key="social.link"
        :href="social.link">
        <v-icon
          :size="big ? 96 : undefined"
          :color="big ? social.color : 'darker'">
          {{ social.icon }}
        </v-icon>
      </a>
    </v-row>
  </div>
</template>

<script>
import { socials } from '@/utils/data'

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
      socials
    }
  }
}
</script>
