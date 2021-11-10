<template>
  <div>
    <v-footer padless color="#304FFE">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>José Bieco</strong>
      </v-col>
    </v-footer>

    <v-bottom-navigation
      :value="value"
      color="#304FFE"
      grow
      background-color="#BDBDBD"
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
});
</script>
