export default {
    getLoading:state=>{
        return state.loading;
    },
    getToken:state=>{
        return state.token;
    },
    getUploadDialogFlag:state=>{
        return state.uploadDialogFlag
    },
    getDeleteDialogFlag:state=>{
        return state.deleteDialogFlag
    },
    getDeleteAccountDialogFlag:state=>{
        return state.deleteAccountDialogFlag
    },
    getLogoutDialogFlag:state=>{
        return state.logoutDialogFlag
    },
    getImageList:state=>{
        return state.imageList
    }
}