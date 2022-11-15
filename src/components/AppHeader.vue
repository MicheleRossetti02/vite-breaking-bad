<script>
export default {
    name: 'AppHeader'
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
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Select category</option>
            <option value="1">Alive</option>
            <option value="2">Deceased</option>
            <option value="3">Presumed dead</option>
        </select>
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