import { apiActions } from "./api.actions";

export const characters = {
  namespaced: true,
  state: { characters: [] },
  mutations: {
    empty: (state) => (state.characters = []),
    load: (state, character) => state.characters.push(character),
    remove: (state, id) =>
      (state.characters = state.characters.filter(
        (character) => character.id != id
      )),
  },
  actions: { ...apiActions },
};
