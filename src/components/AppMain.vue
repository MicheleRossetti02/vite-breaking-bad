<script>
// import CharactersList from "./components/CharactersList.vue";

import SelectBox from './SelectBox.vue'
import CharacterList from './CharacterList.vue';
import axios from "axios";


export default {
    name: "AppMain",
    components: {
        CharacterList,
        SelectBox,
    },

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