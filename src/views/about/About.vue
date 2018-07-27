<template>
  <main>
    <b-intro-div title="A propos" subtitle="Toutes les informations sur le site."></b-intro-div>
  </main>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'A propos',
      meta: [
        {
          property: 'og:url',
          content: 'https://becauseofprog.fr/about'
        },
        {
          property: 'og:title',
          content: 'A propos | BecauseOfProg'
        },
        {
          property: 'og:description',
          content: 'Toutes les informations sur le site.'
        }
      ]
    }
  }
}
</script>

<style>
</style>
