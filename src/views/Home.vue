<template>
  <v-content>
    <div class="container">
      <v-card
        elevation="5"
        v-for="info in infos"
        :key="info.character"
        class="card"
      >
        <v-card-title>{{ info.character }}</v-card-title>
        <v-card-subtitle>{{ info.anime }}</v-card-subtitle>
        <v-card-text v-if="info.quote.length < 190">
          "<i>{{ info.quote }}</i> "
        </v-card-text>
        <v-card-text v-else>
          <i>"{{ info.quote.split(/(.{190})/).filter((O) => O)[0] }}...</i>"
        </v-card-text>
      </v-card>
    </div>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      infos: [null],
    };
  },

  methods: {
    getData() {
      axios
        .get(
          "https://animechan.vercel.app/api/quotes/anime?title=naruto&page=1",
        )
        .then((response) => {
          this.infos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.getData();
  },
});
</script>

<style scoped>
.container {
  height: 100%;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.card {
  margin: 0.5rem;
  min-height: 6rem;
  width: 12rem;
}
</style>
