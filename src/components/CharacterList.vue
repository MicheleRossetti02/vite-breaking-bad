<script>
import CharacterCard from './CharacterCard.vue'
import { store } from '../store'

export default {
    name: 'CharacterList',
    components: {
        CharacterCard,

    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>

    <div class="alert mt-3 ">
        <strong>62 </strong> character found
    </div>
    <div class=" row row-cols-5">
        <CharacterCard :character="character" v-for="character in store.characters"></CharacterCard>
    </div>
</template>

<style scoped>
.alert {
    background-color: #212529;
}
</style>