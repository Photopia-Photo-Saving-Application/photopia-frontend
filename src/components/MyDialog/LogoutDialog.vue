<template>
    <v-dialog
        persistent
        v-model="getLogoutDialogFlag"
        max-width="290">
        <v-card class="pa-5">
            <v-card-title class="headline">
                <MyText>Are you sure?</MyText>
            </v-card-title>
            <v-card-actions>
                <v-btn
                    color="success"
                    class="black--text"
                    @click="setLogoutDialogFlag"
                >
                    No
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    class="black--text"
                    @click="signOutAllClicked"
                >
                    Yes
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
import MyText from "@/components/MyText/MyText";
export default {
    name: "LogoutDialog",
    components: {MyText},
    computed:{
      ...mapGetters(['getLogoutDialogFlag'])  ,
    },
    methods:{
        ...mapMutations(['setLogoutDialogFlag']),
        ...mapActions('auth',['signOutAllDevices']),
        async signOutAllClicked(){
            await this.setLogoutDialogFlag();
            await this.signOutAllDevices();
        }
    }
}
</script>

<style scoped>

</style>