<template>
  <div role="tablist">
    <b-card no-body class="mb-2">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 class="title-doc">Como ejecutar el programa</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpane2"></b-collapse>
    </b-card>

    <b-card no-body class="mb-2">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 class="title-doc">Bloques principales</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpane2">
        <b-list-group-item
          class="block-doc"
          id="block-program_blokino"
          v-scroll-to="'#program_sections-doc'"
        >Secciones</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-create_variable"
          v-scroll-to="'#create_variable-doc'"
        >Crear Variables</b-list-group-item>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 class="title-doc">Bloques funcionales</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-list-group-item
          class="block-doc"
          id="block-leds-rgb"
          v-scroll-to="'#leds-rgb-doc'"
        >Leds RGB</b-list-group-item>
        <b-list-group-item class="block-doc" id="block-buttons" v-scroll-to="'#buttons-doc'">Botones</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-buttons"
          v-scroll-to="'#bumper-doc'"
        >Pulsadores</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-buttons"
          v-scroll-to="'#switch-doc'"
        >Interruptores</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-display-message"
          v-scroll-to="'#display-message-doc'"
        >Consola de mensajes</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-buzzer"
          v-scroll-to="'#buzzer-doc'"
        >Zumbadores</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-potentiometer"
          v-scroll-to="{
                        el: '#potentiometer-doc',
                        duration: 1000,
                        easing: 'ease-out',
                        offset: -200,
                        force: true,
                        cancelable: true,
                        x: false,
                        y: true}"
        >Potenciometro</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-joystick"
          v-scroll-to="'#joystick-doc'"
        >Joystick</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-servomotors"
          v-scroll-to="'#servomotors-doc'"
        >Servomotores</b-list-group-item>
        <b-list-group-item class="block-doc" id="block-keyboard" v-scroll-to="'#keypad-doc'">Teclado</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-sensor-motion"
          v-scroll-to="'#sensor-motion-doc'"
        >Sensor de movimiento</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-sensor-proximity"
          v-scroll-to="'#sensor-proximity-doc'"
        >Sensor de proximidad</b-list-group-item>
        <b-list-group-item
          class="block-doc"
          id="block-matriz-leds"
          v-scroll-to="'#matriz-leds-doc'"
        >Matriz de Leds</b-list-group-item>
        <b-list-group-item class="block-doc" id="block-motors" v-scroll-to="'#motors-doc'">Motor</b-list-group-item>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-2">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-4 class="title-doc">Funciones</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpane2"></b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "BlocklList",
  props: {},
  data() {
    return {};
  }
};
</script> 
<style scoped lang="scss">
@import "../scss/_variables.scss";
.block-doc {
  cursor: pointer;
}
.title-doc {
  color: $color_white;
  cursor: pointer;
  background-color: $color_background;
  padding: 1em;
  font-weight: bold;
}

.title-doc:hover {
  color: $color_white;
  cursor: pointer;
  background-color: $color_background;
}

.title-doc:active {
  color: $color_white;
  cursor: pointer;
  background-color: $color_background;
}
</style>
