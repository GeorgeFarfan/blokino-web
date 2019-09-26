<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <img
            src="../assets/blokino-logo-violet.png"
            width="30%"
            heigth="30%"
            class="rounded float-center mt-3"
            alt="..."
          >
          <h1
            class="text-center mt-4 font-weight-bold display-3"
          >Descarga la versión de tu computadora.</h1>
          <p
            class="text-center display-4 mt-4"
          >Gratis y de código libre. Compuesto por tecnologias como Electron, VanillaJS, NodeJS y toolkits necesarios que dan como resultado un entorno de programación potente e intuitivo.</p>
        </div>
      </div>
      <hr class="mt-5">
      <div class="row">
        <div class="col col-sm-6 block-download-linux">
          <img alt="Vue logo" class="logo-installer" src="../assets/linux-logo.png">
          <div class="mt-4">
            <a
              class="btn btn-primary btn-lg btn-debian"
              role="button"
              aria-pressed="true"
              href="https://www.dropbox.com/sh/kq8ndh7xw5ms6rq/AADa8Tn3cevN05mxSCow02NPa?dl=0"
              download
              target="_blank"
              rel="noopener noreferrer"
            >Descargar x64</a>
          </div>
        </div>
        <div class="col col-sm-6 block-download-win">
          <img alt="Vue logo" class="logo-installer" src="../assets/win-logo.png">
          <div class="mt-4">
            <a
              class="btn btn-primary btn-lg active btn-win"
              href="https://www.dropbox.com/sh/n8vza9lx6rl4k88/AAD_jB9PJ6wN3nfdn9Esg62ma?dl=0"
              download
              target="_blank"
              rel="noopener noreferrer"
            >Descargar x64</a>
          </div>
        </div>
      </div>
      <hr class="m-5">
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
export default {
  name: "home",
  components: { Footer },
  methods: {}
};
</script>


<style lang="scss">
@import "../scss/_variables.scss";

.logo-installer {
  height: 13em;
  width: 13em;
}

.block-download-linux {
  padding: 20px;
}

.block-download-win {
  padding: 20px;
}

.btn-win {
  padding: 1.5em !important;
  color: $win_download_color !important;
  background-color: $color_white !important;
  border-color: $win_download_color !important;
}

.btn-win:hover {
  padding: 1.5em !important;
  color: $color_white !important;
  background-color: $win_download_color !important;
  border-color: $win_download_color !important;
}

.btn-debian {
  padding: 1.5em !important;
  color: $linux_download_color !important ;
  background-color: $color_white !important;
  border-color: $linux_download_color !important;
}

.btn-debian:hover {
  padding: 1.5em !important;
  color: $color_white !important;
  background-color: $linux_download_color !important;
  border-color: $linux_download_color !important;
}
</style>
