<template>
    <v-dialog
        persistent
        v-model="getDeleteAccountDialogFlag"
        max-width="290">
        <v-card>
            <v-card-title class="headline">
                <MyText>Are you sure? </MyText>
            </v-card-title>
            <v-card-actions>
                <slot name="file"/>
            </v-card-actions>
            <v-card-actions>
                <v-btn
                    color="light-green accent-3"
                    @click="setDeleteAccountDialogFlag({deleteAccountDialogFlag:false})"
                >
                    No
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="red darken-1"
                    @click="setDeleteAccountDialogFlag({deleteAccountDialogFlag:false})"
                >
                    Yes
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import MyText from "@/components/MyText/MyText";
export default {
    name: "DeleteAccountDialog",
    components: {MyText},
    computed:{
      ...mapGetters(['getDeleteAccountDialogFlag'])  ,
    },
    methods:{
        ...mapMutations(['setDeleteAccountDialogFlag']),
    }
}
</script>

<style scoped>

</style>