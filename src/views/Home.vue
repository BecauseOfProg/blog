<template>
  <main>
    <v-container fluid>
      <b-intro-div title="BecauseOfProg" subtitle="Actualités et tutoriels sur le numérique et la programmation."></b-intro-div>
      <v-layout row>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <!-- Accordéons () -->
              <v-flex xs12 sm12 md4 lg3 xl2>
                <v-card>
                  <v-list>
                    <v-list-group
                      v-for="pane in leftpane"
                      v-model="pane.active"
                      :key="pane.name"
                      :prepend-icon="pane.icon"
                      no-action
                    >
                      <v-list-tile slot="activator">
                        <v-list-tile-content>
                          <v-list-tile-title>{{ pane.name }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile
                        v-for="item in pane.items"
                        :key="item.name"
                        @click=""
                      >
                        <v-list-tile-content>
                          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list-group>
                  </v-list>
                </v-card>
              </v-flex>

              <!-- Présentation -->
              <v-flex xs12 sm12 md8 lg9 xl10>
              </v-flex>

              <!-- Articles en vedette -->
              <v-flex xs12>
                <v-layout row wrap>
                  
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      leftpane: [
        {
          name: 'Catégories',
          icon: 'description',
          active: false,
          items: [{ name: 'Android' }, { name: 'Windows' }, { name: 'Linux' }]
        },
        {
          name: 'Types',
          icon: 'star',
          active: false,
          items: [
            { name: 'Articles' },
            { name: 'Billets' },
            { name: 'DevBlogs' },
            { name: 'Cours' },
            { name: 'Tutoriels' },
            { name: 'Astuces' },
            { name: 'Autres' }
          ]
        }
      ],
      testarticle: {
        title: 'Mes applis opensource blabla',
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
  }
}
</script>
