<template>
  <v-app>
    <b-header></b-header>
    <router-view></router-view>
    <b-footer></b-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  metaInfo() {
    return {
      titleTemplate: '%s | BecauseOfProg'
    }
  }
}
</script>

<style>
</style>
