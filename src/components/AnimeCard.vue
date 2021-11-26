<template>
  <v-card elevation="5" class="card">
    <v-img
      v-if="img_url !== null"
      class="white--text align-end"
      height="200px"
      :src="img_url"
    >
      <v-card-title>{{ character }}</v-card-title>
    </v-img>
    <v-card-title v-else>{{ character }}</v-card-title>
    <v-card-subtitle>{{ anime }}</v-card-subtitle>
    <v-card-text v-if="quote.length < 190">
      "<i>{{ quote }}</i> "
    </v-card-text>
    <v-card-text v-else>
      <i>"{{ quote.split(/(.{190})/).filter((O) => O)[0] }}...</i>"
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AnimeCard",
  props: ["img_url", "character", "anime", "quote"],
});
</script>

<style scoped>
.card {
  margin: 0.5rem;
  min-height: 6rem;
  width: 12rem;
}
</style>
