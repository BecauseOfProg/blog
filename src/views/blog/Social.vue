<template>
  <main>
    <b-top-banner
      title="Réseaux sociaux et liens"
      icon="mdi-rss"/>
    <v-container class="px-0">
      <v-row
        class="ma-0"
        wrap>
        <v-col
          class="px-0"
          cols="12">
          <v-list style="background-color: inherit">
            <template v-for="post in posts">
              <v-divider :key="post.text"/>
              <v-list-item
                :key="post.text"
                :href="post.link"
                target="_blank">
                <v-list-item-icon>
                  <v-icon :color="types[post.type].color">{{ types[post.type].icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ post.text }}</v-list-item-title>
                  <v-img
                    v-for="image in post.images"
                    :key="image"
                    :src="image"
                    max-width="600px"/>
                  <v-list-item-subtitle>{{ post.date }} -
                    <a
                      :href="types[post.type].profile === null ? `https://${post.author}` : types[post.type].profile"
                      target="_blank">
                      {{ post.author }}
                    </a>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  name: 'Social',
  data () {
    return {
      types: {
        twitter: {
          name: 'Twitter',
          icon: 'mdi-twitter',
          color: 'light-blue',
          profile: 'https://twitter.com/BecauseOfProg'
        },
        instagram: {
          name: 'Instagram',
          icon: 'mdi-instagram',
          color: 'pink',
          profile: 'https://instagram.com/BecauseOfProg'
        },
        mastodon: {
          name: 'Mastodon',
          icon: 'mdi-twitter',
          color: 'teal',
          profile: 'https://mstdn.io/@bop'
        },
        link: {
          name: 'Lien BecauseOfProg',
          icon: 'mdi-link-variant',
          color: 'grey',
          profile: null
        },
      },
      posts: [
        {
          type: 'twitter',
          date: 'samedi 28 décembre 2019',
          author: 'BecauseOfProg',
          text:
            'Ça y est, nous sommes certifiés créateurs sur Brave Rewards ! 🎉\n' +
            'Si vous utilisez #Brave, vous pouvez ajouter http://becauseofprog.fr dans vos contributions auto 😉' +
            'Sinon, voici un petit referral qui nous permet de financer le site sans pub, ça c\'est cool : https://brave.com/bec202',
          images: ['https://pbs.twimg.com/media/EAyuUxHW4AcOk4b?format=png&name=small'],
          link: 'https://twitter.com/BecauseOfProg/status/1156491479000461313?s=20'
        },
        {
          type: 'link',
          author: 'nextinpact.com',
          date: 'vendredi 27 décembre 2019',
          text: 'Progressive Web Apps : utilité, installation et gestion dans des environnements fixes et mobiles',
          images: [],
          link: 'https://www.nextinpact.com/news/108095-progressive-web-apps-utilite-installation-et-gestion-dans-environnements-fixes-et-mobiles.htm'
        },
        {
          type: 'instagram',
          date: 'jeudi 26 décembre 2019',
          author: 'BecauseOfProg',
          text: '',
          images: [
            'https://instagram.fcdg1-1.fna.fbcdn.net/v/t51.2885-15/e35/65557014_154951648991715_6637965928963730124_n.jpg?_nc_ht=instagram.fcdg1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=_TF-Qk4miZcAX8YLwqp&oh=c7d738fd04fd5eb570a0577ef6474376&oe=5E92C34B',
            'https://instagram.fcdg1-1.fna.fbcdn.net/v/t51.2885-15/e35/66208783_1198502910345761_8236698215533588301_n.jpg?_nc_ht=instagram.fcdg1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=WXYTOk8XkIUAX9yi7P4&oh=92ec25bb9bfa375c6114e0d97a920056&oe=5E992744'
          ],
          link: 'https://www.instagram.com/p/B0psaqgAcZC/'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.v-list-item
  padding: 0 28px
.v-list-item__title
  white-space: initial
</style>
