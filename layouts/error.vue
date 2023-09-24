<template>
  <v-app>
    <v-container class="pa-6">
      <v-row justify="center" align-content="center">
        <b-card class="error-layout">
          <template #image>
            <v-img width="500" src="/img/others/pablo.webp" />
          </template>

          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <div>
            {{ $t('errors.redirectionIn2seconds') }}
          </div>
        </b-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({})
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
  },
  mounted () {
    setTimeout(() => {
      this.$router.push('/')
    }, 2000)
  }
}
</script>

<style scoped>
.error-layout h1 {
  font-size: 20px;
}
</style>
