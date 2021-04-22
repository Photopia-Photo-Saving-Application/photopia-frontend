<template>
    <v-container fluid style="margin-top: 10%;background-image: url('src/assets/image/background.jpg'); background-size: cover;">
        <v-row>
            <v-col cols="12" lg="4" sm="2"></v-col>
            <v-col cols="12" lg="4" sm="8">

                <v-card elevation="5" class="pa-16">
                    <v-card-title class=" justify-center" style="font-family: 'Dancing Script', cursive; font-size: 2em"> PHOTOPIA</v-card-title>
                    <v-card-text class="text-h6" >
                        <slot name="messageField"></slot>
                    </v-card-text>
                    <v-card-actions >
                        <v-form style="width: 100%;">
                            <slot name="inputField"/>
                            <slot name="buttonField" />
                        </v-form>
                    </v-card-actions>
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
name: "UserForm"
}
</script>

<style scoped>

</style>