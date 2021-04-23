<template>
<UserForm>
    <template #messageField>
        <MyText>
            <template #default>
            Verification Complete !! <br>
            Please <UserRouterLink1 to="/signIn" text="Sign In"></UserRouterLink1>!!
            </template>
        </MyText>
    </template>
</UserForm>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
import MyText from "@/components/MyText/MyText";
import UserRouterLink1 from "@/components/UserRouterLink/UserRouterLink1";
export default {
name: "SignUpVerify",
    components: {UserRouterLink1, MyText, UserForm}
}
</script>

<style scoped>

</style>