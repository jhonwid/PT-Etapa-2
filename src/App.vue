<script>
import TxtReader from './components/TxtReader.vue';
// import { auth } from "./utils/firebase";
// import {onMounted} from "vue";

export default {
  // setup() {
  //   onMounted (() => {
  //     consloe.log("Conexion exitosa entre firebase y vue");
  //   });
  // },

  components: {
    TxtReader,
  },
};
</script>

<template>
  <div id="app">
    <h1>Lector de archivos .txt</h1>
    <TxtReader />
  </div>
</template>

<style>
/* Estilos globales de la aplicación */
body {
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

h1 {
  color: black;
}
</style>