<template>
  <div class="home my-2" >
    <v-container fluid>
      <h1 class="mb-3 text-xs-center">Look for the company you will be working on</h1>
      <v-layout row wrap align-center justify-center fill-height class="mb-3">
        <v-flex v-for="i in 1" :key="`6${i}`" xs12 md6>
          <div class="resultContainer">
            <v-layout light class="my">
              <v-autocomplete
                v-model="select"
                :loading="loading"
                :items="items"
                :search-input.sync="search"
                cache-items
                class="mx-3"
                flat
                hide-no-data
                hide-details
                label="Cherche votre agance"
                prepend-inner-icon="search"
                color="blue accent-4"
                solo-inverted
                append-icon=""
                background-color="white"
              ></v-autocomplete>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>




<script>
  export default {
    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        states: []
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      }
    },
    methods: {
      querySelections (v) {
        this.loading = true
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
            
          })
          this.loading = false
        }, 500)
      }
    }
  }
</script>

<style>
.my input {
    color: #212121!important;
};
</style>
