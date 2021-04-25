<template>
    <v-container fluid style="margin-top: 3%;">
        <v-row>
            <v-col cols="12" lg="4" sm="2"></v-col>
            <v-col cols="12" lg="4" sm="8">
                <v-progress-linear
                    color="primary"
                    v-if="getLoading"
                    indeterminate
                    rounded
                    height="6"
                ></v-progress-linear>
                <v-card elevation="5" class="pa-16">
                    <v-card-title class=" justify-center" style="font-family: 'Dancing Script', cursive; font-size: 1.6em" v-if="show"> PHOTOPIA</v-card-title>
                    <v-card-text class="text-h6 pt-4" >
                        <slot name="messageField"></slot>
                    </v-card-text>
                        <v-form style="width: 100%;">
                            <slot name="inputField"/>
                            <v-card-actions>
                            <slot name="buttonField" />
                            </v-card-actions>
                        </v-form>
                    <v-card-text>
                        <slot name="redirectionField"/>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" lg="4" sm="2">

            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name: "UserForm",
    props:{
    'show':{
        type:Boolean,
        default: true
    }
    },
    computed:{
    ...mapGetters(['getLoading']),
    }
}
</script>

<style scoped>

</style>