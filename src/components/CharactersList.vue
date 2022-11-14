<script >

import { store } from '../store.js'

export default {
    components: 'CharactersList',

    data() {
        return {
            store,
        }
    },
}


</script>

<template>
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
    </div>

</template>

<style scoped>

</style>
