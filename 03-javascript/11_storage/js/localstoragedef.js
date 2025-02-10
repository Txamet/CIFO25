/* 

localStorage, sessionStorage
Los objetos de almacenaje web localStorage y sessionStorage permiten guardar pares de clave / valor en el navegador.

Ambos objetos de almacenaje proveen los mismos métodos y propiedades:

API:

setItem(clave, valor) - guarda pares clave/valor
getItem(clave) - coge el valor de una clave
removeItem(clave) - borra una clave con su valor
clear() - borra todo
key(indice) - coge la clave en una posición determinada
length - el número de items almacenados
Utiliza Object.keys para conseguir todas las claves

localStorage - sessionStorage
- Tanto la clave como el valor deben ser strings.
- El límite de almacenaje es de más de 5mb aprox, dependiendo del navegador.
- Los datos están vinculados al origen (dominio/puerto/protocolo).
- localStorage mantiene datos entre todas las pestañas y ventanas que tengan el mismo origen.
- sessionStorage es sólo accesible en una pestaña del navegador, incluyendo iframes del mismo origen.
- Sobrevive a reinicios del navegador.

localStorage: los datos no expiran.
sessionStorage: los datos se borran al cerrar la pestaña

*/

const boton = document.querySelector("#grabar");
const indice = document.querySelector("#clave");
const value = document.querySelector("#texto");
const cajadatos = document.querySelector("#cajadatos");

const eliminar = (clave) => {
  if (confirm("¿Está seguro?")) {
    localStorage.removeItem(clave);
    mostrar();
  }
};

const eliminarTodo = () => {
  if (confirm("¿Seguro?")) {
    localStorage.clear();
    mostrar();
    cajadatos.innerHTML = "";
  }
  console.log(localStorage.length);
};

const mostrar = () => {
  cajadatos.innerHTML = `<div><input type="button" onclick="eliminarTodo()" value="Eliminar Todo"></div>`;

  for (let f = 0; f < localStorage.length; f++) {
    let clave = localStorage.key(f);
    let valor = localStorage.getItem(clave);

    cajadatos.innerHTML += `<div> ${clave} - ${valor}  <input type="button" onclick="eliminar('${clave}')" value="Eliminar"></div>`;
  }
};

const iniciar = () => {
  boton.addEventListener("click", () => {
    let clave = indice.value;
    let valor = value.value;

    localStorage.setItem(clave, valor);

    indice.value = "";
    value.value = "";
    mostrar();
  });
};

addEventListener("load", iniciar);
