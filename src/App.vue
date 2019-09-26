<template>
  <div id="app">
    <div class="custom-nav">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand>
          <router-link to="/" class="link-main">Blokino</router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link to="/blokino" class="link">¿Qué es Blokino?</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/kit" class="link">Kit de Blokino</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/get_started" class="link">Vamos a programar</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/projects" class="link">Proyectos</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/download" class="link">Descargar</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "./scss/_variables.scss";
 
#app {
  font-family: $blokino_font_family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.custom-nav {
  border-bottom: solid 0.5px $color_nav;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.link-main {
  color: $color_nav;
  background-color: $color_background;
  text-decoration: none;
  font-weight: bold;
  padding: 0.8em;
  border-radius: 10px;
}

.link-main:hover {
  color: $color_background;
  background-color: $color_white;
  text-decoration: none;
  border: 1px solid $color_background;
  font-weight: bold;
  padding: 0.8em;
  border-radius: 10px;
}

.link {
  color: rgb(144, 96, 114);
  text-decoration: none;
}
.link:active {
  color: $color_background;
  text-decoration: none;
}

.link:hover {
  color: $color_background;
  text-decoration: none;
}
.navbar-toggler {
  background-color: $color_background !important;
}
</style>
