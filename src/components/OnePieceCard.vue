<template>
  <div>
    <v-card
      elevation="5"
      class="card"
      v-bind:class="[click ? 'clicked' : '']"
      @click="click = !click"
    >
      <v-img
        height="300px"
        class="white--text align-end card-img"
        :src="character.character.img"
      >
        <v-card-title>{{ character.character.name }}</v-card-title>
        <v-card-subtitle>{{ character.position }}</v-card-subtitle>
        <v-card-text>
          {{ character.akuma_no_mi }} - {{ character.bounty }}
        </v-card-text>
      </v-img>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OnePieceCard",
  props: ["character"],
  components: {},
  data: () => ({
    click: false,
  }),
});
</script>

<style scoped>
.card {
  margin: 0.5rem;
  min-height: 6rem;
  width: 20rem;
}

.v-image__image {
  filter: brightness(0.65) !important;
}

.clicked {
  border: 2px solid #FF0055;
}
</style>
