import { mostra } from "./text.js";

export const cargarPicsumBtn = document.querySelector("#btn4");

const mostrarHTML4 = (datos) => {
  mostra.innerHTML = "";
  let html = "<h1>Usuarios picsum</h1>";

  datos.forEach((dato) => {
    const { author, download_url } = dato; // descomponemos y sólo elegimos author y download_url

    html += `<hr>
    <p>Autor: ${author}</p>
    <img src="${download_url}" width="200" /><br/>
    <a href="${download_url}" target="new" > Descargar imagen </a>`;
  });

  mostra.innerHTML = html;
};

export const obtenerDatos = () => {
  fetch("https://picsum.photos/v2/list?page=2&limit=100")
    /* fetch("./server/dbpictures.json") */
    .then((response) => {
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      mostrarHTML4(data);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = `<p>Error al cargar los datos de la imagen</p>`;
    });
};
