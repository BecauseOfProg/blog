<template>
  <b-top-banner
    title="Recherche"
    icon="mdi-magnify"/>
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
