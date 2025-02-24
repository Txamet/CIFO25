// Función para mostrar errores
const mostrarError = (index, mensaje, color) => {
  errores[index].innerHTML = mensaje;
  errores[index].style.color = color;
};

// Explica el juego y da la bienvenida a nombre********************
const muestraJuego = () => {
  paso1.classList.add("oculto");
  paso2.classList.remove("oculto");
  enunciado.innerHTML = `Bienvenid@ ${n}.<br/>${parrafo}`;
};

// Bienvenido y ?Nombre*******************************
nombre.value = sessionStorage.getItem("nombre");
const bienvenidoNombre = () => {
  n = nombre.value;
  sessionStorage.setItem("nombre", n);
  n = n.replace(/\s/g, "");
  if (Number(n) || n == "") {
    mostrarError(0, error[0], "red");
  } else {
    mostrarError(0, `Bienvenid@ ${n}.`, "orange");
    setTimeout(muestraJuego, 1000);
  }
};

// Checar numero minimo del rango************************
const checkMin = () => {
  min = Number(num1In.value.replace(/ /g, ""));
  if (!Number(min >= 1 && min <= 10) || min == "") {
    mostrarError(1, error[1], "red");
    return false;
  } else {
    num1In.value = "";
    mostrarError(1, `Tu primer número es el ${min}.`, "orange");
    num2Div.classList.remove("oculto");
    return true;
  }
};

// checar el numero maximo del rango**************************
const checkMax = () => {
  max = Number(num2In.value.replace(/ /g, ""));
  if (!Number(max >= 30 && max <= 40) || max == "") {
    mostrarError(2, error[1], "red");
    return false;
  } else {
    num2In.value = "";
    mostrarError(2, `Tu segundo número es el ${max}.`, "orange");
    setTimeout(() => {
      paso2.classList.add("oculto");
      paso3.classList.remove("oculto");
      let boton = `<div class="w3-container w3-section centro">`;
      for (let i = min; i <= max; i++) {
        boton += `<button id="btn${i}" class="w3-button w3-teal minmar" onclick="jugar(${i}); usedBtn(${i})">${i}</button>`;
        if (i % 10 == 0) boton += `<br/>`;
      }
      rand = Math.floor(Math.random() * (max + 1 - min)) + min;
      console.log(`aleatorio ${rand}`);
      boton += "</div>";
      paso3.innerHTML = boton;
      paso3.innerHTML += `${n}, tus números son el ${min} y el ${max}. Adivina el número dentro de ese rango que ha pensado la máquina de manera aleatoria. Presiona sobre los botones para jugar`;
    }, 1500);
    return true;
  }
};

// botones -> adivinar -> bien/mal ******************
function jugar(hipotesis) {
  if (cont <= 5) {
    if (hipotesis < rand) {
      mostrarError(
        3,
        `Has elegido el ${hipotesis}, tu número es menor que el pensado.  Intento ${cont} de 5.`,
        "red"
      );
    } else if (hipotesis > rand) {
      mostrarError(
        3,
        `Has elegido el ${hipotesis}, tu número es mayor que el pensado. Intento ${cont} de 5.`,
        "red"
      );
    } else if (hipotesis == rand) {
      mostrarError(
        3,
        `¡Enhorabuena ${n}! Has acertado el número (${rand}) en tu intento número ${cont}.`,
        "orange"
      );
      finGris();
      resetQ.classList.remove("oculto");
    }
    if (cont >= 5 && (hipotesis > rand || hipotesis < rand)) {
      mostrarError(3, `${n}. Número Pensado: ${rand}. ${error[2]}`, "red");
      finGris();
      resetQ.classList.remove("oculto");
    }
  } else {
    mostrarError(3, `${n}. Número Pensado: ${rand}. ${error[2]}`, "red");
    finGris();
    resetQ.classList.remove("oculto");
  }
  cont++;
}

const usedBtn = (i) => {
  let btnXpired = document.querySelector(`#btn${i}`);
  btnXpired.classList.remove("w3-teal", "w3-button");
  btnXpired.classList.add("w3-dark-grey", "w3-btn");
  btnXpired.removeAttribute("onclick");
};

const finGris = () => {
  for (let i = min; i <= max; i++) {
    usedBtn(i);
  }
};

const resetGame = () => {
  // Restablecer el estado del juego sin recargar la página
  cont = 1;
  paso1.classList.add("oculto");
  paso2.classList.remove("oculto");
  paso3.classList.remove("oculto");
  num1Div.classList.remove("oculto");
  num2Div.classList.add("oculto");
  resetQ.classList.add("oculto");
  num1In.value = "";
  num2In.value = "";
  errores.forEach((error) => (error.innerHTML = ""));
  paso3.innerHTML = "";
  muestraJuego();
};

// Listeners de Botones********************************
continuar1Btn.addEventListener("click", bienvenidoNombre);
continuar2Btn.addEventListener("click", checkMin);
continuar3Btn.addEventListener("click", checkMax);
reiniciarBtn.addEventListener("click", resetGame);
noo.addEventListener("click", () => {
  sessionStorage.clear();
  location.reload();
});
