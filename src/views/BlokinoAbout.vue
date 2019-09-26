<template>
  <b-container fluid class="bv-example-row">
    <b-row class="mt-5">
      <b-col md="2" offset-md="1">
        <DocumentList></DocumentList>
      </b-col>
      <b-col md="5" offset-md="1">
        <BlokinoAbout></BlokinoAbout>
        <ArduinoAbout></ArduinoAbout>
        <DeviceAbout></DeviceAbout>
        <DevicesSetupAbout></DevicesSetupAbout>
        <CircuitSetupAbout></CircuitSetupAbout>  
      </b-col>
    </b-row>
  </b-container>
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
</style>;
