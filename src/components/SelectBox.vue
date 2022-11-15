<script>
export default {
    name: "SelectBox"
}
const select = ({
    data: {
        key: ""
    },
    methods: {
        onchange(event) {
            console.log(event.target.value);
        }
    }
})
</script>

<template>
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="key"
        @change="onchange($event)">
        <option selected>Select category</option>
        <option value="1">Alive</option>
        <option value="2">Deceased</option>
        <option value="3">Presumed dead</option>
    </select>
</template>