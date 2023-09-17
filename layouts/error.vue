<template>
  <v-app dark>
    <v-container class="pa-6">
      <v-row justify="center" align-content="center">
        <b-card>
          <template #image>
            <v-img width="500" src="https://i.kym-cdn.com/entries/icons/mobile/000/026/213/pablo.jpg" />
          </template>

          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
        </b-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Page non trouvée',
      otherError: 'Erreur...'
    }
  },
  head () {
    const title = this.error.statusCode === 404
      ? this.pageNotFound
      : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
