<template>
  <v-card class="b-card">
    <div
      class="d-flex flex-no-wrap"
      :class="rowOrCol">
      <div class="d-flex flex-column justify-center align-center mt-2 ml-2 mr-2">
        <div class="mt-2">
          <v-avatar
            size="100"
            tile
          >
            <v-img
              style="border-radius: 12px"
              :src="member.picture"
              :alt="`img_${member.displayname}`"/>
          </v-avatar>
        </div>
        <div class="mt-3 mb-2">
          <v-tooltip
            v-for="social in socials"
            :key="member.username + social.id"
            bottom>
            <template #activator="{ on }">
              <v-btn
                icon
                :color="social.color"
                :href="social.link + social.value"
                v-on="on">
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ social.name }}</span>
          </v-tooltip>
        </div>
      </div>
      <v-divider
        class="mr-0"
        :vertical="dividerDirection"/>
      <v-col>
        <v-card-title
          class="vcardtitle headline"
          v-text="member.displayname"
        />
        <v-card-subtitle v-text="member.biography"/>

      </v-col>
    </div>
  </v-card>
</template>

<script>
import { getSocial } from '@/utils/data'

export default {
  name: 'MemberCard',
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  computed: {
    rowOrCol() {
      return {
        'flex-column': this.$vuetify.breakpoint.xsOnly,
        'flex-row': this.$vuetify.breakpoint.smAndUp
      }
    },
    dividerDirection() {
      if (this.$vuetify.breakpoint.xsOnly) return false
      return this.$vuetify.breakpoint.smAndUp;
    },
    socials() {
      let socials = []
      this.member.socials.forEach(social => {
        socials.push({
          ...getSocial(social.name),
          value: social.value
        })
      })
      return socials
    }
  }
}
</script>
