// 2. Crea unha páxina web con un título <h1> e dous botóns. Un dos botóns debe iniciar
// un intervalo que cambie alternativamente cada segundo a cor do título <h1>
// alternando entre dúas cores, as que escollas. O outro botón debe deter o intervalo e
// parar o cambio de cores.
const h1 = document.querySelector("h1");

const start = document.getElementById("start");

const end = document.getElementById("end");

let inter = "";

function cor() {
  if (!inter) {
    inter = setInterval(() => {
      if (h1.style.color == "red") {
        h1.style.color = "blue";
      } else {
        h1.style.color = "red";
      }
    }, 1000);
  }
}

start.addEventListener("click", cor);

function parar() {
  clearInterval(inter);
}

end.addEventListener("click", parar);
