<template>
  <b-top-banner
    title="Article"
    subtitle="Publié par random le mercredi 25 septembre 2019"
    tall/>
</template>

<script>
export default {
  name: 'Article',
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>
