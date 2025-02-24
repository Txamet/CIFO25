let n,
  min,
  max,
  rand,
  cont = 1;
const nombre = document.querySelector("#nombre");
const enunciado = document.getElementById("enunciado");
const paso1 = document.querySelector("#paso1");
const paso2 = document.querySelector("#paso2");
const paso3 = document.querySelector("#juegoBtns");
const num1In = document.querySelector("#numMin");
const num1Div = document.querySelector("#num1");
const num2In = document.querySelector("#numMax");
const num2Div = document.querySelector("#num2");
const errores = [
  document.querySelector("#error1"),
  document.querySelector("#error2"),
  document.querySelector("#error3"),
  document.querySelector("#error4"),
];
const error = [
  `Nombre no válido, vuelve a probar teniendo en cuenta que no puedes introducir carácteres numéricos.`,
  `Lo sentimos. Has introducido un dato no válido.`,
  `Has agotado tus intentos, ¡Suerte en tu próxima partida!`,
];
const continuar1Btn = document.querySelector("#continuar1");
const continuar2Btn = document.querySelector("#continuar2");
const continuar3Btn = document.querySelector("#continuar3");
const reiniciarBtn = document.querySelector("#reset");
const resetQ = document.querySelector("#deNuevo");
const noo = document.querySelector("#no");
const parrafo = `En este juego tendrás que indicarnos un número del 1 al 10 y después otro del 30 al 40. La aplicación seleccionará de manera aleatoria, otro dentro del rango comprendido entre las dos cifras que has designado. Tendrás 5 intentos para adivinarlo. `;
