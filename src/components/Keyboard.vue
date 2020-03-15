<template>
  <div class="keypad">
    <div>
      <h3 class="text-left font-weight-bold title-format">Teclado</h3>
    </div>
    <div class="mt-4">
      <p class="text-left">
        <strong class="keypad-badge">Crear Teclado</strong>
      </p>

      <p class="text-left">
        Para poder usar el Teclado, se debe crear un teclado. Para eso se usa el bloque funcional
        <strong>Crear Teclado</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/keypad/keypad_create.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Se debe crear una variable con un nombre que represente al
        <strong>Teclado</strong>.
      </p>
      <img
        src="../assets/blocks/keypad/keypad_assign_variable.png"
        width="70%"
        heigth="70%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror :value="code_create_keypad" :options="cmOptions" class="codemirror-blokino"></codemirror>

      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="keypad-badge">Capturar tecla presionada</strong>
      </p>

      <p class="text-left">
        Para poder capturar que tecla fue presionada se deben usar dos bloques funcionales que funcionan en conjunto. Primero se debe usar el bloque funcional
        <strong>Presionar tecla</strong>.
      </p>
      <img
        src="../assets/blocks/keypad/keypad_press.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Y dentro de este bloque se debe usar el bloque funcional
        <strong>Tecla presionada</strong>, que captura la tecla presionada.
      </p>
      <img
        src="../assets/blocks/keypad/keypad_key_press.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        En la siguiente imagen se muestra como debería usar estos dos bloques funcionales para capturar la tecla presionada para poder manipular un
        <strong>led</strong>.
      </p>

      <img
        src="../assets/blocks/keypad/keypad_press-code.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror :value="code_create_keypad_press" :options="cmOptions" class="codemirror-blokino"></codemirror>

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
  name: "Keyboard",
  props: {},
  data() {
    return {
      code_create_keypad:
        "// Se crea el Teclado \n" +
        "let teclado;\n" +
        "// Se asigna la configuración del Teclado MPR121_KEYPAD \n" +
        "teclado = (new five.Touchpad(\n            {controller: 'MPR121_KEYPAD',\n" +
        "             keys: [\n" +
        "                     ['*', '0', '#'],\n" +
        "                     ['7', '8', '9'],\n" +
        "                     ['4', '5', '6'],\n" +
        "                     ['1', '2', '3']\n" +
        "                   ],\n" +
        "             sensitivity: 0.25}));",
      code_create_keypad_press:
        "// Se crea el Teclado \n" +
        "let teclado,led;\n" +
        "//Se asigna el valor de entrada para el LED\n" +
        "led = (new five.Led(13));\n" +
        "// Se asigna la configuración del Teclado MPR121_KEYPAD \n" +
        "teclado = (new five.Touchpad(\n            {controller: 'MPR121_KEYPAD',\n" +
        "             keys: [\n" +
        "                     ['*', '0', '#'],\n" +
        "                     ['7', '8', '9'],\n" +
        "                     ['4', '5', '6'],\n" +
        "                     ['1', '2', '3']\n" +
        "                   ],\n" +
        "             sensitivity: 0.25}));\n" +
        "['press'].forEach(function(eventType) { \n" +
        "     teclado.on(eventType, function(event) {\n" +
        "       if ('6' == event.which.toString()) {\n" +
        "           led.blink(100);\n" +
        "       };\n" +
        "       if ('1' == event.which.toString()) {\n" +
        "           led.blink(1000);\n" +
        "       };\n" +
        "       if ('2' == event.which.toString()) {\n" +
        "         led.stop();\n" +
        "       };\n" +
        "     })\n" +
        "});",
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

.keypad {
  width: 50%;
  p {
    font-size: 25px;
  }
}

.codemirror-blokino {
  text-align: left;
  width: 100%;
  font-size: 20px;
  display: inline-block;
}

.keypad-badge {
  background-color: $keypad_color;
  padding: 0.7em;
  color: $color_white;
  border-radius: 1em;
}
</style>
