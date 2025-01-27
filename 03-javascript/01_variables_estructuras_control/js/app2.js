//Veamos otro tipo de formas de crear variables, variables de tipo constante: const.
// Existen pocas diferencias entre let y const, cuando hablamos de datos primitivos: en una viariable con const su valor no puede ser reasignado, debe inicializarse con un valor, nunca undefined, suele escribirse en UPPERCASE.

//const precio;
const PRECIO = 20;
console.log(PRECIO);

const mo = "Pantalla 19 pulgadas";
console.log(mo);

//mo = "Monitor 23 pulgadas"; //No puede reasignarse
console.log(mo);


// Existen otras diferencias entre const y let, especialmente cuando se trabajan con arrays y objetos, es decir, con datos complejos.
// Mientras mantengan la estructura del contenido o referencia, pueden sufrir modificaciones en los valores. Recuerda: las variable con const no se pueden reasignar y tampoco pueden iniciar sin un valor.

/* Ejemplo: 
const nom = function nombre() {
  let nombre = prompt("Introduce tu nombre");
  alert(nombre + " es mi nombre");
  alert(`${nombre} es mi nombre`);
  console.log(nombre + " es mi nombre");
  console.log(`${nombre} es mi nombre`);
  document.getElementById("mostrar3").innerHTML = `<h4>${nombre} es mi nombre</h4>`;
}; 
*/

