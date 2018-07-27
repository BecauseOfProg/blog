<template>
  <v-parallax id="intro-div" :src="require('../assets/' + banner)" height="400" class="mb-3">
    <v-layout column align-center justify-center>
      <img :src="require('../assets/' + icon)" alt="Logo BOP" />
      <h1 class="white--text">{{ title }}</h1>
      <h4 class="white--text">{{ subtitle }}</h4>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    banner: {
      type: String,
      default: 'background.jpg'
    },
    icon: {
      type: String,
      default: 'icon.png'
    }
  }
}
</script>

<style>
#intro-div div.v-parallax__content div h1 {
  font-size: 40px;
}
#intro-div div.v-parallax__content div h4 {
  font-size: 25px;
}
#intro-div div.v-parallax__content div img {
  text-align: center;
  display: block;
  width: 150px;
  height: 150px;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 30px;
}
</style>
