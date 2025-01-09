// 1. Implementa unha función escribirNumeros(desde, ata) que xere un número cada
// segundo, comezando en “desde” e rematando en “ata”. Fai dúas variantes da
// función: unha usando setInterval e outra usando setTimeout.

function escribirNumeros(desde, ata) {
  const intervalID = setInterval(() => {
    console.log(desde);
    if (desde == ata) {
      clearInterval(intervalID);
    }
    desde++;
  }, 1000);
}
escribirNumeros(1, 5);

function escribirNumeros2(primer, ultimo) {
  let tiempoout;

  timeout();
  function timeout() {
    tiempoout = setTimeout(function () {
      console.log(primer);
      primer++;
      if (primer <= ultimo) {
        timeout();
      }
    }, 1000);
  }
}
escribirNumeros2(5, 8);
