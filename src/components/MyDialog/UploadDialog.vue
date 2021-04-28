<template>
    <v-dialog
        persistent
        v-model="getUploadDialogFlag"
        max-width="290">
        <v-card class="pa-5">
            <v-card-title class="headline">
                <MyText>Upload a photo</MyText>
            </v-card-title>
            <v-card-actions>
                <v-file-input
                    label=".jpg .jpeg .png"
                    outlined
                    dense
                    prepend-icon="mdi-camera"
                ></v-file-input>
            </v-card-actions>
            <v-card-actions>
                <v-btn
                    color="warning "
                    class="black--text"
                    @click="setUploadDialogFlag"
                >
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="success"
                    class="black--text"
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