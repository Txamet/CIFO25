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
  let age = inputExFiveAge.value;
  let id = inputExFiveDNI.value;
  nameValidation(name);
  let person = { name: name, surname: surname, age: age, dni: id };
  arrayExFive.push(person);
  console.log(arrayExFive);

  let nom = arrayExFive.at(-1).name;
  let cognom = arrayExFive.at(-1).surname;
  let edat = arrayExFive.at(-1).age;
  let dni = arrayExFive.at(-1).dni;

  let result = `<br>Nom: ${nom}<br>Cognom: ${cognom}<br>Edat: ${edat}<br>DNI: ${dni}`;

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

  let result = `<br>Has esborrat: <br>Nom: ${nom}<br>Cognom: ${cognom}<br>Edat: ${edat}<br>DNI: ${dni}`;
  answerExFive.innerHTML = result;

  arrayExFive.pop();
}

function exerciseFiveDeleteAll() {
  arrayExFive.splice(0);
  answerExFive.innerHTML = `Has esborrat tota la llista`;
}

function nameValidation(name) {
  const searchName = arrayExFive.some((ficha) => ficha.name === name);

  //const existe = carrito.some((producto) => producto.nombre === "Móvil");

  console.log(searchName, name);
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
