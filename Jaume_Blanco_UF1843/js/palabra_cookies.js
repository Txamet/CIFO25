document.addEventListener("click", () => {
  inputLetter.focus();
});

document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp") aumentarTamanoLetra();
  if (e.key == "ArrowDown") disminuirTamanoLetra();
});

inputLetter.addEventListener("keyup", inputTecla);

button.addEventListener("click", () => {
  inputLetter.innerHTML = "";
  setCookie("recarga", "on", 1 / 24);
  location.reload();
});

button2.addEventListener("click", () => {
  if (getCookie("recarga") == "on") {
    setCookie("recarga", "off", 1 / 24);
  }
  cambioContraste();
});

button2.addEventListener("keyup", (e) => {
  if (e.key === "Enter") cambioContraste();
});

button3.addEventListener("click", aumentarTamanoLetra);

button3.addEventListener("keyup", (e) => {
  if (e.key === "Enter") aumentarTamanoLetra();
});

button4.addEventListener("click", disminuirTamanoLetra);

button4.addEventListener("keyup", (e) => {
  if (e.key === "Enter") disminuirTamanoLetra();
});

montarJuego();

if (getCookie("modo") == "oscuro") {
  cambioContraste();
}
