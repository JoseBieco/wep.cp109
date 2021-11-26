import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    naruto: [],
  },
  mutations: {
    SET_NARUTO(state, data) {
      state.naruto = data;
    },
  },
  actions: {
    getNaruto({ commit }) {
      axios
        .get(
          "https://animechan.vercel.app/api/quotes/anime?title=naruto&page=1",
        )
        .then((response) => {
          commit("SET_NARUTO", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
