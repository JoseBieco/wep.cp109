import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { IAnimes } from "../interfaces/animes.interface";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    naruto: [],
    animes: [] as any,
  },
  mutations: {
    SET_NARUTO(state, data) {
      state.naruto = data;
    },

    ADD_ANIME(state, data) {
      state.animes.push(data);
    },

    CLEAR_ANIMES(state) {
      state.animes = [];
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

    loadAnimes({ commit, dispatch }) {
      commit("CLEAR_ANIMES");
      axios
        .get("https://anime-facts-rest-api.herokuapp.com/api/v1")
        .then((response) => {
          response.data.data.forEach((anime: any) => {
            const item: IAnimes = {} as IAnimes;
            item.animeDescription = { ...anime };
            dispatch("loadFactsFromAnime", item);
          });
        });
    },

    loadFactsFromAnime({ commit }, anime: IAnimes) {
      axios
        .get(
          "https://anime-facts-rest-api.herokuapp.com/api/v1/" +
            anime.animeDescription.anime_name,
        )
        .then((response) => {
          anime.facts = response.data.data.map((item: any) => item.fact);
          commit("ADD_ANIME", anime);
        });
    },
  },
  modules: {},
});
