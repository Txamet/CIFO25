import { mostra } from "./text.js";

export const cargarRandomUsersBtn = document.querySelector("#btn5");

const mostrarHTML5 = (datos) => {
  mostra.innerHTML = "";
  let html = "<h1>Usuarios RandomUser</h1>";

  datos.results.forEach((dato) => {
    const { picture, name, location, cell } = dato;

    html += `
    <hr>
    <img src="${picture.large}"/><br/>
    <h3>${name.title} ${name.first} ${name.last}</h3>
    <p>Huso horario: ${location.timezone.description}<br>
    Teléfono: ${cell}<br>
    Ciudad: ${location.city}<br>
    País: ${location.country}</p>
    `;
  });

  mostra.innerHTML = html;
};

export const obtenerDatos = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((response) => {
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json();
    })
    .then((data) => {
      mostrarHTML5(data);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = `<p>Error al cargar los datos del usuario</p>`;
    });
};

// picture.medium, name (name.title, name.first, name.last), location.timezone.description, cell, location.city
