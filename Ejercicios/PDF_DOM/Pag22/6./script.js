//6. Crea unha función createTree(data) que devolva unha lista ul/li coma o do html, para os datos proporcionado

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

let ul1 = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let ul2 = document.createElement("ul");
li1.append("Aaa");
li2.append("Aaa");
li3.append("Bbbb");
li1.append(ul2);
ul2.append(li3);
ul1.append(li1);
ul1.append(li2);
document.body.append(ul1);

Object.keys(perro).forEach((element) => console.log(element));
