import { mostra } from "./text.js";

export const cargarListaEmpleadosBtn = document.querySelector("#btn3");

const mostrarHTML3 = (empleados) => {
  mostra.innerHTML = "";
  empleados.forEach((empleado) => {
    empleado = `
 <p>ID: ${empleado.id}</p>
 <p>Empleado: ${empleado.nombre}</p>
 <p>Empresa: ${empleado.empresa}</p>
 <p>Trabajo: ${empleado.puesto}</p> <hr />`;
    mostra.innerHTML += empleado;
  });
};

export const obtenerDatos = () => {
  fetch("./server/empleados.json")
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
      console.log(response);
      mostrarHTML3(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
