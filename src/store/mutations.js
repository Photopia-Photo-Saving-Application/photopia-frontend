export default{
    setLoading:(state,payload)=>{
        state.loading=payload.loading;
    },
    setToken:(state,payload)=>{
        state.token=payload.token;
    }
}