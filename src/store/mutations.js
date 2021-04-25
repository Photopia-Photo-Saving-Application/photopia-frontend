export default{
    setLoading:(state,payload)=>{
        state.loading=payload.loading;
    },
    setToken:(state,payload)=>{
        state.token=payload.token;
    },
    setDialogFlag:(state,payload)=>{
        state.dialogFlag=payload.dialogFlag;
    }
}