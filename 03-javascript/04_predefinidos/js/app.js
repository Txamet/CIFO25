function cambia(params) {
  alert(`Cambiamos color de fondo a  ${params}`);
  document.body.style.backgroundColor = params;
}
/* alert("Cambiamos color de fondo a ROJO");
      document.body.style.backgroundColor = "red";

      setTimeout(() => {
        alert("Cambiamos color de fondo a VERDE");
        document.body.style.backgroundColor = "green";
      }, 3000); */

const red = document.querySelector("#red");
const green = document.querySelector("#green");

red.addEventListener("click", () => {
  cambia("red");
});

green.onclick = () => {
  document.body.style.backgroundColor = "green";
};
