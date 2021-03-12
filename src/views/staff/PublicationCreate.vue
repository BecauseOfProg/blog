<template>
  <main>
    <b-top-banner
      icon="mdi-text-box-plus-outline"
      title="staff.publications.create.title"/>
    <v-container class="page-body">
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="form.title"
              :rules="rule"
              color="light"
              label="Titre"
              outlined
              required/>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="form.description"
              :rules="rule"
              color="light"
              label="Description"
              outlined
              required/>
          </v-col>
          <v-col
            cols="12"
            md="6">
            <v-select
              v-model="form.category"
              :items="categories.map(category => category.id)"
              :rules="rule"
              color="light"
              label="Catégorie"
              outlined
              required>
              <template #item="{ item }">
                {{ $t(`categories.${item}`) }}
              </template>
              <template #selection="{ item }">
                {{ $t(`categories.${item}`) }}
              </template>
            </v-select>
          </v-col>
          <v-col
            cols="12"
            md="6">
            <v-select
              v-model="form.type"
              :items="types.map(type => type.id)"
              :rules="rule"
              color="light"
              label="Type"
              outlined
              required>
              <template #item="{ item }">
                {{ $t(`types.${item}`) }}
              </template>
              <template #selection="{ item }">
                {{ $t(`types.${item}`) }}
              </template>
            </v-select>
          </v-col>
          <v-col
            cols="12"
            md="6">
            <v-text-field
              v-model="form.banner"
              :rules="rule"
              color="light"
              label="Lien HTTPS vers la bannière"
              outlined
              required/>
          </v-col>
          <v-col
            cols="12"
            md="6">
            <v-text-field
              v-model="form.labels"
              :rules="rule"
              color="light"
              label="Mots-clés (séparés par une virgule)"
              outlined
              required/>
          </v-col>
          <v-col cols="12">
            <textarea
              id="md-editor"
              cols="250"
              name="md-editor"
              rows="10"/>
          </v-col>
          <v-col
            class="text-center"
            cols="12">
            <v-btn
              :disabled="!valid"
              :loading="waiting"
              color="darker"
              @click="publish">
              <v-icon left>mdi-publish</v-icon>
              {{ $t('staff.publications.create.publish') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-btn
        bottom
        color="darker"
        fab
        fixed
        right
        @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-container>
  </main>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {categories, settings, types} from '@/utils/data'

export default {
  name: 'CreatePublication',
  data() {
    return {
      form: {
        title: '',
        type: '',
        category: '',
        description: '',
        labels: '',
        banner: ''
      },
      rule: [v => !!v || 'Le champ est requis'],
      valid: false,
      simplemde: null,
      waiting: false,

      categories,
      types
    }
  },
  mounted() {
    /* eslint no-undef:0 */
    this.simplemde = new SimpleMDE({element: document.getElementById("md-editor")})
    this.simplemde.value("## Créez votre publication grâce au nouvel éditeur Markdown  \nNe vous inquiétez pas, l'éditeur est simple à prendre en main. Bonne rédaction!")
  },
  computed: mapState(['user']),
  methods: {
    ...mapMutations(['SHOW_SNACKBAR']),
    publish() {
      this.waiting = true
      let data = {
        title: this.form.title,
        type: this.form.type,
        category: this.form.category,
        description: this.form.description,
        labels: this.form.labels.split(','),
        banner: this.form.banner,
        content: this.simplemde.value()
      }

      /*eslint no-unused-vars:0*/
      this.$http.post(
        settings.api + '/blog-posts',
        data,
        {
          headers: {
            Authorization: this.user.token
          }
        }
      ).then(_ => {
        this.waiting = false
        this.SHOW_SNACKBAR({
          error: false,
          message: 'staff.publications.create.success'
        })
      }, error => {
        console.log(error)
        this.waiting = false
        this.SHOW_SNACKBAR({
          error: true,
          message: 'staff.publications.create.error'
        })
      })
    }
  }
}
</script>
