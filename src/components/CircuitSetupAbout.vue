<template>
 
    <div class="circuits">
      <h1 class="text-center font-weight-bold title-format">Como armar circuitos</h1>
      <p class="text-left mt-4">
        Para realizar  los circuitos correctos en una aplicación de Blokino, se debe tener un circuito correctamente armado. Caso contrario podría no ejecutarse u corto circuito quemando los componentes de Arduino que esten conectados.
        
      </p>
    </div>
 
</template>

<script>
export default {
  name: "CircuitSetupAbout",
  props: {},
  data() {
    return {};
  }
};
</script> 
<style scoped lang="scss">
@import "../scss/_variables.scss";
.circuits {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
