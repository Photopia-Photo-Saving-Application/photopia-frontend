<template>
    <div>
        <Navbar text="HOME"/>
        <UserForm v-if="getLoading" :show=false>
            <template #messageField>
                <MyText>
                    Loading... Please wait !!
                </MyText>
            </template>
        </UserForm>
        <v-container fluid style="margin-top: 2%; margin-bottom: 2%;max-height: 100%;max-width: 1000px" v-else-if="getImageList!==undefined && getImageList.length!==0">
            <v-row>
                <v-col
                    v-for="n in getImageList"
                    :key="n"
                    class="d-flex child-flex pa-4"
                    cols="12"
                    sm="12"
                    lg="6"
                >
                    <v-img
                        :src="n"
                        :lazy-src="n"
                        aspect-ratio="1.3"
                        class="grey lighten-2 rounded-lg"
                        cover
                    >

                        <v-btn @click="deleteClicked(n)"
                               icon dark absolute top right large>
                            <v-icon>mdi-delete-outline</v-icon>
                        </v-btn>
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
            <DeleteDialog :image="deleteImage"/>
        </v-container>
        <UserForm v-else :show=false>
            <template #messageField>
                <MyText>
                    Add image .... !!
                </MyText>
            </template>
        </UserForm>
        <v-fab-transition>
            <v-btn color="primary" dark fixed bottom right fab @click="setUploadDialogFlag">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-fab-transition>
        <UploadDialog />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import UserForm from "@/components/UserForm/UserForm";
import MyText from "@/components/MyText/MyText";
import {mapActions, mapGetters, mapMutations} from 'vuex'
import UploadDialog from "@/components/MyDialog/UploadDialog";
import DeleteDialog from "@/components/MyDialog/DeleteDialog";

export default {
    name: 'Home',
    components: {
        DeleteDialog,
        UploadDialog,
        MyText,
        UserForm,
        Navbar
    },
    computed:{
      ...mapGetters(['getImageList','getLoading']) ,
    },
    data: () => {
        return {
            deleteImage:"",
            flag:0
        }
    },
    methods: {
        ...mapActions(['fetchUserImage']),
        ...mapMutations(['setUploadDialogFlag','setDeleteDialogFlag']),
        async deleteClicked(imageURL){
            console.log("home delete imageURL: "+imageURL);
            this.deleteImage=imageURL;
            await this.setDeleteDialogFlag();
        }
    },
    async mounted(){
        if(this.getImageList.length===0){
            await this.fetchUserImage();
        }
    }
}
</script>
