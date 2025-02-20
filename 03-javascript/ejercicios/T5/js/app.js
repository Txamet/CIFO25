const country = document.querySelector("#country");
const city = document.querySelector("#city");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");
const errorAnswer = document.querySelector("#error");
const API_key = "86013a88e10842d94145ac5dfff2179b";

const mostrarHTML = (data) => {
  let temperatura = data.main.temp - 273;
  let temperaturaMax = data.main.temp_max - 273;
  let temperaturaMin = data.main.temp_min - 273;

  result.innerHTML = "";
  result.classList.remove("bg-warning", "w-100", "p-5");
  errorAnswer.innerHTML = "";
  errorAnswer.classList.remove("p-5");

  const primerP = document.createElement("h4");
  let valorPrimerP = document.createTextNode(
    `El tiempo de hoy en ${data.name}`
  );
  primerP.appendChild(valorPrimerP);
  primerP.classList.add("pb-3");
  result.appendChild(primerP);

  const segundoP = document.createElement("p");
  let valorSegundoP = document.createTextNode(
    `Temperatura actual: ${temperatura.toFixed(2)} ºC`
  );
  segundoP.appendChild(valorSegundoP);
  result.appendChild(segundoP);

  const tercerP = document.createElement("p");
  let valorTercerP = document.createTextNode(
    `Temperatura mínima: ${temperaturaMin.toFixed(2)} ºC`
  );
  tercerP.appendChild(valorTercerP);
  result.appendChild(tercerP);

  const cuartoP = document.createElement("p");
  let valorCuartoP = document.createTextNode(
    `Temperatura máxima: ${temperaturaMax.toFixed(2)} ºC`
  );
  cuartoP.appendChild(valorCuartoP);
  result.appendChild(cuartoP);
  result.classList.add("bg-warning", "w-100", "p-5");
};

const obtenerDatos = (city, country, key) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`
  )
    .then((response) => {
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json();
    })
    .then((data) => {
      mostrarHTML(data);
    })
    .catch((error) => {
      console.log(error);
      result.classList.remove("bg-warning", "w-100", "p-5");
      result.innerHTML = "Introduce país y ciudad para ver el tiempo de hoy";
      errorAnswer.innerHTML = `<strong>¡Error!</strong> Esta ciudad no existe en este país.`;
      errorAnswer.classList.add("p-5");
    });
};

const ejecutarApp = () => {
  let ciudad = city.value;
  let pais = country.value;

  if (!ciudad || !pais) {
    result.innerHTML = "";
    result.classList.remove("bg-warning", "w-100", "p-5");
    errorAnswer.innerHTML =
      "<strong>¡Error!</strong> Ambos campos son obligatorios.";
    errorAnswer.classList.add("p-5");
    setTimeout(() => {
      country.value = "";
      city.value = "";
      location.reload();
    }, 5000);
  } else {
    obtenerDatos(ciudad, pais, API_key);
  }
};

button.addEventListener("click", ejecutarApp);
