<template>
  <main>
    <b-top-banner
      icon="mdi-file-multiple-outline"
      title="staff.publications.title"/>
    <v-container class="page-body">
      <v-dialog
        v-model="publicationCreate"
        fullscreen>
        <template #activator="{ on: dialog }">
          <v-tooltip top>
            <template #activator="{ on: tooltip }">
              <v-btn
                bottom
                color="darker"
                fab
                fixed
                right
                v-on="{ ...dialog, ...tooltip }">
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </template>
            <span>Rédiger une publication</span>
          </v-tooltip>
        </template>
        <v-card>
          <publication-create @close="publicationCreate = false"/>
        </v-card>
      </v-dialog>
    </v-container>
  </main>
</template>

<script>
import PublicationCreate from '@/views/staff/PublicationCreate.vue'

export default {
  name: 'Publications',
  components: {PublicationCreate},
  data() {
    return {
      publicationCreate: false
    }
  }
}
</script>
