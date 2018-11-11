<template>
  <v-flex 
    xs12 
    sm6 
    md4 
    lg3>
    <v-card style="cursor: pointer;">
      <v-card-media 
        :src="article.banner" 
        height="200px">
        <v-tooltip bottom>
          <v-btn 
            slot="activator" 
            color="primary" 
            dark 
            small 
            fab>
            <v-icon>{{ article.type.icon }}</v-icon>
          </v-btn>
          <span>{{ article.type.name }}</span>
        </v-tooltip>
      </v-card-media>

      <v-card-title primary-title>
        <div>
          <h3
            class="headline mb-0"
            @click="goto()">{{ article.title }}</h3>
          <div>{{ article.description }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-layout 
          row 
          wrap>
          <v-chip>
            <v-avatar>
              <img :src="article.author.avatar">
            </v-avatar>
            {{ article.author.name }}
          </v-chip>
          <v-chip>
            <v-avatar>
              <v-icon>mdi-clock-outline</v-icon>
            </v-avatar>
            {{ article.date }}
          </v-chip>
          <v-chip :color="article.category.color + ' white--text'">
            <v-avatar>
              <v-icon>{{ article.category.icon }}</v-icon>
            </v-avatar>
            {{ article.category.name }}
          </v-chip>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    article: Object
  },
  computed: {
    ...mapGetters(['getOneType', 'getOneCategory'])
  },
  mounted () {
    this.article.type = this.getOneType(this.article.type)[0]
    this.article.category = this.getOneCategory(this.article.category)[0]
  },
  methods: {
    goto () {
      this.$router.push({ name: 'article', params: { article: this.article.url }})
    }
  }
}
</script>

<style>
</style>
