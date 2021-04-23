<template>
       <router-link :to=to style="text-decoration: none" class="secondary--text">{{ text }}</router-link>
</template>

<script>
export default {
    name: "UserRouterLink1",
    props: {
        'to': {
            required: true
        },
        'text': {
            required: true
        }
    }
}
</script>

<style scoped>

</style>