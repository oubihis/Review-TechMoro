<template>
  <v-dialog max-width="600px" v-model="newdailog">
    <v-btn flat slot="activator" class="success py-4 block  text-none" href="#">
    <span>Ajouter rewis</span>
    </v-btn>
    <v-card>
      <v-card-title>
          <h1>Ajouter une nouvelle entreprise</h1>
      </v-card-title>
      <v-card-text>
        
        <v-form class="px-3" ref="form">
            <h3 class="mb-4">name of comapny</h3>
            <v-spacer></v-spacer>
            <v-label>Review :</v-label>
            <v-textarea v-model="review" countermaxlength="120" full-widthsingle-line :rules="inputRules" solo flat 
            background-color="grey lighten-3" class="elevation-0"></v-textarea>
            <v-label>your star :</v-label>
              <div class="mb-3">
                <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$vuetify.icons.ratingFull"
                half-increments
                hover
                ></v-rating>
            </div>
            <v-btn dark block class="py-4" color="blue darken-4 white--text py-4 text-none">
              <span>Submit</span>
            </v-btn>
        </v-form>

      </v-card-text>

    </v-card>
  </v-dialog>
</template>


<script>
import db from '@/fb'
export default {
  data() {
    return {
        review:'',
        rating:'',
        loading: false,
        newdailog: false,
    }
  }, 
  methods: {
    submit() {
        if(this.$refs.form.validate()) {
              this.loading = true;
              const data = {
              review: this.review,
              rating: this.rating,
              }
              db.collection('reviews').add(data).then(() => {
              this.loading = false;
              this.newdailog = false;
              this.$emit('reviewAdded');
              })    
            }
        }
    }
}
</script>