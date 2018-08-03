<template>
  <main>
    <b-intro-div title="lol"></b-intro-div>

    <v-container fluid grid-list-md>
      <v-layout row>
        <v-container fluid class="pt-0">
          <v-layout row wrap>
            <h1><v-icon left color="grey darken-4" size="27" class="pb-1 pt-1">library_books</v-icon>&nbsp;Tous les articles</h1>
            <v-flex xs12>
              <v-layout row wrap>
                <b-article-card v-for="article in articles" :key="article.title" :article="article"></b-article-card>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
import urls from '../../utils/urls.js'

export default {
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.$http.get(urls.article).then(
      data => {
        this.articles = data.body.data
      },
      _ => {
        console.log('erreur : pas possible de charger les articles')
      }
    )
  },
  metaInfo () {
    return {
      title: 'Articles'
    }
  }
}
</script>

<style>
</style>
