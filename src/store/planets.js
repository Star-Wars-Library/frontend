import { apiActions } from "./api.actions";

export const planets = {
  namespaced: true,
  state: { planets: [] },
  mutations: {
    empty: (state) => (state.planets = []),
    load: (state, planet) => state.planets.push(planet),
    remove: (state, id) =>
      (state.planets = state.planets.filter((planet) => planet.id != id)),
  },
  actions: { ...apiActions },
};
