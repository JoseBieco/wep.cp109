<template>
  <div class="container">
    <div class="grab_all">
      <div class="filter">
        <v-text-field
          v-model="bounty"
          label="Bounty"
          placeholder="Value"
          :append-icon="'mdi-magnify'"
          name="input-bounty"
          hint="Press the search button to apply the filter"
          outlined
          color="#FF0055"
          @click:append="setBounty()"
        ></v-text-field>
      </div>
    </div>
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
  name: "FilteredBounty",
  data: () => ({
    bounty: "0",
    characters: [],
  }),
  components: { OnePieceCard },
  methods: {
    setBounty() {
      this.characters = this.$store.getters.bountyOverValue(+this.bounty);
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

.filter {
  width: 16rem !important;
}

.grab_all {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
