import { apiActions } from "./api.actions";

export const weapons = {
  namespaced: true,
  state: { weapons: [] },
  mutations: {
    empty: (state) => (state.weapons = []),
    load: (state, weapon) => state.weapons.push(weapon),
    remove: (state, id) =>
      (state.weapons = state.weapons.filter((weapon) => weapon.id != id)),
  },
  actions: { ...apiActions },
};
