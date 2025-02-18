import { cargarTextoBtn, obtenerDatos as datosText } from "./text.js";
import {
  cargarEmpleadoBtn,
  obtenerDatos as datosEmpleado,
} from "./empleado.js";
import {
  cargarListaEmpleadosBtn,
  obtenerDatos as datosListaEmpleados,
} from "./empleados.js";
import {
  cargarEmpleadoPorIdBtn,
  obtenerDatos as datosEmpleadoPorId,
} from "./empleadoPorId.js";
import { cargarPicsumBtn, obtenerDatos as datosPicsum } from "./picsum.js";
import {
  cargarRandomUsersBtn,
  obtenerDatos as datosRandomUsers,
} from "./apiUsers.js";

cargarTextoBtn.addEventListener("click", datosText);
cargarEmpleadoBtn.addEventListener("click", datosEmpleado);
cargarListaEmpleadosBtn.addEventListener("click", datosListaEmpleados);
cargarEmpleadoPorIdBtn.addEventListener("click", () => {
  let id = parseInt(prompt("Esribe la id del empleado a mostrar"));
  datosEmpleadoPorId(id);
});
cargarPicsumBtn.addEventListener("click", datosPicsum);
cargarRandomUsersBtn.addEventListener("click", datosRandomUsers);
