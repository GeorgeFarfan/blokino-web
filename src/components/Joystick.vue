<template>
  <div class="joystick">
    <div>
      <h3 class="text-left font-weight-bold title-format">Joystick</h3>
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="joystick-badge">Crear Joystick</strong>
      </p>

      <p class="text-left">
        Para poder usar el Joystick, se debe crear un Joystick. Para eso se usa el bloque funcional
        <strong>Crear Joystick</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/joystick/joystick-create.png"
        width="80%"
        heigth="80%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Se debe crear una variable con un nombre que represente al
        <strong>Joystick</strong>.
      </p>
      <img
        src="../assets/blocks/joystick/joystick-assign_variable.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror :value="code_create_joystick" :options="cmOptions" class="codemirror-blokino"></codemirror>

      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="joystick-badge">Capturar movimientos</strong>
      </p>

      <p class="text-left">
        Para poder capturar las distancias se deben usar el bloque funcional
        <strong>Detectar movimientos.</strong>
      </p>
      <img
        src="../assets/blocks/joystick/joystick-detect_movement.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">
        Con este bloque funcional se detecta movimientos, pero ahora debemos saber en que dirección se mueve el
        <strong>joystick</strong>. Los movimientos esta clasificado en 8 bloques funcionales. Se clasifican en:
        <strong>Arriba, Arriba a la derecha, Arriba a la izquierda, Abajo, Abajo a la derecha, Abajo a la izquierda, Derecha y a la Izquierda.</strong> Para esto se usan los siguientes bloques funcionales.
      </p>
      <img
        src="../assets/blocks/joystick/joystick-move_up.png"
        width="20%"
        heigth="20%"
        class="rounded float-center"
        alt="..."
      >

      <img
        src="../assets/blocks/joystick/joystick-move_down.png"
        width="20%"
        heigth="20%"
        class="rounded float-center"
        alt="..."
      >

      <img
        src="../assets/blocks/joystick/joystick-move_left.png"
        width="25%"
        heigth="25%"
        class="rounded float-center"
        alt="..."
      >
      <img
        src="../assets/blocks/joystick/joystick-move_right.png"
        width="25%"
        heigth="25%"
        class="rounded float-center"
        alt="..."
      >

      <img
        src="../assets/blocks/joystick/joystick-move_up_left.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >

      <img
        src="../assets/blocks/joystick/joystick-move_up_right.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >

      <img
        src="../assets/blocks/joystick/joystick-move_down_left.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >

      <img
        src="../assets/blocks/joystick/joystick-move_down_right.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >

      <p class="text-left mt-3">
        En la siguiente imagen se muestra como debería usar estos bloques funcionales para detectar los movimientos del
        <strong>joystick</strong> para poder manipular un
        <strong>led</strong>.
      </p>

      <img
        src="../assets/blocks/joystick/joystick-code_example.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror :value="code_joystick_example" :options="cmOptions" class="codemirror-blokino"></codemirror>

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
  name: "Joystick",
  props: {},
  data() {
    return {
      code_create_joystick:
        "// Se crea el Joystick\n" +
        "let joystick;\n" +
        "// Se asignan los valores de entrada del Joystick\n" +
        "joystick = (new five.Joystick({\n" +
        "    pins: ['A1', 'A0']\n" +
        "}));",
      code_joystick_example:
        "// Se crea el Joystick y el LED\n" +
        "let joystick, led;\n" +
        "// Se asignan los valores de entrada del Joystick\n" +
        "joystick = (new five.Joystick({\n" +
        "    pins: ['A1', 'A0']\n" +
        "}));\n" +
        "joystick.on('change', function() {\n" +
        "     let x = Math.round(this.x);\n" +
        "     let y = Math.round(this.y);\n" +
        "     if (x == 0 && y == 1) {\n" +
        "         led.blink(100);\n" +
        "     };\n" +
        "     if (x == 0 && y == -1) {\n" +
        "         led.stop();\n" +
        "     };\n" +
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

.joystick {
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

.joystick-badge {
  background-color: $joystick-badge;
  padding: 0.7em;
  color: $color_white;
  border-radius: 1em;
}
</style>
