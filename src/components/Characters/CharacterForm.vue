<template>
  <form id="characterForm" @submit.prevent="send">
    <p>
      <label for="name">name</label> <input type="text" name="name" value="1" />
    </p>
    <p>
      <label for="gender">gender</label>
      <input type="text" name="gender" value="1" />
    </p>
    <p>
      <label for="yearBirth">yearBirth</label>
      <input type="date" name="yearBirth" value="2022-06-22" />
    </p>
    <p>
      <label for="forceSensitive">forceSensitive</label>
      <input type="checkbox" name="forceSensitive" checked />
    </p>
    <p>
      <label for="species">species</label>
      <input type="number" name="species" value="1" />
    </p>
    <p>
      <label for="ship">ship</label>
      <input type="number" name="ship" value="1" />
    </p>
    <p>
      <label for="weapon">weapon</label>
      <input type="number" name="weapon" value="1" />
    </p>
    <p>
      <label for="homeWorld">homeWorld</label>
      <input type="number" name="homeWorld" value="1" />
    </p>
    <input type="submit" value="Send" />
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("characters", ["post"]),
    send({ target }) {
      let character = {};
      Array.from(target.elements).map((element) => {
        let { name, value, type, checked } = element;
        if (type === "submit") return;
        if (type === "checkbox") value = checked;
        character = { ...character, [name]: value };
      });
      this.post({ collection: "characters", item: character });
    },
  },
};
</script>
