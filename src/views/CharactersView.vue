<template>
  <div>
    <h1>CHARACTERS</h1>
    <CharacterForm />
    <CharactersList />
  </div>
</template>

<script>
import CharacterForm from "@/components/Characters/CharacterForm.vue";
import CharactersList from "@/components/Characters/CharactersList.vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("characters", ["get"]),
  },
  async mounted() {
    await this.get("characters");
  },
  components: { CharacterForm, CharactersList },
};
</script>
