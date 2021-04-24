<template>
    <div>
        <Navbar text="SETTINGS"/>
        <UserForm :show=false>
            <template #messageField>
                <MyText>Change Password</MyText>
            </template>
            <template #inputField>
                <v-text-field
                    type="password"
                    v-model="currentPassword"
                    :error-messages="currentPasswordErrors"
                    label="Enter current password"
                    required
                    @blur="$v.currentPassword.$touch()"
                ></v-text-field>
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
            <template #buttonField>
                <Button color="primary" text="CONFIRM" width="100%" :click=submit :disabled="$v.$anyError"></Button>
            </template>
            <template #redirectionField>
                <UserRouterLink to1="/signIn" to2="/signIn" text1="Logout from all devices" text2="Delete account" :click1="signOutAllDevices" :click2="deleteAccount"></UserRouterLink>
            </template>
        </UserForm>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import UserRouterLink from "@/components/UserRouterLink/UserRouterLink";
import UserForm from "@/components/UserForm/UserForm";
import MyText from "@/components/MyText/MyText";
import {validationMixin} from "vuelidate";
import {helpers, maxLength, minLength, required, sameAs} from "vuelidate/lib/validators";
import Button from "@/components/Button/Button";
import UserRouterLink1 from "@/components/UserRouterLink/UserRouterLink1";
import {mapActions} from 'vuex'
const passwordValidator = helpers.regex('alphaNumAndDot',/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,30}$/);

export default {
    name: "Settings",
    components: {UserRouterLink1, Button, MyText, UserForm, UserRouterLink, Navbar},
    mixins: [validationMixin],

    validations: {
        currentPassword:{
            required,
            minLength:minLength(5),
            maxLength:maxLength(30),
            passwordValidator
        },
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
        currentPassword:'',
        newPassword:'',
        confirmPassword:''
    }),

    computed: {
        currentPasswordErrors() {
            const errors = []
            if (!this.$v.currentPassword.$dirty) return errors
            !this.$v.currentPassword.minLength && errors.push('Password must be at least 5 characters long')
            !this.$v.currentPassword.maxLength && errors.push('Password must be at most 30 characters long')
            !this.$v.currentPassword.passwordValidator && errors.push('Password must contain at least a digit and special character')
            !this.$v.currentPassword.required && errors.push('Password is required.')
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
        ...mapActions('auth',['signOutAllDevices','deleteAccount']),
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