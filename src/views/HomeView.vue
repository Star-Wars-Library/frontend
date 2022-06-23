<template>
  <main class="home">

    <body>
      <main class="grid-container">
        <div class="item" @click="go('species')">
          <img src="~@/assets/img/star_raza_01.png" alt="species" class="img">
          <div class="contenedor-texto">
            <p class="title-card">species</p>
          </div>
        </div>
        <div class="item" @click="go('weapons')">
          <img src="~@/assets/img/star_arma_01.png" alt="weapons" class="img">
          <div class="contenedor-texto">
            <p class="title-card">Weapons</p>
          </div>
        </div>
        <div class="item" @click="go('ships')">
          <img src="~@/assets/img/star_nave_01.png" alt="ships" class="img">
          <div class="contenedor-texto">
            <p class="title-card">Ships</p>
          </div>
        </div>
        <div class="item" @click="go('characters')">
          <img src="~@/assets/img/star_per_01.png" alt="characters" class="img">
          <div class="contenedor-texto">
            <p class="title-card">Characters</p>
          </div>
        </div>
        <div class="item" @click="go('planets')">
          <img src="~@/assets/img/star_plan_01.png" alt="planets" class="img">
          <div class="contenedor-texto">
            <p class="title-card">Planets</p>
          </div>
        </div>
      </main>
    </body>
  </main>
</template>

<script>
export default {
  methods: {
    go(name) { this.$router.push({ name }) }
  }
};
</script>

<style>



/* Grid*/
.grid-container {
  width: 100%;
  margin: 20px auto 0 auto;
  display: grid;
  justify-content: space-evenly;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(75px, 150px));
}

.item {
  text-align: center;
  overflow: hidden;
  height: auto;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0px 0px -14px rgba(0, 0, 0, .25);
}

.img {
  display: block;
  height: 300px;
  width: 150px;
  object-fit: cover;
}


.contenedor-texto {
  width: 50%;
  padding: 20px 0 30px 0;
}


.title-card {
  font-weight: 700;
  text-decoration: none;
  color: rgb(12, 11, 11);
  font-size: 20px;
}

.cta {
  background: #ffce38;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: center;
  border-radius: 10px;
  font-size: 10px;
}




/*RESPONSIVE*/

@media screen and (max-width:800px) {
  .menu-navegacion {
    /*flex-direction: column;*/
    height: 120px;
    justify-content: space-evenly;
  }

  .hero h1 {
    font-size: 38px;
  }

  .contenedor-imagenes img {
    width: 100%;
  }


}

@media screen and (max-width: 700px) {
  .enlaces {
    display: none;
  }

  .tabla2 {
    width: 45%;
    padding: 30px;
  }

  .tabla2>h2 {
    margin-top: 40px;
  }

  .contenedor-imagenes2 {
    width: 85%;
    flex-direction: column;
    align-items: center;
  }

  .contenedor-imagenes2 .imagen2 {
    width: 85%;
  }

  .galeria h1 {
    font-size: 40px;
  }
}
</style>
