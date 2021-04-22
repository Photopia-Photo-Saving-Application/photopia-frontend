<template>
<UserForm>
    <template #messageField>
        <MyText>
            <template #default>
            Verification Complete !! <br>
            Please <router-link to="/signIn" style="text-decoration: none">Sign In</router-link>!!
            </template>
        </MyText>
    </template>
</UserForm>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
import MyText from "@/components/MyText/MyText";
export default {
name: "SignUpVerification",
    components: {MyText, UserForm}
}
</script>

<style scoped>

</style>