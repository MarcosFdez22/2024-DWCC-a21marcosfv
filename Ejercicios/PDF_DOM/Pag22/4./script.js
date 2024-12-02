//4. Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4 elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no navegador.

const ull = document.getElementById("uls");

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

li1.textContent = "Primer li";
li2.textContent = "Segundo li";
li3.textContent = "Tercero li";
li4.textContent = "Cuarto li";

ull.append(li1);
ull.append(li2);
ull.append(li3);
ull.append(li4);
