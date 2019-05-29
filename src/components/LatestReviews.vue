
<template>
    <v-container grid-list-md>

      <v-layout row wrap align-center justify-center  v-for="project in projects" :key="project.item">
        <v-flex  xs12 sm6 md2>
            <h4>{{ project.title }}</h4>
            <v-spacer></v-spacer>
            <span>{{ project.website }}</span>
            <v-spacer></v-spacer>
            <span>{{ project.city }}</span>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
            <p> 
                {{ project.review }}
            </p>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
            <div class="text-xs-center">
                <v-rating class="disabled"
                v-model= "project.rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$vuetify.icons.ratingFull"
                half-increments
                hover
                readonly
                >
              
              </v-rating>
            </div>
        </v-flex>
        <v-flex d-flex xs12 sm6 md4>
            <div>
                <v-btn color="info py-4 block  text-none">Voir Plus</v-btn>
                <Addnew @reviewAdded="snackbar = true"/>
                <v-btn color="error py-4 block  text-none">Reporting</v-btn>
            </div>
        </v-flex>

      </v-layout>
    </v-container>
</template>

<script>
import Addnew from '@/views/Addnew'
import db from '@/fb'
export default {
    components: { Addnew},
  data() {
    return {
      projects: [],
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          })
        }  
      })
    })
  }
}
</script>



