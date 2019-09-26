<template>
  <div class="mt-4" id="program_sections-doc">
    <div id="sections-program">
      <h1 class="text-center font-weight-bold title-format">Secciones del programa Blokino</h1>
    </div>
    <div class="m-4">
      <p
        class="text-center"
      >Blokino tiene bloques principales como lo son las secciones de Blokino. Ayudan a entender como se debe armar una aplicación real usando bloques.</p>
    </div>
    <div>
      <h3 class="text-left font-weight-bold title-format">Secciones</h3>
      <p
        class="text-left"
      >Estos bloques no son funcionles, dado que no tienen lógica interna. Solo son usados para hacer una separación de las secciones de una aplicaciones normal de un programa. Se pueden o no usar, pero si no se usan se puede generar confusión en la aplicación. Usandolos se aprenderá a entender como deben separarse los programas.</p>
    </div>
    <div class="mt-5">
      <p class="text-left">
        <strong class="program_block-badge">Programa</strong>
      </p>
      <p class="text-left mt-4">
        Este bloque engloba a todo un programa de Blokino. Debería ser usado una sola vez dentro de tu aplicación Blokino.
        . El bloque que se debe usar es el siguiente:
      </p>
      <img
        src="../assets/blocks/sections/program-block.png"
        width="50%"
        heigth="50%"
        class="rounded float-center"
        alt="..."
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "ProgramSection",
  props: {},
  data() {
    return {};
  }
};
</script> 
<style scoped lang="scss">
@import "../scss/_variables.scss";

.program_block-badge {
  background-color: $program_section_color;
  padding: 0.7em;
  color: $color_white;
  border-radius: 1em;
}
</style>
