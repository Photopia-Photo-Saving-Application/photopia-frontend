<template>
    <div>
        <Navbar text="SETTINGS"/>
        <UserForm :show=false>
            <template #messageField>
                <MyText>Change Password</MyText>
            </template>
            <template #inputField>
                <v-text-field
                    v-model="oldpassword"
                    :error-messages="emailErrors"
                    label="Enter password"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="newpassword"
                    :error-messages="emailErrors"
                    label="Enter new password"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="confirmPassword"
                    :error-messages="emailErrors"
                    label="Confirm new password"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                ></v-text-field>
            </template>
            <template #buttonField>
                <Button color="primary" text="CONFIRM" width="100%" :click=submit></Button>
            </template>
            <template #redirectionField>
                <UserRouterLink1 to="/signin" text="Logout from all devices"></UserRouterLink1>
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
import {email, maxLength, required} from "vuelidate/lib/validators";
import Button from "@/components/Button/Button";
import UserRouterLink1 from "@/components/UserRouterLink/UserRouterLink1";

export default {
    name: "Settings",
    components: {UserRouterLink1, Button, MyText, UserForm, UserRouterLink, Navbar},
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
        oldpassword:'',
        newpassword:'',
        confirmPassword:''
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
            this.$router.push("/signupresponse");
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