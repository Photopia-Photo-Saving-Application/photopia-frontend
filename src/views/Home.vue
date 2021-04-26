<template>
    <div>
        <Navbar text="HOME"/>
        <v-container fluid style="margin-top: 2%; margin-bottom: 2%;max-height: 100%;max-width: 1000px">
            <v-row>
                <v-col
                    v-for="n in 10"
                    :key="n"
                    class="d-flex child-flex pa-4"
                    cols="12"
                    sm="12"
                    lg="6"
                >
                    <v-img
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1.3"
                        class="grey lighten-2 rounded-lg"
                    >

                        <v-btn @click="deleteClicked"
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
            <v-fab-transition>
                <v-btn color="primary" dark fixed bottom right fab @click="uploadClicked">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-fab-transition>
           <UploadDialog />
        </v-container>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import UserForm from "@/components/UserForm/UserForm";
import MyText from "@/components/MyText/MyText";
import {mapGetters,mapMutations} from 'vuex'
import UploadDialog from "@/components/MyDialog/UploadDialog";

export default {
    name: 'Home',
    components: {
        UploadDialog,
        MyText,
        UserForm,
        Navbar
    },
    computed:{
      ...mapGetters(['getUploadDialogFlag','getDeleteDialogFlag'])  ,
    },
    data: () => {
        return {

        }
    },
    methods: {
        ...mapMutations(['setUploadDialogFlag','setDeleteDialogFlag']),
        uploadClicked(){
            this.setUploadDialogFlag({uploadDialogFlag:true});
        },
        deleteClicked(){
            this.setDeleteDialogFlag({deleteDialogFlag:true});
        }
    }
}
</script>
