<template>
  <v-layout row>
    <v-flex xs12 sm12 md12 lg12 xl12>
      <v-parallax src="https://cdn.becauseofprog.fr/syst-images/bg.jpg">
        <v-layout column align-center justify-center>
          <img src="https://cdn.becauseofprog.fr/logos/bop-transparent.png" alt="Logo BOP" />
          <h1 class="white--text">{{ title }}</h1>
          <h4 class="white--text">{{ subtitle }}</h4>
        </v-layout>
      </v-parallax>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>

<style>
</style>
