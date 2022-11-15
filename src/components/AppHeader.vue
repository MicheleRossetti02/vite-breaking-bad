<script>
import SelectBox from './SelectBox.vue';

export default {
    name: "AppHeader",
    components: { SelectBox }
}

</script>

<template>

    <div class="title d-flex justify-content-center">
        <div class="logo">
            <img class="col" src="../assets/img/Breaking-Bad-Logo-PNG-HD-Quality.png" alt="">

        </div>
        <h1 class="m-0 ps-4">Breaking Bad Api</h1>
    </div>


    <div class="select_category">

        <SelectBox />

    </div>



</template>


<style scoped>
.logo {
    align-self: center;
}

img {
    width: 100px;
}
</style>