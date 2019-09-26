<template>
  <div class="mt-4" id="servomotors-doc">
    <div>
      <h3 class="text-left font-weight-bold title-format">Servomotores</h3>
    </div>
    <div class="mt-4">
      <p class="text-left">
        <strong class="servomotor-badge">Crear Servomotor</strong>
      </p>

      <p class="text-left">
        Para poder usar el Servomotor, se debe crear un Servomotor. Para eso se usa el bloque funcional
        <strong>Crear Servo</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-create.png"
        width="30%"
        heigth="30%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left mt-3">
        Se debe crear una variable con un nombre que represente al
        <strong>Servomotor</strong>.
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-assign_variable.png"
        width="80%"
        heigth="80%"
        class="rounded float-center"
        alt="..."
      >
      <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>

      <codemirror :value="code_create_servomotor" :options="cmOptions" class="codemirror-blokino"></codemirror>

      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="servomotor-badge">Crear Servomotor con posición</strong>
      </p>

      <p class="text-left">
        Para crear un servo con posición se debe usar el bloque funcional
        <strong>Crear Servo Posición</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-create_position.png"
        width="40%"
        heigth="40%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="servomotor-badge">Centrar Servomotor</strong>
      </p>

      <p class="text-left">
        Para centrar un servo al medio(90° grados), se debe usar el bloque funcional
        <strong>Centrar Servo</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-mov_center.png"
        width="50%"
        heigth="50%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>
    <div class="mt-4">
      <p class="text-left">
        <strong class="servomotor-badge">Extremo maximo del Servomotor</strong>
      </p>

      <p class="text-left">
        Para posicionar un servo al extremo maximo de 180° grados, se debe usar el bloque funcional
        <strong>Extremo maximo Servo</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-move_ext_max.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>
    <div class="mt-4">
      <p class="text-left">
        <strong class="servomotor-badge">Mover al extremo minimo del Servomotor</strong>
      </p>

      <p class="text-left">
        Para posicionar un servo al extremo minimo de 0° grados, se debe usar el bloque funcional
        <strong>Extremo maximo Servo</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-move_ext_min.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="servomotor-badge">Mover Servo de un extremo al otro</strong>
      </p>

      <p class="text-left">
        Para poder mover el servomotor de un extremo al otro(de 0° a 180° grados), se debe usar el bloque funcional
        <strong>Extremo maximo Servo</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-move_ext_to_ext.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="servomotor-badge">Mover Servo desde una posición a otra</strong>
      </p>

      <p class="text-left">
        Para poder mover el servomotor desde una posición a otra, se debe usar el bloque funcional
        <strong>Mover Servo desde hasta</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-move_from_to.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="servomotor-badge">Mover Servo a posición inicial</strong>
      </p>

      <p class="text-left">
        Para poder mover el servomotor a la posición inicial, se debe usar el bloque funcional
        <strong>Mover a la posicion inicial Servo</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-move_pos_ini.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>

    <div class="mt-4">
      <p class="text-left">
        <strong class="servomotor-badge">Mover Servo a posición</strong>
      </p>

      <p class="text-left">
        Para poder mover el servomotor a una posición que se quiera, se debe usar el bloque funcional
        <strong>Mover Servo Posición</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-move_position.png"
        width="60%"
        heigth="60%"
        class="rounded float-center"
        alt="..."
      >
      <hr class="m-5">
    </div>
    <div class="mt-4">
      <p class="text-left">
        <strong class="servomotor-badge">Detener Servo</strong>
      </p>

      <p class="text-left">
        Para poder detener el servomotor, se debe usar el bloque funcional
        <strong>Mover Servo Posición</strong>
        . El bloque funcional que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/servomotor/servomotor-stop.png"
        width="50%"
        heigth="50%"
        class="rounded float-center"
        alt="..."
      >
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
  name: "Servomotors",
  props: {},
  data() {
    return {
      code_create_servomotor:
        "// Se crea el servomotor\n" +
        "let servomotor;\n" +
        "// Se asigna el valor de entrada del Servomotor\n" +
        "servomotor = (new five.Servo(11));",
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

.servomotor-badge {
  background-color: $servomotor-badge;
  padding: 0.7em;
  color: $color_white;
  border-radius: 1em;
}
</style>
