<template>
    <v-app style="font-family: 'New Tegomin', serif; font-size: 1.5em">
        <!--    <v-app-bar-->
        <!--      app>-->
        <!--    </v-app-bar>-->

        <v-main>

            <v-layout align-center justify-center column fill-height v-if="getSignInAutoFlag">
                <v-flex row align-center>
                    <v-progress-circular indeterminate :size="100" :width="8" color="primary"
                                         class=""></v-progress-circular>
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
        ...mapGetters('auth',['getSignInAutoFlag']),
    },
    data: () => ({
        //
    }),
};
</script>
