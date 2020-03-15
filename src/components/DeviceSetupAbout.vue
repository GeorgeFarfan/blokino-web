<template>
  <div class="devices-setup">

    <h1 class="text-center font-weight-bold title-format">Preparar dispositivos</h1>
    <p class="text-left mt-4">
      Para poder configurar los dispositivos, se debe conectar el dispositivo <strong>Arduino UNO</strong> al ordenador. Una vez que el dispositivo este conectado, seleccionar alguno del listado. La instalación comienza a realizarse, en estos momentos hay que esperar hasta que se termine la instalación. En esta instalación se esta configurando el dipositivo Arduino UNO instalandole la versión correcta de <strong>Firmata</strong>.
    </p>
    <img
      src="../assets/device/modal-show-devices.png"
      width="20%"
      heigth="20%"
      alt="..."
    >
    <p class="text-left mt-4">
      Si la instalación no se realiza correctamente, se mostrar un modal de error indicando que la instalación no se pudo realizar. Otro motivo por el cual puede aparecer este modal
      es cuando se quiere configurar un dispositivo Arduino UNO que no ha sido conectado.
    </p>
    <img
      src="../assets/device/modal-show-error-devices.png"
      width="20%"
      heigth="20%"
      alt="..."
    >
    <p class="text-left mt-4">
      Si la instalación se realiza correctamente se mostrará el modal de exito. Luego de esto se podra usar para ejecutar el programa de <strong>Blokino</strong>.
    </p>
    <img
      src="../assets/device/modal-setup-success.png"
      width="20%"
      heigth="20%"
      alt="..."
    >
  </div>
</template>

<script>
export default {
  name: "DevicesSetupAbout",
  props: {},
  data() {
    return {};
  }
};
</script> 
<style scoped lang="scss">

@import "../scss/_variables.scss";

.devices-setup {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  p {
    font-size: 25px;
    width: 50%;
  }

</style>
