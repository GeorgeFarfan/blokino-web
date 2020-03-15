<template>
  <div class="get-started">
 
      <h1 class="text-center font-weight-bold title-format">¿Qué es Blokino?</h1>

      <img
        src="../assets/blokino-logo-violet.png"
        width="15%"
        heigth="15%"
        class="image"
        alt="..."
      >

      <p
        class=""
      ><strong>Blokino</strong> es un entorno de programación usando bloques funcionales. Los bloques funcionales son el concepto principal dentro de Blokino. Como el nombre lo dice, los bloques funcionales son contenedores de lógica y funcionalidad intuitivos, que con el nombre que las describe se sobre entiende que se quiere realizar. Para generar aplicaciones Blokino, se deben ir agrupando estos bloques, cabe aclarar que el anidamiento debe tener una lógica que se pueda interpretar por el motor de ejecución de Blokino. </p>
     <p
        class=""
      >Blokino esta compuesto principalmente con Electron, NodeJS y módulos de <strong>NPM</strong>.</p>

      <img
        src="../assets/javascript-logo.png"
        width="15%"
        heigth="15%"
        class="image"
        alt="..."
      >

           <p
        class="text-left mt-5"
>Todo el entorno de Blokino esta hecho con <strong>Javascript</strong>. Como punto de partida de <strong>NodeBots</strong>, que son robots programados con NodeJS. Blokino es una extensión de los proyectos de <strong>NodeBots</strong>, usando como partida Electron y NodeJS. Compuesto además con librerías client-side que estan disponibles en <strong>NPM</strong>.</p>

      <img
        src="../assets/electron-logo.png"
        width="15%"
        heigth="15%"
        class="image"
        alt="..."
      >

           <p
        class=""
>Es el framework de Javascript para el desarrollo de aplicaciones de escritorio mediante el uso de tecnologías web con lo que esta compuesto Blokino. El uso de este framework le permite a Blokino estar disponible con Windows y Linux.</p>

      <img
        src="../assets/firmata.png"
        width="15%"
        heigth="15%"
        class="image"
        alt="..."
      >
     <p
        class=""
      ><strong>Firmata</strong> es un protocolo estándar de comunicación con microcontroladores desde cualquier software o cualquier ordenador conectado.       
      Este protocolo es usado en Blokino, para interpretar al <strong>Arduino UNO</strong>, como una extensión de la aplicación de Blokino. Con esto se puede programar no solo en Javascript como se hace en Blokino, sino en otros lenguajes como Java y Python. Siendo un protocolo totalmente compatible con Arduino.</p>
      <img
        src="../assets/arduino-firmata.png"
        width="15%"
        heigth="15%"
        class="image"
        alt="..."
      >

     <p
        class=""
      >El objetivo de firmata es permitir controlar completamente Arduino desde software instalado en un ordenador, sin escribir una sola línea de código de Arduino.</p>
 
  </div>
</template>

<script>
export default {
  name: "BlokinoAbout",
  props: {},
  data() {
    return {};
  }
};
</script> 
<style scoped lang="scss">
@import "../scss/_variables.scss";
  .get-started {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-size: 25px;
    width: 50%;
  }
</style>
