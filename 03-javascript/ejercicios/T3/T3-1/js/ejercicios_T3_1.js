const inputExOne = document.getElementById("input_exercise_one");
const answerExOne = document.getElementById("answer_exercise_one");
const inputExTwo = document.getElementById("input_exercise_two");
const answerExTwo = document.getElementById("answer_exercise_two");
const inputExThreePrice = document.getElementById("input_exercise_three_price");
const inputExThreeVAT = document.getElementById("input_exercise_three_vat");
const answerExThree = document.getElementById("answer_exercise_three");
const inputExFourFirst = document.getElementById("input_exercise_four_first");
const inputExFourSecond = document.getElementById("input_exercise_four_second");
const selectExFour = document.getElementById("select_exercise_four");
const answerExFour = document.getElementById("answer_exercise_four");
const inputExFive = document.getElementById("input_exercise_five");
const answerExfive = document.getElementById("answer_exercise_five");
const answerExSix = document.getElementById("answer_exercise_six");
const selectExSeven = document.getElementById("select_exercise_seven");
const inputExNine = document.getElementById("input_exercise_nine");
const answerExNine = document.getElementById("answer_exercise_nine");
let tagCountExFive = 0;

function exerciseOne() {
  let input = parseFloat(inputExOne.value);
  let result = "";

  if (isNaN(input) || input === null || input === undefined) {
    result = `No has introduït un nombre`;
  } else if (input % 2 == 0) {
    result = `El número ${input} és par`;
  } else {
    input = String(input).replace(".", ",");
    result = `El número ${input} és imparell`;
  }
  answerExOne.innerHTML = result;
}

function exerciseTwo() {
  let input = parseFloat(inputExTwo.value);
  let solution = 144 / 12;

  if (!input || isNaN(input)) {
    result = `No has introduït un nombre correctament`;
  } else if (input === solution) {
    result = `Molt bé, 144 entre 12 és ${input}`;
  } else {
    input = String(input).replace(".", ",");
    result = `Mal, 144 entre 12 NO és ${input}`;
  }
  answerExTwo.innerHTML = result;
}

function exerciseThree() {
  let price = parseFloat(inputExThreePrice.value);
  let vat = parseFloat(inputExThreeVAT.value);
  let result = price + (vat * price) / 100;

  answerExThree.innerHTML = `El preu final és de ${result}€.`;
}

function exerciseFour() {
  let firstNumber = parseFloat(inputExFourFirst.value);
  let secondNumber = parseFloat(inputExFourSecond.value);
  let operator = selectExFour.value;
  let result = "";

  switch (operator) {
    case "plus":
      result = `El resultat de sumar ${firstNumber} i ${secondNumber} és ${
        firstNumber + secondNumber
      }`;
      break;
    case "minus":
      result = `El resultat de restar ${firstNumber} i ${secondNumber} és ${
        firstNumber - secondNumber
      }`;
      break;
    case "times":
      result = `El resultat de multiplicar ${firstNumber} i ${secondNumber} és ${
        firstNumber * secondNumber
      }`;
      break;
    case "division":
      result = `El resultat de dividir ${firstNumber} i ${secondNumber} és ${
        firstNumber / secondNumber
      }`;
      break;
    case "module":
      result = `El mòdul resultant entre ${firstNumber} i ${secondNumber} és ${
        firstNumber % secondNumber
      }`;
      break;
    default:
      result = `Operació sel·lecionada invàlida`;
  }

  if (isNaN(firstNumber) || isNaN(secondNumber))
    result = `Algun o ambdós nombres introduïts son invàlids.`;

  answerExFour.innerHTML = result;
}

function exerciseFive() {
  let input = parseInt(inputExFive.value);
  let result = "";
  for (let i = 1; i <= input; i++) {
    tagCountExFive++;
    if (i === 1) {
      result += `codi_etiqueta_${tagCountExFive}`;
    } else {
      result += `, codi_etiqueta_${tagCountExFive}`;
    }
  }

  answerExfive.innerHTML = result;
}

function exerciseSix() {
  let heightScreen = screen.height;
  let widthScreen = screen.width;
  let heightWindow = window.innerHeight;
  let widthWindow = window.innerWidth;
  let colorDepth = screen.colorDepth;
  let diagonal = Math.round(
    Math.sqrt(Math.pow(heightScreen, 2) + Math.pow(widthScreen, 2))
  );

  let result = `<div>Amplada pantalla = ${heightScreen}px<br>Alçada pantalla = ${widthScreen}px<br>Amplada útil = ${widthWindow}px<br>Alçada útil = ${heightWindow}px<br>Profunditat de color = ${colorDepth} bits<br>Diagonal pantalla = ${diagonal}px</div>`;

  answerExSix.innerHTML = result;
}

function exerciseSeven() {
  let option = selectExSeven.value;

  switch (option) {
    case "red":
      document.body.style.backgroundColor = "red";
      break;
    case "blue":
      document.body.style.backgroundColor = "blue";
      break;
    case "yellow":
      document.body.style.backgroundColor = "yellow";
      break;
    case "green":
      document.body.style.backgroundColor = "green";
      break;
    default:
      document.body.style.backgroundColor = "white";
  }
}

function exerciseEight() {
  window.open("./finestra.html", "", "width = 800,height=800");
}

function exerciseNine() {
  let text = inputExNine.value;
  let result = "";

  result = `<br>Hi ha un total de ${
    text.length
  } caràcters, incloent espais, i ${
    text.replaceAll(" ", "").length
  } sense espais.<br>
  En cursiva: <em>${text}</em><br>
  En negreta: <b>${text}</b><br>
  En vermell: <span style="color:red">${text}</span><br>
  Amb una gràndaria major: <span style="font-size:2rem">${text}</span><br>
  titllat: <q>${text}</q>`;

  answerExNine.innerHTML = result;
}

function exerciseTenA() {
  let lightOn = document.getElementById("light_on");
  let lightOff = document.getElementById("light_off");

  if (lightOff.hidden == false) {
    lightOff.hidden = true;
    lightOn.hidden = false;
  } else {
    lightOff.hidden = false;
    lightOn.hidden = true;
  }
}

function exerciseTenB() {
  let lightOff = document.getElementById("light_off");

  if (lightOff.src.match("encendida")) {
    lightOff.src = "./img/apagada.gif";
  } else {
    lightOff.src = "./img/encendida.gif";
  }
}

function exerciseTenC() {
  let bulb = document.getElementById("answer_exercise_ten");
  let exercise = document.querySelectorAll("img");

  if (exercise[0].matches("#light_off")) {
    bulb.innerHTML = `<img
            id="light_on"
            src="./img/encendida.gif"
            alt="bombeta encesa"
            title="bombeta encesa"
          />`;
  } else {
    bulb.innerHTML = `<img
            id="light_off"
            src="./img/apagada.gif"
            alt="bombeta apagada"
            title="bombeta apagada"
          />`;
  }
}

function closeWindow() {
  window.close();
}

function clean() {
  let limpia = document.querySelectorAll("input");
  for (let i = 0; i < 8; i++) {
    limpia[i].value = "";
  }

  location.reload();
}
