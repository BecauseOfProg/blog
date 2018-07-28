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
            <h1><v-icon left color="grey darken-4" size="27" class="pb-1 pt-1">history</v-icon>&nbsp;Derniers articles</h1>
            <v-flex xs12>
              <v-layout row wrap>
                <b-article-card :article="testarticle"></b-article-card>
                <b-article-card :article="testarticle"></b-article-card>
                <b-article-card :article="testarticle"></b-article-card>
                <b-article-card :article="testarticle"></b-article-card>
                <b-article-card :article="testarticle"></b-article-card>
                <b-article-card :article="testarticle"></b-article-card>
                <b-article-card :article="testarticle"></b-article-card>
                <b-article-card :article="testarticle"></b-article-card>
              </v-layout>
            </v-flex>
            <v-flex xs6 offset-xs6 sm4 offset-sm8 md3 offset-md9 lg2 offset-lg10 xl1 offset-xl11>
              <v-btn color="primary" to="/articles">Voir plus<v-icon right>arrow_right</v-icon></v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      leftpane: [
        {
          name: 'Catégories',
          url: 'category',
          icon: 'description',
          active: false,
          items: [{ name: 'Android' }, { name: 'Windows' }, { name: 'Linux' }]
        },
        {
          name: 'Types',
          url: 'type',
          icon: 'star',
          active: false,
          items: []
        }
      ],
      testarticle: {
        title: 'Mes applis opensource blabla',
        url: 'mes-applis-opensource-blabla',
        type: 'article',
        category: 'android',
        distance_to_now: '5 minutes',
        banner:
          'https://cdn.becauseofprog.fr/articles/applis-open-source-juillet-2018.png',
        description:
          "Liste non exhaustive des applications open-source que j'utilise en juillet 2018!",
        tags: ['open-source', 'android'],
        author: {
          name: 'ornicarz',
          avatar:
            'https://cdn.discordapp.com/avatars/174812820116996096/0687044e9580296df67a27ec285d5b05.png'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['getAllTypes'])
  },
  mounted () {
    this.leftpane[1].items = this.getAllTypes
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
          content: 'Actualités et tutoriels sur le numérique et la programmation.'
        }
      ]
    }
  }
}
</script>
