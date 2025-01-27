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

function exerciseSeven() {
  const menu = {
    dilluns: { primer: "", segon: "", postre: "" },
    dimarts: { primer: "", segon: "", postre: "" },
    dimecres: { primer: "", segon: "", postre: "" },
    dijous: { primer: "", segon: "", postre: "" },
    divendres: { primer: "", segon: "", postre: "" },
  };

  let option = inputExSevenDay.value;

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

  let result = `<table class="table table-striped">
    <tr>
      <th></th>
      <th>Primer plat</th>
      <th>Segon plat</th>
      <th>Postre</th>
    </tr>
    <tr>
      <th>Dilluns</th>
      <td>${menu.dilluns.primer}</td>
      <td>${menu.dilluns.segon}</td>
      <td>${menu.dilluns.postre}</td>
    </tr>
    <tr>
      <th>Dimarts</th>
      <td>${menu.dimarts.primer}</td>
      <td>${menu.dimarts.segon}</td>
      <td>${menu.dimarts.postre}</td>
    </tr>
    <tr>
      <th>Dimecres</th>
      <td>${menu.dimecres.primer}</td>
      <td>${menu.dimecres.segon}</td>
      <td>${menu.dimecres.postre}</td>
    </tr>
    <tr>
      <th>Dijous</th>
      <td>${menu.dijous.primer}</td>
      <td>${menu.dijous.segon}</td>
      <td>${menu.dijous.postre}</td>
    </tr>
    <tr>
      <th>Divendres</th>
      <td>${menu.divendres.primer}</td>
      <td>${menu.divendres.segon}</td>
      <td>${menu.divendres.postre}</td>
    </tr>
  </table>`;

  answerExSeven.innerHTML = result;
}

function closeWindow() {
  window.close();
}

function clean() {
  let limpia = document.querySelectorAll("input");
  for (let i = 0; i < 6; i++) {
    limpia[i].value = "";
  }

  location.reload();
}
