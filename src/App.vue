<template>
  <v-app style="background-image:url('src/assets/image/background.jpg') ">
<!--    <v-app-bar-->
<!--      app>-->
<!--    </v-app-bar>-->

    <v-main>
      <SignIn/>
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
