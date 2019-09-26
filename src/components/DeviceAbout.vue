<template>
  <div class="mt-4">
    <div id="devices">
      <h1 class="text-center font-weight-bold title-format">Dispositivos soportados</h1>
      <p class="text-left mt-4">
         Para la ejecución de los proyecto de Blokino, se deben usar placas
         electrónicas Arduino. La placa Arduino que soporta la version actual de Arduino es la <strong>placa Arduino UNO</strong>:
      </p>

      <img
        src="../assets/arduino-one.png"
        width="50%"
        heigth="50%"
        class="rounded float-center mt-3"
        alt="..."
      >
      <p class="text-left mt-4">
        <strong>La placa Arduino UNO</strong> es una placa alectronica basada en el microcontrolador ATmega328. Cuenta con 14 entradas/salidas digitales, de las cuales 6 se pueden usar como salidas PWM(Modulación por ancho de pulsos)y otras 6 son entradas analógicas. Además, incluye un conector USB, un conector de alimentación y un botón de reseteado. La placa incluye todo lo necesario para que el microcontrolador funcione correctamente, sólo se debe conectar a un ordenador con un cable USB o a la corriente eléctrica mediante un transformador.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevicesAbout",
  props: {},
  data() {
    return {};
  }
};
</script> 
<style scoped lang="scss">
@import "../scss/_variables.scss";
</style>
