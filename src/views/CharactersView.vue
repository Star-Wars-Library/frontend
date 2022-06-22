<template>
  <div>
    <h1>PERSONAJES</h1>
    <CharacterForm />
    <CharactersList />
  </div>
</template>

<script>
import CharacterForm from "@/components/Characters/CharacterForm.vue";
import CharactersList from "@/components/Characters/CharactersList.vue";

export default {
  async mounted() {
    await this.$store.dispatch("fetchCharacters");
  },
  components: { CharacterForm, CharactersList },
};
</script>
