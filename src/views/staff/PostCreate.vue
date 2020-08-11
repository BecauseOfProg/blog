<template>
  <main>
    <b-top-banner
      icon="mdi-text-box-plus-outline"
      title="staff.posts.create.title"/>
    <v-container class="page-body">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.title"
            label="Titre"
            color="light"
            outlined/>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="form.description"
            label="Description"
            color="light"
            outlined/>
        </v-col>
        <v-col
          cols="12"
          md="6">
          <v-select
            v-model="form.category"
            :items="categories.map(category => category.id)"
            label="Catégorie"
            color="light"
            outlined>
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
            label="Type"
            color="light"
            outlined>
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
            label="Lien HTTPS vers la bannière"
            color="light"
            outlined/>
        </v-col>
        <v-col
          cols="12"
          md="6">
          <v-text-field
            v-model="form.labels"
            label="Labels (séparés par une virgule)"
            color="light"
            outlined/>
        </v-col>
        <v-col cols="12">
          <textarea
            id="md-editor"
            cols="250"
            rows="10"
            name="md-editor"/>
        </v-col>
        <v-col
          cols="12"
          class="text-center">
          <v-btn
            :loading="waiting"
            color="darker"
            @click="publish">
            <v-icon left>mdi-publish</v-icon>
            {{ $t('staff.posts.create.publish')}}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { settings, categories, types } from '@/utils/data'

export default {
  name: 'CreateArticle',
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
      simplemde: null,
      waiting: false,

      categories,
      types
    }
  },
  mounted() {
    /* eslint no-undef:0 */
    this.simplemde = new SimpleMDE({element: document.getElementById("md-editor")})
    this.simplemde.value("## Créez votre article grâce au nouvel éditeur Markdown  \nNe vous inquiétez pas, l'éditeur est simple à prendre en main. Bonne rédaction!")
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
          message: 'staff.posts.create.success'
        })
      }, error => {
        console.log(error)
        this.waiting = false
        this.SHOW_SNACKBAR({
          error: true,
          message: 'staff.posts.create.error'
        })
      })
    }
  }
}
</script>
