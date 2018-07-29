<template>
  <main>
    <v-container id="article" :key="article.title" grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-media
              :src="article.banner"
              height="200px"
            ></v-card-media>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ article.title }}</h3>
                <div>{{ article.resume }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <div>
                <v-chip>
                  <v-avatar>
                    <img :src="article.author.avatar" />
                  </v-avatar>
                  {{ article.author.name }}
                </v-chip>
                <v-chip>
                  <v-avatar>
                    <v-icon>access_time</v-icon>
                  </v-avatar>
                  {{ article.date }}
                </v-chip>
                <v-chip :color="article.category.color + ' white--text'">
                  <v-avatar>
                    <v-icon>{{ article.category.icon }}</v-icon>
                  </v-avatar>
                  {{ article.category.name }}
                </v-chip>
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
    
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <div v-html="article.content">
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import urls from '../../utils/urls'

export default {
  data () {
    return {
      article: {}
    }
  },
  computed: {
    ...mapGetters(['getOneType', 'getOneCategory'])
  },
  mounted () {
    const url = urls.article + '/' + this.$route.params.article
    this.$http.get(url).then(
      data => {
        this.article = data.body.data[Object.keys(data.body.data)[0]]
        this.article.type = this.getOneType(this.article.type)[0]
        this.article.category = this.getOneCategory(this.article.category)[0]
      },
      _ => {
        console.log('erreur : pas possible de charger les articles')
      }
    )
  }
}
</script>

<style>
#article {
  margin-top: 70px;
  margin-bottom: 40px;
  padding-left: 90px;
  padding-right: 90px;
}
</style>
