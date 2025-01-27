//const principal = document.getElementById("principal");
const principal = document.querySelector("#principal");
//const parrafos = document.getElementsByTagName("p");
const parrafos = document.querySelectorAll("p");
//const clases = document.getElementsByClassName("pepe2");
const clases = document.querySelectorAll(".pepe2");
const pid = document.querySelector("#principal p#p1, #otro");
const boton = document.querySelector("button");

const ejecutar = () => {
  principal.onclick = adeu;

  for (let i = 0; i < 8; i++) {
    parrafos[i].onclick = hola;
  }

  parrafos[2].onclick = bgcolor;

  for (let i = 0; i < 2; i++) {
    clases[i].onmouseover = color;
  }

  pid.onclick = paraId;

  boton.onmouseover = foco;

  boton.onkeyup = detectar_tecla;
};

const hola = () => {
  alert("HOOOOOLA!!!");
};

const adeu = () => {
  alert("ADEUUUUU!!!");
};

const paraId = () => {
  alert("Has clickado en un Id");
};

const foco = () => {
  boton.focus();
};

const detectar_tecla = (e) => {
  e.keyCode == 13
    ? alert('Has presionado la tecla "Enter"')
    : alert('No has clickado sobre "Enter"');
};

const bgcolor = () => {
  document.querySelector("#principal").style.backgroundColor = "red";
};

const color = () => {
  document.querySelector("#principal").style.color = "grey";
};

window.onload = ejecutar;
