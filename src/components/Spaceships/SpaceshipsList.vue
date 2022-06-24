<template>
  <table>
    <thead>
      <th>ID</th>
      <th>NAME</th>
      <th>MODEL</th>
      <th>CONSTRUCTOR</th>
      <th>LENGTH</th>
      <th>ACTIONS</th>
    </thead>
    <tbody>
      <tr v-for="ship in ships" :key="ship.id">
        <td>{{ ship.id }}</td>
        <td>{{ ship.name }}</td>
        <td>{{ ship.model }}</td>
        <td>{{ ship.constructor }}</td>
        <td>{{ ship.length }}</td>
        <td>
          <button
            class="button"
            @click="del({ collection: 'ships', id: ship.id })"
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
    @include bg-color($collection: "ships");
  }
}
</style>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      ships: (state) => state.ships.ships,
    }),
  },
  methods: {
    ...mapActions("ships", ["del"]),
  },
};
</script>
