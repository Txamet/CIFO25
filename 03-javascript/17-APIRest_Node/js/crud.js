const d = document;
const cargaUsers = d.querySelector("#usuarios");
const mostra = d.querySelector("#contenido");
const fragmento = d.createDocumentFragment();
const formTemplate = d.querySelector("#form-template").content;
const template = d.querySelector("#crud-template").content;

const muestraEmpleados = (data) => {
  mostra.innerHTML = "";

  const formClone = d.importNode(formTemplate, true);
  mostra.appendChild(formClone);

  const tabla = d.querySelector(".crud-table tbody");
  tabla.innerHTML = "";

  data.forEach((empleado) => {
    let clone = d.importNode(template, true);

    clone.querySelector(".id").textContent = empleado.id;
    clone.querySelector(".name").textContent = empleado.nombre;
    clone.querySelector(".empresa").textContent = empleado.empresa;
    clone.querySelector(".puesto").textContent = empleado.puesto;
    clone
      .querySelector(".edit")
      .addEventListener("click", () => editarEmpleado(empleado));
    clone
      .querySelector(".delete")
      .addEventListener("click", () => eliminarEmpleado(empleado.id));

    fragmento.appendChild(clone);
  });

  tabla.appendChild(fragmento);
};

const editarEmpleado = (empleado) => {
  const form = d.querySelector("#crud-form");
  form.id.value = empleado.id;
  form.nombre.value = empleado.nombre;
  form.empresa.value = empleado.empresa;
  form.puesto.value = empleado.puesto;
};

const eliminarEmpleado = (id) => {
  if (confirm("¿Estás seguro de eliminar este empleado?")) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error al eliminar el empleado");
        return response.json();
      })
      .then(() => {
        alert("Empleado eliminado correctamente");
        obtListaEmpleados();
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
};

/* --- Hecho por mi para el PUT ---
const actualizarEmpleado = (empleado) => {
  console.log(empleado);
  let id = empleado.id;
  fetch(`http://localhost:3000/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(empleado),
  });
}; */

/* 
// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
 */
const obtListaEmpleados = () => {
  fetch("http://localhost:3000/users")
    .then((response) => {
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      muestraEmpleados(data);
    })
    .catch((error) => {
      console.log("Error al cargar los empleados: ", error);
    });
};

cargaUsers.addEventListener("click", obtListaEmpleados);

/* --- PUT hecho por mi ---
 d.addEventListener("submit", (e) => {
  e.preventDefault();
  const empleado = {
    id: e.target.id.value,
    nombre: e.target.nombre.value,
    empresa: e.target.empresa.value,
    puesto: e.target.puesto.value,
  };

  actualizarEmpleado(empleado);
  e.target.reset();
  e.target.id.value = "";

  obtListaEmpleados();
}); */

d.addEventListener("submit", async (e) => {
  if (e.target.matches("#crud-form")) {
    e.preventDefault();
    let empleado = {
      nombre: e.target.nombre.value,
      empresa: e.target.empresa.value,
      puesto: e.target.puesto.value,
    };
    let url = "http://localhost:3000/users";
    let method = "POST";

    if (e.target.id.value) {
      url += `/${e.target.id.value}`;
      method = "PUT";
    } else {
      let lastId;
      await fetch("http://localhost:3000/users")
        .then((response) => {
          if (!response.ok) throw new Error("Error en la solicitud");
          return response.json();
        })
        .then((data) => {
          lastId = Number(data.at(-1).id) + 1;
        })
        .catch((error) => {
          console.log("Error al cargar los empleados: ", error);
        });

      empleado.id = String(lastId);
    }

    try {
      let res = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(empleado),
      });

      if (!res.ok) throw new Error("Error en la solicitud");
      alert(
        `Empleado ${e.target.id.value ? "editado" : "añadido"} correctamente`
      );

      obtListaEmpleados();
      e.target.reset();
      e.target.id.value = "";
    } catch (error) {
      console.log("Error: ", error);
    }
  }
});
