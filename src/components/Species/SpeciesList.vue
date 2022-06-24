<template>
  <table>
    <thead>
      <th>ID</th>
      <th>NAME</th>
      <th>NATIVE PLANET</th>
      <th>LANGUAGE</th>
      <th>AVERAGE HEIGHT</th>
      <th>AVERAGE LIFESPAN</th>
      <th>ACTIONS</th>
    </thead>
    <tbody>
      <tr v-for="species in species" :key="species.id">
        <td>{{ species.id }}</td>
        <td>{{ species.name }}</td>
        <td>{{ species.nativePlanet }}</td>
        <td>{{ species.language }}</td>
        <td>{{ species.meanHeight }}</td>
        <td>{{ species.meanLifespan }}</td>
        <td>
          <button
            class="button"
            @click="del({ collection: 'species', id: species.id })"
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
    @include bg-color($collection: "species");
  }
}
</style>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      species: (state) => state.species.species,
    }),
  },
  methods: {
    ...mapActions("species", ["del"]),
  },
};
</script>
