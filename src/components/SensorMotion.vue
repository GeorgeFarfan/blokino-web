<template>
  <div class="sensor-motion">
    <div>
      <h3 class="text-left font-weight-bold title-format">Sensores de movimiento</h3>
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="sensor_motion-badge">Crear Sensor Movimiento</strong>
      </p>

      <p class="text-left">
        Para poder usar el Sensor de movimiento, se debe crear un sensor de movimiento. Para eso se usa el bloque funcional
        <strong>Crear Sensor Movimiento</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/sensor-motion/sensor_motion-create.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Se debe crear una variable con un nombre que represente al
        <strong>Sensor de Movimiento</strong>.
      </p>
      <img
        src="../assets/blocks/sensor-motion/sensor_motion_assign-variable.png"
        width="70%"
        heigth="70%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror
        :value="code_create_sensor_motion"
        :options="cmOptions"
        class="codemirror-blokino"
      ></codemirror>

      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="sensor_motion-badge">Capturar movimientos</strong>
      </p>

      <p class="text-left">
        Para poder capturar que tecla fue presionada se deben usar dos bloques funcionales que funcionan en conjunto. Primero se debe usar el bloque funcional
        <strong>Se detecto movimiento</strong>.
      </p>
      <img
        src="../assets/blocks/sensor-motion/sensor_motion-detect_movement.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Y dentro de este bloque se debe usar el bloque funcional
        <strong>No se detecto movimiento</strong>, que captura la tecla presionada.
      </p>
      <img
        src="../assets/blocks/sensor-motion/sensor_motion-no_movement.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        En la siguiente imagen se muestra como debería usar estos dos bloques funcionales para capturar la tecla presionada para poder manipular un
        <strong>led</strong>.
      </p>

      <img
        src="../assets/blocks/sensor-motion/sensor_motion_detected-movement-code.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror
        :value="code_sensor_motion_detected_movemente"
        :options="cmOptions"
        class="codemirror-blokino"
      ></codemirror>

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
  name: "SensorMotion",
  props: {},
  data() {
    return {
      code_create_sensor_motion:
        "//Se crea el sensor de movimiento\n" +
        "let sensor_movimiento;\n" +
        "//Se asigna el valor de entrada para el Sensor de movimiento\n" +
        "sensor_movimiento = (new five.Motion(4));",
      code_sensor_motion_detected_movemente:
        "// Se crea el sensor de movimiento y el led\n" +
        "let led, sensor_movimiento;" +
        "//Se asigna el valor de entrada al LED\n" +
        "led = (new five.Led(13));\n" +
        "// Se asigna el valor de entrada para el Sensor de movimiento\n" +
        "sensor_movimiento = (new five.Motion(4));\n" +
        "// Aca se captura si no hay movimientos\n" +
        "sensor_movimiento.on('motionend', function() {\n" +
        "    led.stop();" +
        "\n});\n" +
        "// Aca se captura si hay movimientos" +
        "\nsensor_movimiento.on('motionstart', function() {\n" +
        "    led.blink(100);" +
        "\n});",

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

.sensor-motion {
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

.sensor_motion-badge {
  background-color: $sensor_motion_color;
  padding: 0.7em;
  color: $color_white;
  border-radius: 1em;
}
</style>
