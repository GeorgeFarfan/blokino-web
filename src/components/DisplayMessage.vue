<template>
 <div class="message-console">
          <div >
                <h3 class="text-left font-weight-bold title-format">Consola de Mensajes</h3>
                <p class="text-left">Las consolas de mensajes o tambien llamados Display LCD(Pantalla de cristal liquido), son pantallas 
                    que son usadaos para mostrar información en forma grafica. Blokino usa los Display LCD comunes con la diferencia que tiene una placa integrada
                    para reducir la cantidad de entradas digitales/analógicas que son usados en su uso convencional, como así tambien ya trae integrado un
                    potenciometro para poder calibrar la pantalla. Blokino da soporte para dos tipos de Display LCD, un display de 8x2 y otro display 
                    de 16x2. Por lo que tambien se generaron bloques funcionales infependientes para cada uno de los casos.
                </p>
            </div>
            <div class="mt-4">
                <p class="text-left">
                <strong class="display-badge">Crear Consola de Mensajes</strong>
                </p>

                <p class="text-left">
                Para poder usar los Pulsadores, se debe crear un pulsador. Para eso se usa el bloque funcional
                <strong>Crear Pulsador</strong>
                . El bloque funcional que se debe usar es el siguiente:
                </p>
                <img
                src="../assets/blocks/display-message/display-messagex2-create.png"
                width="60%"
                heigth="60%"
                class="rounded float-center"
                alt="..."
                >
                <p class="text-left mt-3">
                Se debe crear una variable con un nombre que represente al
                <strong>Consola de mensajes de 2 filas</strong>. Esto ya se vio en
                <strong>CREAR VARIABLES</strong>.
                </p>

                <p class="text-left">
                En la siguiente imagen se muestra como se debe asignar a una variable
                </p>
                <img
                src="../assets/blocks/display-message/display-messagex2-create-code.png"
                width="100%"
                heigth="100%"
                class="rounded float-center"
                alt="..."
                >
                <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
                <codemirror :value="code_create_displayx2_message" :options="cmOptions" class="codemirror-blokino"></codemirror>
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
  name: "DisplayMessage",
  props: {},
  data() {
    return { 
        code_create_displayx2_message:"//Se crea la consola de mensajes\n//Se asigna el tipo de consola a la variable\nlet consola;consola = (new five.LCD({controller: 'PCF8574A'}));",
        code_click_bumper:"//Se crea un pulsador y un led\nlet pulsador_encender_led,led;\n// Se asigna un valor númerico a la entrada del Pulsador y del Led\nled = (new five.Led(13));\npulsador_encender_led = (new five.Button(8));\npulador_encender_led.on('release', function(){\n   led.blink(3000)\n});",
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

.message-console {
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
 

.display-badge{
    background-color: $display_msg_color;
    padding: 0.7em;
    color: $color_white;
    border-radius: 1em;
}

</style>
