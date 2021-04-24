<template>
   <div>
        <v-app-bar
            color="primary"
            app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title style="font-family: 'Dancing Script', cursive; ">{{text}}</v-toolbar-title>

            <v-spacer></v-spacer>

        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            temporary
            app
        >

            <v-list
                nav
                dense
            >
                <v-list-item-content>
                    <v-list-item-title class=" justify-center secondary--text ma-6" style="font-family: 'Dancing Script', cursive; font-size: 1.5em" >
                        PHOTOPIA
                    </v-list-item-title>
                </v-list-item-content>
                <v-list-item-group
                    v-model="group"
                    active-class="secondary--text accent"
                >
                    <v-list-item v-for="(item, index) in items" :key="index" link :to="item.to">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title  >{{item.message}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                <v-list-item @click="submit">
                    <v-list-item-icon>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title  >Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
   </div>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
import UserRouterLink1 from "@/components/UserRouterLink/UserRouterLink1";
import {mapActions} from 'vuex'
export default {
name: "Navbar",
    components: {UserRouterLink1, UserForm},
    data: () => ({
        drawer: false,
        group: null,
        items:[
            {message:'Home', to:'/', icon:'mdi-home'},
            {message: 'Settings', to:'/settings', icon:'mdi-cog'},
        ]
    }),

    watch: {
        group () {
            this.drawer = false
        },
    },
    props:{
        'text':{
            required:true
        }
    },
    methods:{
    ...mapActions('auth',['signOut']),
        async submit(){
            await this.signOut();
        }
    }
}
</script>

<style scoped>

</style>