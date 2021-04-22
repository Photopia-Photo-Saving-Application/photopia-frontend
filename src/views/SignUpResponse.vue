<template>
    <UserForm>
    <template #messageField>
        <p style="font-family: 'New Tegomin', serif;">Thank you for signing up. A verification email has been sent to your email address</p>
    </template>
    </UserForm>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
export default {
name: "SignUpResponse",
    components: {UserForm}
}
</script>

<style scoped>

</style>