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
  sessionStorage.setItem("recarga", "on")
  location.reload();
  for (const detalle of detalles)
      detalle.style.fontSize = `${sessionStorage.getItem("letra")}rem`;

  mensaje.style.fontSize = `${sessionStorage.getItem("letra")}rem`;
});

button2.addEventListener("click", () => {
  if (sessionStorage.getItem("recarga") == "on") {
    sessionStorage.setItem("recarga", "off")
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

if (sessionStorage.getItem("modo") == "oscuro") {
  cambioContraste();
}