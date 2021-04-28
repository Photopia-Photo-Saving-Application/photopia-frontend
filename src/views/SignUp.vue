<template>
    <UserForm>
        <template #inputField>
            <v-text-field
                v-model.trim="name"
                :error-messages="nameErrors"
                label="Username"
                required
                @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
                v-model.trim="email"
                :error-messages="emailErrors"
                label="Email"
                required
                @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
                type="password"
                v-model.trim="newPassword"
                :error-messages="newPasswordErrors"
                label="Enter new password"
                required
                @blur="$v.newPassword.$touch()"
            ></v-text-field>
            <v-text-field
                type="password"
                v-model.trim="confirmPassword"
                :error-messages="confirmPasswordErrors"
                label="Confirm new password"
                required
                @blur="$v.confirmPassword.$touch()"
            ></v-text-field>
        </template>
        <template #buttonField>
            <Button width="100%" text="Sign Up" color="primary" :click="submit" :disabled="$v.$anyError || getLoading"></Button>
        </template>
        <template #redirectionField>
            <UserRouterLink to1="/signin" to2="/forgotpassword" text1="Sign in " text2="Forgot password"/>
        </template>
    </UserForm>
</template>

<script>
import Button from "@/components/Button/Button";
import UserForm from "@/components/UserForm/UserForm";
import UserRouterLink from "@/components/UserRouterLink/UserRouterLink";
import {validationMixin} from "vuelidate";
import {email, helpers, maxLength, minLength, required,sameAs} from "vuelidate/lib/validators";
import {mapActions,mapGetters} from 'vuex'
const passwordValidator = helpers.regex('alphaNumAndDot',/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,30}$/);

export default {
    name: "SignUp",
    components: {Button, UserForm, UserRouterLink},
    mixins: [validationMixin],

    validations: {
        name: {required, minLength: minLength(2)},
        email: {required, email},
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
        name: '',
        email: '',
        newPassword:'',
        confirmPassword:''
    }),

    computed: {
        ...mapGetters(['getLoading']),
        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.minLength && errors.push('Name must be at least 2 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid email')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
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
        ...mapActions('auth',['signUp']),
        async submit() {
            await this.$v.$touch();
            if(!this.$v.$anyError){
                await this.signUp({name:this.name,email:this.email,password:this.confirmPassword});
            }
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