<template>
  <div class="mt-4" id="potentiometer-doc">
    <div>
      <h3 class="text-left font-weight-bold title-format">Potenciometros</h3>
    </div>
    <div class="mt-4">
      <p class="text-left">
        <strong class="potentiometer-badge">Crear Potenciometro</strong>
      </p>

      <p class="text-left">
        Para poder usar los Potenciometros, se debe crear un potenciometro. Para eso se usa el bloque funcional
        <strong>Crear Potenciometro</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/potentiometer/potentiometer_block.png"
        width="40%"
        heigth="40%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Se debe crear una variable con un nombre que represente al
        <strong>Potenciometro</strong>. Esto ya se vio en
        <strong>CREAR VARIABLES</strong>.
        Ahora asignemos el valor entrada del Potenciometro.
      </p>
      <img
        src="../assets/blocks/potentiometer/potentiometer_create.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror
        :value="code_create_potentiometer"
        :options="cmOptions"
        class="codemirror-blokino"
      ></codemirror>

      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="potentiometer-badge">Manipular LEDS</strong>
      </p>

      <p class="text-left">
        Con los
        <strong>Potenciometros</strong> se puede manejar uno más
        <strong>LEDs</strong>, para poder ajustar su parpadeo o el brillo del
        <strong>LED</strong>.
        . Para ajustar el parpadeo de un
        <strong>LED</strong> se debe usar el siguiente bloque funcional:
      </p>
      <img
        src="../assets/blocks/potentiometer/potentiometer_led_blink.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <img
        src="../assets/blocks/potentiometer/potentiometer_led_brigthness.png"
        width="80%"
        heigth="80%"
        class="rounded float-center"
        alt="..."
      >

      <p class="text-left">
        Para ajustar varios
        <strong>LEDs</strong> se debe usar los siguientes bloques funcionales:
      </p>
      <img
        src="../assets/blocks/potentiometer/potentiometer_array_leds_blink.png"
        width="70%"
        heigth="70%"
        class="rounded float-center"
        alt="..."
      >
      <img
        src="../assets/blocks/potentiometer/potentiometer_array_leds_brigthness.png"
        width="70%"
        heigth="70%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">
        En este bloque funcional se debe crear un listado de
        <strong>LEDs</strong> para poder ajustar la velocidad del parpadeo o la intensidad del brillo.
      </p>

      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="potentiometer-badge">Manipular Servomotores</strong>
      </p>

      <p class="text-left">
        Con los
        <strong>Potenciometros</strong> se puede manejar uno o más
        <strong>Servomotores</strong>, para poder moverlos a medida que se va girando el potenciometro.
        Para poder mover un servo con el potenciometro, se debe usar el siguiente bloque funcional:
      </p>
      <img
        src="../assets/blocks/potentiometer/potentiometer_servo_spin.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >

      <p class="text-left">
        Para mover varios
        <strong>Servomotores</strong> se debe usar los siguientes bloques funcionales:
      </p>
      <img
        src="../assets/blocks/potentiometer/potentiometer_array_servos_spin.png"
        width="50%"
        heigth="50%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">
        En este bloque funcional se debe crear un listado de
        <strong>Servomotores</strong> para que se los pueda ir moviendo.
      </p>
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
  name: "Potentiometer",
  props: {},
  data() {
    return {
      code_create_potentiometer:
        "//Se crea el servomotor y el led\n" +
        "let potenciometro, led;\n" +
        "//Se asigna el valor de entrada al LED\n" +
        "led = (new five.Led(13));\n" +
        "//Se asigna el valor de entrada al POTENCIOMETRO\n" +
        "potenciometro = (new five.Sensor({pin: 'A1', freq: 250}));",

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

.potentiometer-badge {
  background-color: $potentiometer_color;
  padding: 0.7em;
  color: $color_white;
  border-radius: 1em;
}
</style>
