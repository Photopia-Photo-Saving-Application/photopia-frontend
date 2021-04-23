<template>
    <v-btn raised class="mt-5" :color=color :style="{width: width}" @click="click" :disabled="disabled">
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
        },
        'click':{
            type:Function,
            required:false,
            default:()=>{
                console.log("button component: default click");
            }
        },
        'disabled':{
            default:false
        }
    }
}
</script>

<style scoped>

</style>