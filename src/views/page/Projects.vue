<template>
  <main>
    <b-top-banner
      title="global.projects"/>
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          lg="7"
          offset-lg="1">
          <v-row>
            <v-col
              v-if="post.length !== 0"
              cols="12"
              md="8"
              offset-md="2">
              <router-link :to="{ name: 'devblog', params: { url: post.url }}">
                <v-img
                  v-ripple
                  :src="post.banner"
                  :alt="post.title"
                  :aspect-ratio="18/9"
                  class="b-card">
                  <v-row
                    style="height: 100%"
                    class="darker-bg text-center pa-3 ma-0"
                    justify="center"
                    align="center">
                    <v-col>
                      <p class="white--text text-center ma-4">Sur notre devblog...</p>
                      <h3 class="text-h3 mb-8 white--text ma-4">{{ post.title }}</h3>
                      <span class="overline white--text">
                        {{ $t('article.publishedBy', { author: post.author.displayname, date: dateToText(post.timestamp) }) }}
                      </span>
                      <span class="overline white--text">{{ post.category }}</span>
                    </v-col>
                  </v-row>
                </v-img>
              </router-link>
            </v-col>
            <v-col
              v-for="project in projects"
              :key="project.name"
              cols="12"
              md="6">
              <b-card>
                <h3
                  class="headline"
                  :class="`${project.color}--text`">
                  <v-icon
                    :color="project.color">
                    {{ project.icon }}
                  </v-icon>
                  {{ $t(`projects.projects.${project.name}.title`) }}
                </h3>
                <v-chip
                  :color="languages[project.language].color"
                  outlined>
                  <v-icon left>{{ languages[project.language].icon }}</v-icon>
                  {{ project.language }}
                </v-chip>
                <p class="text-justify">{{ $t(`projects.projects.${project.name}.description`) }}</p>
                <template #actions>
                  <v-btn
                    v-for="link in project.links"
                    :key="project.name + link.name"
                    :href="link.value"
                    target="_blank"
                    color="darker"
                    text>
                    <v-icon left>{{ icons[link.name] }}</v-icon>
                    {{ $t(`projects.links.${link.name}`) }}
                  </v-btn>
                </template>
              </b-card>
            </v-col>
            <v-col
              :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center'"
              cols="12">
              <v-btn
                href="https://github.com/BecauseOfProg"
                target="_blank"
                class="white--text"
                color="darker">
                <v-icon left>{{ icons['github'] }}</v-icon>
                {{ $t('projects.more') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          lg="3">
          <v-col cols="12">
            <b-card gradient>
              <h3 class="headline white--text">{{ $t('projects.title') }}</h3>
              <p class="text-justify">{{ $t('projects.description') }}</p>
              <template #actions>
                <v-btn
                  text
                  color="white"
                  href="https://github.com/BecauseOfProg">
                  <v-icon left>{{ icons['github'] }}</v-icon>
                  GitHub
                </v-btn>
                <v-btn
                  text
                  color="white"
                  href="https://twitter.com/BecauseOfProg">
                  <v-icon left>{{ icons['twitter'] }}</v-icon>
                  Twitter
                </v-btn>
              </template>
            </b-card>
          </v-col>
          <v-col
            cols="12"
            class="pt-0">
            <b-card>
              <h3 class="headline">{{ $t('projects.blog.title') }}</h3>
              <p class="text-justify">{{ $t('projects.blog.description') }}</p>
              <template #actions>
                <v-btn
                  href="https://github.com/BecauseOfProg/blog"
                  target="_blank"
                  color="darker"
                  text>
                  {{ $t('projects.blog.discover') }}
                </v-btn>
              </template>
            </b-card>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { posts } from '@/utils/api'
import { projects, languages } from '@/utils/data'

export default {
  name: 'Projects',
  data() {
    return {
      icons: {
        documentation: 'mdi-text-box-multiple-outline',
        source: 'mdi-xml',
        discord: 'mdi-discord',
        website: 'mdi-web',
        github: 'mdi-github',
        twitter: 'mdi-twitter'
      },
      post: {},
      projects,
      languages
    }
  },
  mounted() {
    posts.get({url: 'last'}).then(response => {
      this.post = response.body.data
    })
  },
  metaInfo() {
    return {
      title: this.$t('global.projects'),
      meta: [
        {
          property: 'og:title',
          content: this.$t('global.projects')
        },
        {
          property: 'og:description',
          content: this.$t('projects.about')
        }
      ]
    }
  }
}
</script>
