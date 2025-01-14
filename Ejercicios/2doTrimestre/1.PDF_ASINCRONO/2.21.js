//2. ¿Cal é a saída do seguinte código? ¿Por que?
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}
let promise = job();
promise
  .then(() => console.log("Success 1"))
  .then(() => console.log("Success 2"))
  .then(() => console.log("Success 3"))
  .catch(() => reject())
  .then(() => console.log("Success 4"))
  .catch(() => console.log("Error 1"));

//Porque .catch siempre devuelve una promesa resuelta, entonces se ejecuta el then posterior
