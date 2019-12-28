<template>
  <main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <b-card>
            <template #image>
              <v-img
                src="https://i.cdn.becauseofprog.fr/cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/new-banner.png?w=724.167"
                height="200px">
                <h1 class="white--text shadow">À propos de nous</h1>
              </v-img>
            </template>
            <p>La BecauseOfProg, c'est plusieurs développeurs rassemblés autour de projets communs, dont ce blog,
              depuis février 2017. Nous souhaitons avant tout nous améliorer dans divers domaines (développement,
              administration système, sécurité informatique...) et partager nos passions. Sur ce blog, nous partageons
              nos trouvailles, nos projets, notre point de vue.</p>
            <template #actions>
              <v-btn text>En savoir plus</v-btn>
            </template>
          </b-card>
        </v-col>
        <v-col cols="12">
          <b-card gradient>
            <h1>Les projets BecauseOfProg</h1>
            <p>BecauseOfProg, c'est une équipe de développeurs créant divers projets</p>
            <template #actions>
              <v-btn text>Voir</v-btn>
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
