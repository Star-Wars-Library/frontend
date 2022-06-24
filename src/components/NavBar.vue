<template>
  <nav>
    <router-link class="enlaces" to="/">Home</router-link> |
    <router-link class="enlaces" to="/characters">Characters</router-link> |
    <router-link class="enlaces" to="/planets">Planets</router-link> |
    <router-link class="enlaces" to="/ships">Spaceships</router-link> |
    <router-link class="enlaces" to="/weapons">Weapons</router-link> |
    <router-link class="enlaces" to="/species">Species</router-link>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">

.enlaces {
  list-style: none;
  display: inline-block;
  color: var(--colorFondo);
  text-decoration: none;
  margin-left: 10px;
  margin-right: 5px;
}

nav {
  display: flex;
  align-items: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #feed00;
    }
  }
}

/*RESPONSIVE*/

@media screen and (max-width:800px){
    .menu-navegacion{
        /*flex-direction: column;*/
        height: 120px;
        justify-content: space-evenly;
    }}
</style>