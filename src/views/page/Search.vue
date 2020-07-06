<template>
  <main>
    <b-top-banner
      :title="$t('global.search')"
      icon="mdi-magnify"/>
    <v-container class="page-body"/>
  </main>
</template>

<script>
export default {
  name: 'Search',
  props: {
    keyword: {
      type: String,
      default: null
    }
  }
}
</script>
