<template>
  <div class="buttons">
    <div>
      <h3 class="text-left font-weight-bold title-format">Botones</h3>
    </div>
    <div class="mt-4">
      <p class="text-left">
        <strong class="button-badge">Crear Boton</strong>
      </p>

      <p class="text-left">
        Para poder usar los Botones, se debe crear un boton. Para eso se usa el bloque funcional
        <strong>Crear Boton</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/buttons/button_create.png"
        width="40%"
        heigth="40%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Se debe crear una variable con un nombre que represente al
        <strong>Boton</strong>. Esto ya se vio en
        <strong>CREAR VARIABLES</strong>.
      </p>

      <p class="text-left">Ahora asignemos el número de entrada del Boton.</p>
      <img
        src="../assets/blocks/buttons/button_create_code.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
      <codemirror :value="code_create_button" :options="cmOptions" class="codemirror-blokino"></codemirror>
      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="button-badge">Pulsar</strong>
      </p>

      <p class="text-left">
        Para poder capturar el evento de pulsar un boton, se debe usar el bloque funcional
        <strong>Pulsar</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/buttons/button_click.png"
        width="40%"
        heigth="40%"
        class="rounded float-center"
        alt="..."
      >
      <p
        class="text-left mt-3"
      >En la siguiente imagen se muestra como se debe usar el bloque funcional, dentro de este bloque se van a ir anidando todas las acciones que se quieren realizar cuando se pulse el boton.</p>
      <img
        src="../assets/blocks/buttons/button_click_code.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
      <codemirror :value="code_pulse_button" :options="cmOptions" class="codemirror-blokino"></codemirror>
      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="button-badge">Mantener presionado</strong>
      </p>

      <p class="text-left">
        Para poder capturar el evento de mantener presionado un boton, se debe usar el bloque funcional
        <strong>Mantener presionado</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/buttons/button_hold.png"
        width="40%"
        heigth="40%"
        class="rounded float-center"
        alt="..."
      >
      <p
        class="text-left mt-3"
      >En la siguiente imagen se muestra como se debe usar el bloque funcional, dentro de este bloque se van a ir anidando todas las acciones que se quieren realizar cuando se pulse el boton.</p>
      <img
        src="../assets/blocks/buttons/button_hold_code.png"
        width="100%"
        heigth="100%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
      <codemirror :value="code_hold_button" :options="cmOptions" class="codemirror-blokino"></codemirror>
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
  name: "Buttons",
  props: {},
  data() {
    return {
      code_create_button:
        "//Se crea un boton\nlet boton;\n// Se asigna un valor númerico a la entrada del Boton creado\nboton = (new five.Button(6));",
      code_pulse_button:
        "//Se crea un boton\nlet boton,\n// Se asigna un valor númerico a la entrada del Boton creado\nboton = (new five.Button(6));\n//Con este bloque se captura la acción de pulsar el boton\nboton.on('press', function() {\n//Agregar funcionalidades\n});",
      code_hold_button:
        "//Se crea un boton\nlet boton,\n// Se asigna un valor númerico a la entrada del Boton creado\nboton = (new five.Button(6));\n//Con este bloque se captura la acción de mantener pulsado el boton\nboton.on('hold', function() {\n//Agregar funcionalidades\n});",

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

.buttons {
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
