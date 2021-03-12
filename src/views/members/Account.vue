<template>
  <main>
    <b-top-banner
      :title="$t('account.title')"
      icon="mdi-account-circle-outline"/>
    <v-container class="page-body">
      <h1>À venir</h1>
    </v-container>
  </main>
</template>

<script>
export default {
  name: 'Account',
  metaInfo() {
    return {
      title: this.$t('account.title'),
      meta: [
        {
          property: 'og:title',
          content: this.$t('account.title')
        }
      ]
    }
  }
}
</script>
