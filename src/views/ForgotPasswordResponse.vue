<template>
<UserForm>
    <template #messageField >
        <MyText>
            <template #default>
                A password recovery email has been sent to your email address.
            </template>
        </MyText>
    </template>
</UserForm>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
import MyText from "@/components/MyText/MyText";
export default {
name: "ForgotPasswordResponse",
    components:{MyText, UserForm}
}
</script>

<style scoped>

</style>