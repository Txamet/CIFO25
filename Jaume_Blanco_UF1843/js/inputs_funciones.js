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

let indexMsg, fallo, acierto;
let indexPalabra, pista, word;
let count = 8;
let total = 0;
let check = true;
let completado = false;
let tamanoLetra = 1.5;
let contraste = "claro";
const letrasTotales = [];


const nuevaPalabraPista = () => {
  indexPalabra = Math.floor(Math.random() * 19);
  palabra = listado[indexPalabra].palabra;
  pista = listado[indexPalabra].pista;
};

const montarJuego = () => {
  nuevaPalabraPista();
  if (palabra.length < 7) count = 6;

  inputLetter.focus();
  inputLetter.style.opacity = "0";
  inputLetter.style.cursor = "default";
  outputPista.innerHTML = pista;
  outputIntentos.innerHTML = count;

  for (let i = 0; i < palabra.length; i++) {
    const input = document.createElement("input");
    input.setAttribute("disabled", true);
    outputInputs.appendChild(input);
  }

  nuevoMensaje();
}

const nuevoMensaje = () => {
  indexMsg = Math.floor(Math.random() * 6);
  fallo = msgError[indexMsg]();
  acierto = msg[indexMsg]();
 
};

const checkLetra = (letra) => {
  let result = false;

  for (let i = 0; i < palabra.length; i++) {
    const input = document.querySelectorAll(".inputs input");
    let inputLetra = palabra.charAt(i);

    if (inputLetra == letra) {
      input[i].setAttribute("value", letra.toUpperCase());
      letrasTotales.push(letra);
      total++;
      result = true;
    }
  }

  return result;
};

const completaPalabra = () => {
  for (let i = 0; i < palabra.length; i++) {
    const input = document.querySelectorAll(".inputs input");
    let letra = palabra.charAt(i);

    if (input[i].value == "") {
      input[i].setAttribute("value", letra.toUpperCase());
      input[i].style.color = "#eb0000";
    }
  }
};

const inputTecla = (e) => {
  let letra = e.key;
  let pattern = /^[A-zñ]$/;
  let letraValida = pattern.test(letra);
  let letraRepetida = letrasTotales.includes(letra);

  if (count === 0 && completado == false) {
    e.preventDefault();
    outputIntentos.innerHTML = `Haz click en Volver a empezar`;
    mensaje.innerHTML = fallo;
    mensaje.style.color = "#eb0000";
    mensaje.tabIndex = "0";
    completaPalabra();
  }

  if (!letraRepetida && count > 0) check = checkLetra(letra);

  if (!check && letraValida && count > 1 && !letraRepetida) {
    count--;
    letrasTotales.push(letra);
    outputIntentos.innerHTML = count;
    outputErroneas.innerHTML += `${letra.toUpperCase()} `;
    
  } else if (!check && letraValida && count == 1 && !letraRepetida) {
    e.preventDefault();
    count--;
    letrasTotales.push(letra);
    outputErroneas.innerHTML += `${letra.toUpperCase()} `;
    outputIntentos.innerHTML = `Haz click en Volver a empezar`;
    mensaje.innerHTML = fallo;
    mensaje.style.color = "#eb0000";
    mensaje.tabIndex = "0";
    completaPalabra();
  }

  if (total === palabra.length && count > 0) {
    e.preventDefault();
    count = 0;
    outputIntentos.innerHTML = `Haz click en Volver a empezar`;
    completado = true;
    mensaje.innerHTML = acierto;
    mensaje.style.color = "green";
    mensaje.tabIndex = "0";
  }

  inputLetter.value = "";
}

const reset = () => {
  const inputsToRemove = document.querySelectorAll(".inputs input");
  for (const removeInputs of inputsToRemove) removeInputs.remove();

  count = 8;
  total = 0;
  inputLetter.innerHTML = "";
  outputErroneas.innerHTML = "";
  mensaje.innerHTML = "";
  letrasTotales.splice(0, letrasTotales.length);

  montarJuego();
  
  if (contraste == "oscuro") {
    const inputList = document.querySelectorAll(".inputs input");
    for (const inputs of inputList) inputs.classList.toggle("alter_input");
  }
};

const cambioContraste = () => {
  const input = document.querySelectorAll(".inputs input");

  button2.classList.toggle("alter_boton2");
  document.querySelector("body").classList.toggle("alter_body");
  document.querySelector("h1").classList.toggle("alter_h1");
  document.querySelector(".menu").classList.toggle("alter_menu");

  for (const inputs of input) inputs.classList.toggle("alter_input");
  for (const detalle of detalles) detalle.classList.toggle("alter_p");

  if (contraste == "oscuro") {
    contraste = "claro"
  } else {
    contraste = "oscuro"
  }
};

const aumentarTamanoLetra = () => {
  if (tamanoLetra < 3) {
    tamanoLetra += 0.1;
    for (const detalle of detalles)
      detalle.style.fontSize = `${tamanoLetra}rem`;

    mensaje.style.fontSize = `${tamanoLetra}rem`;
  }
};
const disminuirTamanoLetra = () => {
  if (tamanoLetra > 1) {
    tamanoLetra -= 0.1;
    for (const detalle of detalles)
      detalle.style.fontSize = `${tamanoLetra}rem`;

    mensaje.style.fontSize = `${tamanoLetra}rem`;
  }
};
