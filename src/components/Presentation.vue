<template>
  <div>
    <div>
      <div class="banner-description p-5">
        <h1 class="blokino-presentation-title display-1">Blokino</h1>
        <h1 class="display-4 blink">Programación con Bloques funcionales.</h1>
        <h1 class="display-4 blink">Comienza a dar tus primeros pasos en la programación.</h1>
      </div>
      <div class="blokino-presentation">
        <img
          class="blokino-banner img-responsive"
          alt="Vue logo"
          src="../assets/blokino-banner.png"
          style="height:100%;"
        >
        <div class="blokino-footer p-5">
          Blokino esta compuesto por bloques funcionales hechos con Javascript y módulos de Arduino. Con los bloques funcionales se pueden crear aplicaciones para dar movimiento a tus proyectos. Con un poco de ingenio y muchas ganas de aprender vas a poder a prender programación de manera interactiva. Este proyecto es de código libre.
          <div class="banner-buttons mt-5">
            <b-button class="btn btn-lg btn-light btn-started" href="/documentation">Comenzar</b-button>
            <b-button
              class="btn btn-lg btn-light btn-github ml-1"
              href="https://github.com/GeorgeFarfan/blokino-electron"
              target="_blank"
            >Github</b-button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <ul class="p-5 blokino-links">
          <li>
            <a href="https://nodejs.org/es/" target="_blank" rel="noopener">NodeJS</a>
          </li>
          <li>
            <a href="http://johnny-five.io/" target="_blank" rel="noopener">Johnny Five</a>
          </li>
          <li>
            <a href="https://electronjs.org/" target="_blank" rel="noopener">Electron</a>
          </li>
          <li>
            <a href="https://vuejs.org/" target="_blank" rel="noopener">VueJS</a>
          </li>
          <li>
            <a href="https://www.arduino.cc/" target="_blank" rel="noopener">Arduino</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation",
  props: {
    msg: String
  }
};
</script> 
<style scoped lang="scss">
@import "../scss/_variables.scss";

@keyframes fade {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fade {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

.blink {
  animation: fade 2000ms infinite;
  -webkit-animation: fade 2000ms infinite;
}

.blokino-links {
  font-size: 1em;
  font-weight: bold;
}
.blokino-footer {
  background-color: $blokino_footer_color;
  font-size: 2em;
  color: $color_white;
}
.blokino-banner {
  width: 100%;
  height: 40em;
}

.blokino-presentation-title {
  font-weight: bold;
  color: $color_background;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $color_black;
}
a:active {
  color: $color_background;
}
a:hover {
  text-decoration: none;
  color: $color_background;
}
.logo-installer {
  margin-top: 100px;
  width: 60%;
  height: 50%;
}

.btn-github {
  color: $color_white;
  background-color: $btn_github;
  padding: 1.1em;
  font-weight: bold;
  border: 1px solid $color_white;
  width: 10em;
  font-size: 0.6em;
}

.btn-github:active {
  color: $color_white;
  background-color: $btn_github;
  padding: 1.1em;
  font-weight: bold;
  border: 1px solid $color_white;
  width: 10em;
  font-size: 0.6em;
}

.btn-github:hover {
  color: $color_white;
  background-color: $btn_github;
  padding: 1.1em;
  font-weight: bold;
  border: 1px solid $color_white;
  width: 10em;
  font-size: 0.6em;
}

.btn-started {
  color: $color_white;
  background-color: $btn_started;
  padding: 1.1em;
  font-weight: bold;
  border: 1px solid $color_white;
  width: 10em;
  font-size: 0.6em;
}

.btn-started:active {
  color: $color_white;
  background-color: $btn_started;
  padding: 1.1em;
  font-weight: bold;
  border: 1px solid $color_white;
  width: 10em;
  font-size: 0.6em;
}
.btn-started:hover {
  color: $color_white;
  background-color: $btn_started;
  padding: 1.1em;
  font-weight: bold;
  border: 1px solid $color_white;
  width: 10em;
  font-size: 0.6em;
}
</style>
