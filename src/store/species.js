import { apiActions } from "./api.actions";

export const species = {
  namespaced: true,
  state: { species: [] },
  mutations: {
    empty: (state) => (state.species = []),
    load: (state, species) => state.species.push(species),
    remove: (state, id) =>
      (state.species = state.species.filter((species) => species.id != id)),
  },
  actions: { ...apiActions },
};
