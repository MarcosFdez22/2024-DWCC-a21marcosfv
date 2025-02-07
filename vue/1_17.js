// js
let fecha = new Date().getFullYear();
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      obj: {
        name: "Marcos",
        date: fecha,
        imagen:
          "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2017%2F04%2F06155038%2Fperro-beso.jpg?auth=7db092219938909c16f466d602dcf2715cb44547bae1b45714fbfc66be4b16e9&smart=true&width=1200&height=1200&quality=85",
        contador: 0,
      },
    };
  },
  methods: {
    sumar() {
      this.obj.date = this.obj.date + 5;
    },
    incrementar() {
      this.obj.contador = this.obj.contador + 1;
    },
    decrementar() {
      this.obj.contador = this.obj.contador - 1;
    },
  },
}).mount("#app");
