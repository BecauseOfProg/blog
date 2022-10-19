<template>
  <main>
    <b-top-banner
      icon="mdi-magnify"
      title="global.search"/>
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          lg="8"
          md="10"
          offset-lg="2"
          offset-md="1">
          <b-card>
            <v-text-field
              v-model="search"
              :label="`${$t('global.search')}...`"
              color="darker"
              prepend-icon="mdi-magnify"
              type="search"
              @keyup.enter="makeSearch"/>
            <h4>{{ $t('list.suggestedCategories') }}</h4>
            <categories-chips exclude-types/>
          </b-card>
        </v-col>
        <v-col
          cols="12"
          lg="10"
          md="12"
          offset-lg="1">
          <v-row>
            <v-col
              v-for="publication in publications"
              :key="publication.id"
              cols="12"
              lg="4"
              md="6">
              <b-publication-card :publication="publication"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import CategoriesChips from '@/components/CategoriesChips.vue'
import {publications} from '@/utils/api'

export default {
  name: 'Search',
  components: {CategoriesChips},
  data() {
    return {
      publications: [],
      search: ''
    }
  },
  mounted() {
    publications.get().then(response => this.publications = response.body.data.slice(0, 3))
  },
  methods: {
    makeSearch() {
      this.$router.push({
        name: 'all-publications',
        query: {
          search: this.search
        }
      })
    }
  }
}
</script>
