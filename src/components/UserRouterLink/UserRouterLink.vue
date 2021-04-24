<template>
    <div>
        <b><router-link :to=to1 style="text-decoration: none" class="secondary--text" @click.native="click1">{{ text1 }}</router-link>
        <v-spacer/>
        <router-link :to=to2 style="text-decoration: none " class="secondary--text" @click.native="click2">{{ text2 }}</router-link>
        </b>
    </div>
</template>

<script>
export default {
    name: "UserRouterLink",
    props: {
        'to1': {
            required: true
        },
        'to2': {
            required: true
        },
        'text1': {
            required: true
        },
        'text2': {
            required: true
        },
        'click1':{
            type:Function,
            default:()=>{
                console.log("UserRouterLink : default click1");
            }
        },
        'click2':{
            type:Function,
            default:()=>{
                console.log("UserRouterLink : default click2");
            }
        }
    }
}
</script>

<style scoped>

</style>