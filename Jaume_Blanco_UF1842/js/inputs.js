const outputInputs = document.querySelector(".inputs");
const outputPista = document.querySelector(".pista span");
const outputIntentos = document.querySelector(".restantes span");
const outputErroneas = document.querySelector(".letrasErroneas span");
const inputLetter = document.querySelector(".lletra");
const button = document.querySelector("button");
const mensaje = document.querySelector(".mostra");

let indexPalabra = Math.floor(Math.random() * 19);
let palabra = listado[indexPalabra].palabra;
let pista = listado[indexPalabra].pista;
