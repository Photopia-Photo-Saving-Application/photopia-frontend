<template>
    <v-dialog
        persistent
        v-model="getDeleteDialogFlag"
        max-width="290">
        <v-card>
            <v-card-title class="headline">
                <MyText>Delete photo ? </MyText>
            </v-card-title>
            <v-card-actions>
                <slot name="file"/>
            </v-card-actions>
            <v-card-actions>
                <v-btn
                    color="yellow"
                    @click="setDeleteDialogFlag"
                >
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="red darken-1"
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