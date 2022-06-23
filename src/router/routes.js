export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/characters",
    name: "characters",
    component: () => import("../views/CharactersView.vue"),
  },
  {
    path: "/planets",
    name: "planets",
    component: () => import("../views/PlanetsView.vue"),
  },
  {
    path: "/ships",
    name: "ships",
    component: () => import("../views/ShipsView.vue"),
  },
  {
    path: "/weapons",
    name: "weapons",
    component: () => import("../views/WeaponsView.vue"),
  },
  {
    path: "/species",
    name: "species",
    component: () => import("../views/SpeciesView.vue"),
  },
];
