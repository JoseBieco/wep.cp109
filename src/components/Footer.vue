<template>
  <div>
    <v-footer padless color="#FF0055">
      <v-col class="text-center textColor" cols="12">
        <strong class="poninterText" @click="openGit()">José Bieco</strong>
        —
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>

    <v-bottom-navigation
      :value="value"
      color="#FF0055"
      grow
      background-color="#212121"
      dark
      rounded="true"
    >
      <v-btn
        v-for="(item, index) in routes"
        :key="index"
        @click="goTo(item.path)"
      >
        <span>{{ item.name }}</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",

  data: () => ({
    routes: [
      { name: "Home", path: "/" },
      { name: "Animes", path: "animes" },
      { name: "One Piece", path: "one_piece" },
    ],
  }),

  methods: {
    openGit() {
      window.open("https://github.com/JoseBieco", "_blank");
    },

    goTo(path: string): void {
      this.$router.push(path);
    },
  },
});
</script>

<style scoped>
.poninterText:hover {
  cursor: pointer;
}

.textColor {
  color: white !important;
}
</style>
