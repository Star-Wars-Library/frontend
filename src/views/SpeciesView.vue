<template>
  <main>
    <h1>SPECIES</h1>
    <SpeciesForm />
    <SpeciesList />
  </main>
</template>

<script>
import SpeciesForm from "@/components/Species/SpeciesForm.vue";
import SpeciesList from "@/components/Species/SpeciesList.vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("species", ["get"]),
  },
  async mounted() {
    await this.get("species");
  },
  components: { SpeciesForm, SpeciesList },
};
</script>
