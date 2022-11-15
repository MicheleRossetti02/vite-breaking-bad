<script>
export default {

    name: 'CharacterCard',
    props: {
        characters: Object
    },

}

</script>

<template>
    <div class="col my-2 ">
        <div class="character text-center card bg-dark h-100 p-2 ">
            <img :src="character.img" alt="" class="">
            <h3 class="m-0 py-2">{{ character.name }}</h3>
            <div class="category">
                <p class="m-0 ">{{ character.category }}</p>
            </div>
            <div class="status py-1">
                <p><strong>{{ character.status }}</strong></p>
            </div>
        </div>
    </div> -->


</template>


<style scoped>
.card {
    border-radius: 0;
}

img {
    width: 100%;
}

p {
    color: #565555;
}
</style>