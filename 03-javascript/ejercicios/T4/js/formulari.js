const inputNombre = document.querySelector("#user");
const inputTelf = document.querySelector("#phone");
const inputDia = document.querySelector("#birth_day");
const inputMes = document.querySelector("#birth_month");
const inputAno = document.querySelector("#birth_year");
const inputEmail = document.querySelector("#email");
const inputDNI = document.querySelector("#dni");
const inputAll = document.querySelectorAll("input");
const inputConditions = document.querySelector("#conditions");

const formu = document.form;
const dniPattern = /^[XYZ]?\d{5,8}[A-Z]{1}$/;

formu.addEventListener("submit", (e) => {
  if (!inputConditions.checked) {
    answer.innerHTML = "Has de aceptar las condiciones para poder registrarte";
    answer.style.color = "#FF0000";
  }

  const verifyDni = dniValidation();
  const verifyAge = ageValidation();

  if (!verifyAge || !verifyDni) {
    e.preventDefault();
    answer.innerHTML =
      "Error: Uno o más campos no han sido rellenados correctamente. Por favor, revísalos ";
    answer.style.color = "#FF0000";

    return false;
  } else {
    formu.submit();
    return true;
  }
});

function userValidation() {
  let name = inputNombre.value;
  let firstLetter = name.charAt(0);
  let numberPattern = /[0-9]/;
  let checkFirstLetter = numberPattern.test(firstLetter);

  if (name.length < 3 || name.length > 20) {
    answer.innerHTML = `Error: El nombre de usuario ${name} no cumple con el siguiente requisito: El nombre de usuario ha de tener entre 3 y 20 caracteres`;
    answer.style.color = "#FF0000";

    return false;
  } else if (checkFirstLetter) {
    answer.innerHTML = `Error: El nombre de usuario ${name} no cumple con el siguiente requisito: El nombre de usuario no puede empezar por un número`;
    answer.style.color = "#FF0000";

    return false;
  } else {
    answer.innerHTML = "";
    return true;
  }
}

function phoneValidation() {
  let phone = inputTelf.value;
  let phonePattern = /\d/;
  let checkPhone = phonePattern.test(phone);

  if (!checkPhone || phone.length != 9) {
    answer.innerHTML = `Error: El teléfono ${phone} no cumple con el siguiente requisito: El número de teléfono ha de tener 9 dígitos`;
    answer.style.color = "#FF0000";
    return false;
  } else {
    answer.innerHTML = "";
    return true;
  }
}

function dayValidation() {
  let day = inputDia.value;
  let dayPattern = /^\d{1,2}$/;
  let checkDay = dayPattern.test(day);

  if (!checkDay || day < 1 || day > 31) {
    answer.innerHTML = `Error: el día ${day} no cumple con el siguiente requisito: El día ha de estar comprendido entre 1 y 31.`;
    answer.style.color = "#FF0000";
    return false;
  } else {
    answer.innerHTML = "";
    return true;
  }
}

function monthValidation() {
  let month = inputMes.value;
  let monthPattern = /^\d{1,2}$/;
  let checkMonth = monthPattern.test(month);
  console.log(checkMonth);
  if (!checkMonth || month < 1 || month > 12) {
    answer.innerHTML = `Error: el mes ${month} no cumple con el siguiente requisito: El mes ha de estar comprendido entre 1 y 12.`;
    answer.style.color = "#FF0000";
    return false;
  } else {
    answer.innerHTML = "";
    return true;
  }
}

function yearValidation() {
  let year = inputAno.value;
  let yearPattern = /^\d{4}$/;
  let checkYear = yearPattern.test(year);
  let actualDate = new Date();
  let actualYear = actualDate.getFullYear();
  console.log(checkYear);
  if (!checkYear || year < 1000 || year > actualYear) {
    answer.innerHTML = `Error: el año ${year} no cumple con el siguiente requisito: El año ha de tener 4 dígitos.`;
    answer.style.color = "#FF0000";
    return false;
  } else {
    answer.innerHTML = "";
    return true;
  }
}

function dniValidation() {
  let dni = inputDNI.value;
  dni = dni.toUpperCase();
  let number, letter;
  let result = dni.match(dniPattern);
  console.log(result);
  let dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (result) {
    number = dni.substr(0, dni.length - 1);
    number = number.replace("X", 0);
    number = number.replace("Y", 1);
    number = number.replace("Z", 2);
    letter = dni.substr(dni.length - 1, 1);
    number = number % 23;
    dniLetters = dniLetters.substring(number, number + 1);

    if (dniLetters !== letter) return false;
    return true;
  } else {
    answer.innerHTML = "";
    return false;
  }
}

function ageValidation() {
  let day = inputDia.value;
  let month = inputMes.value;
  let year = inputAno.value;
  let birthDate = new Date(year, month, day);
  let actualDate = new Date();
  let actualYear = actualDate.getFullYear();

  let myAge = Math.floor(
    (actualDate - birthDate) / (1000 * 60 * 60 * 24) / 365
  );
  console.log(day, month, year, actualDate, actualYear, myAge);
  if (day > 28 && month == 2) {
    answer.innerHTML = `Error: la fecha ${
      day - month - year
    } no cumple con el siguiente requisito: El mes de febrero no puede tener más de 28 días.`;
    answer.style.color = "#FF0000";

    return false;
  } else if (
    day == 31 &&
    (month == 4 || month == 6 || month == 9 || month == 11)
  ) {
    answer.innerHTML = `Error: la fecha ${
      day - month - year
    } no cumple con el siguiente requisito: El mes ${month} no tiene más de 30 días.`;
    answer.style.color = "#FF0000";

    return false;
  } else if (myAge < 0) {
    answer.innerHTML = `Error: la fecha ${
      day - month - year
    } no cumple con el siguiente requisito: Esta fecha aún no ha ocurrido.`;
    answer.style.color = "#FF0000";

    return false;
  } else if (actualYear - year > 120) {
    answer.innerHTML = `Error: la fecha ${
      day - month - year
    } no cumple con el siguiente requisito: Esta fecha es demasiado antigua, no creo que tengas más de 120 años.`;
    answer.style.color = "#FF0000";

    return false;
  } else if (myAge >= 18 && myAge < 120) {
    answer.innerHTML = `Eres mayor de edad`;
    return true;
  }
}

function saveData() {
  setCookie("user", inputNombre.value, 1 / 24);
  setCookie("phone", inputTelf.value, 1 / 24);
  setCookie("birth_day", inputDia.value, 1 / 24);
  setCookie("birth_month", inputMes.value, 1 / 24);
  setCookie("birth_year", inputAno.value, 1 / 24);
  setCookie("email", inputEmail.value, 1 / 24);
  setCookie("dni", inputDNI.value, 1 / 24);
  console.log(ageValidation());
}

function loadData() {
  inputNombre.value = getCookie("user");
  inputTelf.value = getCookie("phone");
  inputDia.value = getCookie("birth_day");
  inputMes.value = getCookie("birth_month");
  inputAno.value = getCookie("birth_year");
  inputEmail.value = getCookie("email");
  inputDNI.value = getCookie("dni");
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

function clean() {
  for (const cleaner of inputAll) cleaner.value = "";
}
