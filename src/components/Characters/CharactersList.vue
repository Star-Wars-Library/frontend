<template>
  <table>
    <thead>
      <th>ID</th>
      <th>NAME</th>
      <th>GENDER</th>
      <th>BIRTHYEAR</th>
      <th>FORCE SENSITIVE</th>
      <th>ACTIONS</th>
    </thead>
    <tbody>
      <tr v-for="character in characters" :key="character.id">
        <td>{{ character.id }}</td>
        <td>{{ character.name }}</td>
        <td>{{ character.gender }}</td>
        <td>{{ character.yearBirth }}</td>
        <td>{{ character.forceSensitive }}</td>
        <td>
          <button
            class="button"
            @click="del({ collection: 'characters', id: character.id })"
          >
            DELETE
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
@use "sass:map";
@import "~@/assets/_global.scss";
table {
  width: 100%;
  margin: 1rem;
  border-spacing: 0;
  tbody tr:nth-child(odd) {
    @include bg-color($collection: "characters");
  }
}
</style>

<script>
import { mapActions, mapState } from "vuex";
export default {
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
