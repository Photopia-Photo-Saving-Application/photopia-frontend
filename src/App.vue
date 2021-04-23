<template >
  <v-app style="font-family: 'New Tegomin', serif; font-size: 1.5em">
<!--    <v-app-bar-->
<!--      app>-->
<!--    </v-app-bar>-->

    <v-main >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
