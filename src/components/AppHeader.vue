<template>
    <header>
        <div class="menu-navegacion">
            <!--Logotipo-->
            <img src="~@/assets/img/logo_star-wars_peq.jpg" alt="StarWarsLibrary" class="logo">

            <!--Menú navegación -->

            <NavBar />
        </div>
        <section class="hero"></section>
    </header>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
    components: { NavBar },
};
</script>

<style>
/* Menu */
.menu-navegacion {
    padding: 0;
    display: flex;
    justify-content: space-between;
    height: 7rem;
    background-color: black;
    padding-left: 2rem;
    padding-right: 2rem;
}

.logo {
    background-size: cover;
}


/* Hero */

.hero {
    height: 40vh;
    background-image: url("~@/assets/img/1.01.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}

.contenedor-textos {
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(6, 5, 5);
    text-align: center;
}

.hero h1 {

    font-size: 20px;
    font-weight: 700;
}

.hero p {
    font-weight: 300;
    font-size: 25px;
    margin: 15px 0;
}


/*RESPONSIVE*/
/*
@media screen and (max-width:800px) {
    .menu-navegacion {
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

}
*/

</style>