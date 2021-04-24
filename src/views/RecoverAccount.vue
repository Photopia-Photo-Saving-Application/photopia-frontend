<template>
<UserForm>
    <template #messageField>
        <MyText v-if="show===1">
            <template #default>
                Reset your password.
            </template>
        </MyText>
        <MyText v-if="show===0">
            <template #default>
                Please wait for you email verification.
            </template>
        </MyText>
        <MyText v-if="show===-1">
            <template #default>
                Sorry !! Something went wrong.
            </template>
        </MyText>
    </template>
    <template #inputField v-if="show===1">
        <v-text-field
            type="password"
            v-model="newPassword"
            :error-messages="newPasswordErrors"
            label="Enter new password"
            required
            @blur="$v.newPassword.$touch()"
        ></v-text-field>
        <v-text-field
            type="password"
            v-model="confirmPassword"
            :error-messages="confirmPasswordErrors"
            label="Confirm new password"
            required
            @blur="$v.confirmPassword.$touch()"
        ></v-text-field>
    </template>
    <template #buttonField v-if="show===1">
        <Button width="100%" text="Sign In" color="primary" :click="submit" :disabled="$v.$anyError">Sign In</Button>
    </template>
</UserForm>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
import Button from "@/components/Button/Button";
import UserRouterLink from "@/components/UserRouterLink/UserRouterLink";
import {validationMixin} from "vuelidate";
import {maxLength, minLength, required, sameAs, helpers} from "vuelidate/lib/validators";
import MyText from "@/components/MyText/MyText";
const passwordValidator = helpers.regex('alphaNumAndDot',/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,30}$/);

export default {
    name: "RecoverAccount",
    components: {MyText, Button, UserForm, UserRouterLink},
    mixins: [validationMixin],

    validations: {
        newPassword:{
            required,
            minLength:minLength(5),
            maxLength:maxLength(30),
            passwordValidator
        },
        confirmPassword:{
            sameAs:sameAs('newPassword')
        },
    },

    data: () => ({
        newPassword:'',
        confirmPassword:'',
        show:-1,
    }),

    computed: {
        newPasswordErrors() {
            const errors = []
            if (!this.$v.newPassword.$dirty) return errors
            !this.$v.newPassword.minLength && errors.push('Password must be at least 5 characters long')
            !this.$v.newPassword.maxLength && errors.push('Password must be at most 30 characters long')
            !this.$v.newPassword.passwordValidator && errors.push('Password must contain at least a digit and special character')
            !this.$v.newPassword.required && errors.push('Password is required.')
            return errors
        },
        confirmPasswordErrors() {
            const errors = []
            if (!this.$v.confirmPassword.$dirty) return errors
            !this.$v.confirmPassword.sameAs && errors.push('Password does not match')
            return errors
        }
    },

    methods: {
        submit() {
            this.$v.$touch();
            this.$router.push("/");
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