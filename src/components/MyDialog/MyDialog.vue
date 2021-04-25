<template>
    <v-dialog
        persistent
        max-width="290">
        <v-card>
            <v-card-title class="headline">
                <MyText><slot name="title"/></MyText>
            </v-card-title>
            <v-card-actions>
                <slot name="file"/>
            </v-card-actions>
            <v-card-actions>
                <v-btn
                    :color="color1"
                    @click="setDialogFlag({dialogFlag:false})"
                >
                    {{text1}}
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    :color="color2"
                    @click="setDialogFlag({dialogFlag:false})"
                >
                    {{text2}}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import MyText from "@/components/MyText/MyText";
export default {
    name: "MyDialog",
    components: {MyText},
    computed:{
      ...mapGetters(['getDialogFlag'])  ,
    },
    props: {
        'color1': {
            required:true
        },
        'color2': {
            required: true
        },
        'text1':{
            required:true
        },
        'text2':{
            required:true
        }
    },
    methods:{
        ...mapMutations(['setDialogFlag']),
    }
}
</script>

<style scoped>

</style>