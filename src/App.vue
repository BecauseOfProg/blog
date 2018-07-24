<template>
	<v-app>
		<b-header></b-header>
		<router-view></router-view>
		<v-footer app></v-footer>
	</v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      drawer: false,
      draweritems: [
        {
          title: 'Catégories',
          icon: 'description'
        },
        {
          title: 'Types',
          icon: 'star'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
