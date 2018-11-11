<template>
  <main>
    <b-intro-div 
      title="Tous les articles" 
      banner="types/articles.png"/>

    <v-container 
      fluid 
      grid-list-md>
      <v-layout row>
        <v-container 
          fluid 
          class="pt-0">
          <v-layout 
            row 
            wrap>
            <v-flex xs12>
              <v-layout 
                row 
                wrap>
                <b-article-card 
                  v-for="article in articles" 
                  :key="article.title" 
                  :article="article"/>
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
      error => {
        console.log('Erreur : ' + error)
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
