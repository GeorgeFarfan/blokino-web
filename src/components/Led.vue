<template>
  <div class="led">
    <div id="leds">
      <h3 class="text-left font-weight-bold title-format">LEDS</h3>
      <p class="text-left mt-4">
        Tambien llamados
        <strong>diodos</strong>, son componentes electrónicos que permiten el paso de la corriente en un solo sentido
        que convierte la energía eléctrica directamente en luz mediante el movimiento de electrones dentro del mateiral del diodo.
        Los
        <strong>LEDs</strong> son importantes por que, debido a su eficiencia y baja energía, comienzan a reemplazar a la mayoría de las fuentes de luz convencionales.
        Para poder usar los
        <strong>LEDs</strong> con Blokino, se debe armar el circuito y usar los bloques funcionales de
        <strong>LEDs</strong>.
      </p>

      <div class="mt-4">
        <p class="text-left">
          <strong class="badge-led">Crear LED</strong>
        </p>

        <p class="text-left">
          Para poder usar los LEDs, se debe crear un led. Para eso se usa el bloque funcional
          <strong>Crear LED</strong>
          . Se le debe asignar un valor númerico de la sección entradas
          <strong>PWD</strong> o las digitales. El bloque funcional que se debe usar es el siguiente:
        </p>
        <img
          src="../assets/blocks/leds/led.png"
          width="30%"
          heigth="30%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">
          Se debe crear una variable con un nombre que represente al
          <strong>LED</strong>. Esto ya se vio en
          <strong>CREAR VARIABLES</strong>.
        </p>

        <p class="text-left">
          Ahora asignemos el número de entrada del LED y el LED creado a una variable llamado
          <strong>led</strong>.
        </p>
        <img
          src="../assets/blocks/leds/led-create.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror :value="code_led" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left">
          <strong class="badge-led">Parpadear LED</strong>
        </p>

        <p class="text-left">
          Para hacer parpadear la luz de un LED, se debe usar el bloque funcional
          <strong>Parpadear LED tiempo</strong>. Este bloque
          necesita necesita de un led que se debe seleccionar del listado de vaiables creadas. Tambien se debe definir un valor númerico y seleccionar el tipo de tiempo
          que se quiere usar, entre estas opciones estan milisegundos, segundos y minutos.
        </p>
        <img
          src="../assets/blocks/leds/led-blink.png"
          width="70%"
          heigth="70%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">Esta es un ejemplo de como se debe usar el bloque de parpadeo.</p>
        <img
          src="../assets/blocks/leds/led-code-blink.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >

        <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror :value="code_led_blink" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left">
          <strong class="badge-led">Encender LED</strong>
        </p>
        <p class="text-left">
          Los LEDS tambien puede apagarse y encenderse. En el caso de que hayas apagado tu LED, para poder volverlo a encender se debe usar
          el bloque funcional
          <strong>Encender LED</strong>. El bloque funcional que se debe usar es el siguiente:
        </p>
        <img
          src="../assets/blocks/leds/led-on.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">La siguiente imagen muestra como se debe encender un Led:</p>
        <img
          src="../assets/blocks/leds/led-code-on.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror :value="code_led_on" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left">
          <strong class="badge-led">Apagar LED</strong>
        </p>

        <p class="text-left">
          Los LEDS tambien puede apagarse y encenderse. En el caso de que quieras apagar tu LED, para poder apagar el LED se debe usar
          el bloque funcional
          <strong>Apagar LED</strong>.
        </p>

        <img
          src="../assets/blocks/leds/led-off.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">La siguiente imagen muestra como se debe apagar un Led:</p>
        <img
          src="../assets/blocks/leds/led-code-off.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror :value="code_led_off" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>
      <div class="mt-4">
        <p class="text-left">
          <strong class="badge-led">Detener LED</strong>
        </p>

        <p class="text-left">
          Los LEDs tambien pueden detenerse, para eso se debe usar el bloque funcional
          <strong>Detener LED</strong>.
        </p>

        <img
          src="../assets/blocks/leds/led-stop.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">La siguiente imagen muestra como se debe detener un Led:</p>
        <img
          src="../assets/blocks/leds/led-code-stop.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror :value="code_led_stop" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div>
        <p class="text-center">
          <strong>Usar LEDS con entradas PWD</strong>
        </p>

        <p class="text-left">
          Usando las entradas
          <strong>PWD</strong>, se pueden realizar distintas funcionalidades con los LEDs. Este tipo de entradas se mencionaron anteriormente en el apartado de
          <strong>Conoce tu placa Arduino</strong>.
          Los bloques funcionales que se pusan con estas entradas se pueden usar para los bloques funcionales de los LEDs y LEDS-RGB. Los siguiente bloques son lo que se pueden usar:
        </p>
      </div>

      <div class="mt-4">
        <p class="text-left">
          <strong class="badge-led">Apagar LED lentamente</strong>
        </p>
        <p class="text-left">
          Este bloque funcional apaga el
          <strong>LED</strong> lentamente
          . Para poder usar este bloque funcional, se debe seleccionar el led que se quiera usar del listado de leds creados. En el creado
          de que no fuera un led, el loque funcional no funcionará. La manera de usar este bloque funcional, es la siguiente:
        </p>
        <img
          src="../assets/blocks/leds/led-off-slow.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">La siguiente imagen muestra como se debe apagar lentamente un Led:</p>
        <img
          src="../assets/blocks/leds/led-code-off-slow.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror :value="code_led_off_slow" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left">
          <strong class="badge-led">Encender LED lentamente</strong>
        </p>
        <p class="text-left">
          Este bloque funcional encender el
          <strong>LED</strong> lentamente
          . Para poder usar este bloque funcional, se debe seleccionar el led que se quiera usar del listado de leds creados. En el creado
          de que no fuera un led, el loque funcional no funcionará. La manera de usar este bloque funcional, es la siguiente:
        </p>
        <img
          src="../assets/blocks/leds/led-on-slow.png"
          width="40%"
          heigth="40%"
          class="rounded float-center"
          alt="..."
        >
        <p
          class="text-left mt-3"
        >La siguiente imagen muestra como se debe encender lentamente un Led:</p>
        <img
          src="../assets/blocks/leds/led-code-on-slow.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror :value="code_led_on_slow" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left">
          <strong class="badge-led">Parpadear LED por partes</strong>
        </p>
        <p class="text-left">
          Este bloque funcional hará parpadear el
          <strong>LED</strong> lentamente
          . Para poder usar este bloque funcional, se debe seleccionar el led que se quiera usar del listado de leds creados. En el creado
          de que no fuera un led, el loque funcional no funcionará. La manera de usar este bloque funcional, es la siguiente:
        </p>
        <img
          src="../assets/blocks/leds/led-blink-steps.png"
          width="60%"
          heigth="60%"
          class="rounded float-center"
          alt="..."
        >
        <p
          class="text-left mt-3"
        >La siguiente imagen muestra como se debe hacer parpardear un Led por partes:</p>
        <img
          src="../assets/blocks/leds/led-code-blink-steps.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror :value="code_led_blink_steps" :options="cmOptions" class="codemirror-blokino"></codemirror>

        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left">
          <strong class="badge-led">Parpadear LED por partes, con tiempo</strong>
        </p>
        <p class="text-left">
          Este bloque funcional hará parpadear el
          <strong>LED</strong> lentamenete con un tiempo en milisegundos, segundos y minutos
          . Para poder usar este bloque funcional, se debe seleccionar el led que se quiera usar del listado de leds creados. En el creado
          de que no fuera un led, el loque funcional no funcionará. La manera de usar este bloque funcional, es la siguiente:
        </p>
        <img
          src="../assets/blocks/leds/led-blink-steps-time.png"
          width="70%"
          heigth="70%"
          class="rounded float-center"
          alt="..."
        >
        <p
          class="text-left mt-3"
        >La siguiente imagen muestra como se debe hacer parpadear un Led por partes con un tiempo:</p>
        <img
          src="../assets/blocks/leds/led-code-blink-steps-time.png"
          width="90%"
          heigth="90%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror
          :value="code_led_blink_steps_time"
          :options="cmOptions"
          class="codemirror-blokino"
        ></codemirror>
        <hr class="m-5">
      </div>
    </div>

    <div id="leds-rgb" class="mt-5">
      <h3 class="text-left font-weight-bold title-format">LEDS-RGB</h3>
      <div class="mt-4">
        <p class="text-left mt-4">
          <strong class="badge-led">Crear LED-RGB</strong>
        </p>
        <p class="text-left">
          Para poder usar los LEDS-RGB, se debe crear un led-rgb. Para eso se usa el bloque funcional
          <strong>Crear LED-RGB</strong>
          . Se debe seleccionar un valor númerico para las 3 entradas
          <strong>PWD</strong>. La manera de crear se ve en la siguiente imagen.
        </p>
        <img
          src="../assets/blocks/leds/led-rgb.png"
          width="70%"
          heigth="70%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">
          Los
          <strong>LEDS-RGB</strong> pueden usar los mismos bloques funcionales que el bloque funcional
          <strong>Crear LED-RGB</strong>
        </p>

        <img
          src="../assets/blocks/leds/led-rgb-code.png"
          width="100%"
          heigth="100%"
          class="rounded float-center"
          alt="..."
        >

        <p class="text-left mt-3">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror :value="code_led_rgb" :options="cmOptions" class="codemirror-blokino"></codemirror>
        <hr class="m-5">
      </div>

      <div class="mt-4">
        <p class="text-left mt-4">
          <strong class="badge-led">Dar Color</strong>
        </p>
        <p class="text-left">
          Para poder asignar color a un LED-RGB, se debe usar el bloque funcional
          <strong>Dar Color</strong>.
        </p>
        <img
          src="../assets/blocks/leds/led-rgb-set-color.png"
          width="50%"
          heigth="50%"
          class="rounded float-center"
          alt="..."
        >
        <p
          class="text-left"
        >La siguiente imagen muestra como se debe usar el bloque funcional y como se debe seleccionar el color que se quiere usar de la paleta de colores que tiene el bloque funcional.</p>
        <img
          src="../assets/blocks/leds/led-rgb-code-select-color.png"
          width="100%"
          heigth="100%"
          class="rounded float-center"
          alt="..."
        >
        <p class="text-left">El código javascript que generá este bloque es el siguiente:</p>
        <codemirror :value="code_led_rgb_set_dolor" :options="cmOptions" class="codemirror-blokino"></codemirror>
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
  name: "Led",
  props: {},
  data() {
    return {
      cmOptions: {
        tabSize: 1,
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true,
        readOnly: true
      },
      code_led:
        "//Se crea el led \nlet led;\n//Se asigna el número de entrada del led\nled = (new five.Led(7));",
      code_led_blink:
        "//Se crea el led \nlet led;\n//Se asigna el número de entrada del led\nled = (new five.Led(7));\n//Hacer parpadear el Led\nled.blink(100);",
      code_led_off:
        "//Se crea el led \nlet led, \n//Se asigna el número de entrada del led\nled;\n//Hacer parpadear el Led\nled = (new five.Led(13));led.blink(300);\n//Se apaga el Led\nled.off();",
      code_led_on:
        "//Se crea el led \nlet led, \n//Se asigna el número de entrada del led\nled;\n//Hacer parpadear el Led\nled = (new five.Led(13));\n//Se enciende el Led\nled.blink(300);led.on();",
      code_led_stop:
        "//Se crea el led \nlet \n//Se asigna el número de entrada del led\nled;\n//Hacer parpadear el Led\nled = (new five.Led(13));led.blink(300);\n//Se detiene el Led\nled.stop();",
      code_led_off_slow:
        "//Se crea el led \nlet led, \n//Se asigna el número de entrada del led\nled;\n//Hacer parpadear el Led\nled = (new five.Led(7));\n//Se apaga el Led lentamente\nled.fadeOut();",
      code_led_on_slow:
        "//Se crea el led \nlet led, \n//Se asigna el número de entrada del led\nled;\n//Hacer parpadear el Led\nled = (new five.Led(7));\n//Se enciende el Led lentamente\nled.fadeIn();",
      code_led_blink_steps:
        "//Se crea el led \nlet led, \n//Se asigna el número de entrada del led\nled;\n//Hacer parpadear el Led\nled = (new five.Led(7));\n//Se enciende el Led por partes\nled.pulse();",
      code_led_blink_steps_time:
        "//Se crea el led \nlet led, \n//Se asigna el número de entrada del led\nled;\n//Hacer parpadear el Led\nled = (new five.Led(7));\n//Se enciende el Led por partes con un tiempo de 3 segundos\nled.pulse({easing: 'linear',duration: 3000,cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],keyFrames: [0, 10, 0, 50, 0, 255]});",
      code_led_rgb:
        "//Se crea el led RGB \nlet led_rgb;\n//Se asignan los valores de entrada\nled_rgb = (new five.Led.RGB({pins: {red: 6,green: 5,blue: 3}}));",
      code_led_rgb_set_dolor:
        "//Se crea el led RGB \nlet led_rgb;\n//Se asignan los valores de entrada\nled_rgb = (new five.Led.RGB({pins: {red: 6,green: 5,blue: 3}}));\n//Hacer parpadear el LED-RGB\nled_rgb.blink(100);\n//Se asigna un color al LED-RGB, en este caso el color ROJO\nled_rgb.color('#FF0000');"
    };
  }
};
</script> 
<style scoped lang="scss">

@import "../scss/_variables.scss";

.led {
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

.badge-led {
  padding: 0.7em;
  background-color: $led_color;
  color: $color_white;
  border-radius: 1em;
}

</style>
