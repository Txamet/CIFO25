const outputInputs = document.querySelector(".inputs");
const outputPista = document.querySelector(".pista span");
const outputIntentos = document.querySelector(".restantes span");
const outputErroneas = document.querySelector(".letrasErroneas span");
const inputLetter = document.querySelector(".lletra");
const button = document.querySelector("#boton");
const button2 = document.querySelector(".boton2");
const button3 = document.querySelector(".boton3");
const button4 = document.querySelector(".boton4");
const mensaje = document.querySelector(".mostra");
const detalles = document.querySelectorAll(".detalles p");

let indexPalabra, palabra, pista, word;

const nuevaPalabraPista = () => {
  indexPalabra = Math.floor(Math.random() * 19);
  word = listado[indexPalabra].palabra;
  pista = listado[indexPalabra].pista;

  return word;
};

palabra = nuevaPalabraPista();
