import { reactive } from 'vue'
export const store = reactive({
    API_URL: "https://www.breakingbadapi.com/api/characters",
    characters: null,
    loading: true,
})

/*export const store = reactive({
    data() {
        return {
            API_URL: "https://www.breakingbadapi.com/api/characters",
            characters: null,
            error: null,
        };
    },
    methods: {
        callApi(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.characters = response.data;
                })
                .catch(err => {
                    console.error(err.message);
                    this.error = err.message;
                });
        }
    },
    mounted() {
        this.callApi(this.API_URL);
    },

})*/