<template>
  <div>
    <v-footer padless color="#D00000">
      <v-col class="text-center textColor" cols="12">
        <strong class="poninterText" @click="openGit()">José Bieco</strong>
        —
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>

    <v-bottom-navigation
      :value="value"
      color="#ffffff"
      grow
      background-color="#212121"
      rounded="true"
    >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",

  methods: {
    openGit() {
      window.open("https://github.com/JoseBieco", "_blank");
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
