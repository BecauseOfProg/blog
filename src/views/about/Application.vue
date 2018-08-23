<template>
  <main>
    <b-intro-div title="Application" subtitle="Le blog à portée de main!"></b-intro-div>
  </main>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Application',
      meta: [
        {
          property: 'og:url',
          content: 'https://becauseofprog.fr/about/application'
        },
        {
          property: 'og:title',
          content: 'Application | BecauseOfProg'
        },
        {
          property: 'og:description',
          content: 'Le blog à portée de main!'
        }
      ]
    }
  }
}
</script>

<style>
</style>
