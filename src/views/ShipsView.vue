<template>
  <main>
    <h1>SPACESHIPS</h1>
    <SpaceshipForm />
    <SpaceshipsList />
  </main>
</template>

<script>
import SpaceshipForm from "@/components/Spaceships/SpaceshipForm.vue";
import SpaceshipsList from "@/components/Spaceships/SpaceshipsList.vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("ships", ["get"]),
  },
  async mounted() {
    await this.get("ships");
  },
  components: { SpaceshipForm, SpaceshipsList },
};
</script>
