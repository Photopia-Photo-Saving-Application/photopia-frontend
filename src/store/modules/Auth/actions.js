import router from "@/router";
import {photopiaAPI} from '@/api';
let response;
export  default{
    async signIn(context,payload){
        context.commit('setLoading',{loading:true},{root:true});
        try {
            response = await photopiaAPI.post('/auth/signIn', payload);
            localStorage.setItem('token',response.data.payload.jwt);
            context.commit('setToken',{token:localStorage.getItem('token')},{root:true});
            await router.push('/');
        } catch (e) {
            console.log("signIn catch error response data: ",e.message);
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    },

    async signInAuto(context){
        if(localStorage.getItem('token')===undefined || localStorage.getItem('token')===null){
            return;
        }
        context.commit('setLoading',{loading:true},{root:true});
        context.commit('setSignInAutoFlag',{signInAutoFlag:true});
        context.commit('setToken',{token:localStorage.getItem("token")},{root:true});
        try {
            await photopiaAPI.get('/auth/signIn/auto');
        } catch (e) {
            localStorage.removeItem('token');
            context.commit('setToken',{token:null},{root:true});
            console.log("signInAuto catch error response data: ",e.message);
        } finally {
            context.commit('setSignInAutoFlag',{signInAutoFlag:false});
            context.commit('setLoading',{loading:false},{root:true});
        }
    },

    async signOut(context){
        context.commit('setLoading',{loading:true},{root:true});
        try {
            await photopiaAPI.post('/auth/signOut');
            localStorage.removeItem('token');
            context.commit('setToken',{token:null},{root:true});
            await router.push('/signIn');
        } catch (e) {
            console.log("signOut catch error response data: ",e.message);
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    },

    async signOutAllDevices(context){
        context.commit('setLoading',{loading:true},{root:true});
        try {
            await photopiaAPI.post('/auth/signOutAllDevices');
            localStorage.removeItem('token');
            context.commit('setToken',{token:null},{root:true});
            await router.push('/signIn');
        } catch (e) {
            console.log("signOutAllDevices catch error response data: ",e.message);
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    },

    async deleteAccount(context){
        context.commit('setLoading',{loading:true},{root:true});
        try {
            await photopiaAPI.delete('/auth/deleteAccount');
            localStorage.removeItem('token');
            context.commit('setToken',{token:null},{root:true});
            await router.push('/signIn');
        } catch (e) {
            console.log("deleteAccount catch error response data: ",e.message);
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    },

    async signUp(context,payload){
        context.commit('setLoading',{loading:true},{root:true});
        try {
            await photopiaAPI.post('/auth/signUp', payload);
            await router.push('/signUp/notify');
        } catch (e) {
            console.log("signUp catch error response data: ",e.message);
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    },

    async signUpVerify(context,payload){
        context.commit('setLoading',{loading:true},{root:true});
        try {
            await photopiaAPI.get('/auth/signUp/verify',{ params:payload});
            return 1;
        } catch (e) {
            console.log("signUpVerify catch error response data: ",e.message);
            return 0;
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    },

    async passwordChange(context,payload){
        context.commit('setLoading',{loading:true},{root:true});
        try {
            await photopiaAPI.patch('/auth/passwordChange', payload);
            await router.push('/');
        } catch (e) {
            console.log("passwordChange catch error response data: ",e.message);
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    },

    async forgotPassword(context,payload){
        context.commit('setLoading',{loading:true},{root:true});
        try {
            await photopiaAPI.patch('/auth/forgotPassword',payload);
            await router.push('/recoverAccount/notify');
        } catch (e) {
            console.log("forgotPassword catch error response data: ",e.message);
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    },

    async recoverAccount(context,payload){
        context.commit('setLoading',{loading:true},{root:true});
        try {
            console.log("recoverAccount: code = "+payload.code);
            await photopiaAPI.patch('/auth/recoverAccount?code='+payload.code,{password:payload.password});
            console.log("recoverAccount2");
            await router.push('/signIn');
            return 1;
        } catch (e) {
            console.log("recoverAccount catch error response data: ",e.message);
            return 0;
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    },
}

