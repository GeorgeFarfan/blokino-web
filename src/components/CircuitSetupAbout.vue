<template> 
    <div class="circuits">
      <h1 class="">Como armar circuitos</h1>
      <p class="">
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
  p {
    font-size: 25px;
    width: 50%;
  }
</style>
