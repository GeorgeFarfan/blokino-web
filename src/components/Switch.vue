<template>
 <div class="mt-4" id="switch-doc">
            <div >
                <h3 class="text-left font-weight-bold title-format">Interruptores</h3>
            </div>
            <div class="mt-4">
                <p class="text-left">
                    <strong class="switch-badge">Crear Interruptor</strong>
                </p>
                <p class="text-left">
                    Para poder usar los Interruptores, se debe crear un interruptor. Para eso se usa el bloque funcional
                    <strong>Crear Interruptores</strong>
                    . El bloque funcional que se debe usar es el siguiente:
                </p>
                <img
                src="../assets/blocks/switch/switch-create.png"
                width="40%"
                heigth="40%"
                class="rounded float-center"
                >
                <p class="text-left mt-3">
                Se debe crear una variable con un nombre que represente al
                <strong>Interruptor</strong>. Esto ya se vio en
                <strong>CREAR VARIABLES</strong>.
                </p>

                <p class="text-left">
                Ahora asignemos el número de entrada del Interruptor.
                </p>
                <img
                src="../assets/blocks/switch/switch-create-code.png"
                width="100%"
                heigth="100%"
                class="rounded float-center"
                >
                <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
                <codemirror :value="code_create_switch" :options="cmOptions" class="codemirror-blokino"></codemirror>
                  <hr class="m-5">
          </div>



            <div class="mt-4">
                <p class="text-left">
                <strong class="switch-badge">Abrir Interruptor</strong>
                </p>

                <p class="text-left">
                    Para poder captar el evento de abrir un interruptor, se debe usar el bloque funcional <strong>Abrir interruptor</strong>. En la siguiente imagen se muestra el bloque funcional que se debe usar:
                </p>
                <img
                src="../assets/blocks/switch/switch-open.png"
                width="40%"
                heigth="40%"
                class="rounded float-center"
                alt="..."
                >
         
          </div>


            <div class="mt-4">
                <p class="text-left">
                <strong class="switch-badge">Cerrar Interruptor</strong>
                </p>
    <p class="text-left">
                    Para poder captar el evento de cerrar un interruptor, se debe usar el bloque funcional <strong>Cerrar interruptor</strong>. En la siguiente imagen se muestra el bloque funcional que se debe usar:
                </p>
                <img
                src="../assets/blocks/switch/switch-close.png"
                width="40%"
                heigth="40%"
                class="rounded float-center"
                alt="..."
                >

                     <p class="text-left mt-3">
                Este es un ejemplo de como deberian usarse ambos bloques funcionales. En este ejemplo se muestra como se usa un interruptor para hacer parpadear un Led o detenerlo, dependiendo del estado del interruptor.
                </p>
                <img
                src="../assets/blocks/switch/switch-open-close-code.png"
                width="100%"
                heigth="100%"
                class="rounded float-center"
                alt="..."
                >

         
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
  name: "Switchs",
  props: {},
  data() {
    return { 
        code_create_switch:"//Se creo el interruptor\nlet interruptor;\n//Se asigno el número de entrada al Interruptor creado\ninterruptor = (new five.Switch(8));",
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

 .codemirror-blokino {
  text-align: left;
  width: 100%;
  font-size: 20px;
  display: inline-block;
}
 
.switch-badge{
    background-color: $switch_color;
    padding: 0.7em;
    color: $color_white;
    border-radius: 1em;
}
</style>
