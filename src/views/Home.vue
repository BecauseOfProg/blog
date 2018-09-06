<template>
  <main>
    <b-intro-div title="BecauseOfProg" subtitle="Actualités et tutoriels sur le numérique et la programmation."></b-intro-div>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4 lg3 xl2 class="hidden-md-and-up">
          <v-card>
            <v-list>
              <v-list-group v-for="pane in leftpane" v-model="pane.active" :key="pane.name" :prepend-icon="pane.icon" no-action>
                <v-list-tile slot="activator">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ pane.name }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-for="item in pane.items" :key="item.name" :to="pane.url + '/' + item.url">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
            </v-list>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md8 lg9 xl10>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid grid-list-md>
      <v-layout row>
        <v-container fluid class="pt-0">
          <v-layout row wrap>
            <h1><v-icon left color="grey darken-4" size="27" class="pb-1 pt-1">mdi-history</v-icon>&nbsp;Derniers articles</h1>
            <v-flex xs12>
              <v-layout row wrap>
                <b-article-card v-for="article in articles" :key="article.title" :article="article"></b-article-card>
              </v-layout>
            </v-flex>
            <v-flex xs6 offset-xs6 sm4 offset-sm8 md3 offset-md9 lg2 offset-lg10 xl1 offset-xl11>
              <v-btn color="primary" to="/articles">Voir plus<v-icon right>mdi-menu-right</v-icon></v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import urls from '../utils/urls.js'

export default {
  data () {
    return {
      articles: [],
      leftpane: [
        {
          name: 'Catégories',
          url: 'category',
          icon: 'mdi-note-text',
          active: false,
          items: [{ name: 'Android' }, { name: 'Windows' }, { name: 'Linux' }]
        },
        {
          name: 'Types',
          url: 'type',
          icon: 'mdi-star',
          active: false,
          items: []
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getAllTypes'])
  },
  mounted () {
    this.leftpane[1].items = this.getAllTypes
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
      title: 'Accueil',
      meta: [
        {
          property: 'og:url',
          vmid: 'og:url',
          content: 'https://becauseofprog.fr/'
        },
        {
          property: 'og:title',
          vmid: 'og:title',
          content: 'BecauseOfProg'
        },
        {
          property: 'og:description',
          vmid: 'og:description',
          content:
            'Actualités et tutoriels sur le numérique et la programmation.'
        }
      ]
    }
  }
}
</script>
