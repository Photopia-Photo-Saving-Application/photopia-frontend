<template>
  <div >
  <Navbar text="HOME"/>
      <v-container fluid style="margin-top: 2%; margin-bottom: 2%;max-height: 100%;max-width: 1000px">
      <v-row>
      <v-col
          v-for="n in 10"
          :key="n"
          class="d-flex child-flex pa-4"
          cols="12"
          sm="12"
          lg="6"
      >
          <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1.3"
              class="grey lighten-2 rounded-lg"
          >
              <v-btn
                  class="mx-2" icon dark absolute top right large>
                  <v-icon>mdi-delete-outline</v-icon>
              </v-btn>
              <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                      <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                      ></v-progress-circular>
                  </v-row>
              </template>
          </v-img>
      </v-col>
      </v-row>
          <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
          >
              <template v-slot:activator="{ on, attrs }">

              </template>
              <v-card>
                  <v-card-title class="headline">
                      Use Google's location service?
                  </v-card-title>
                  <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                      >
                          Disagree
                      </v-btn>
                      <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                      >
                          Agree
                      </v-btn>
                  </v-card-actions>
              </v-card>
          </v-dialog>
      </v-container>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import UserForm from "@/components/UserForm/UserForm";
import MyText from "@/components/MyText/MyText";
export default {
  name: 'Home',
  components: {
      MyText,
      UserForm,
      Navbar
  },
    data:()=>{
      return {
          dialog:false
      }
    }
}
</script>
