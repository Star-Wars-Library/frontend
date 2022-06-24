<template>
  <div id="container">
    <div class="form-wrap">
      <form id="planetForm" @submit.prevent="send">
        <p class="form-group">
          <label for="name">name</label>
          <input type="text" name="name" value="Alderaan" />
        </p>
        <p class="form-group">
          <label for="meanTemperature">meanTemperature</label>
          <input type="text" name="meanTemperature" value="25" />
        </p>
        <p class="form-group">
          <label for="terrain">terrain</label>
          <input type="text" name="terrain" value="Llano" />
        </p>
        <p class="form-group">
          <label for="climate">climate</label>
          <input type="text" name="climate" value="Templado" />
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
    ...mapActions("planets", ["post"]),
    send({ target }) {
      let planet = {};
      Array.from(target.elements).map((element) => {
        let { name, value, type, checked } = element;
        if (type === "submit") return;
        if (type === "checkbox") value = checked;
        planet = { ...planet, [name]: value };
      });
      this.post({ collection: "planets", item: planet });
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
