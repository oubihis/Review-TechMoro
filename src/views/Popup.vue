<template>
  <v-dialog max-width="600px" v-model="formdailog">
    <v-btn flat slot="activator" class="light-blue darken-4 white--text py-4 text-none" href="#">
    <span>Ajouter Entreprise</span>
    </v-btn>
    <v-card>
      <v-card-title>
          <h1>Ajouter une nouvelle entreprise</h1>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
            <v-label>Name of company :</v-label>
            <v-text-field v-model="title" :rules="inputRules" solo flat background-color="grey lighten-3" class="elevation-0"></v-text-field>
            <v-label>Website :</v-label>
            <v-text-field v-model="website" :rules="inputRules" solo flat background-color="grey lighten-3" class="elevation-0 my-1"></v-text-field>
            <v-label>City :</v-label>
            <v-text-field v-model="city" :rules="inputRules" solo flat background-color="grey lighten-3" class="elevation-0"></v-text-field>
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
        title:'',
        website:'',
        city:'',
        inputRules: [
            validation => !!validation  || 'This field is required',
            validation => validation .length >= 2 || 'Minimum length is 2 characters'
        ],
        loading: false,
        formdailog: false,
    }
  }, 
  methods: {
    submit() {
        if(this.$refs.form.validate()) {
              this.loading = true;
              const data = {
              title: this.title,
              website: this.website,
              city: this.city,
              }
              db.collection('projects').add(data).then(() => {
              this.loading = false;
              this.formdailog = false;
              this.$emit('companyAdded');
              })    
            }
        }
    }
}
</script>