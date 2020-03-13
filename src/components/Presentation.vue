<template>
  <div class="presentation"> 
    
    <div class="presentation__banner">
      <h1 class="presentation__banner__title">Blokino</h1>
      <h1 class="presentation__banner--blink">Programación con Bloques funcionales.</h1>
      <h1 class="presentation__banner--blink">Comienza a dar tus primeros pasos en la programación.</h1>
    </div>
    <div class="presentation__information">
        <div class="presentation__information__description">
          Blokino esta compuesto por bloques funcionales implementados con JavaScript. 
          Con los bloques funcionales se pueden crear aplicaciones para dar movimiento a tus proyectos IoT. 
        </div>
        <img
          class="presentation__information__banner"
          alt="Vue logo"
          src="../assets/blokino-banner.png"
          style="height:100%;"
        >
        <div class="presentation__information__description">
          Con un poco de ingenio y muchas ganas de aprender vas a poder a prender programación de manera interactiva con NodeBots. 
          Este proyecto es de código libre, para usar con hardware libre.
        </div>
    </div>
    <div class="presentation__footer">     
      <a href="https://github.com/georgefarfan/blokino" target="_blank">GitHub</a>
      <a href="https://www.arduino.cc/" target="_blank">Arduino</a>
      <a href="https://nodejs.org/es/" target="_blank">NodeJS</a>
      <a href="http://johnny-five.io/" target="_blank">Johnny Five</a>
    </div>     
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  
  @import "../scss/_variables.scss";

  .presentation {
    display: flex;
    flex-direction: column;  
    align-items: center;
    &__banner {
      display: flex;
      flex-direction: column;
    
      &__title {
        font-size: 45px;
        font-weight: bold;
        color: $color_background;
        margin-bottom: 0px;
      }
      &--blink {
        font-size: 30px;
        margin-bottom: 0px;
        animation: fade 2000ms infinite;
        -webkit-animation: fade 2000ms infinite;
      }
    };
    &__information {
      margin-top: 30px;
      &__banner {
        width: 100%;
      }
      &__description {
        font-size: 30px;
        background-color: $blokino_footer_color;
        color: $color_white;
        padding: 40px;
        text-align:center;
      }
    };
    &__footer {
      margin: 30px 0 30px 0;
      a {
        font-weight: 600;
        font-size: 20px;
        color: $color_black;
        text-decoration: none;
        margin: 0px 5px 0px 5px;
      }
      a:hover {
        text-decoration: none;
        color: $color_background;
      }
    }
  }
</style>
