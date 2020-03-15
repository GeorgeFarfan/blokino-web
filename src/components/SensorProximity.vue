<template>
  <div class="sensor-proximity">
    <div>
      <h3 class="text-left font-weight-bold title-format">Sensores de proximidad</h3>
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="sensor_prox-badge">Crear Sensor de Proximidad</strong>
      </p>

      <p class="text-left">
        Para poder usar el Sensor de proximidad, se debe crear un sensor de proximidad. Para eso se usa el bloque funcional
        <strong>Crear Sensor de Proximidad</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/sensor-prox/sensor_prox-create.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Se debe crear una variable con un nombre que represente al
        <strong>Sensor de Proximidad</strong>.
      </p>
      <img
        src="../assets/blocks/sensor-prox/sensor_prox-assign_variable.png"
        width="70%"
        heigth="70%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror :value="code_create_sensor_prox" :options="cmOptions" class="codemirror-blokino"></codemirror>

      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="sensor_prox-badge">Capturar distancia</strong>
      </p>

      <p class="text-left">
        Para poder capturar las distancias se deben usar el bloque funcional
        <strong>Capturar distancia.</strong>
      </p>
      <img
        src="../assets/blocks/sensor-prox/sensor_prox-capture_distance.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">
        Con este bloque funcional se captura la distancia, pero ahora debemos saber que distancia es la que se captura. La distancia esta clasificada en 4 bloques funcionales. Se clasifican en:
        <strong>Cerca, Muy Cerca, Lejos y Muy lejos.</strong> Para esto se usan los siguientes bloques funcionales.
      </p>
      <img
        src="../assets/blocks/sensor-prox/sensor_prox-near.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >

      <img
        src="../assets/blocks/sensor-prox/sensor_prox-distance_very_close.png"
        width="35%"
        heigth="35%"
        class="rounded float-center"
        alt="..."
      >

      <img
        src="../assets/blocks/sensor-prox/sensor_prox-far.png"
        width="28%"
        heigth="28%"
        class="rounded float-center"
        alt="..."
      >
      <img
        src="../assets/blocks/sensor-prox/sensor_prox-myaway.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        En la siguiente imagen se muestra como debería usar estos bloques funcionales para capturar la distancia para poder manipular un
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

      <codemirror :value="code_capture_distance" :options="cmOptions" class="codemirror-blokino"></codemirror>

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
  name: "SensorProximity",
  props: {},
  data() {
    return {
      code_create_sensor_prox:
        "//Se crea el sensor de proximidad\n" +
        "let sensor_proximidad;\n" +
        "//Se asigna el valor de entrada para el sensor de proximidad\n" +
        "sensor_proximidad = (new five.Proximity({\n" +
        "     controller: 'GP2Y0A21YK',\n" +
        "     pin: 'A1',\n" +
        "     freq: 1000" +
        "}\n));",
      code_capture_distance:
        "//Se crea el sensor de proximidad y el led\n" +
        "let sensor_proximidad, led;\n" +
        "//Se asigna el valor de entrada al LED\n" +
        "led = (new five.Led(13));\n" +
        "//Se asigna el valor de entrada para el sensor de proximidad\n" +
        "sensor_proximidad = (new five.Proximity({\n" +
        "     controller: 'GP2Y0A21YK',\n" +
        "     pin: 'A1',\n" +
        "     freq: 1000" +
        "}\n));\n" +
        "sensor_proximidad.on('data', function() {\n" +
        "    let cm = Math.round(this.cm);\n" +
        "    if (cm > 12 && cm < 20) {\n" +
        "        led.stop();\n" +
        "    };\n" +
        "    if (cm > 0 && cm < 12) {\n" +
        "        led.blink(300);\n" +
        "    };\n" +
        "    if (cm > 20 && cm < 35) {\n" +
        "        led.stop();\n" +
        "    };\n" +
        "    if (cm > 35 && cm < 70) {\n" +
        "        led.blink(1000);\n" +
        "    };\n" +
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

.sensor-proximity {
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

.sensor_prox-badge {
  background-color: $sensor_prox-badge;
  padding: 0.7em;
  color: $color_white;
  border-radius: 1em;
}
</style>
