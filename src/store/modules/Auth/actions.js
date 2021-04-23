import router from "@/router";
import {photopiaAPI} from '@/api';

export  default{
    async signIn(context,payload){
        context.commit('setLoading',{loading:true},{root:true});
        try {
            let response = await photopiaAPI.post('/auth/signIn', payload);
            localStorage.setItem('token',response.data.payload.jwt);
            context.commit('setToken',{token:localStorage.getItem('token')},{root:true});
            console.log(localStorage.getItem('token'));
            await router.push('/');
        } catch (e) {
            console.log("signIn catch error response data: ",e);
        } finally {
            context.commit('setLoading',{loading:false},{root:true});
        }
    }
}

