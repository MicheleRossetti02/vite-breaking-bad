<script>
import CharacterCard from './CharacterCard.vue'
import { store } from '../store.js'

export default {
    name: 'CharacterList',
    components: {
        CharacterCard,

    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        console.log(this.store)
    }

}
</script>
<template>

    <div class=" row row-cols-5">
        <CharacterCard :character="character" v-for="character in store.characters"></CharacterCard>
    </div>

</template>

<style scoped>
.alert {
    background-color: #212529;
}
</style>