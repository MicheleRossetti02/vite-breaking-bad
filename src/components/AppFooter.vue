<script>
import { store } from '../store'

export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    },
    computed: {
        totalResults() {
            return this.store.characters.length
        }
    }
}
</script>

<template>

    <footer>
        <p v-if="store.characters !== null">Results: {{ store.characters.length }} </p>
    </footer>

</template>


<style>

</style>