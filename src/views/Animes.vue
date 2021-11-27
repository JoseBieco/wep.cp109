<template>
  <div class="container">
    <AnimeCard
      v-for="anime in animes"
      :key="anime.animeDescription.anime_id"
      :img_url="anime.animeDescription.anime_img"
      :facts="anime.facts"
      :character="anime.animeDescription.anime_name"
      anime=""
    >
    </AnimeCard>
  </div>
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
    animes() {
      return this.$store.state.animes;
    },
  },

  mounted() {
    this.$store.dispatch("loadAnimes");
  },
});
</script>

<style scoped>
.container {
  height: 100%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
</style>
