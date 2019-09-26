<template>
  <div>
    <b-container fluid class="bv-example-row">
      <b-row class="mt-5">
        <b-col md="2" offset-md="1">
          <BlocksList></BlocksList>
        </b-col>
        <b-col md="5" offset-md="1">
          <ProgramSection></ProgramSection>
          <Variable></Variable>
          <div id="circuits">
            <h1 class="text-center font-weight-bold title-format">Bloques funcionales</h1>
            <div class="m-4">
              <p class="text-center">
                Los bloques funcionales son las piezas principales que componen a
                <strong>Blokino</strong>. Cada bloque funcional se lo identifica con una funcionalidad definida como así también por colores distintos.
              </p>
            </div>
          </div>
          <Led></Led>
          <Buttons></Buttons>
          <Bumper></Bumper>
          <Switchs></Switchs>
          <Matriz></Matriz>
          <DisplayMessage></DisplayMessage>
          <Zumbador></Zumbador>
          <Potentiometer></Potentiometer>
          <Joystick></Joystick>
          <Servomotors></Servomotors>
          <Keyboard></Keyboard>
          <SensorMotion></SensorMotion>
          <SensorProximity></SensorProximity>
          <Motors></Motors>
        </b-col>
      </b-row>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Led from "@/components/Led";
import Matriz from "@/components/Matriz-Leds";
import Buttons from "@/components/Buttons";
import Bumper from "@/components/Bumper";
import Switchs from "@/components/Switch";
import DisplayMessage from "@/components/DisplayMessage";
import BlocksList from "@/components/BlocksList";
import ProgramSection from "@/components/ProgramSections";
import Variable from "@/components/Variable";
import Zumbador from "@/components/Buzzer";
import Potentiometer from "@/components/Potentiometer";
import Keyboard from "@/components/Keyboard";
import Joystick from "@/components/Joystick";
import Servomotors from "@/components/Servomotors";
import SensorMotion from "@/components/SensorMotion";
import Motors from "@/components/Motors";
import SensorProximity from "@/components/SensorProximity";
import Footer from "@/components/Footer";
export default {
  components: {
    Led,
    Matriz,
    BlocksList,
    Buttons,
    Bumper,
    Switchs,
    DisplayMessage,
    ProgramSection,
    Variable,
    Zumbador,
    Potentiometer,
    Keyboard,
    Joystick,
    Servomotors,
    SensorMotion,
    Motors,
    SensorProximity,
    Footer
  }
};
</script>
<style scoped lang="scss">
@import "../scss/_variables.scss";
</style>;
