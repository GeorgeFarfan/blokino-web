<template>
  <div class="home">
    <Presentation msg="Bienvenido a Blokino"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from "@/components/Presentation.vue";

export default {
  name: "home",
  components: {
    Presentation
  },
  methods: {
    downloadFile: function() {}
  }
};
</script>
