<template>
  <v-card class="b-card member-card">
    <v-row>
      <v-col class="py-0 pr-0">
        <img
          :src="member.picture"
          :alt="member.displayname"
          height="300px"
          width="auto"
          class="mr-0">
      </v-col>
      <v-col class="pl-0">
        <h1 :class="alignmentClasses">{{ member.displayname }}</h1>
        <p
          :class="alignmentClasses"
          class="text-center text-caption">« {{ member.biography }} »</p>
        <v-divider/>
        <v-row>
          <v-spacer/>
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
          <v-spacer/>
        </v-row>
      </v-col>
    </v-row>
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
    alignmentClasses() {
      return {
        'ml-5': this.$vuetify.breakpoint.xsOnly,
        'ml-2': this.$vuetify.breakpoint.smAndUp
      }
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

<style lang="stylus">
.member-card img
  border-top-left-radius: 20px
  border-bottom-left-radius: 20px
</style>
