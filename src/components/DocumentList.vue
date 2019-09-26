<template>
        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-1 class="title-doc">Como usar Blokino</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-list-group-item
                class="block-doc"
                v-scroll-to="'#blokino-get-started'"
              >¿Qué es Blokino?</b-list-group-item>
              <b-list-group-item class="block-doc" v-scroll-to="'#arduino-doc'">¿Qué es Arduino?</b-list-group-item>
              <b-list-group-item class="block-doc" v-scroll-to="'#devices'">Dispositivos soportados</b-list-group-item>
              <b-list-group-item
                class="block-doc"
                v-scroll-to="'#devices-config'"
              >Preparar dispositivo</b-list-group-item>
              <b-list-group-item class="block-doc" v-scroll-to="'#circuits'">Como armar circuitos</b-list-group-item>
            </b-collapse>
          </b-card>
        </div>
</template>

<script>
export default {
  name: "DocumentList",
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
