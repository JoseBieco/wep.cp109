<template>
  <div class="container">
    <OnePieceCard
      v-for="(character, index) in characters"
      :key="index"
      :character="character"
    ></OnePieceCard>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import OnePieceCard from "../components/OnePieceCard.vue";

export default Vue.extend({
  name: "OnePiece",
  components: { OnePieceCard },
  computed: {
    characters() {
      return this.$store.state.one_piece;
    },
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
