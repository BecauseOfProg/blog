<template>
  <main>
    <b-top-banner
      title="global.projects"
    />
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          lg="7"
          offset-lg="1"
        >
          <v-row>
            <v-col
              v-if="devblog.length !== 0"
              cols="12"
              md="8"
              offset-md="2"
            >
              <router-link :to="{ name: 'devblog-id', params: { id: devblog.id }}">
                <v-img
                  v-ripple
                  :alt="devblog.title"
                  :aspect-ratio="18/9"
                  :src="devblog.banner"
                  class="b-card"
                >
                  <v-row
                    align="center"
                    class="darker-bg text-center pa-3 ma-0"
                    justify="center"
                    style="height: 100%"
                  >
                    <v-col>
                      <p class="white--text text-center ma-4">
                        Sur notre devblog...
                      </p>
                      <h3 class="text-h3 mb-8 white--text ma-4">
                        {{ devblog.title }}
                      </h3>
                      <span v-if="devblog.author" class="overline white--text">
                        {{
                          $t('publication.publishedBy', {
                            author: devblog.author.displayname,
                            date: timestampToText(devblog.timestamp)
                          })
                        }}
                      </span>
                      <span class="overline white--text">{{ devblog.category }}</span>
                    </v-col>
                  </v-row>
                </v-img>
              </router-link>
            </v-col>
            <v-col
              v-for="project in projects"
              :key="project.name"
              cols="12"
              md="6"
            >
              <b-card>
                <h3
                  :class="`${project.color}--text`"
                  class="headline"
                >
                  <v-icon
                    :color="project.color"
                  >
                    {{ project.icon }}
                  </v-icon>
                  {{ $t(`projects.projects.${project.name}.title`) }}
                </h3>
                <v-chip
                  :color="languages[project.language].color"
                  outlined
                >
                  <v-icon left>
                    {{ languages[project.language].icon }}
                  </v-icon>
                  {{ project.language }}
                </v-chip>
                <p class="text-justify">
                  {{ $t(`projects.projects.${project.name}.description`) }}
                </p>
                <template #actions>
                  <v-btn
                    v-for="link in project.links"
                    :key="project.name + link.name"
                    :href="link.value"
                    color="darker"
                    target="_blank"
                    text
                  >
                    <v-icon left>
                      {{ icons[link.name] }}
                    </v-icon>
                    {{ $t(`projects.links.${link.name}`) }}
                  </v-btn>
                </template>
              </b-card>
            </v-col>
            <v-col
              :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-center'"
              cols="12"
            >
              <v-btn
                class="white--text"
                color="darker"
                href="https://github.com/BecauseOfProg"
                target="_blank"
              >
                <v-icon left>
                  {{ icons['github'] }}
                </v-icon>
                {{ $t('projects.more') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          lg="3"
        >
          <v-col cols="12">
            <b-card gradient>
              <h3 class="headline white--text">
                {{ $t('projects.title') }}
              </h3>
              <p class="text-justify">
                {{ $t('projects.description') }}
              </p>
              <template #actions>
                <v-btn
                  color="white"
                  href="https://github.com/BecauseOfProg"
                  text
                >
                  <v-icon left>
                    {{ icons['github'] }}
                  </v-icon>
                  GitHub
                </v-btn>
                <v-btn
                  color="white"
                  href="https://twitter.com/BecauseOfProg"
                  text
                >
                  <v-icon left>
                    {{ icons['twitter'] }}
                  </v-icon>
                  Twitter
                </v-btn>
              </template>
            </b-card>
          </v-col>
          <v-col
            class="pt-0"
            cols="12"
          >
            <b-card>
              <h3 class="headline">
                {{ $t('projects.blog.title') }}
              </h3>
              <p class="text-justify">
                {{ $t('projects.blog.description') }}
              </p>
              <template #actions>
                <v-btn
                  color="darker"
                  href="https://github.com/BecauseOfProg/blog"
                  target="_blank"
                  text
                >
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
import { languages, projects } from '@/utils/data'

export default {
  name: 'Projects',
  data () {
    return {
      icons: {
        documentation: 'mdi-text-box-multiple-outline',
        source: 'mdi-xml',
        discord: 'mdi-discord',
        website: 'mdi-web',
        github: 'mdi-github',
        twitter: 'mdi-twitter'
      },
      devblog: {},
      projects,
      languages
    }
  },
  async fetch () {
    const devblog = (await this.$content('devblogs').without(['body']).sortBy('timestamp', 'desc').limit(1).fetch())?.[0]
    if (devblog) {
      devblog.id = devblog.slug
      this.devblog = devblog
    }
  },
  head () {
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
