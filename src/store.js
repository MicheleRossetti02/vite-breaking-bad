import { reactive } from 'vue'
export const store = reactive({
    API_URL: "https://rickandmortyapi.com/api/character",
    // API_URL: "https://www.breakingbadapi.com/api/characters",
    characters: null,
    loading: true,
    searchText: ''
})