<template>
  <v-content>
    <div class="container">
      <AnimeCard
        v-for="info in infos"
        :key="info.character"
        :img_url="null"
        :character="info.character"
        :anime="info.anime"
        :quote="info.quote"
      ></AnimeCard>
    </div>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import AnimeCard from "../components/AnimeCard.vue";

export default Vue.extend({
  name: "Home",
  components: {
    AnimeCard,
  },
  data: function () {
    return {};
  },

  methods: {},

  computed: {
    infos() {
      return this.$store.state.naruto;
    },
  },

  mounted() {
    this.$store.dispatch("getNaruto");
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
</style>
