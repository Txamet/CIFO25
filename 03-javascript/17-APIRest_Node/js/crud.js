const d = document;
const cargaUsers = d.querySelector("#usuarios");
const mostra = d.querySelector("#contenido");
const fragmento = d.createDocumentFragment();
const formTemplate = d.querySelector("#form-template").content;
const template = d.querySelector("#crud-template").content;
//const tabla = d.querySelector(".crud-table tbody");
//const tabla = formTemplate.querySelector(".crud-table tbody");

const muestraEmpleados = (data) => {
  mostra.innerHTML = "";

  let cloneCabecera = d.importNode(formTemplate, true);
  cloneCabecera.querySelector(".crud-table tbody")
  fragmento.appendChild(cloneCabecera)
  mostra.appendChild(fragmento);

  const tabla = d.querySelector(".crud-table tbody");
  console.log(tabla)
  data.forEach((empleado) => {
    let clone = d.importNode(template, true);

    clone.querySelector(".id").textContent = empleado.id;
    clone.querySelector(".name").textContent = empleado.nombre;
    clone.querySelector(".empresa").textContent = empleado.empresa;
    clone.querySelector(".puesto").textContent = empleado.puesto;
    clone.querySelector(".edit");
    clone.querySelector(".delete");

    fragmento.appendChild(clone);
  });

  tabla.appendChild(fragmento);


  /*   tabla.innerHTML = "";
  data.forEach((empleado) => {
    let clone = d.importNode(template, true);

    clone.querySelector(".id").textContent = empleado.id;
    clone.querySelector(".name").textContent = empleado.nombre;
    clone.querySelector(".empresa").textContent = empleado.empresa;
    clone.querySelector(".puesto").textContent = empleado.puesto;
    clone.querySelector(".edit");
    clone.querySelector(".delete");

    fragmento.appendChild(clone);
  });

  tabla.appendChild(fragmento);
  mostra.appendChild(formTemplate); */
};

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
