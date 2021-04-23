<template>
    <v-container fluid style="margin-top: 3%;background-image: url('src/assets/image/background.jpg'); background-size: cover;">
        <v-row>
            <v-col cols="12" lg="4" sm="2"></v-col>
            <v-col cols="12" lg="4" sm="8">

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
export default {
name: "UserForm",
    props:{
    'show':{
        type:Boolean,
        default: true
    }
    }
}
</script>

<style scoped>

</style>