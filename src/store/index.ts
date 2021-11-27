import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { IAnimes, IOnePieceCharacter } from "../interfaces/animes.interface";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    naruto: [],
    animes: [] as any,
    one_piece: [
      {
        character: {
          name: "Monkey D. Luffy",
          img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/05/luffy-e-o-personagem-favorito-dos-leitores-de-one-piece.jpg",
          age: 19,
        },
        position: "Captain",
        akuma_no_mi: "Gomu Gomu no Mi",
        bounty: "1.500.000.000",
      },

      {
        character: {
          name: "Roronoa Zoro",
          img: "https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/09/Zoro-Wano-Arc.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5",
          age: 21,
        },
        position: "Swordsman",
        akuma_no_mi: "None",
        bounty: "320.000.000",
      },

      {
        character: {
          name: "Sanji",
          img: "https://criticalhits.com.br/wp-content/uploads/2019/02/Sanji-One-Piece-Arco-Whole-Cake-Imagem-do-anime.jpg",
          age: 21,
        },
        position: "Cook",
        akuma_no_mi: "None",
        bounty: "330.000.000",
      },

      {
        character: {
          name: "Robin Nico",
          img: "https://pbs.twimg.com/media/EZ_m44iX0AEvH6h.jpg",
          age: 30,
        },
        position: "Archaeologist",
        akuma_no_mi: "Hana Hana no Mi",
        bounty: "130.000.000",
      },

      {
        character: {
          name: "Nami",
          img: "https://sm.ign.com/ign_br/screenshot/default/nami-one-piece-wano_k5uy.jpg",
          age: 20,
        },
        position: "Navigator",
        akuma_no_mi: "None",
        bounty: "66.000.000",
      },

      {
        character: {
          name: "Usopp",
          img: "https://criticalhits.com.br/wp-content/uploads/2019/09/one-piece-usopp-910x528.jpg",
          age: 19,
        },
        position: "Sniper",
        akuma_no_mi: "None",
        bounty: "200.000.000",
      },

      {
        character: {
          name: "Chopper Tony Tony",
          img: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/11/legiao_Q1zJAjeKT5Vf.jpg.jpeg",
          age: 17,
        },
        position: "Doctor",
        akuma_no_mi: "Hito Hito no Mi",
        bounty: "100",
      },

      {
        character: {
          name: "Brook",
          img: "https://www.portallos.com.br/wp-content/uploads/2008/12/brook-one-piece-378.jpg",
          age: 90,
        },
        position: "Musician, Swordsman",
        akuma_no_mi: "Yomi Yomi no Mi",
        bounty: "83.000.000",
      },
    ],
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
