<script>
// import CharactersList from "./components/CharactersList.vue";
import { store } from '../store'
import CharacterList from './CharacterList.vue';
import axios from "axios";


export default {
    name: "AppMain",
    components: {
        CharacterList,
    },
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
                    this.store.loading = false
                    console.log(store.characters);

                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    },
    mounted() {
        this.callApi(this.store.API_URL)
    }

}
</script>

<template>
    <main>
        <!-- <h5>Found {{ store.characters.length }} characters</h5> -->
        <div class="characters_list p-3">


            <CharacterList> </CharacterList>
        </div>


    </main>
</template>

<style scoped>
.main {
    width: 100%;
}

.character {
    width: 100%;
}

.characters_list {

    background-color: white;
}

img {
    width: 100%;
}
</style>