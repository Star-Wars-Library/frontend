<template>
  <table>
    <thead>
      <th>ID</th>
      <th>NAME</th>
      <th>TECH LEVEL</th>
      <th>AMMUNITION</th>
      <th>WEIGHT</th>
      <th>ACTIONS</th>
    </thead>
    <tbody>
      <tr v-for="weapon in weapons" :key="weapon.id">
        <td>{{ weapon.id }}</td>
        <td>{{ weapon.name }}</td>
        <td>{{ weapon.techLevel }}</td>
        <td>{{ weapon.ammunition }}</td>
        <td>{{ weapon.weight }}</td>
        <td>
          <button
            class="button"
            @click="del({ collection: 'weapons', id: weapon.id })"
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
    @include bg-color($collection: "weapons");
  }
}
</style>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      weapons: (state) => state.weapons.weapons,
    }),
  },
  methods: {
    ...mapActions("weapons", ["del"]),
  },
};
</script>
