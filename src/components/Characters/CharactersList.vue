<template>
  <div class="characterList">
    <div
      class="characterList__container"
      v-for="character in characters"
      :key="character.id"
    >
      <div>ID: {{ character.id }}</div>
      <div>NAME: {{ character.name }}</div>
      <div>GENDER: {{ character.gender }}</div>
      <div>BIRTHYEAR: {{ character.yearBirth }}</div>
      <div>FORCE SENSITIVE: {{ character.forceSensitive }}</div>
      <button @click="deleteCharacter(character.id)">DELETE</button>
    </div>
  </div>
</template>

<style scoped>
.characterList {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.characterList__container {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      characters: (state) => state.characters,
    }),
  },
  methods: {
    async deleteCharacter(id) {
      await this.$store.dispatch("deleteCharacter", id);
    },
  },
};
</script>
