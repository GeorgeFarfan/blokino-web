<template>
  <div class="download">
      <div class="download__header">
        <h1>
        Descarga Blokino
        </h1>
        <p>
          Gratis y construido en base a código libre. Con módulos implementados en <span class="badge-js">JavaScript</span> para controlar componentes electrónicos de <span class="badge-arduino">Arduino</span>.
        </p>      
      </div>

      <img
      src="../assets/ide-2.png"
      width="60%"
      heigth="60%"
      class="download__logo"
      alt="..."
    >
    <div class="download__description">

        <div class="download__description__versions">
            <div class="download__description__versions__windows">
              <img
                src="../assets/win-logo.png"
                width="10%"
                heigth="10%"
                alt="..."
              >
              <h4>Windows</h4>
              <p>
                - Instalar <strong>WinAVR</strong>
              </p>
              <p>
                - Compatible con Windows 10 de 64 bits.
              </p>
              <p>
                - No es necesario ejecutar en modo administrador.
              </p>
              <hr>
              <div style="margin-top:30px;">
                <a
                  class="btn-win"
                  href="https://www.dropbox.com/sh/n8vza9lx6rl4k88/AAD_jB9PJ6wN3nfdn9Esg62ma?dl=0"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >Descargar</a>              
              </div>
            </div>
            <div class="download__description__versions__linux">
                <img
                src="../assets/linux-logo.png"
                width="10%"
                heigth="10%"
                alt="..."
              >
              <h4>Linux</h4>
              <p>
                - Instalar <a class="link" href="https://www.arduino.cc/" target="_blank">Arduino IDE</a>
              </p>              
              <p>
                - Versiones 64 bits de: Linux Mint 17, 18, 19 - Ubuntu - Debian.
              </p>
              <p>
                - Ejecutar en modo administrador.
              </p>
              <hr>
              <div style="margin-top:30px;">
                            <a
                class="btn-linux" 
                role="button"
                aria-pressed="true"
                href="https://www.dropbox.com/sh/kq8ndh7xw5ms6rq/AADa8Tn3cevN05mxSCow02NPa?dl=0"
                download
                target="_blank"
                rel="noopener noreferrer"
              >Descargar x64</a>
              </div>
            </div>
        </div>
    </div>

 
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

.badge-js {
  background-color: $yellow-scale-10;
  color: $black-scale-2;
  padding: 5px;
  font-weight: 600; 
}

.badge-arduino {
  background-color: $green-scale-10;
  color: $color_white;
  font-weight: 600; 
  padding: 5px;
}

.download {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
      font-size: 40px;
    };
    p {
      width: 70%;  
      font-size: 25px;
    }

  }
  &__logo {
    margin-top: 40px;
    border-radius: 10px;
    border: 3px solid $board-scale-3;
  }
  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
      p {
        font-size: 25px;
        font-weight: 500;
      }
    };
    &__versions {
      display: flex;
      color: $color_white;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
      font-size: 15px;
      &__windows {
        border-radius: 10px;
        width: 50%;
        margin-top: 20px;
        background-color: #2a4dbe;
        padding: 40px; 
        
      };
      &__linux {
        border-radius: 10px;
        margin-top: 20px;
        background-color: #980e40;
        padding: 40px;
        width: 50%;
      }
    }
  }

  &__download_buttons {

  }
}

.link {
    color: $color_white;
    font-weight: bold;
}

.btn-win {
  margin-top: 10px;
  text-decoration: none;
  background: #2a4dbe;
  color: white;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid white;
}

.btn-linux {
  margin-top: 10px;
  text-decoration: none;
  background: #5e1c33;
  color: white;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid white;
}

</style>
