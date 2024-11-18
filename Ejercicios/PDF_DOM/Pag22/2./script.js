//2. Dada unha lista <ol> con varios elementos <li>, crea o código necesario para eliminar todos os <li> da lista.
let lista = document.getElementById("lista");
console.log(lista.children.length);
console.log(lista.children);

for (const element of lista.children) {
  element.remove(element);
}
console.log(lista);
