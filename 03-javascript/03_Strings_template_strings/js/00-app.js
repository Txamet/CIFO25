let nombre = "Oscar";
let apellido = "Perolillos";
const PI = 3.1416;
const saludo = `Bienvenido ${nombre} ${apellido} a nuestra aplicación`;

const mostra = document.querySelector("#mostra");

mostra.innerHTML = saludo;

const primavera = "Primavera";
const verano = "Verano";
const otono = "Otoño";
const invierno = "Invierno";

const estaciones = `<ul>
  <li>${primavera}</li>
  <li>${verano}</li>
  <li>${otono}</li>
  <li>${invierno}</li>
</ul>`;

const mostrallista = document.querySelector("#mostrallista");
mostrallista.innerHTML = estaciones;