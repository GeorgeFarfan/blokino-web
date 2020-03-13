<template>
  <div class="app">
    <div class="app__navbar">
        <router-link to="/" class="app__navbar__link-main">Inicio</router-link>
        <router-link to="/blokino" class="app__navbar__link">¿Qué es Blokino?</router-link>      
        <router-link to="/kit" class="app__navbar__link">Kit de Blokino</router-link>
        <router-link to="/get_started" class="app__navbar__link">Vamos a programar</router-link>
        <router-link to="/download" class="app__navbar__link">Descargar</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "./scss/_variables.scss";
 
.app {
  font-family: arial;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__navbar {
    padding-top: 3em;
    padding-bottom: 3em; 
    &__link-main {
      margin-right: 10px;
      color: $color_nav;
      background-color: $color_background;
      text-decoration: none;
      font-weight: 500;
      padding: 0.7em;
      font-size: 25px;
      border-radius: 5px;
    }
    &__link-main:hover {
      background-color: $board-scale-4;
    }
    &__link {
      font-size: 17px;
      margin:0px 15px 0px 15px;
      color: rgb(144, 96, 114);
      text-decoration: none;  
    }
    &__link:hover {
      color: $board-scale-4;
      font-weight: 500;
      text-decoration: underline;
    }
  }
}


 
</style>
