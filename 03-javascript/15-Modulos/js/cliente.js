/* const nombreCliente = "Juan";
let ahorro = 200;
 */

// Los IIFE son funciones que se ejecutan inmediatamente que son leídas

// Esta forma evitará que estas variables definidas en este archivo se puedan mezclar con las de otros archivos... y su sintaxis es la siguiente...

/* (function () {
  const nombreCliente = "Juan";
  let ahorro = 200;

  // Evitamos que este código se mezcle con otras variables, el problema es que encapsula el código, y para hacerlo accesible desde otros archivos debemos elevar el ámbito de este código al window del navegador

  window.nombreCliente = "Juan Alberto";
})();
 */

// Para no tener grandes cantidades de código dentrode una IIFE ni conflictos de ámbito, son muy útiles los módulos y 2 palabras: export e import.

export const nombreCliente = "Pepe";
export let ahorro = 200;

// Podemos exportar e importar todo tipo de datos: variables, constantes, funciones, arrays, objetos, clases...

export function mostrarDatos(nombre, ahorro) {
  return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

// Creación de una clase. Modelo para construir objetos

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  getCliente() {
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
  }
}
