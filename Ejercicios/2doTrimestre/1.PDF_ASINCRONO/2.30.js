function diplayRandomPerson(data) {
  let foto = document.getElementById("foto");
  let imagen = document.createElement("img");
  let nombre = document.querySelector("h2");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let city = document.getElementById("city");
  let country = document.getElementById("country");

  let age = document.getElementById("age");
  console.log(data);
  let element = data.results[0];
  imagen.src = element.picture.large;
  foto.append(imagen);
  nombre.append(element.name.first + " " + element.name.last);
  email.append(element.email);
  phone.append(element.phone);
  city.append(element.location.city);
  country.append(element.location.country);
  age.append(element.registered.age);
  console.log(element);
}

let boton = document.querySelector("button");

boton.addEventListener("click", nueva);
fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => diplayRandomPerson(data))
  .catch((error) => {
    console.error("Error: ", error);
  });

function nueva() {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      return response.json();
    })
    .then((data) => diplayRandomPerson(data))
    .catch((error) => {
      console.error("Error: ", error);
    });
}
