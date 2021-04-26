<template>
    <v-app style="font-family: 'New Tegomin', serif; font-size: 1.5em" >
        <v-main >

            <v-layout align-center justify-center column fill-height v-if="getSignInAutoFlag || getSignOutFlag">
                <v-flex row align-center>
                    <v-progress-circular indeterminate :size="100" :width="8" color="primary"></v-progress-circular>
                </v-flex>
            </v-layout>
            <router-view v-else/>
        </v-main>
    </v-app>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'App',

    components: {},
    computed: {
        ...mapGetters('auth',['getSignInAutoFlag','getSignOutFlag']),
    },
    data: () => ({
        //
    }),
};
</script>
