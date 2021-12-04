<template>
  <div class="page">
    <v-system-bar color="#212121"></v-system-bar>

    <v-app-bar color="#FF0055">
      <v-app-bar-nav-icon
        class="textColor"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title
        class="text-h6 poninterText textColor"
        @click="goTo('/')"
      >
        Vuenimes
      </v-toolbar-title>
      <div class="nav-items">
        <div
          class="nav-item"
          v-for="(item, index) in routes"
          :key="index"
          @click="goTo(item.path)"
        >
          <strong>{{ item.name }}</strong>
        </div>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vuenimes </v-list-item-title>
          <v-list-item-subtitle> List items </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="activeText">
          <v-list-item
            v-for="(item, index) in routes"
            :key="index"
            @click="goTo(item.path)"
          >
            <v-list-item-title
              ><strong>{{ item.name }}</strong></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",

  data: () => ({
    drawer: false,
    group: null,
    routes: [
      { name: "Home", path: "/" },
      { name: "Animes", path: "animes" },
      { name: "One Piece", path: "one_piece" },
      { name: "Synopsis", path: "synopsis" },
      { name: "Filter bounty", path: "filtered" },
    ],
  }),

  methods: {
    goTo(path: string): void {
      this.$router.push(path);
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
});
</script>

<style scoped>
.page {
  overflow: hidden;
}

.poninterText:hover {
  cursor: pointer;
}

.textColor {
  color: white !important;
}

.activeText {
  color: #ff0055 !important;
}

.nav-items {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: flex-end;
}

.nav-item {
  cursor: pointer;
  color: white;
  padding: 1rem;
}
</style>
