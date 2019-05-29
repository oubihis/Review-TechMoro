<template>
  <v-dialog max-width="600px" v-model="formreviews">
    <v-btn flat slot="activator" class="light-blue darken-4 white--text py-4 text-none" href="#">
    <span>Ajouter reviews</span>
    </v-btn>
    <v-card>
      <v-card-title>
          <h1>Ajouter une nouvelle entreprise</h1>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="reviewform">
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
            <v-btn dark block class="py-4" color="blue darken-4 white--text py-4 text-none" @click="submit" :loading="loading">
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
        inputRules: [
            validation => !!validation  || 'This field is required',
            validation => validation .length >= 2 || 'Minimum length is 2 characters'
        ],
        loading: false,
        formreviews: false,
    }
  }, 
  methods: {
    submit() {
        if(this.$refs.reviewform.validate()) {
              this.loading = true;
              const data = {
              review: this.review,
              rating: this.rating,
              }
              db.collection('reviews').add(data).then(() => {
              this.loading = false;
              this.formreviews = false;
              this.$emit('companyAdded');
              })    
            }
        }
    }
}
</script>