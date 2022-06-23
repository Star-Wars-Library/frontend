import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const apiUrl = `http://localhost:3000`;

export default new Vuex.Store({
  state: {
    characters: [],
    planets: [],
    ships: [],
    species: [],
    weapons: [],
  },
  getters: {},
  mutations: {
    emptyCharacters: (state) => (state.characters = []),
    loadCharacter: (state, character) => state.characters.push(character),
    removeCharacter: (state, id) =>
      (state.characters = state.characters.filter(
        (character) => character.id != id
      )),
  },
  actions: {
    fetchCharacters: async (state) => {
      try {
        const res = await fetch(`${apiUrl}/characters`);
        const characters = await res.json();
        state.commit("emptyCharacters");
        characters.forEach((character) =>
          state.commit("loadCharacter", character)
        );
      } catch (err) {
        return console.error(err);
      }
    },
    postCharacter: async (state, character) => {
      try {
        const res = await fetch(`${apiUrl}/characters`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(character),
        });
        const newCharacter = await res.json();
        state.commit("loadCharacter", newCharacter);
      } catch (err) {
        return console.error(err);
      }
    },
    deleteCharacter: async (state, id) => {
      try {
        await fetch(`${apiUrl}/characters/${id}`, {
          method: "DELETE",
        });
        state.commit("removeCharacter", id);
      } catch (err) {
        return console.error(err);
      }
    },
  },
});
