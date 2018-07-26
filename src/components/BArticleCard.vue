<template>
  <v-flex xs12 sm6 md4 lg3>
    <v-card>
      <v-card-media :src="article.banner" height="200px">
        <v-btn color="primary" dark small fab>
          <v-icon>description</v-icon>
        </v-btn>
      </v-card-media>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ article.title }}</h3>
          <div>{{ article.description }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-layout row wrap>
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
            Il y a {{ article.distance_to_now }}
          </v-chip>
          <div v-for="tag in article.tags" :key="tag">
            <v-chip>{{ tag }}</v-chip>
          </div>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style>
</style>
