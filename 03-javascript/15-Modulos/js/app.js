/* console.log(nombreCliente); */

// 1) Esto nos puede llevar a variables que se mezclen con otras en especial si el código es mantenido por múltiples personas, es voluminoso o también si decidimos implementar librerías...

// La solución es agrupar cada archivo en lo que se conoce como un IIFE (Immediately Invoked Function Expression)

// 2) Para mejorar esta forma de uso de las IIFE usaremos módulos, que nos permite importar y exportar parte del código entre archivos según nuestras necesidades.

// Ejemplo de importación de datos desde el archivo cliente.js

/* import { nombreCliente } from "./cliente.js";
console.log(nombreCliente); */

/* import { nombreCliente, ahorro } from "./cliente.js";
console.log(nombreCliente, ahorro); */

/* import { nombreCliente, ahorro, mostrarDatos } from "./cliente.js";
const cliente = mostrarDatos(nombreCliente, ahorro);
console.log(cliente); */

import { nombreCliente, ahorro, mostrarDatos, Cliente } from "./cliente.js";
const cliente = new Cliente(nombreCliente, ahorro);
console.log(mostrarDatos(nombreCliente, ahorro));
console.log(cliente.getCliente());
