<template>
  <main>
    <b-top-banner
      title="global.search"
      icon="mdi-magnify"/>
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          md="10"
          lg="8"
          offset-md="1"
          offset-lg="2">
          <b-card>
            <v-text-field
              v-model="search"
              prepend-icon="mdi-magnify"
              :label="`${$t('global.search')}...`"
              type="search"
              color="darker"
              @keyup.enter="makeSearch"/>
            <h4>{{ $t('list.suggestedCategories') }}</h4>
            <categories-chips exclude-types/>
          </b-card>
        </v-col>
        <v-col
          cols="12"
          md="12"
          lg="10"
          offset-lg="1">
          <v-row>
            <v-col
              v-for="publication in publications"
              :key="publication.id"
              cols="12"
              md="6"
              lg="4">
              <b-publication-card :publication="publication"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import CategoriesChips from '@/components/CategoriesChips'
import { publications } from '@/utils/api'

export default {
  name: 'Search',
  components: { CategoriesChips },
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
