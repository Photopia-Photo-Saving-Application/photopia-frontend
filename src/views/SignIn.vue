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
                v-model.trim="password"
                type="password"
                :error-messages="passwordErrors"
                label="Password"
                required
                @blur="$v.password.$touch()"
            ></v-text-field>
        </template>
        <template #buttonField>
            <Button width="100%" text="Sign In" color="primary" :click="submit" :disabled="$v.$anyError || getLoading"></Button>
        </template>
        <template #redirectionField>
            <UserRouterLink to1="/signup" to2="/forgotpassword" text1="Create a new account" text2="Forgot password"/>
        </template>
    </UserForm>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, minLength, maxLength, email, alphaNum, helpers} from 'vuelidate/lib/validators'
import UserForm from "@/components/UserForm/UserForm";
import Button from "@/components/Button/Button";
import UserRouterLink from "@/components/UserRouterLink/UserRouterLink";
import {mapActions,mapGetters} from 'vuex'
const passwordValidator = helpers.regex('alphaNumAndDot',/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,30}$/);


export default {
    name: "SignIn",
    components: {Button, UserForm,UserRouterLink},
    mixins: [validationMixin],

    validations: {
        name: {required, minLength: minLength(2)},
        password:{
            required,
            minLength:minLength(5),
            maxLength:maxLength(30),
            passwordValidator
        },
    },

    data: () => ({
        name: '',
        password:'',

    }),
    mounted(){
      // console.log("SignIn mounted: getLoading = "+this.getLoading);
    },
    computed: {
        ...mapGetters(['getLoading']),
        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.minLength && errors.push('Name must be at least 2 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.minLength && errors.push('Password must be at least 5 characters long')
            !this.$v.password.maxLength && errors.push('Password must be at most 30 characters long')
            !this.$v.password.passwordValidator && errors.push('Password must contain at least a digit and special character')
            !this.$v.password.required && errors.push('Password is required.')
            return errors
        }
    },

    methods: {
        ...mapActions('auth',['signIn']),
        async submit() {
            await this.$v.$touch();
            await this.signIn({username:this.name,password:this.password});
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.password = ''
        },
    },
}
</script>

<style scoped>

</style>