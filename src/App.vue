<template>
  <v-app >
<!--    <v-app-bar-->
<!--      app>-->
<!--    </v-app-bar>-->

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SignIn  from './views/SignIn';

export default {
  name: 'App',

  components: {
    SignIn
  },

  data: () => ({
    //
  }),
};
</script>
