<template>
  <div class="card">
    <div class="card__id">ID: {{ character.id }}</div>
    <div class="card__name">NAME: {{ character.name }}</div>
    <div class="card__gender">GENDER: {{ character.gender }}</div>
    <div class="card__birthyear">BIRTHYEAR: {{ character.yearBirth }}</div>
    <div class="card__force_sensitive">
      FORCE SENSITIVE: {{ character.forceSensitive }}
    </div>
    <button
      class="card__button"
      @click="del({ collection: 'characters', id: character.id })"
    >
      DELETE
    </button>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  border-radius: 0.5rem;
  border: 1px solid grey;
  display: flex;
  &__id {
    background-color: green;
  }
  &__name {
    background-color: blue;
  }
  &__gender {
    background-color: pink;
  }
  &__birthyear {
    background-color: yellow;
  }
}
</style>
