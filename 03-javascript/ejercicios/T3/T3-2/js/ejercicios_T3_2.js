const inputExOne = document.getElementById("input_exercise_one");
const answerExOne = document.getElementById("answer_exercise_one");
const inputExTwo = document.getElementById("input_exercise_two");
const answerExFour = document.getElementById("answer_exercise_four");
const inputExFiveName = document.getElementById("input_exercise_five_name");
const inputExFiveSurname = document.getElementById(
  "input_exercise_five_surname"
);
const inputExFiveAge = document.getElementById("input_exercise_five_age");
const inputExFiveDNI = document.getElementById("input_exercise_five_dni");
const answerExFive = document.getElementById("answer_exercise_five");
const arrayExFive = [];
const answerExSix = document.getElementById("answer_exercise_six");
const inputExSevenStarter = document.getElementById(
  "input_exercise_seven_starter"
);
const inputExSevenMain = document.getElementById("input_exercise_seven_main");
const inputExSevenDessert = document.getElementById(
  "input_exercise_seven_dessert"
);
const inputExSevenDay = document.getElementById("input_exercise_seven_day");
const answerExSeven = document.getElementById("answer_exercise_seven");
const inputExEightRows = document.getElementById("input_exercise_eight_rows");
const inputExEightColumns = document.getElementById(
  "input_exercise_eight_columns"
);
const answerExEight = document.getElementById("answer_exercise_eight");

function exerciseOne() {
  const MONTHS = [
    "Gener",
    "Febrer",
    "Març",
    "Abril",
    "Maig",
    "Juny",
    "Juliol",
    "Agost",
    "Setembre",
    "Octubre",
    "Novembre",
    "Decembre",
  ];
  let inputMonth = inputExOne.value.trim().toLowerCase();
  let searchMonth = inputMonth.replace(
    inputMonth.charAt(0),
    inputMonth.charAt(0).toUpperCase()
  );

  let indexMonth = MONTHS.indexOf(searchMonth);
  if (!searchMonth || indexMonth === -1)
    return (answerExOne.innerHTML = "No has introduït un mes correctament");
  let result = MONTHS.toSpliced(indexMonth + 1);

  let normal = result.join(", ");
  let alphabetical = [...result].sort().join(", ");
  let dash = result.join(" - ");
  let reverse = [...result].reverse().join(", ");
  let anything = result.join(" / ");

  let answer = `<br>1 - ${normal}
    <br>2 - ${alphabetical}
    <br>3 - ${dash}
    <br>4 - ${reverse}
    <br>5 - ${anything}`;

  answerExOne.innerHTML = answer;
}

function exerciseTwo() {
  let text = inputExTwo.value.trim().replaceAll(",", "");
  let textArray = text.split(" ");

  let firstWord = textArray[0];
  let lastWord = textArray.at(-1);
  let totalWords = textArray.length;
  let sortedText = textArray.sort().join(" - ");

  let result = `<br>1 - ${firstWord}
    <br>2 - ${lastWord}
    <br>3 - ${totalWords}
    <br>4 - ${sortedText}`;

  let newWindow = window.open(
    "./finestra.html",
    "",
    "width=800,height=800,left=475,top=150"
  );

  setTimeout(() => {
    newWindow.document.getElementById("answer_exercise_two").innerHTML = result;
  }, 100);
}

function exerciseFour() {
  let person = {
    name: "Pepito",
    surname: "Grillo",
    age: "37",
    dni: "45182697W",
  };
  let people = [];
  people.push(person);

  let nom = people[0].name;
  let cognom = people[0].surname;
  let edat = people[0].age;
  let dni = people[0].dni;

  let result = `<br>Nom: ${nom}<br>Cognom: ${cognom}<br>Edat: ${edat}<br>DNI: ${dni}`;

  answerExFour.innerHTML = result;
}

function exerciseFiveAdd() {
  let name = inputExFiveName.value;
  let surname = inputExFiveSurname.value;
  let age = parseInt(inputExFiveAge.value);
  let id = inputExFiveDNI.value;
  let result = "";

  const validId = idValidation(id);

  if (!name || !surname || !age || isNaN(age) || !id) {
    result = `Algún o alguns camps no estàn omplerts correctament.`;
  } else if (age > 116 || age < 0) {
    result = `L'edat introduïda no és correcta`;
  } else if (validId) {
    result = `Ja existeix un usuari amb el dni ${id}`;
  } else {
    let person = { name: name, surname: surname, age: age, dni: id };
    arrayExFive.push(person);
    console.log(arrayExFive);

    let nom = arrayExFive.at(-1).name;
    let cognom = arrayExFive.at(-1).surname;
    let edat = arrayExFive.at(-1).age;
    let dni = arrayExFive.at(-1).dni;

    result = `<br>Nom: ${nom}<br>Cognom: ${cognom}<br>Edat: ${edat}<br>DNI: ${dni}`;
  }

  answerExFive.innerHTML = result;
}

function exerciseFiveShow() {
  let result = "";

  for (let i = 0; i < arrayExFive.length; i++) {
    result += `<br>Nom: ${arrayExFive[i].name}<br>Cognom: ${arrayExFive[i].surname}<br>Edat: ${arrayExFive[i].age}<br>DNI: ${arrayExFive[i].dni}<br>`;
  }

  answerExFive.innerHTML = result;
}

function exerciseFiveDeleteLast() {
  let nom = arrayExFive.at(-1).name;
  let cognom = arrayExFive.at(-1).surname;
  let edat = arrayExFive.at(-1).age;
  let dni = arrayExFive.at(-1).dni;

  let deleteAlert = confirm(
    `Estàs segur que vols eliminar a:\nNom: ${nom}\nCognom: ${cognom}\nEdat: ${edat}\nDNI: ${dni}`
  );

  if (deleteAlert) {
    let result = `<br>Has esborrat: <br>Nom: ${nom}<br>Cognom: ${cognom}<br>Edat: ${edat}<br>DNI: ${dni}`;
    answerExFive.innerHTML = result;

    arrayExFive.pop();
  }
}

function exerciseFiveDeleteAll() {
  let deleteAlert = confirm("Estàs segur que vols eliminar tota la llista?");

  if (deleteAlert) {
    arrayExFive.splice(0);
    answerExFive.innerHTML = `Has esborrat tota la llista`;
  }
}

function idValidation(id) {
  const searchDNI = arrayExFive.some((array) => array.dni === id);
  return searchDNI;
}

function exerciseSix() {
  const menu = {
    dilluns: ["Amanida del temps", "Pollastre rostit", "Crema catalana"],
    dimarts: ["Croquetes", "Butifarra amb mongetes", "Flam"],
    dimecres: ["Pernil Ibèric", "Bacallà a la llauna amb mongetes", "Gelat"],
    dijous: [
      "Faves a la catalana",
      "Estofat de mandonguilles",
      "Suc de taronja",
    ],
    divendres: ["Cargols a la llauna", "Llenties amb costella", "Maduixots"],
  };

  let result = `<table class="table table-striped">
    <tr>
      <th></th>
      <th>Primer plat</th>
      <th>Segon plat</th>
      <th>Postre</th>
    </tr>
    <tr>
      <th>Dilluns</th>
      <td>${menu.dilluns[0]}</td>
      <td>${menu.dilluns[1]}</td>
      <td>${menu.dilluns[2]}</td>
    </tr>
    <tr>
      <th>Dimarts</th>
      <td>${menu.dimarts[0]}</td>
      <td>${menu.dimarts[1]}</td>
      <td>${menu.dimarts[2]}</td>
    </tr>
    <tr>
      <th>Dimecres</th>
      <td>${menu.dimecres[0]}</td>
      <td>${menu.dimecres[1]}</td>
      <td>${menu.dimecres[2]}</td>
    </tr>
    <tr>
      <th>Dijous</th>
      <td>${menu.dijous[0]}</td>
      <td>${menu.dijous[1]}</td>
      <td>${menu.dijous[2]}</td>
    </tr>
    <tr>
      <th>Divendres</th>
      <td>${menu.divendres[0]}</td>
      <td>${menu.divendres[1]}</td>
      <td>${menu.divendres[2]}</td>
    </tr>
  </table>`;

  answerExSix.innerHTML = result;
}

const menu = {
  dilluns: { primer: "", segon: "", postre: "" },
  dimarts: { primer: "", segon: "", postre: "" },
  dimecres: { primer: "", segon: "", postre: "" },
  dijous: { primer: "", segon: "", postre: "" },
  divendres: { primer: "", segon: "", postre: "" },
};

let monday = "";
let tuesday = "";
let wednesday = "";
let thursday = "";
let friday = "";
let result = "";

function exerciseSeven() {
  let option = inputExSevenDay.value;
  let deleteButtonMonday = `<button class="btn btn-warning" onclick="deleteMondayExSeven()">Esborra</button>`;
  let deleteButtonTuesday = `<button class="btn btn-warning" onclick="deleteTuesdayExSeven()">Esborra</button>`;
  let deleteButtonWednesday = `<button class="btn btn-warning" onclick="deleteWednesdayExSeven()">Esborra</button>`;
  let deleteButtonThursday = `<button class="btn btn-warning" onclick="deleteThursdayExSeven()">Esborra</button>`;
  let deleteButtonFriday = `<button class="btn btn-warning" onclick="deleteFridayExSeven()">Esborra</button>`;

  if (
    !inputExSevenStarter.value ||
    !inputExSevenMain.value ||
    !inputExSevenDessert.value
  )
    return alert("No has omplert tots els camps");

  switch (option) {
    case "dilluns":
      menu.dilluns.primer = inputExSevenStarter.value;
      menu.dilluns.segon = inputExSevenMain.value;
      menu.dilluns.postre = inputExSevenDessert.value;
      break;
    case "dimarts":
      menu.dimarts.primer = inputExSevenStarter.value;
      menu.dimarts.segon = inputExSevenMain.value;
      menu.dimarts.postre = inputExSevenDessert.value;
      break;
    case "dimecres":
      menu.dimecres.primer = inputExSevenStarter.value;
      menu.dimecres.segon = inputExSevenMain.value;
      menu.dimecres.postre = inputExSevenDessert.value;
      break;
    case "dijous":
      menu.dijous.primer = inputExSevenStarter.value;
      menu.dijous.segon = inputExSevenMain.value;
      menu.dijous.postre = inputExSevenDessert.value;
      break;
    case "divendres":
      menu.divendres.primer = inputExSevenStarter.value;
      menu.divendres.segon = inputExSevenMain.value;
      menu.divendres.postre = inputExSevenDessert.value;
      break;
  }

  if (menu.dilluns.primer) {
    monday = `<th>Dilluns</th>
      <td>${menu.dilluns.primer}</td>
      <td>${menu.dilluns.segon}</td>
      <td>${menu.dilluns.postre}</td>
      <td>${deleteButtonMonday}</td>`;
  }

  if (menu.dimarts.primer) {
    tuesday = `<th>Dimarts</th>
      <td>${menu.dimarts.primer}</td>
      <td>${menu.dimarts.segon}</td>
      <td>${menu.dimarts.postre}</td>
      <td>${deleteButtonTuesday}</td>`;
  }

  if (menu.dimecres.primer) {
    wednesday = `<th>Dimecres</th>
      <td>${menu.dimecres.primer}</td>
      <td>${menu.dimecres.segon}</td>
      <td>${menu.dimecres.postre}</td>
      <td>${deleteButtonWednesday}</td>`;
  }

  if (menu.dijous.primer) {
    thursday = `<th>Dijous</th>
      <td>${menu.dijous.primer}</td>
      <td>${menu.dijous.segon}</td>
      <td>${menu.dijous.postre}</td>
      <td>${deleteButtonThursday}</td>`;
  }

  if (menu.divendres.primer) {
    friday = `<th>Divendres</th>
      <td>${menu.divendres.primer}</td>
      <td>${menu.divendres.segon}</td>
      <td>${menu.divendres.postre}</td>
      <td>${deleteButtonFriday}</td>`;
  }
  answerExSeven.innerHTML = resultTableExSeven();
  inputExSevenStarter.value = "";
  inputExSevenMain.value = "";
  inputExSevenDessert.value = "";
}

function deleteMondayExSeven() {
  monday = "";
  menu.dilluns.primer = "";
  menu.dilluns.segon = "";
  menu.dilluns.postre = "";

  answerExSeven.innerHTML = resultTableExSeven();
}
function deleteTuesdayExSeven() {
  tuesday = "";
  menu.dimarts.primer = "";
  menu.dimarts.segon = "";
  menu.dimarts.postre = "";

  answerExSeven.innerHTML = resultTableExSeven();
}
function deleteWednesdayExSeven() {
  wednesday = "";
  menu.dimecres.primer = "";
  menu.dimecres.segon = "";
  menu.dimecres.postre = "";

  answerExSeven.innerHTML = resultTableExSeven();
}
function deleteThursdayExSeven() {
  thursday = "";
  menu.dijous.primer = "";
  menu.dijous.segon = "";
  menu.dijous.postre = "";

  answerExSeven.innerHTML = resultTableExSeven();
}
function deleteFridayExSeven() {
  friday = "";
  menu.divendres.primer = "";
  menu.divendres.segon = "";
  menu.divendres.postre = "";

  answerExSeven.innerHTML = resultTableExSeven();
}

function resultTableExSeven() {
  result = `<table class="table table-striped">
    <tr>
      <th></th>
      <th>Primer plat</th>
      <th>Segon plat</th>
      <th>Postre</th>
      <th>Accions</th>  
    </tr>
    <tr>
      ${monday}
    </tr>
    <tr>
      ${tuesday}
    </tr>
    <tr>
      ${wednesday}
    </tr>
    <tr>
      ${thursday}
    </tr>
    <tr>
      ${friday}
    </tr>
  </table>`;

  return result;
}

function exerciseEight() {
  let rows = parseInt(inputExEightRows.value);
  let columns = parseInt(inputExEightColumns.value);
  answerExEight.innerHTML = "";
  
  if (rows < 1 || columns < 1 || isNaN(rows) || isNaN(columns)) return answerExEight.innerHTML = "No has omplert correctament un o ambdós camps.";
  if (columns > 6) columns = 6;

  const table = document.createElement("table");
  table.classList.add("table-bordered");

  for (let i = 0; i < rows; i++) {
    const tableRow = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const tableColumn = document.createElement("td");
      const tableText = document.createElement("textarea");

      tableColumn.appendChild(tableText);
      tableText.classList.add("text-center");
      tableRow.appendChild(tableColumn);
    }
    table.appendChild(tableRow);
  }
  answerExEight.appendChild(table);
}

function closeWindow() {
  window.close();
}

function clean() {
  let limpia = document.querySelectorAll("input");
  for (let i = 0; i < limpia.length; i++) {
    limpia[i].value = "";
  }

  location.reload();
}
