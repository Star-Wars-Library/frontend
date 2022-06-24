<template>
  <div class="characterList">
    <CharacterItem
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
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
import { mapActions, mapState } from "vuex";
import CharacterItem from "./CharacterItem.vue";
export default {
  components: { CharacterItem },
  computed: {
    ...mapState({
      characters: (state) => state.characters.characters,
    }),
  },
  methods: {
    ...mapActions("characters", ["del"]),
  },
};
</script>
