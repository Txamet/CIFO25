import { mostra } from "./text.js";

export const cargarEmpleadoBtn = document.querySelector("#btn2");

const mostrarHTML2 = (resultado) => {
  mostra.innerHTML = "";
  const usuario = `
 <p>ID: ${resultado.id}</p>
 <p>Empleado: ${resultado.nombre}</p>
 <p>Empresa: ${resultado.empresa}</p>
 <p>Trabajo: ${resultado.puesto}</p>`;
  mostra.innerHTML = usuario;
};

export const obtenerDatos = () => {
  fetch("./server/empleado.json")
    .then((response) => {
      console.log(response);
      console.log(response.type);
      console.log(response.headers.get("Content-Type"));
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json(); // Ve si lo puede convertir en un JSON  de verdad
    })
    .then((response) => {
      mostrarHTML2(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
