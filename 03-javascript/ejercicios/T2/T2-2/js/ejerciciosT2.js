function ejercicioOcho() {
  document.title = "Title cambiado";
  document.body.style.backgroundColor = "grey";
  document.body.style.color = "white";
}

function ejercicioNueve() {
  let ancho = screen.width;
  let alto = screen.height;
  let anchoUtil = window.innerWidth;
  let altoUtil = window.innerHeight;
  let diagonal = Math.round((ancho ** 2 + alto ** 2) ** (1 / 2));

  document.getElementById("exercici_nou").innerHTML = `<table>
    <tr class="border border-black">
      <td class="border border-black p-2">Amplada pantalla</td>
      <td class="border border-black p-2 text-end">${ancho}px</td>
    </tr>
    <tr>
      <td class="border border-black p-2">Altura pantalla</td>
      <td class="border border-black p-2 text-end">${alto}px</td>
    </tr>
    <tr>
      <td class="border border-black p-2">Amplada útil</td>
      <td class="border border-black p-2 text-end">${anchoUtil}px</td>
    </tr>
    <tr>
      <td class="border border-black p-2">Altura útil</td>
      <td class="border border-black p-2 text-end">${altoUtil}px</td>
    </tr>
    <tr>
      <td class="border border-black p-2">Diagonal pantalla</td>
      <td class="border border-black p-2 text-end">${diagonal}px</td>
    </tr>
  </table>`;
}

function ejercicioOnce() {
  window.open("./finestra.html", "", "width = 800,height=800,scrollbars=yes");
}

function ejercicioDoce() {
  let text = String(document.getElementById("input_exercici_dotze").value);
  let finalFive = "";
  let doc = document.getElementById("resposta_exercici_dotze");

  if (text.length > 10) {
    finalFive = text.substring(text.length - 5);
    doc.innerHTML = finalFive;
  } else {
    doc.innerHTML = "El text no té més de 10 caràcters";
  }
}

function ejercicioTrece() {
  let text = String(document.getElementById("input_exercici_tretze").value);
  let option = document.getElementById("opcions_exercici_tretze").value;
  let result = "";
  let x = text.replace(" ", "").length;

  switch (option) {
    case "nombre":
      result = `Hi ha un total de ${
        text.length
      } caràcters, incloent espais, i de ${
        text.replaceAll(" ", "").length
      } sense espais.`;
      break;
    case "cursiva":
      result = `<em>${text}</em>`;
      break;
    case "negreta":
      result = `<b>${text}</b>`;
      break;
    case "vermell":
      result = `<span style="color:red">${text}</span>`;
      break;
    case "augmentar":
      result = `<span style="font-size:2rem">${text}</span>`;
      break;
    case "titllar":
      result = `<q>${text}</q>`;
      break;
    default:
      result = `Opció invàlida.`;
  }

  document.getElementById("resposta_exercici_tretze").innerHTML = result;
}

function ejercicioCatorce() {
  document.getElementById("resposta_exercici_catorze").innerHTML = `<table>
    <tr>
      <td class="border border-black p-2">Text</td>
      <td class="border border-black p-2">Text</td>
    </tr>
    <tr>
      <td class="border border-black p-2">Text</td>
      <td class="border border-black p-2">Text</td>
    </tr>
  </table>`;
}

function ejercicioQuince() {
  let base = document.getElementById("input_exercici_quinze_base").value;
  let height = document.getElementById("input_exercici_quinze_height").value;
  let area = (base * height) / 2;

  document.getElementById(
    "resposta_exercici_quinze"
  ).innerHTML = `L'àrea del triangle és de ${area} unitats cuadrades.`;
}

function ejercicioDieciseis() {
  let encesa = document.getElementById("encesa");
  let apagada = document.getElementById("apagada");

  if (apagada.hidden == false) {
    apagada.hidden = true;
    encesa.hidden = false;
  } else {
    apagada.hidden = false;
    encesa.hidden = true;
  }
}

function ejercicioDiecisiete() {
  let dataActual = new Date();
  let dataMaya = new Date("2012-12-21");
  let result = dataActual.getTime() - dataMaya.getTime();

  let segons = result / 1000;
  let minuts = segons / 60;
  let hores = minuts / 60;
  let dies = hores / 24;
  let setmanes = dies / 7;
  let messos = dies / 30.4375;
  let anys = dies / 365.2425;

  document.getElementById(
    "resposta_exercici_diset"
  ).innerHTML = `Han passat ${result} mil·lisegons desde la fi del món Maya. Segons : ${segons.toFixed(
    2
  )}, minuts: ${minuts.toFixed(2)}, hores: ${hores.toFixed(
    2
  )}, dies: ${dies.toFixed(2)}, setmanes: ${setmanes.toFixed(
    2
  )}, messos: ${messos.toFixed(2)} i anys: ${anys.toFixed(2)}`;
}

function ejercicioDieciocho() {
  let dataActual = new Date();
  let dataEnMilisegons = dataActual.getTime();

  document.getElementById(
    "resposta_exercici_divuit"
  ).innerHTML = `Han passat ${dataEnMilisegons} mil·lisegons desde l'1 de Gener de 1970.`;
}

function closeWindow() {
  window.close();
}

function reload() {
  document.getElementById("input_exercici_dotze").value = "";
  document.getElementById("input_exercici_tretze").value = "";
  document.getElementById("input_exercici_quinze_base").value = "";
  document.getElementById("input_exercici_quinze_height").value = "";
  location.reload();
}
