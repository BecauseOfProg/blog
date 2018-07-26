<template>
  <v-parallax src="https://cdn.becauseofprog.fr/syst-images/bg.jpg" height="400" class="mb-3">
    <v-layout column align-center justify-center>
      <img src="https://cdn.becauseofprog.fr/logos/bop-transparent.png" alt="Logo BOP" />
      <h1 class="white--text">{{ title }}</h1>
      <h4 class="white--text">{{ subtitle }}</h4>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>

<style>
</style>
