<template>
  <main v-if="loaded">
    <b-intro-div :title="type.name" :banner="type.banner" iconType="icon" :icon="type.icon"></b-intro-div>

    <v-container fluid grid-list-md>
      <v-layout row>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <v-layout row wrap>
                
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import vuex from 'vuex'

export default {
  data () {
    return {
      type: [],
      loaded: false
    }
  },
  computed: {
    ...mapGetters(['getOneType'])
  },
  mounted () {
    this.type = this.getOneType(this.$route.params.type)[0]
    this.loaded = true
  }
}
</script>

<style>

</style>
