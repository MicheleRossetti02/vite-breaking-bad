<script>

import { store } from '../store'

export default {
    name: "SelectBox",
    emits: ['searchData'],
    data() {
        return {
            store,

        }
    },

}

</script>

<template>
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="store.searchText"
        @change="$emit('searchData')">
        <option value="">Select category</option>
        <option value="Breaking+Bad">Breaking Bad</option>
        <option value="Better+Call+Saul">Better Call Saul</option>

    </select>
</template>