<template>
  <v-card class="b-card member-card">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
        lg="2"
        class="py-0 pr-0">
        <v-img
          height="100%"
          class="mr-0"
          :aspect-ratio="1"
          :src="member.picture"/>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="9"
        lg="10"
        class="pl-0">
        <h1 :class="alignmentClasses">{{ member.displayname }}</h1>
        <p :class="{ ...alignmentClasses, 'text-center': true, 'lecture-text': true }">« {{ member.biography }} »</p>
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
.member-card .v-image
  width: 100%
</style>
