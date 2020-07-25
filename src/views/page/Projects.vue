<template>
  <main>
    <b-top-banner
      title="global.projects"
      icon="mdi-package-variant"/>
    <v-container class="page-body">
      <v-row>
        <v-col
          cols="12"
          lg="7"
          offset-lg="1">
          <v-row>
            <v-col
              v-for="project in projects"
              :key="project.name"
              cols="12"
              md="6">
              <b-card>
                <h3 class="headline">{{ $t(`projects.projects.${project.name}.title`) }}</h3>
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
              class="text-right"
              cols="12">
              <v-btn
                href="https://github.com/BecauseOfProg"
                target="_blank"
                class="white--text"
                color="darker">
                <v-icon left>mdi-github</v-icon>
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
                  GitHub
                </v-btn>
                <v-btn
                  text
                  color="white"
                  href="https://twitter.com/BecauseOfProg">
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
import { projects } from '@/utils/data'

export default {
  name: 'Projects',
  data() {
    return {
      icons: {
        documentation: 'mdi-text-box-multiple-outline',
        source: 'mdi-xml',
        discord: 'mdi-discord',
        website: 'mdi-web'
      },
      projects
    }
  }
}
</script>
