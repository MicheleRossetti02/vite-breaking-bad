<script >
import axios from "axios";

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import CharactersList from './components/CharactersList.vue';
import { store } from './store.js'
export default {
  name: 'App',
  // components: {
  //   CharactersList
  // },

  data() {
    return {
      store,

    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          this.store.characters = response.data
          console.log(store.characters);

        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
  }


}


</script>

<template>
  <!-- 
  <div class="container">
    <div class="row">
      <div class="col" v-for="character in characters">
        <div class="character text-center">
          <img :src="character.img" alt="" class="">
          <h3>{{ character.name }}</h3>
          <div class="category">
            <p class="m-0">{{ character.category }}</p>
          </div>
          <div class="status">
            <p>{{ character.status }}</p>
          </div>
        </div>
      </div> -->
  <!-- <CharactersList>

      </CharactersList> -->
  <!-- 
  </div>
  </div> -->
</template>

<style scoped>

</style>
