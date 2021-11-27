<template>
  <v-card elevation="5" class="card">
    <v-img
      v-if="img_url"
      class="white--text align-end"
      height="300px"
      :src="img_url"
    >
      <v-card-title>{{ character }}</v-card-title>
    </v-img>
    <v-card-title v-else>{{ character }}</v-card-title>
    <v-card-subtitle v-if="anime">{{ anime }}</v-card-subtitle>
    <v-card-text v-if="quote && quote.length < 190">
      "<i>{{ quote }}</i> "
    </v-card-text>
    <v-card-text v-else-if="quote">
      <i>"{{ quote.substr(0, 190) }}...</i>"
    </v-card-text>
    <v-card-text v-else>
      <v-card-actions>
        <v-btn color="#FF0055" text @click="show = !show"> Facts </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show" class="facts">
          <v-divider></v-divider>

          <v-card-text v-for="(fact, index) in facts" :key="index">
            {{ fact }}
          </v-card-text>
          <v-divider></v-divider>
        </div>
      </v-expand-transition>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AnimeCard",
  props: ["img_url", "character", "anime", "quote", "facts"],
  data: () => ({
    show: false,
  }),
});
</script>

<style>
.card {
  margin: 0.5rem;
  min-height: 6rem;
  width: 20rem;
}

.v-image__image {
  filter: brightness(0.65) !important;
}

.facts {
  height: 15rem;
  overflow: auto;
}

.v-card__actions {
  padding: 0 !important;
}

.v-card__text {
  padding: 8px !important;
}
</style>
