<template>
  <div class="mt-4" id="motors-doc">
    <div>
      <h3 class="text-left font-weight-bold title-format">Motores</h3>
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="motor-badge">Crear Motor</strong>
      </p>

      <p class="text-left">
        Para poder usar el Motor, se debe crear un motor. Para eso se usa el bloque funcional
        <strong>Crear Motor</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/motor/motor-create.png"
        width="15%"
        heigth="15%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Se debe crear una variable con un nombre que represente al
        <strong>Motor</strong>.
      </p>
      <img
        src="../assets/blocks/motor/motor-assign_variable.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror :value="code_create_motor" :options="cmOptions" class="codemirror-blokino"></codemirror>

      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="motor-badge">Girar</strong>
      </p>

      <p class="text-left">
        Para hacer girar el motor se debe usar el bloque funcional
        <strong>Girar</strong>, que puede además dar velocidad.
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/motor/motor-spin.png"
        width="50%"
        heigth="50%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="motor-badge">Verificar si esta girando</strong>
      </p>

      <p class="text-left">
        Para verificar si el motor esta girando se debe usar el bloque funcional
        <strong>Verificar si esta girando</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/motor/motor-is_spin.png"
        width="50%"
        heigth="50%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="motor-badge">Detener</strong>
      </p>

      <p class="text-left">
        Para detener al motor se debe usar el bloque funcional
        <strong>Detener</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/motor/motor-stop.png"
        width="33%"
        heigth="33%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="motor-badge">Capturar eventos</strong>
      </p>

      <p class="text-left">
        Cuando el motor gira se puede ejecutar otros bloques funcionales, para capturar este evento se puede usar el bloque funcional
        <strong>Mientras gira</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/motor/motor-while_turning.png"
        width="50%"
        heigth="50%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">
        Cuando el motor deja gira se puede ejecutar otros bloques funcionales, para capturar este evento se puede usar el bloque funcional
        <strong>Mientras se detiene</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/motor/motor-while_stops.png"
        width="50%"
        heigth="50%"
        class="rounded float-center"
        alt="..."
      >

      <p class="text-left mt-3">
        Este es un ejemplo de como deberían usarse los bloques funcionales del
        <strong>Motor</strong> usando un
        <strong>Teclado</strong> para manejarlo, en conjunto con el encendido y apagado de un
        <strong>LED</strong> cuando el motor gira o se detiene.
      </p>
      <img
        src="../assets/blocks/motor/motor-example_code.png"
        width="80%"
        heigth="80%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror :value="code_example" :options="cmOptions" class="codemirror-blokino"></codemirror>
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
  name: "Motors",
  props: {},
  data() {
    return {
      code_create_motor:
        "// Se crea el motor\n" +
        "let MOTOR;\n" +
        "//Se asigna el valor de entrado del Motor\n" +
        "MOTOR = (new five.Motor({\n" +
        "    pin: 3\n" +
        "}));",
      code_example:
        "// Se crea el MOTOR, led, TECLADO\n" +
        "let led, MOTOR, TECLADO;\n" +
        "//Se asigna el valor de entrado del LED\n" +
        "led = (new five.Led(13));\n" +
        "//Se asigna el valor de entrado del Motor\n" +
        "MOTOR = (new five.Motor({\n" +
        "    pin: 5\n" +
        "}));\n" +
        "//Se asigna La configuración del TECLADO MPR121_KEYPAD\n" +
        "TECLADO = (new five.Touchpad({\n" +
        "    controller: 'MPR121_KEYPAD',\n" +
        "    keys: [\n" +
        "        ['*', '0', '#'],\n" +
        "        ['7', '8', '9'],\n" +
        "        ['4', '5', '6'],\n" +
        "        ['1', '2', '3']\n" +
        "    ],\n" +
        "    sensitivity: 0.25\n" +
        "}));\n" +
        "MOTOR.on('start', function() {\n" +
        "    led.blink(100);\n" +
        "});\n" +
        "MOTOR.on('stop', function() {\n" +
        "    led.stop();\n" +
        "});\n" +
        "['press'].forEach(function(eventType) {\n" +
        "    TECLADO.on(eventType, function(event) {\n" +
        "        if ('2' == event.which.toString()) {\n" +
        "            MOTOR.stop();\n" +
        "        };\n" +
        "        if ('3' == event.which.toString()) {\n" +
        "            MOTOR.start(120);\n" +
        "        };\n" +
        "    })\n" +
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

.codemirror-blokino {
  text-align: left;
  width: 100%;
  font-size: 20px;
  display: inline-block;
}

.motor-badge {
  background-color: $motor-badge;
  padding: 0.7em;
  color: $color_white;
  border-radius: 1em;
}
</style>
