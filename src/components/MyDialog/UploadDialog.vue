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
                    v-model.trim="image"
                    label=".jpg .jpeg .png"
                    outlined
                    dense
                    prepend-icon="mdi-camera"
                    @blur="$v.image.$touch()"
                    :error-messages="imageErrors"
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
                    @click="uploadClicked"
                    :disabled="$v.$anyError"
                >
                    Upload
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
import MyText from "@/components/MyText/MyText";
import {validationMixin} from "vuelidate";
import {required} from "vuelidate/lib/validators";
export default {
    name: "UploadDialog",
    components: {MyText},
    mixins: [validationMixin],
    data:()=>{
      return {
          image:null
      }
    },
    validations:{
      'image':{
          required
      }
    },
    computed:{
      ...mapGetters(['getUploadDialogFlag'])  ,
        imageErrors() {
            const errors = []
            if (!this.$v.image.$dirty) return errors
            !this.$v.image.required && errors.push('Image is required')
            return errors
        },
    },
    methods:{
        ...mapMutations(['setUploadDialogFlag']),
        ...mapActions(['uploadImage','fetchUserImage']),
        async uploadClicked(){
            await this.setUploadDialogFlag();
            await this.uploadImage({file:(this.image ? this.image[0]: null)});
            await this.fetchUserImage();
        }
    }
}
</script>

<style scoped>

</style>