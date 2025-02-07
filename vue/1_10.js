// js
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
createApp({
  data() {
    return {
      message: "Ola mundo!",
      number: 22,
      array: ["rojo", "verde", "azul"],
      html: "<b>Ola</b>",
    };
  },
}).mount("#app");
