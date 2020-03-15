<template>
  <div class="buzzer">
    <div>
      <h3 class="text-left font-weight-bold title-format">Zumbadores</h3>
    </div>
    <div class="mt-4">
      <p class="text-left">
        <strong class="button-badge">Crear Zumbador</strong>
      </p>

      <p class="text-left">
        Para poder usar los Zumbadores, se debe crear un zumbador. Para eso se usa el bloque funcional
        <strong>Crear Zumbador</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/buzzer/buzzer_1.png"
        width="40%"
        heigth="40%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Se debe crear una variable con un nombre que represente al
        <strong>Zumbador</strong>. Esto ya se vio en
        <strong>CREAR VARIABLES</strong>.
      </p>

      <p class="text-left">Ahora asignemos el número de entrada del Zumbador.</p>
      <img
        src="../assets/blocks/buzzer/buzzer_1_1.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
      <codemirror :value="code_create_buzzer" :options="cmOptions" class="codemirror-blokino"></codemirror>
      <hr class="m-5">
    </div>


    <div class="mt-4">
      <p class="text-left">
        <strong class="button-badge">Crear Sonidos</strong>
      </p>

      <p class="text-left">
        Para poder crear sonidos con los Zumbadores, se deben unir notas músicles. Hay varios tipos de notas, pero aca se dividen en dos tipos de bloques funcionaes. Primero esta la <strong>Crear Nota Musical</strong>
        . Este bloque funcional tiene para seleccionar el tipo de nota musical, el grado de la nota y la velocidad a la que puede ir. 
        El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/buzzer/buzzer_2.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        El otro bloque funcional es <strong>Crear Pausa</strong>. Con este bloque se generan pausas entre las notas músicales. Esta compuesto con el tiempo que debe durar la pausa en milisegundos.
      </p>
      <img
        src="../assets/blocks/buzzer/buzzer_3.png"
        width="80%"
        heigth="80%"
        class="rounded float-center"
        alt="..."
      >
     <p class="text-left mt-3"> Para crear sonidos con las notas musicales se debe agrupar todas las notas musicales y pausas. Para eso se usa el bloque 
         funcional <strong>Hacer sonar el</strong>.</p>
         
                      <img
        src="../assets/blocks/buzzer/buzzer_4.png"
        width="70%"
        heigth="70%"
        class="rounded float-center"
        alt="..."
      >
    
           <p class="text-left mt-3">   Este bloque contiene el listado de notas y pausas, como así tambien la velocidad a la que deben sonar. En la siguiente imagen se ve un ejemplo de como debería usarse:</p>
                      <img
        src="../assets/blocks/buzzer/buzzer_4_4.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >

      <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
      <codemirror :value="code_create_sound" :options="cmOptions" class="codemirror-blokino"></codemirror>
      <hr class="m-5">
    </div>

  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/base16-dark.css";

export default {
  components: {
    codemirror
  },
  name: "Buzzer",
  props: {},
  data() {
    return {
      code_create_buzzer:
        "//Se crea un zumbador\nlet zumbador;\n// Se asigna un valor númerico a la entrada del Zumbador creado\nzumbador = (new five.Piezo(2));",
      code_create_sound:"//Se crea un zumbador\nlet zumbador;\n//Se asigna un valor númerico a la entrada del Zumbador creado\n"+
                        "zumbador = (new five.Piezo(3));\n"+
                        "//Esta es el listado de notas y pausas musicales que tienen una velocidad de reproducción\n"+
                        "zumbador.play({song: [(['A', 1]), (['A', 1]), ([null, '1'])],tempo: 100});",
      cmOptions: {
        tabSize: 1,
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true,
        readOnly: true
      }
    };
  }
};
</script> 
<style scoped lang="scss">

@import "../scss/_variables.scss";

.buzzer {
  width: 50%;
  p {
    font-size: 20px;
  }
}
.codemirror-blokino {
  text-align: left;
  width: 100%;
  font-size: 20px;
  display: inline-block;
}

.button-badge {
  background-color: $button_color;
  padding: 0.7em;
  color: $color_white;
  border-radius: 1em;
}
</style>
