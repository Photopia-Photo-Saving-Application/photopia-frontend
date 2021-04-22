<template>
<UserForm>
    <template #messageField>
        <p style="font-family: 'New Tegomin', serif;">
        Verification Complete !! <br>
            Please <router-link to="/signIn" style="text-decoration: none">Sign In</router-link>!!
        </p>
    </template>
</UserForm>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
export default {
name: "SignUpVerification",
    components: {UserForm}
}
</script>

<style scoped>

</style>