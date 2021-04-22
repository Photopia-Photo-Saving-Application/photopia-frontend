<template>
<UserForm>
    <template #messageField >
        <p style="font-family: 'New Tegomin', serif;">A password recovery email has been sent to your email address.</p>
    </template>
</UserForm>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
export default {
name: "ForgotPasswordResponse",
    components:{UserForm}
}
</script>

<style scoped>

</style>