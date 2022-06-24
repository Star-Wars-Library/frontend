import { apiActions } from "./api.actions";

export const ships = {
  namespaced: true,
  state: { ships: [] },
  mutations: {
    empty: (state) => (state.ships = []),
    load: (state, ship) => state.ships.push(ship),
    remove: (state, id) =>
      (state.ships = state.ships.filter((ship) => ship.id != id)),
  },
  actions: { ...apiActions },
};
