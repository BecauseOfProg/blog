<template>
  <main>
    <b-top-banner
      :title="head.title"
      :icon="head.icon"
      :src="head.image"
      tall/>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="7"
          offset-lg="1">
          <b-card v-if="$vuetify.breakpoint.mdAndDown">
            <h3 class="headline darker--text">Explorez nos catégories</h3>
            <categories-chips include-all/>
          </b-card>
          <template v-if="loaded">
            <v-pagination
              v-model="page"
              :length="Math.ceil(articles.length / 10)"
              color="darker"/>
            <v-row>
              <v-col
                v-for="article in articles.slice((page - 1) * 10, (page - 1) * 10 + 10)"
                :key="article.url"
                cols="12">
                <b-article-card :article="article"/>
              </v-col>
            </v-row>
          </template>
          <template v-else>
            <v-row>
              <v-skeleton-loader
                style="width: 100%"
                type="image, card-heading, actions"/>
            </v-row>
          </template>
        </v-col>
        <v-col
          cols="12"
          lg="3">
          <b-card
            fluid
            tile
            class="bordered">
            <v-list
              class="round"
              subheader
              dense
              tile>
              <v-list-item
                :to="{ name: 'all-articles' }"
                color="darker">
                <v-list-item-icon>
                  <v-icon>mdi-text-box-multiple-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Tous les articles</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider/>
              <v-subheader>CATÉGORIES</v-subheader>
              <v-list-item
                v-for="category in categories"
                :key="category.id"
                :to="{ name: 'category', params: { category: category.id }}"
                color="darker">
                <v-list-item-icon>
                  <v-icon>{{ category.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ category.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider/>
              <v-subheader>TYPES</v-subheader>
              <v-list-item
                v-for="type in types"
                :key="type.id"
                :to="{ name: 'type', params: { type: type.id }}"
                color="darker">
                <v-list-item-icon>
                  <v-icon>{{ type.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ type.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider/>
            <div class="pa-3">
              <span class="headline darker--text">Nous suivre</span>
              <social-icons big/>
            </div>
            <v-divider/>
            <div class="pa-3">
              <span class="headline darker--text">À propos</span>
              <p>BecauseOfProg, c'est des développeurs rassemblés autour de projets communs tels que le blog.</p>
              <v-btn
                text
                color="darker"
                :to="{ name: 'about' }">
                <v-icon left>mdi-information-outline</v-icon>
                En savoir plus
              </v-btn>
            </div>
          </b-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { blogPosts } from '@/utils/api'
import { categories, types, getCategory, getType } from '@/utils/data'
import SocialIcons from '@/views/parts/SocialIcons'
import CategoriesChips from '@/views/parts/CategoriesChips'

export default {
  name: 'ArticleList',
  components: { CategoriesChips, SocialIcons },
  data() {
    return {
      head: {
        title: '',
        icon: '',
        image: undefined
      },
      articles: [],
      loaded: false,
      page: 1,

      categories,
      types
    }
  },
  mounted() {
    let page

    // allArticles = [...]
    // .filter(...)

    if (this.$route.params.category) {
      let category = getCategory(this.$route.params.category)
      this.head.title = `Catégorie — ${category.name}`
      this.head.icon = category.icon
      this.head.image = `/img/category/${category.id}.png`
      page = {
        type: 'category',
        data: category.id
      }
    } else if (this.$route.params.type) {
      let type = getType(this.$route.params.type)
      this.head.title = `Type — ${type.name}`
      this.head.icon = type.icon
      this.head.image = `/img/type/${type.id}.png`
      page = {
        type: 'type',
        data: type.id
      }
    } else {
      this.head.title = 'Tous les articles'
      this.head.icon = 'mdi-text-box-multiple-outline'
      page = {
        type: 'all'
      }
    }

    let articles
    blogPosts.get().then(response => {
      articles = response.body.data
      switch (page.type) {
      case 'category' :
        this.articles = articles.filter(article => article.category === page.data)
        break
      case 'type' :
        this.articles = articles.filter(article => article.type === page.data)
        break
      default :
        this.articles = articles
        break
      }
      this.loaded = true
    })
  }
}
</script>
