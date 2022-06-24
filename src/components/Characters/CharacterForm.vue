<template>
 <div id="container">
  <div class="form-wrap">
  <form  id="characterForm" @submit.prevent="send">
    <p class="form-group">
      <label for="name">name</label> <input type="text" name="name" value="1" />
    </p>
    <p class="form-group">
      <label for="gender">gender</label>
      <input type="text" name="gender" value="1" />
    </p>
    <p class="form-group">
      <label for="yearBirth">yearBirth</label>
      <input type="date" name="yearBirth" value="2022-06-22" />
    </p>
    <p class="form-group">
      <label for="forceSensitive">forceSensitive</label>
      <input type="checkbox" name="forceSensitive" checked />
    </p>
    <p class="form-group">
      <label for="species">species</label>
      <input type="number" name="species" value="1" />
    </p>
    <p class="form-group">
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
  </div>
  </div>
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
 <style>
      
#container {
    margin: 30px auto;
    max-width:1000px;
    padding: 20px;      
}

.form-wrap {
    background: #141312;
    padding: 25px 25px;
    color: rgb(10, 10, 10);
}

.form-wrap h1,
.form-wrap p {
    font-family: 'Condiment', cursive;
    text-align: center;
    color: #e7e2df;
}

.form-wrap .form-group {
    margin-top: 20px;
}

.form-wrap .form-group label {
    font-family: 'Montserrat', sans-serif;
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
    font-family: 'Montserrat', sans-serif;
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