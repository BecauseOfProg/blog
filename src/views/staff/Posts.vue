<template>
  <main>
    <b-top-banner
      title="staff.posts.title"
      icon="mdi-file-multiple-outline"/>
    <v-container class="page-body">
      <v-dialog
        v-model="postCreate"
        fullscreen>
        <template #activator="{ on: dialog }">
          <v-tooltip top>
            <template #activator="{ on: tooltip }">
              <v-btn
                color="darker"
                bottom
                fixed
                fab
                right
                v-on="{ ...dialog, ...tooltip }">
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </template>
            <span>Écrire un article</span>
          </v-tooltip>
        </template>
        <v-card>
          <post-create @close="postCreate = false"/>
        </v-card>
      </v-dialog>
    </v-container>
  </main>
</template>

<script>
import PostCreate from '@/views/staff/PostCreate'

export default {
  name: 'Posts',
  components: { PostCreate },
  data() {
    return {
      postCreate: false
    }
  }
}
</script>
