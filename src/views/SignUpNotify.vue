<template>
    <UserForm>
    <template #messageField>
        <MyText>
            <template #default>
               Thank you for signing up. A verification email has been sent to your email address.
            </template>
        </MyText>
    </template>
    </UserForm>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
import MyText from "@/components/MyText/MyText";
export default {
name: "SignUpNotify",
    components: {MyText, UserForm}
}
</script>

<style scoped>

</style>