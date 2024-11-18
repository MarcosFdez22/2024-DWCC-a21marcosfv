//6. Crea unha función createTree(data) que devolva unha lista ul/li coma a da imaxe da dereita, para os datos proporcionado

let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

let claves = Object.keys(arbore);
console.log(arbore);

for (let i = 0; i < claves.length; i++) {
  let clave = claves[i];
  console.log(arbore[clave]);
}

let ul1 = document.createElement("ul");
let li1 = document.createElement("li");
