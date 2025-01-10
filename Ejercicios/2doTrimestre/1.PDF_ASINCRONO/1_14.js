function reqListener() {
  const diccionario = this.response;
  let cadena_nombres = "Os nomes das gatas son ";
  let cadena_genero = "Hai ";
  let contador = 1;
  let machos = 0;
  let feminas = 0;
  for (const element of diccionario) {
    if (contador == diccionario.length) {
      cadena_nombres = cadena_nombres + " e " + element.name;
    } else {
      if (contador == diccionario.length - 1) {
        cadena_nombres = cadena_nombres + element.name;
        contador++;
      } else {
        cadena_nombres = cadena_nombres + element.name + ", ";
        contador++;
      }
    }
  }
  for (const element2 of diccionario) {
    for (const element3 of element2.kittens) {
      if (element3.gender == "m") {
        machos++;
      } else {
        feminas++;
      }
    }
  }
  let total = machos + feminas;
  cadena_genero =
    cadena_genero +
    total +
    " gatiños: " +
    feminas +
    " femias " +
    "e " +
    machos +
    " machos";
  console.log(cadena_nombres);
  console.log(cadena_genero);
}
const xhr = new XMLHttpRequest();
xhr.open("GET", "sample.json");
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("load", reqListener);
