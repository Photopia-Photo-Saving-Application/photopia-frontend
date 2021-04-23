<template>
    <UserForm>
        <template #inputField>
            <v-text-field
                v-model.trim="email"
                :error-messages="emailErrors"
                label="User email"
                required
                @blur="$v.email.$touch()"
            ></v-text-field>
        </template>
        <template #buttonField>
            <Button width="100%" text="Recover Account" color="primary" :click="submit" :disabled="$v.$anyError"></Button>
        </template>
        <template #redirectionField>
            <UserRouterLink to1="/signin" to2="/signup" text1="Sign In" text2="Create a new account"/>
        </template>
    </UserForm>
</template>

<script>
import Button from "@/components/Button/Button";
import UserForm from "@/components/UserForm/UserForm";
import UserRouterLink from "@/components/UserRouterLink/UserRouterLink";
import {validationMixin} from "vuelidate";
import {email, maxLength, required} from "vuelidate/lib/validators";

export default {
    name: "ForgotPassword",
    components: {Button, UserForm, UserRouterLink},
    mixins: [validationMixin],

    validations: {
        email: {required, email},
    },

    data: () => ({
        name: '',
        email: '',
    }),

    computed: {
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid email')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
    },

    methods: {
        submit() {
            this.$v.$touch();
            this.$router.push("/recoverAccount/notify");
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
        },
    },
}
</script>

<style scoped>

</style>