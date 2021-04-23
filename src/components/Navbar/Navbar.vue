<template>
   <div>
        <v-app-bar
            color="secondary"
            dark
            app
        >
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
                    <v-list-item-title class=" justify-center secondary--text" style="font-family: 'Dancing Script', cursive; font-size: 1.5em" >
                        PHOTOPIA
                    </v-list-item-title>
                </v-list-item-content>
                <v-list-item-group
                    v-model="group"
                    active-class="secondary--text accent"
                    v-for="(item, index) in items" :key="index"
                >
                    <v-list-item>
                        <UserRouterLink1 :to=item.to :text=item.message></UserRouterLink1>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

<!--        <v-card-text>-->
<!--            The navigation drawer will appear from the bottom on smaller size screens.-->
<!--        </v-card-text>-->
   </div>
</template>

<script>
import UserForm from "@/components/UserForm/UserForm";
import UserRouterLink1 from "@/components/UserRouterLink/UserRouterLink1";
export default {
name: "Navbar",
    components: {UserRouterLink1, UserForm},
    data: () => ({
        drawer: false,
        group: null,
        items:[
            {message:'Home', to:'/home'},
            {message: 'Settings', to:'/settings'},
            {message: 'Logout', to:'/signin'}
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
    }
}
</script>

<style scoped>

</style>