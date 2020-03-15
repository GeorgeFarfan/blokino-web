<template>
 <div class="bumper">
          <div >
                <h3 class="text-left font-weight-bold title-format">Pulsadores</h3>
            </div>
            <div class="mt-4">
                <p class="text-left">
                <strong class="bumper-badge">Crear Pulsador</strong>
                </p>

                <p class="text-left">
                Para poder usar los Pulsadores, se debe crear un pulsador. Para eso se usa el bloque funcional
                <strong>Crear Pulsador</strong>
                . El bloque funcional que se debe usar es el siguiente:
                </p>
                <img
                src="../assets/blocks/bumpers/bumper-create.png"
                width="40%"
                heigth="40%"
                class="rounded float-center"
                alt="..."
                >
                <p class="text-left mt-3">
                Se debe crear una variable con un nombre que represente al
                <strong>Pulsador</strong>. Esto ya se vio en
                <strong>CREAR VARIABLES</strong>.
                </p>

                <p class="text-left">
                Ahora asignemos el número de entrada del Pulsador.
                </p>
                <img
                src="../assets/blocks/bumpers/bumper-create-code.png"
                width="100%"
                heigth="100%"
                class="rounded float-center"
                alt="..."
                >
                <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
                <codemirror :value="code_create_bumper" :options="cmOptions" class="codemirror-blokino"></codemirror>
                  <hr class="m-5">
          </div>
          <div class="mt-4">
                <p class="text-left">
                <strong class="bumper-badge">Pulsar</strong>
                </p>

                <p class="text-left">
                Para poder capturar la acción de pulsar el pulsador, se debe usar el bloque funcional <strong>Pulsar</strong>
                . En la siguiente imagen se muestra el bloque funcional que se debe usar:
                </p>
                <img
                src="../assets/blocks/bumpers/bumper-click.png"
                width="40%"
                heigth="40%"
                class="rounded float-center"
                alt="..."
                >
                <p class="text-left">
                Se va a crear un led y pulsador con sus respectivos números de entrada. Se va a usar el bloque funcional <strong>Pulsar</strong>, para encender el led cuando se pulse el pulsador.
                </p>
                <img
                src="../assets/blocks/bumpers/bumper-click-code.png"
                width="100%"
                heigth="100%"
                class="rounded float-center"
                alt="..."
                >
                <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
                <codemirror :value="code_click_bumper" :options="cmOptions" class="codemirror-blokino"></codemirror>
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
  name: "Bumper",
  props: {},
  data() {
    return { 
          code_create_bumper:"//Se crea un pulsador\nlet pulsador;\n// Se asigna un valor númerico a la entrada del Pulsador creado\npulsador = (new five.Button(8));",
          code_click_bumper:"//Se crea un pulsador y un led\nlet pulsador_encender_led,led;\n// Se asigna un valor númerico a la entrada del Pulsador y del Led\nled = (new five.Led(13));\npulsador_encender_led = (new five.Button(8));\npulador_encender_led.on('release', function(){\n   led.blink(3000)\n});",
          cmOptions: {
          tabSize: 1,
          mode: "text/javascript",
          theme: "base16-dark",
          lineNumbers: true,
          line: true,
          readOnly: true
        },
    }
  }
};
</script> 
<style scoped lang="scss">

@import "../scss/_variables.scss";


.bumper {
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

.bumper-badge{
    background-color: $bumper_color;
    padding: 0.7em;
    color: $color_white;
    border-radius: 1em;
}

</style>
