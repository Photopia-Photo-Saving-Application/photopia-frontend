<template>
    <v-card
        class="mx-auto overflow-hidden"
        width="100%"
        height="100%"
    >

        <v-app-bar
            color="secondary"
            dark
            prominent
            height="90%"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title style="font-family: 'Dancing Script', cursive; ">{{text}}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-title class=" justify-center" style="font-family: 'Dancing Script', cursive; "> PHOTOPIA</v-toolbar-title>

        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
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
                    active-class="secondary--text text--accent"
                >
                    <v-list-item>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-card-text>
            The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
    </v-card>
</template>

<script>
export default {
name: "Navbar",
    data: () => ({
        drawer: false,
        group: null,
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