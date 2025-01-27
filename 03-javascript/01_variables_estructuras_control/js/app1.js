//Reglas para variables var y let
var nombre = "Contenido";  //Variables de ámbito global. Se pueden redeclarar, su ámbito pertenece a toda la aplicación y una vez declaradas, siempre ocupan memoria
var nombre = "contenido2";
nombre = "contenido3"; //se puede reasignar
console.log(nombre);

let monitor = "Pantalla Ordenador 21 pulgadas"; //Inicalizamos variable con valor, let es de ámbito de bloque. Se entiende por bloque el de juego de {} al que pertenece. Una vez usada queda eliminada
//let monitor = "Pantalla Ordenador 26 pulgadas"; //No se pueden redeclarar
console.log(monitor);

//var y let se pueden reasignar
monitor = "Pantalla Ordenador 26 pulgadas";
console.log(monitor);

//podemos cambiar el tipo de dato
monitor = 20;
console.log(monitor);
monitor = false;
console.log(monitor);
monitor = null;
console.log(monitor);

// JavaScript es un lenguaje de tipo dinámico, no se especifican tipos de datos cuando se crea la variable, sino al asignar el valor. Es de tipado débil. (Permite por ejemplo no acabar las sentencias con ";" y lo da por supuesto)
let precio = 200;
console.log(precio);

// También se puede inicializar una variable sin valor y asignarlo después
let disponible;
console.log(disponible);
disponible = true;
console.log(disponible);

// Inicializar múltiples variables
let tipo = "sobremesa", fabricante = "sin nombre", valoracion = 5;

console.log(tipo);
console.log(fabricante);
console.log(valoracion);

// Reglas de las variables:

// Pueden tener: letras, números, _ No pueden iniciar con número
//let 99num; //Esta daría error de sintaxis
let dias99;
let _01;

// Nombrar variables con más de una palabra
let nombreProducto = "Monitor 30 pulgadas"; //CamelCase - habitual en funciones, arrays y variables
let nombre_producto = "Monitor 30 pulgadas"; //Underscore - habitual en variables
let NombreProducto = "Monitor 30 pulgadas"; //Pascal case - habitual en objetos y clases
let nombreproducto = "Monitor 30 pulgadas"; // habitual en variables
