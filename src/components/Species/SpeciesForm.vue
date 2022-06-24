<template>
  <div id="container">
    <div class="form-wrap">
      <form id="speciesForm" @submit.prevent="send">
        <p class="form-group">
          <label for="name">name</label>
          <input type="text" name="name" value="Humano" />
        </p>
        <p class="form-group">
          <label for="nativePlanet">nativePlanet</label>
          <input type="number" name="nativePlanet" value="1" />
        </p>
        <p class="form-group">
          <label for="language">language</label>
          <input type="text" name="language" value="Común" />
        </p>
        <p class="form-group">
          <label for="meanHeight">meanHeight</label>
          <input type="number" name="meanHeight" value="50" />
        </p>
        <p class="form-group">
          <label for="meanLifespan">meanLifespan</label>
          <input type="number" name="meanLifespan" value="50" />
        </p>
        <p class="form-group"><input type="submit" value="Send" /></p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("species", ["post"]),
    send({ target }) {
      let species = {};
      Array.from(target.elements).map((element) => {
        let { name, value, type, checked } = element;
        if (type === "submit") return;
        if (type === "checkbox") value = checked;
        species = { ...species, [name]: value };
      });
      this.post({ collection: "species", item: species });
    },
  },
};
</script>
<style>
#container {
  margin: 30px auto;
  max-width: 500px;
  padding: 20px;
}

.form-wrap {
  background: #141312;
  padding: 25px 25px;
  color: rgb(10, 10, 10);
}

.form-wrap h1,
.form-wrap p {
  text-align: center;
  color: #e7e2df;
}

.form-wrap .form-group {
  margin-top: 20px;
}

.form-wrap .form-group label {
  display: block;
  color: #f7f6f4;
}

.form-wrap .form-group input {
  width: 100%;
  padding: 10px;
  border: #ddd 1px solid;
  color: #080807;
  border-radius: 2px;
}

.form-wrap button {
  display: block;
  width: 10%;
  padding: 10px;
  margin-top: 20px;
  background: #9c9b9a;
  color: #faf6f5;
  cursor: pointer;
  border-radius: 4px;
}

.form-wrap button:hover {
  background: #0d0d0d;
}

.form-wrap .bottom-text {
  font-size: 13px;
  margin-top: 20px;
}
</style>
