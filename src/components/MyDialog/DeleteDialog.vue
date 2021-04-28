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
                    @click="deleteClicked"
                >
                    Delete
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions, mapGetters,mapMutations} from 'vuex'
import MyText from "@/components/MyText/MyText";
export default {
    name: "DeleteDialog",
    components: {MyText},
    props:{
        "image":{
            required:true
        }
    },
    computed:{
      ...mapGetters(['getDeleteDialogFlag','getImageList'])  ,
    },
    methods:{
        ...mapMutations(['setDeleteDialogFlag']),
        ...mapActions(['deleteImage','fetchUserImage']),
        async deleteClicked(){
            let deleteImage=this.image.split('/');
            deleteImage=deleteImage[deleteImage.length-1];
            console.log("deleteDialog image: "+deleteImage);
            await this.setDeleteDialogFlag();
            await this.deleteImage({image:deleteImage});
            await this.fetchUserImage();
        }
    }
}
</script>

<style scoped>

</style>