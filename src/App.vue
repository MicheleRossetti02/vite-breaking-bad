<script>

import axios from "axios";
import { store } from './store.js';
import AppHeader from "./components/AppHeader.vue";
import AppMain from './components/AppMain.vue';
import AppFooter from "./components/AppFooter.vue";
import SelectBox from './components/SelectBox.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    SelectBox
  },

  data() {
    return {
      store,
    }
  },
  methods: {
    callApi(url) {
      console.log(url);
      axios.get(url)
        .then(response => {
          console.log(response);
          this.store.characters = response.data
          this.store.loading = false

        })
        .catch(err => {
          console.log(err.message);
        })
    },
    searchSeries() {

      //   // const categoryUrl = 'https://www.breakingbadapi.com/api/characters?category='
      //   // this.store.API_URL = categoryUrl + this.store.searchText
      console.log('cerco ' + this.store.searchText);

      //   // axios.get(categoryUrl + this.store.searchText)
      //   //   .then(response => {
      //   //     this.store.characters = response.data
      //   //     this.store.loading = false
      //   //   })


    },

  },
  mounted() {
    this.callApi(this.store.API_URL)
  }

}


</script>

<template>
  <div class="container">
    <AppHeader />

    <SelectBox @searchData="searchSeries" />

    <AppMain />

    <AppFooter />

  </div>


</template>



<style scoped>

</style>
