import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import OnePiece from "../views/OnePiece.vue";
import Animes from "../views/Animes.vue";
import Synopsis from "../views/Synopsis.vue";
import FilteredBounty from "../views/FilteredBounty.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/one_piece",
    name: "One Piece",
    component: OnePiece,
  },
  {
    path: "/animes",
    name: "Animes",
    component: Animes,
  },
  {
    path: "/synopsis",
    name: "Synopsis",
    component: Synopsis,
  },
  {
    path: "/filtered",
    name: "Filter bounty",
    component: FilteredBounty,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
