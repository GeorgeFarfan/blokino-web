<template>
  <div class="mt-4">
    <div id="matriz-leds-doc">
      <h3 class="text-left font-weight-bold title-format">MATRIZ-LEDS</h3>
      <div>
        <p class="text-left mt-2">
          Como su nombre indica, una matriz de diodos LED normales y corrientes. El tipo de Matriz soportada por Blokino, es la matriz de 8x8(8 filas y 8 columnas).
          Tambien llamados
          <strong>displays</strong> pueden mostrar texto, dibujos o animaciones. Cuando se lo quiere conectar a la placa Arduino UNO,
          se requiere de muchos pines, pero Blokino usa un controlador integrado llamado
          <strong>MAX7219</strong>. Con este controlador se reduce el números de pines que se necesitan.
        </p>
      </div>

      <div class="mt-4">
        <p class="text-left mt-4">
          <strong class="matriz-badge">Crear Matriz</strong>
        </p>

        <p class="text-left">
          Para poder usar una
          <strong>Matriz-LEDs</strong>, se de usar el bloque funcional
          <strong>Crear Matrix</strong>.
        </p>

        <img
          src="../assets/blocks/matriz-leds/matriz-leds-new.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p
          class="text-left"
        >En la siguiente imagen se muestra como se debe crear una Matriz asignandola a una variable.</p>

        <img
          src="../assets/blocks/matriz-leds/matriz-leds-new-2.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

        <codemirror :value="code_matrix" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left mt-4">
          <strong class="matriz-badge">Escribir Mensaje en la Matriz</strong>
        </p>

        <p class="text-left">
          Usando este bloque funcional se puede agregar mensajes en la Matrix de Leds. Para poder usarlo
          se debe usar el bloque funcional
          <strong>Pantalla mensaje</strong>, se debe seleccionar
          la matriz y escribir el mensaje que se quiere mostrar. Para saber como armar el circuito de este bloque funcional se debe
          hacer como la siguiente imagen:
        </p>
        <img
          src="../assets/blocks/matriz-leds/matriz-leds-message.png"
          width="70%"
          heigth="70%"
          class="rounded float-center"
          alt="..."
        >
        <p
          class="text-left"
        >En la siguiente imagen se muestra como se debe escribir un mensaje sobre la Matriz.</p>

        <img
          src="../assets/blocks/matriz-leds/matriz-leds-message-code.png"
          width="100%"
          heigth="100%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

        <codemirror :value="code_matrix_message" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left mt-4">
          <strong class="matriz-badge">Dibujar figura</strong>
        </p>

        <p class="text-left">
          Para poder crear tus propias figuras sobre la Matriz, se debe usar el bloque funcional
          <strong>Dibujar figura</strong>.
          En este bloque se puede ir armando la figura que quiera plasmar en la matriz de leds, tambien se debe seleccionar
          la
          <strong>matriz de leds</strong> .Para saber como armar el circuito de este bloque funcional se debe
          hacer como la siguiente imagen:
        </p>

        <img
          src="../assets/blocks/matriz-leds/matriz-leds-create-emoji.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">En la siguiente imagen se muestra como se debe dibujar sobre la Matriz.</p>

        <img
          src="../assets/blocks/matriz-leds/matriz-leds-create-emoji-code.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

        <codemirror :value="code_matrix_emoji" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left mt-4">
          <strong class="matriz-badge">Seleccionar gesto</strong>
        </p>

        <p class="text-left">
          Con este bloque funcional se puede dibujar en la matriz de leds figuras que son seleccionables de un listado de figuras predeterminadas.
          Para saber como armar el circuito de este bloque funcional se debe
          hacer como la siguiente imagen:
        </p>

        <img
          src="../assets/blocks/matriz-leds/matriz-select-emoji.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p
          class="text-left"
        >En la siguiente imagen se muestra como se debe seleccionar la figura para que se dibuje sobre la Matriz.</p>

        <img
          src="../assets/blocks/matriz-leds/matriz-select-emoji-code.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

        <codemirror :value="code_select_emoji" :options="cmOptions" class="codemirror-blokino"></codemirror>

        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left mt-4">
          <strong class="matriz-badge">Encender pantalla</strong>
        </p>
        <p class="text-left">
          Con este bloque funcional se enciende la matriz de leds.
          Para saber como armar el circuito de este bloque funcional se debe
          hacer como la siguiente imagen:
        </p>

        <img
          src="../assets/blocks/matriz-leds/matriz-on.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">En la siguiente imagen se muestra como se encender la Matriz de LEDs.</p>

        <img
          src="../assets/blocks/matriz-leds/matriz-on-code.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

        <codemirror :value="code_matrix_on" :options="cmOptions" class="codemirror-blokino"></codemirror>

        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left mt-4">
          <strong class="matriz-badge">Apagar pantalla</strong>
        </p>

        <p class="text-left">
          Con este bloque funcional se apage la matriz de leds.
          Para saber como armar el circuito de este bloque funcional se debe
          hacer como la siguiente imagen:
        </p>

        <img
          src="../assets/blocks/matriz-leds/matriz-off.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">En la siguiente imagen se muestra como se apagar la Matriz de LEDs.</p>

        <img
          src="../assets/blocks/matriz-leds/matriz-off-code.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

        <codemirror :value="code_matrix_off" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left mt-4">
          <strong class="matriz-badge">Limpiar pantalla</strong>
        </p>

        <p class="text-left">
          Con este bloque funcional se resetea la matriz de leds.
          Para saber como armar el circuito de este bloque funcional se debe
          hacer como la siguiente imagen:
        </p>

        <img
          src="../assets/blocks/matriz-leds/matriz-clear.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p
          class="text-left"
        >En la siguiente imagen se muestra como se debe resetear la Matriz de LEDs.</p>

        <img
          src="../assets/blocks/matriz-leds/matriz-clear-code.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

        <codemirror :value="code_matrix_clear" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>
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
  name: "Matriz",
  props: {},
  data() {
    return {
      code_matrix:
        "//Se crea la matriz de Leds\nlet matrix;\nmatrix = (new five.Led.Matrix({pins: {data: 2,clock: 4,cs: 5}}));\n//Se enciende la matrix\nmatrix.on();\n//Se establece la figura que se va a dibujar\nmatrix.draw(['00000000', '00000000', '00111100', '00111100', '00111100', '00111100', '00000000', '00000000']);",

      code_matrix_message:
        "//Se crea la matriz de Leds\nlet matrix;\nmatrix = (new five.Led.Matrix({pins: {data: 2,clock: 4,cs: 5}}));\n//Se enciende la matrix\nmatrix.on();\nlet msg = 'Probando Blokino ...'.split('');\nfunction next() {\n let c;\n if (c = msg.shift()) {\n  matriz.draw(c);\n  setTimeout(next, 1000);\n }\n};\nnext();",

      code_matrix_emoji:
        "//Se crea la matriz de Leds\nlet matrix;\nmatrix = (new five.Led.Matrix({pins: {data: 2,clock: 4,cs: 5}}));\n//Se enciende la matrix\nmatrix.on();\n//Se crea la figura\nmatriz.draw(['00000000', '01100110', '01100110', '01100110', '00000000', '00111100', '00000000', '00000000']);",
      code_select_emoji:
        "//Se crea la matriz de Leds\nlet matrix;\nmatrix = (new five.Led.Matrix({pins: {data: 2,clock: 4,cs: 5}}));\n//Se enciende la matrix\nmatrix.on();\n//Aca se selecciona la figura que se va a dibujar\nmatriz.draw(['00000000', '01100110', '01100110', '00000000', '00000000', '00100100', '00011000', '00000000']);",
      code_matrix_on:
        "//Se crea la matriz de Leds\nlet matrix;\nmatrix = (new five.Led.Matrix({pins: {data: 2,clock: 4,cs: 5}}));\n//Se enciende la matrix\nmatrix.on();\n//Aca se selecciona la figura que se va a dibujar\nmatriz.draw(['00000000', '01100110', '01100110', '00000000', '00000000', '00100100', '00011000', '00000000']);\n//Encender Matriz\nmatriz.on();",
      code_matrix_off:
        "//Se crea la matriz de Leds\nlet matrix;\nmatrix = (new five.Led.Matrix({pins: {data: 2,clock: 4,cs: 5}}));\n//Se enciende la matrix\nmatrix.on();\n//Aca se selecciona la figura que se va a dibujar\nmatriz.draw(['00000000', '01100110', '01100110', '00000000', '00000000', '00100100', '00011000', '00000000']);\n//Apaga la Matriz\nmatriz.off();",
      code_matrix_clear:
        "//Se crea la matriz de Leds\nlet matrix;\nmatrix = (new five.Led.Matrix({pins: {data: 2,clock: 4,cs: 5}}));\n//Se enciende la matrix\nmatrix.on();\n//Aca se selecciona la figura que se va a dibujar\nmatriz.draw(['00000000', '01100110', '01100110', '00000000', '00000000', '00100100', '00011000', '00000000']);\n//Resetea la Matriz\nmatriz.clear();",
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
.matriz-badge {
  background-color: $matrix_leds_color;
  padding: 0.7em;
  color: $color_white;
  border-radius: 1em;
}
</style>
