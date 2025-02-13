const nombreUsuario = document.querySelector("#usuario");
const seleccionNumeros = document.querySelector("#seleccion_numeros");
const seleccionNumerosSegundo = document.querySelector("#segunda_seleccion");
const juego = document.querySelector("#juego");
const reglas = document.querySelector("#reglas");
const tablero = document.querySelector("#tablero");
const finalizado = document.querySelector("#finalizado");

const usuario = document.querySelector("#nombre");
const respuestaNombre = document.querySelector("#feedback_nombre");
const parrafoUsuario = document.querySelector("#nombre_usuario");
const seleccionPrimerNumero = document.querySelector("#primer_numero");
const seleccionSegundoNumero = document.querySelector("#segundo_numero");
const respuestaPrimerNumero = document.querySelector("#feedback_primer_numero");
const respuestaSegundoNumero = document.querySelector(
  "#feedback_segundo_numero"
);
const respuestaJuego = document.querySelector("#feedback_juego");

const nombrePattern = /^[A-z]+$/;

let numero_uno,
  numero_dos,
  aleatorio,
  contador = 0,
  completado = false;

if (localStorage.getItem("recarga") == "on") {
  nombreUsuario.hidden = true;
  seleccionNumeros.hidden = false;
  parrafoUsuario.innerHTML = localStorage.getItem("usuario");
}

const guardarNombre = () => {
  nombre = usuario.value;
  let nombreValido = nombrePattern.test(nombre);
  console.log(nombre, nombreValido);
  if (nombreValido) {
    console.log("ok");
    localStorage.setItem("usuario", nombre);
    respuestaNombre.innerHTML = "";
    nombreUsuario.hidden = true;
    seleccionNumeros.hidden = false;
    parrafoUsuario.innerHTML = localStorage.getItem("usuario");
  } else {
    respuestaNombre.innerHTML = `Nombre no válido, vuelve a probar teniendo en cuenta que no puedes introducir valores numéricos.  `;
    respuestaNombre.style.color = "red";
  }
};

const primerNumero = () => {
  numero_uno = parseInt(seleccionPrimerNumero.value);

  if (numero_uno > 0 && numero_uno < 11) {
    respuestaPrimerNumero.innerHTML = `Tu primer número es el ${numero_uno}`;
    respuestaPrimerNumero.style.color = "green";
    seleccionNumerosSegundo.hidden = false;
  } else {
    respuestaPrimerNumero.innerHTML = `Has de introducir un número entre 1 y 10.`;
    respuestaPrimerNumero.style.color = "red";
  }
};

const segundoNumero = () => {
  numero_dos = parseInt(seleccionSegundoNumero.value);

  if (numero_dos > 29 && numero_dos < 41) {
    respuestaSegundoNumero.innerHTML = `Tu segundo número es el ${numero_dos}`;
    respuestaSegundoNumero.style.color = "green";

    setTimeout(() => {
      seleccionNumeros.hidden = true;
      juego.hidden = false;
      crearParrilla();
      aleatorio = crearNumero();
      console.log(aleatorio);

      reglas.innerHTML = `${localStorage.getItem(
        "usuario"
      )} tus números son ${numero_uno} y el ${numero_dos}. Adivina el número dentro de ese rango que ha pensado el juego de manera aleatoria`;
    }, 1000);
  } else {
    respuestaSegundoNumero.innerHTML = `Has de introducir un número entre 30 y 40.`;
    respuestaSegundoNumero.style.color = "red";
  }
};

const crearParrilla = () => {
  for (let i = numero_uno; i <= numero_dos; i++) {
    const casilla = document.createElement("button");
    let valorCasilla = document.createTextNode(i);
    casilla.appendChild(valorCasilla);
    casilla.setAttribute("id", i);
    casilla.setAttribute("onclick", `tomarValor(${i})`);
    tablero.appendChild(casilla);
  }
};

const crearNumero = () => {
  let number =
    Math.floor(Math.random() * (numero_dos + 1 - numero_uno)) + numero_uno;
  return number;
};

const tomarValor = (valor) => {
  contador++;

  if (contador < 5 && completado == false) {
    if (valor < aleatorio) {
      respuestaJuego.innerHTML = `El número ${valor} es menor que el pensado`;
    } else if (valor > aleatorio) {
      respuestaJuego.innerHTML = `El número ${valor} es mayor que el pensado`;
    } else {
      completado = true;
      respuestaJuego.innerHTML = `¡ACERTASTE! El número pensado es el ${valor}`;
      respuestaJuego.style.color = "green";
    }
  } else if (completado == false && contador == 5) {
    completado = true;
    respuestaJuego.innerHTML = `¡FALLASTE! Se te han acabado todos los intentos`;
    respuestaJuego.style.color = "red";
  }

  if (completado == true) {
    finalizado.hidden = false;
  }
};

const volver = () => {
  usuario.value = "";
  seleccionPrimerNumero.value = "";
  seleccionSegundoNumero.value = "";
  localStorage.setItem("recarga", "on");
  location.reload();
};

const reset = () => {
  usuario.value = "";
  seleccionPrimerNumero.value = "";
  seleccionSegundoNumero.value = "";
  location.reload();
  localStorage.removeItem("usuario");
  localStorage.removeItem("recarga");
};
