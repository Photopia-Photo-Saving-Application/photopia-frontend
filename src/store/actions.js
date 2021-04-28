import router from "@/router";
import {photopiaAPI} from '@/api';
let response;
export  default{
    async fetchUserImage(context){
        context.commit('setLoading');
        try {
            response = await photopiaAPI.get('/api/images');
            // console.log("fetUserImage response: "+response.data.payload.imageList[0]);
            context.commit('setImageList',{imageList:response.data.payload.imageList});
        } catch (e) {
            console.log("fetchUserImage catch error response data: ",e.message);
        } finally {
            context.commit('setLoading');
        }
    },
    async deleteImage(context,payload){
        context.commit('setLoading');
        try {
            response = await photopiaAPI.delete('/api/images/'+payload.image);
            // console.log("fetUserImage response: "+response.data.payload.imageList[0]);
            context.commit('setImageList',{imageList:response.data.payload.imageList});
        } catch (e) {
            console.log("fetchUserImage catch error response data: ",e.message);
        } finally {
            context.commit('setLoading');
        }
    },
}