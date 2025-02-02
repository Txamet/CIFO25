let indexMsg = Math.floor(Math.random() * 6);
let fallo = msgError[indexMsg]
let acierto = msg[indexMsg]
let count = 8;
let total = 0;
let check = true;
let completado = false;
const letrasTotales = [];

//inputLetter.focus();
//inputLetter.setAttribute("type", "hidden");
inputLetter.style.visibility = "hidden";
outputPista.innerHTML = pista;
outputIntentos.innerHTML = count;

for (let i = 0; i < palabra.length; i++) {
  const input = document.createElement("input");
  input.setAttribute("disabled", true);
  outputInputs.appendChild(input);
};

/* document.addEventListener("click", () => {
   inputLetter.focus();
}); */

button.addEventListener("click", () => {
  //inputLetter.value = "";
  location.reload();
});

document.addEventListener("keyup", (e) => {
  let letra = e.key
  let pattern = /^[A-z]$/
  let letraValida = pattern.test(letra);
  let letraRepetida = letrasTotales.includes(letra);
  
  
  if (count === 0 && completado == false) {
    e.preventDefault();
    outputIntentos.innerHTML = `Haz click en Volver a empezar`
    mensaje.innerHTML = fallo
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
  }

  if (total === palabra.length && count > 0) {
    e.preventDefault();
    count = 0;
    outputIntentos.innerHTML = `Haz click en Volver a empezar`;
    completado = true;
    mensaje.innerHTML = acierto;
  }
});

const checkLetra = (letra) => {
  let result = false;

  for (let i = 0; i < palabra.length; i++) {  
    const input = document.querySelectorAll(".inputs input");
    let inputLetra = palabra.charAt(i);
    
    if (inputLetra == letra) {
      input[i].setAttribute("value", letra.toUpperCase());
      letrasTotales.push(letra)
      total++;
      result = true; 
    }
  }

  return result;
}


