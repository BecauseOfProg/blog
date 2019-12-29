<template>
  <main>
    <v-app-bar
      style="margin-top: 56px"
      class="semi-transparent"
      app>
      <v-btn
        v-for="category in categories"
        :key="category.id"
        :to="`/category/${category.id}`"
        color="white"
        text>
        <v-icon left>{{ category.icon }}</v-icon>
        {{ category.name }}
      </v-btn>
      <v-btn
        v-for="type in types"
        :key="type.id"
        :to="`/type/${type.id}`"
        color="white"
        text>
        <v-icon left>{{ type.icon }}</v-icon>
        {{ type.name }}
      </v-btn>
    </v-app-bar>
    <v-carousel
      height="400px"
      interval="4000"
      hide-delimiter-background
      cycle>
      <v-carousel-item
        v-for="item in carousel"
        :key="item.title"
        :src="item.background == null ? '' : item.background"
        class="gradient">
        <v-row
          style="flex-direction: column"
          class="fill-height white--text"
          align="center"
          justify="center">
          <span class="display-2">{{ item.title }}</span>
          <span class="headline">{{ item.subtitle }}</span>
          <v-btn
            v-if="item.button != null"
            :to="item.button.link"
            color="white--text"
            class="gradient normal-weight">
            {{ item.button.label }}
          </v-btn>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <b-card to="/article/activer-serveur-ssh-gitea-gogs">
        <v-row>
          <v-col
            cols="12"
            md="6">
            <v-img src="https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/articles/gitea-gogs-ssh.png?w=617.5"/>
          </v-col>
          <v-col
            cols="12"
            md="6">
            <v-btn
              color="white--text"
              class="gradient">
              <v-icon left>mdi-clock-outline</v-icon>
              Nouveau!
            </v-btn>
            <h1 class="display-3 black--text">Comment activer le serveur SSH de Gitea ou de Gogs ?</h1>
            <p>Voici comment configurer le serveur SSH intégré dans Gogs et Gitea, pour pouvoir gérer et mettre à jour vos dépôts en toute simplicité, comme sur GitHub.</p>
          </v-col>
        </v-row>
      </b-card>
    </v-container>
  </main>
</template>

<script>
import { categories, types } from '@/utils/data'

export default {
  name: 'Home',
  data () {
    return {
      carousel: [
        {
          background: null,
          title: 'BecauseOfProg',
          subtitle: 'Blog autour de la programmation créé par des passionnés',
          button: null
        },
        {
          background: 'https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/syst-images/dev.jpg?w=1920',
          title: 'Nos projets',
          subtitle: 'Nous mettons à disposition outils et services gratuits',
          button: {
            label: 'En savoir plus',
            link: '/page/projects'
          }
        },
        {
          background: 'https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/logos/v2-site.png?w=1920',
          title: 'Sur notre devblog...',
          subtitle: 'La V2 du site !',
          button: {
            label: 'Voir!',
            link: '/article/v2-site-bop'
          }
        },
      ],

      categories,
      types,
    }
  }
}
</script>
