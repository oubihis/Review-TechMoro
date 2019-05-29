<template>
  <v-app class="grey lighten-4">

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Waw Merci</span>
      <v-btn color="white" flat @click="snackbar = false">
        x
      </v-btn>
    </v-snackbar>



    <v-toolbar disable-resize-watcher height="80" class="white">
      <v-toolbar-title class="headline text-uppercase">
        <span>TechRev </span>
        <span class="font-weight-light ">Au Maroc</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <Popup @companyAdded="snackbar = true"/>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
      <LatestReviews></LatestReviews>
    </v-content>
    
    <v-footer dark height="auto">
        <v-card class="flex" flat tile>
          <v-card-actions class="grey darken-3 justify-center">
            &copy;2019 — <strong>Morocco</strong>
          </v-card-actions>
        </v-card>
      </v-footer>

  </v-app>
</template>



<script>
import Popup from './views/Popup'
import LatestReviews from './components/LatestReviews'
export default {
  components: { Popup, LatestReviews, },

  name: 'App',
  data () {
    return {
      snackbar: false,
    }
  }
}
</script>
