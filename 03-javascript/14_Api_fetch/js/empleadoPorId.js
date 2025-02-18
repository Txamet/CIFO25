import { mostra } from "./text.js";

export const cargarEmpleadoPorIdBtn = document.querySelector("#btn6");

const mostrarHTML6 = (empleado) => {
  mostra.innerHTML = `
    <p>ID: ${empleado.id}</p>
    <p>Empleado: ${empleado.nombre}</p>
    <p>Empresa: ${empleado.empresa}</p>
    <p>Trabajo: ${empleado.puesto}</p> <hr />`;
};

export const obtenerDatos = (id) => {
  fetch("./server/empleados.json")
    .then((response) => {
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json(); // Ve si lo puede convertir en un JSON  de verdad
    })
    .then((empleados) => {
      const persona = empleados.find((emp) => emp.id === id);
      console.log(persona);
      mostrarHTML6(persona);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = `<p>Error al cargar los datos del empleado</p>`;
    });
};
