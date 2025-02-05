let indexMsg = Math.floor(Math.random() * 6);
let fallo = msgError[indexMsg];
let acierto = msg[indexMsg];
let count = 8;
let total = 0;
let check = true;
let completado = false;
const letrasTotales = [];

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

document.addEventListener("click", () => {
  inputLetter.focus();
});

button.addEventListener("click", () => {
  inputLetter.value = "";
  location.reload();
});

inputLetter.addEventListener("keyup", (e) => {
  let letra = e.key;
  let pattern = /^[A-z]$/;
  let letraValida = pattern.test(letra);
  let letraRepetida = letrasTotales.includes(letra);

  if (count === 0 && completado == false) {
    e.preventDefault();
    outputIntentos.innerHTML = `Haz click en Volver a empezar`;
    mensaje.innerHTML = fallo;
    mensaje.style.color = "red";
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
    mensaje.style.color = "red";
    completaPalabra();
  }

  if (total === palabra.length && count > 0) {
    e.preventDefault();
    count = 0;
    outputIntentos.innerHTML = `Haz click en Volver a empezar`;
    completado = true;
    mensaje.innerHTML = acierto;
    mensaje.style.color = "green";
  }

  inputLetter.value = "";
});

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
      input[i].style.color = "red";
    }
  }
};

const button2 = document.querySelector("#boton2");

const cambioContraste = () => {
  const input = document.querySelectorAll(".inputs input");

  if (document.body.style.color == "white") {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    for (const inputs of input) inputs.style.backgroundColor = "white";
  }
};

button2.addEventListener("click", () => {
  cambioContraste();
});
