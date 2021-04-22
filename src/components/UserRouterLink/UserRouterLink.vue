<template>
    <div>
        <router-link :to=to1 style="text-decoration: none" >{{ text1 }}</router-link>
        <v-spacer/>
        <router-link :to=to2 style="text-decoration: none">{{ text2 }}</router-link>
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
        }
    }
}
</script>

<style scoped>

</style>