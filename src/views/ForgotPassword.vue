<template>
    <UserForm>
        <template #inputField>
            <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="User email"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
            ></v-text-field>
        </template>
        <template #buttonField>
            <Button width="100%" text="Recover Account" color="primary" :click="submit"></Button>
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
        name: {required, maxLength: maxLength(10)},
        email: {required, email},
        select: {required},
        checkbox: {
            checked(val) {
                return val
            },
        },
    },

    data: () => ({
        name: '',
        email: '',
        password: '',
    }),

    computed: {
        checkboxErrors() {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
        },
        selectErrors() {
            const errors = []
            if (!this.$v.select.$dirty) return errors
            !this.$v.select.required && errors.push('Item is required')
            return errors
        },
        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
    },

    methods: {
        submit() {
            this.$v.$touch();
            console.log("inside submit");
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