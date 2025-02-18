/* Metodo es una funciones que solo se usa en ese objeto */

import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro); // Palabra clave para acceder al constructor de la clase padre, no necesitamos más en las propiedades a definidas en el padre
    this.categoria = categoria;
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
  }
}
