<template>
  <main>
    <h1>PLANETS</h1>
    <PlanetForm />
    <PlanetsList />
  </main>
</template>

<script>
import PlanetForm from "@/components/Planets/PlanetForm.vue";
import PlanetsList from "@/components/Planets/PlanetsList.vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("planets", ["get"]),
  },
  async mounted() {
    await this.get("planets");
  },
  components: { PlanetForm, PlanetsList },
};
</script>
