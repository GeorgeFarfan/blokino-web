<template>
    <div class="about">
        <BlokinoAbout></BlokinoAbout>
        <ArduinoAbout></ArduinoAbout>
        <DeviceAbout></DeviceAbout>
        <DevicesSetupAbout></DevicesSetupAbout>
        <CircuitSetupAbout></CircuitSetupAbout>      
    </div>
</template>

<script>

import BlokinoAbout from "@/components/BlokinoAbout"
import ArduinoAbout from "@/components/ArduinoAbout"
import DeviceAbout from "@/components/DeviceAbout"
import DevicesSetupAbout from "@/components/DeviceSetupAbout"
import CircuitSetupAbout from "@/components/CircuitSetupAbout"
import DocumentList from "@/components/DocumentList"

export default {
  components: {
   BlokinoAbout,ArduinoAbout,DevicesSetupAbout,DeviceAbout,CircuitSetupAbout,DocumentList
  },
  data() {
    return {};
  }
};

</script>
<style scoped lang="scss">
  @import "../scss/_variables.scss";
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px 60px 0px;
  }
</style>;
