<script>
// import CharactersList from "./components/CharactersList.vue";


import CharacterList from './CharacterList.vue';
// import axios from "axios";


export default {
    name: "AppMain",
    components: {
        CharacterList,

    },

}
</script>

<template>
    <main>
        <!-- <h5>Found {{ store.characters.length }} characters</h5> -->
        <div class="characters_list p-3">

            <div class="alert bg-dark ">
                <strong>62 </strong> character found
            </div>

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