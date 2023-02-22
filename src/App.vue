<template>
  <div>
    <v-app id="inspire">
      <!-- https://picsum.photos/1920/1080?random -->
      <v-navigation-drawer v-model="drawer" app>
        <v-img
          src="https://i.picsum.photos/id/971/1920/1080.jpg?hmac=SDH1lXJUqWI8rJ41Yr7PvKW1aAA-nj559Z2DU888BA8"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          dark
          class="pt-5 text-center"
        >
          <!-- <v-avatar size="100">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="" />
        </v-avatar> -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Lista de Tarefas
              </v-list-item-title>
              <v-list-item-subtitle>
                Vue.Js & VueX - {{ dialog }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-img>
        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            @click="item.click()"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->
      <v-app-bar
        app
        color="#43a047"
        dark
        src="https://i.picsum.photos/id/971/1920/1080.jpg?hmac=SDH1lXJUqWI8rJ41Yr7PvKW1aAA-nj559Z2DU888BA8"
        prominent
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <!-- <v-app-bar-title>Title</v-app-bar-title> -->

        <v-spacer></v-spacer>
        <!-- 
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import mutations from "./store/mutations.js";
export default {
  components: {},
  data: () => ({
    drawer: true,
    items: [
      { title: "Tarefas", icon: "mdi-view-dashboard", to: "/" },
      {
        title: "Limpar lista",
        icon: "mdi-trash-can",
        to: "/",
        click() {
          var retorno = confirm("Deseja limpar sua lista de tarefas?");
          if (retorno == true) {
            mutations.limparTarefa();
            document.location.reload(true);
          }
        },
      },
      // { title: "Sobre", icon: "mdi-image", to: "/sobre" },
    ],
  }),
};
</script>
