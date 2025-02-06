//---------------------

const mostra = document.getElementById("mostra");
const construye = document.getElementById("construir");
const elimino = document.getElementById("eliminar");

const ctabla = () => {
  const col = document.getElementById("columnas").value;
  const row = document.getElementById("filas").value;
  let tabla = `<table><tr><th></th>`;
  for (let i = 0; i < col; i++) {
    tabla += `<th>${i + 1} </th>`;
  }
  tabla += `</tr>`;
  let x = 0;
  while (x < row) {
    tabla += `<tr>`;
    tabla += `<th> ${x + 1} </th>`;
    for (z = 0; z < col; z++) {
      tabla += `<td contenteditable> Texto de la celda ${x + 1} -${
        z + 1
      }  </td>`;
    }
    tabla += `</tr>`;
    x++;
  }

  tabla += `</table>`;

  mostra.innerHTML = tabla;
};

const borrar = () => {
  mostra.innerHTML = "";
  col.value = "";
  row.value = "";
};
construye.addEventListener("click", ctabla);
elimino.addEventListener("click", ctabla);
