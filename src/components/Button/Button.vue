<template>
    <v-btn raised class="mt-5" :color=color :style="{width: width}">
        {{text}}
    </v-btn>
</template>

<script>
export default {
    name: "Button",
    props: {
        'color': {
            required: true
        },
        'text': {
            required: true
        },
        'width':{
            required:true
        }
    }
}
</script>

<style scoped>

</style>