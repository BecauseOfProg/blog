<template>
  <main>
    <template v-if="loaded">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 650 : 500"
        :src="publication.banner"
        dark
      >
        <v-row
          align="center"
          justify="center"
          class="darker-bg"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <span
              id="title"
              class="display-3 white--text ml-2 mr-2"
            >
              {{ publication.title }}
            </span>
          </v-col>
          <v-col
            class="pl-10 pr-10 mt-n16"
            cols="12"
            lg="8"
          >
            <b-card class="bordered">
              <span
                style="font-size: 22px"
                class="font-weight-bold"
              >« {{ publication.description }} »</span>
              <template #actions>
                <v-row>
                  <v-col cols="6">
                    <v-tooltip
                      v-for="share in shares"
                      :key="share.name + 'badge'"
                      bottom
                    >
                      <template #activator="{ on }">
                        <v-btn
                          :color="share.color"
                          :href="share.link"
                          target="_blank"
                          icon
                          v-on="on"
                        >
                          <v-icon>{{ share.icon }}</v-icon>
                        </v-btn>
                      </template>
                      <span>{{ share.name }}</span>
                    </v-tooltip>
                  </v-col>
                  <v-col
                    cols="6"
                    class="mt-2 text-right"
                  >
                    <v-icon
                      left
                      :color="$vuetify.theme.dark ? 'grey' : null"
                      class="mt-n1 mr-n0"
                    >
                      {{ mdiClockOutline }}
                    </v-icon>
                    <span :class="!$vuetify.theme.dark ? 'grey--text text--darken-2' : 'grey--text'">
                      {{ $t('publication.publishedBy', {
                        author: publication.author.displayname,
                        date: timestampToText(publication.timestamp)
                      }) }}
                    </span>
                  </v-col>
                </v-row>
              </template>
            </b-card>
          </v-col>
        </v-row>
      </v-parallax>
      <v-container class="page-body">
        <v-row justify="center">
          <v-col
            cols="12"
          >
            <b-card
              id="publication-content"
              class="bordered"
            >
              <nuxt-content
                class="pb-2"
                :document="publication"
              />
              <v-divider />
              <div class="text-center">
                <br><h3 class="headline mb-2 text--text">
                  {{ $t('publication.sharePublication') }}
                </h3>
                <v-btn
                  v-for="share in shares"
                  :key="share.name"
                  :color="share.color"
                  :href="share.link"
                  target="_blank"
                  class="ma-1"
                  outlined
                >
                  <v-icon left>
                    {{ share.icon }}
                  </v-icon>
                  {{ share.name }}
                </v-btn>
                <br><br><v-divider /><br>
                <h2 class="headline mb-2 text--text">
                  {{ $t('publication.published') }}
                </h2>
                <v-chip v-if="type">
                  <v-icon left>
                    {{ type.icon }}
                  </v-icon>
                  {{ $t(`types.${type.id}`) }}
                </v-chip>
                <v-chip v-if="category">
                  <v-icon left>
                    {{ category.icon }}
                  </v-icon>
                  {{ $t(`categories.${category.id}`) }}
                </v-chip>
                <v-chip
                  v-for="label in publication.labels"
                  :key="label"
                >
                  {{ label }}
                </v-chip>
              </div>
            </b-card>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col
                cols="12"
                lg="7"
                offset-lg="1"
              >
                <v-row>
                  <v-col
                    cols="12"
                    class="pt-0"
                  >
                    <member-card :member="publication.author" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="12"
                lg="3"
              >
                <v-row>
                  <v-col
                    cols="12"
                    class="pt-0"
                  >
                    <b-card>
                      <h3 class="headline darker--text">
                        {{ $t('global.socialNetworks') }}
                      </h3>
                      <p class="mb-3">
                        {{ $t('global.socialNetworksMessage') }}
                      </p>
                      <social-icons big />
                    </b-card>
                  </v-col>
                  <v-col
                    cols="12"
                    class="pt-0"
                  >
                    <b-card>
                      <h3 class="headline darker--text">
                        {{ $t('global.about') }}
                      </h3>
                      <p>{{ $t('global.aboutMessage') }}</p>
                    </b-card>
                  </v-col>
                  <v-col
                    cols="12"
                    class="pt-0"
                  >
                    <b-card gradient>
                      <h3 class="headline white--text">
                        {{ $t('publication.links') }}
                      </h3>
                      <p>{{ $t('publication.linksMessage') }}</p>
                      <template #actions>
                        <v-btn
                          text
                          color="white"
                          href="https://twitter.com/BecauseOfProg"
                        >
                          <v-icon left>
                            {{ mdiTwitter }}
                          </v-icon>
                          Twitter
                        </v-btn>
                        <v-btn
                          text
                          color="white"
                          href="#!"
                        >
                          <v-icon left>
                            {{ mdiRss }}
                          </v-icon>
                          RSS
                        </v-btn>
                      </template>
                    </b-card>
                  </v-col>
                  <v-col
                    cols="12"
                    class="pt-0"
                  >
                    <b-card>
                      <h3 class="headline darker--text">
                        {{ $t('publication.categories') }}
                      </h3>
                      <categories-chips />
                    </b-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <b-loading-screen v-else />
  </main>
</template>

<script>
import { mdiTwitter, mdiRss, mdiClockOutline, mdiFacebook, mdiAsterisk, mdiMastodon, mdiEmailOutline } from '@mdi/js'
import { mapActions } from 'vuex'
import { categories, types, getCategory, getType } from '@/utils/data'

export default {
  name: 'Publication',
  data () {
    return {
      publication: {},
      loaded: false,
      categories,
      types,
      mdiClockOutline,
      mdiTwitter,
      mdiRss
    }
  },
  async fetch () {
    const id = this.$route.params.id
    const publication = await this.$content('blog-posts', id).fetch()
    publication.id = id
    publication.author = await this.$content('members', publication.authorId).fetch()
    this.publication = publication
    this.loaded = true
  },
  head () {
    if (this.loaded) {
      return {
        title: this.publication.title,
        meta: [
          {
            property: 'og:title',
            content: this.publication.title,
            hid: 'og:title'
          },
          {
            property: 'description',
            content: this.publication.description,
            hid: 'description'
          },
          {
            property: 'og:description',
            content: this.publication.description,
            hid: 'og:description'
          },
          {
            property: 'og:image',
            content: this.publication.banner,
            hid: 'og:image'
          },
          {
            name: 'author',
            content: `${this.publication.author.displayname} (@${this.publication.author.username})`,
            hid: 'author'
          }
        ]
      }
    }
  },
  computed: {
    category () {
      return getCategory(this.publication.category)
    },
    type () {
      return getType(this.publication.type)
    },
    shares () {
      if (this.loaded) {
        return [
          {
            name: 'Twitter',
            icon: mdiTwitter,
            color: 'blue lighten-2',
            link: `https://twitter.com/intent/tweet?url=https://becauseofprog.fr/article/${this.publication.id}&text=${this.publication.title} (via @BecauseOfProg)`
          },
          {
            name: 'Facebook',
            icon: mdiFacebook,
            color: 'blue darken-4',
            link: `https://www.facebook.com/sharer/sharer.php?u=https://becauseofprog.fr/article/${this.publication.id}`
          },
          {
            name: 'Diaspora',
            icon: mdiAsterisk,
            color: 'purple darken-2',
            link: `https://share.diasporafoundation.org/?title=${this.publication.title}&url=https://becauseofprog.fr/article/${this.publication.id}`
          },
          {
            name: 'Mastodon',
            icon: mdiMastodon,
            color: 'blue darken-2',
            link: `web+mastodon://share?text=${this.publication.title}%20-%20https://becauseofprog.fr/article/${this.publication.id}`
          },
          {
            name: 'Mail',
            icon: mdiEmailOutline,
            color: 'dark',
            link: `mailto:?subject=${this.publication.title}&body=${this.publication.description} Via BecauseOfProg : https://becauseofprog.fr/article/${this.publication.id}`
          }
        ]
      } else { return [] }
    }
  },
  mounted () {
    this.addReadPublication(this.publication.id)
  },
  methods: {
    ...mapActions('read-publications', ['addReadPublication'])
  }
}
</script>

<style>
@media screen and (max-width: 500px) {
  #title {
    font-size: 40px !important;
  }
}
</style>
