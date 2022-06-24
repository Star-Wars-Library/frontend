<template>
  <table>
    <thead>
      <th>ID</th>
      <th>NAME</th>
      <th>MEAN TEMPERATURE</th>
      <th>TERRAIN</th>
      <th>CLIMATE</th>
      <th>ACTIONS</th>
    </thead>
    <tbody>
      <tr v-for="planet in planets" :key="planet.id">
        <td>{{ planet.id }}</td>
        <td>{{ planet.name }}</td>
        <td>{{ planet.meanTemperature }}</td>
        <td>{{ planet.terrain }}</td>
        <td>{{ planet.climate }}</td>
        <td>
          <button
            class="button"
            @click="del({ collection: 'planets', id: planet.id })"
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
    @include bg-color($collection: "planets");
  }
}
</style>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      planets: (state) => state.planets.planets,
    }),
  },
  methods: {
    ...mapActions("planets", ["del"]),
  },
};
</script>
