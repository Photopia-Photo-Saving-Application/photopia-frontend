<template>
<UserForm>
    <template #messageField>
        <MyText v-if="show===-1">
            <template #default >
            Please wait for your account verification.
            </template>
        </MyText>
        <MyText  v-if="show===1">
            <template #default>
                Verification Complete !! <br>
                Please <UserRouterLink1 to="/signIn" text="Sign In"></UserRouterLink1>!!
            </template>
        </MyText>
        <MyText v-if="show===0">
            <template #default >
                Sorry !! Something went wrong.
            </template>
        </MyText>
    </template>
</UserForm>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
import MyText from "@/components/MyText/MyText";
import UserRouterLink1 from "@/components/UserRouterLink/UserRouterLink1";
import {mapActions} from 'vuex'
export default {
name: "SignUpVerify",
    data:()=>{
        return {
            show:-1
        }
    },
    components: {UserRouterLink1, MyText, UserForm},
    async mounted(){
        console.log( "signUpVerify: "+this.$route.query.code);
        if(this.$route.query.code){
            this.show=await this.signUpVerify({code:this.$route.query.code});
        }
    },
    methods:{
        ...mapActions("auth",["signUpVerify"]),
    }
}
</script>

<style scoped>

</style>