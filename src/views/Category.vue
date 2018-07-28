<template>
  <main v-if="loaded">
    <b-intro-div :title="category.name" :banner="category.banner" iconType="icon" :icon="category.icon"></b-intro-div>

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
      category: [],
      loaded: false
    }
  },
  computed: {
    ...mapGetters(['getOneCategory'])
  },
  mounted () {
    this.category = this.getOneCategory(this.$route.params.category)[0]
    this.loaded = true
  },
  metaInfo () {
    return {
      title: this.category.name
    }
  }
}
</script>

<style>

</style>
