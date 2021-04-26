<template>
    <v-dialog
        persistent
        v-model="getLogoutDialogFlag"
        max-width="290">
        <v-card>
            <v-card-title class="headline">
                <MyText>Are you sure?</MyText>
            </v-card-title>
            <v-card-actions>
                <slot name="file"/>
            </v-card-actions>
            <v-card-actions>
                <v-btn
                    color="light-green accent-3"
                    @click="setLogoutDialogFlag"
                >
                    No
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="red darken-1"
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