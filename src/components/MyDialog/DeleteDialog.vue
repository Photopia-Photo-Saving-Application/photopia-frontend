<template>
    <v-dialog
        persistent
        v-model="getDeleteDialogFlag"
        max-width="290">
        <v-card class="pa-5">
            <v-card-title class="headline">
                <MyText>Delete photo ? </MyText>
            </v-card-title>
            <v-card-actions>
                <v-btn
                    color="warning"
                    class="black--text"
                    @click="setDeleteDialogFlag"
                >
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    class="black--text"
                    @click="setDeleteDialogFlag"
                >
                    Delete
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import MyText from "@/components/MyText/MyText";
export default {
    name: "DeleteDialog",
    components: {MyText},
    computed:{
      ...mapGetters(['getDeleteDialogFlag'])  ,
    },
    methods:{
        ...mapMutations(['setDeleteDialogFlag']),
    }
}
</script>

<style scoped>

</style>