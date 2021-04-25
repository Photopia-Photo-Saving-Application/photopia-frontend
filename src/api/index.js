import axios from "axios";
import {store} from '../store';

const photopiaAPI = axios.create({
    baseURL: 'http://localhost:8888',
    // baseURL: 'https://mt-demospring.herokuapp.com'
});


photopiaAPI.interceptors.request.use( (config)=>{
    // Do something before request is sent
    console.log("%cREQUEST TO "+config.url+": ",'color: #ff00ff',config.data);
    config.headers={
        'Authorization':'Bearer '+store.getters['getToken']
    }
    console.log("photopiaAPI: token = "+store.getters.getToken);
    // console.log('Bearer '+store.getters['auth/getToken']);

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

photopiaAPI.interceptors.response.use( (response)=>{
    // Do something before request is sent
    console.log("%cRESPONSE FROM "+response.config.url+": ",'color: #00ff00',response);

    return response;
},  (error)=>{
    // Do something with request error
    return Promise.reject(error);
});

export{
    photopiaAPI
}