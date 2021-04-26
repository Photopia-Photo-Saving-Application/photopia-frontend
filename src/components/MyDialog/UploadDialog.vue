<template>
    <v-dialog
        persistent
        v-model="getUploadDialogFlag"
        max-width="290">
        <v-card>
            <v-card-title class="headline">
                <MyText>Upload a photo</MyText>
            </v-card-title>
            <v-card-actions>
                <slot name="file"/>
            </v-card-actions>
            <v-card-actions>
                <v-btn
                    color="yellow"
                    @click="setUploadDialogFlag"
                >
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="light-green accent-3"
                    @click="setUploadDialogFlag"
                >
                    Upload
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import MyText from "@/components/MyText/MyText";
export default {
    name: "UploadDialog",
    components: {MyText},
    computed:{
      ...mapGetters(['getUploadDialogFlag'])  ,
    },
    methods:{
        ...mapMutations(['setUploadDialogFlag']),
    }
}
</script>

<style scoped>

</style>