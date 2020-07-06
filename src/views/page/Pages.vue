<template>
  <main>
    <v-container class="page-body">
      <v-row>
        <v-col cols="12">
          <b-card>
            <template #image>
              <v-img
                src="https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/new-banner.png?w=724.167"
                height="200px">
                <h1 class="white--text shadow">{{ $t('pages.aboutUs') }}</h1>
              </v-img>
            </template>
            <p>{{ $t('pages.message') }}</p>
            <template #actions>
              <v-btn text>{{ $t('global.more') }}</v-btn>
            </template>
          </b-card>
        </v-col>
        <v-col cols="12">
          <b-card gradient>
            <h1>{{ $t('pages.projects') }}</h1>
            <p>{{ $t('pages.projectsMessage') }}</p>
            <template #actions>
              <v-btn text>{{ $t('pages.see') }}</v-btn>
            </template>
          </b-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  name: 'Pages'
}
</script>
