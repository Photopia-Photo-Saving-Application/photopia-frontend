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
        if(localStorage.getItem('token')===null){
            await router.push('/signIn');
            return;
        }
        context.commit('setLoading',{loading:true},{root:true});
        context.commit('setToken',{token:localStorage.getItem("token")},{root:true});
        try {
            await photopiaAPI.get('/auth/signIn/auto');
        } catch (e) {
            localStorage.removeItem('token');
            context.commit('setToken',{token:null},{root:true});
            await router.push('/signIn');
            console.log("signInAuto catch error response data: ",e.message);
        } finally {
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
            console.log("signInAuto catch error response data: ",e.message);
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
            console.log("signInAuto catch error response data: ",e.message);
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
            console.log("signInAuto catch error response data: ",e.message);
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    }
}

