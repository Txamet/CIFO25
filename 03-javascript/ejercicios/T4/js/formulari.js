const inputNombre = document.querySelector("#user");
const inputTelf = document.querySelector("#phone");
const inputDia = document.querySelector("#birth_day");
const inputMes = document.querySelector("#birth_month");
const inputAno = document.querySelector("#birth_year");
const inputEmail = document.querySelector("#email");
const inputDNI = document.querySelector("#dni");
const inputAll = document.querySelectorAll("input");
const inputConditions = document.querySelector("#conditions");
const answer = document.querySelector("#answer")
const formu = document.form;


formu.addEventListener("submit", (e) => {
  if (!inputConditions.checked) {
    e.preventDefault();
    answer.innerHTML = "Has de aceptar las condiciones para poder registrarte";
    answer.style.color = "#FF0000";
    return false;
  }

  const verifyUser = userValidation();
  const verifyPhone = phoneValidation();
  const verifyAge = ageValidation();
  const verifyEmail = emailValidation();
  const verifyDNI = dniValidation();

  if (!verifyUser || !verifyPhone || !verifyEmail || !verifyDNI) {  
    e.preventDefault();
    answer.innerHTML =
      "Error: Uno o más campos no han sido rellenados correctamente. Por favor, revísalos ";
    answer.style.color = "#FF0000";
    return false;

  } else if (verifyAge !== true) {
    e.preventDefault();
    answer.innerHTML = verifyAge;
    answer.style.color = "#FF0000";
    return false;

  } else {
    formu.submit();
    return true;
  }
});

function userValidation() {
  let name = inputNombre.value;
  name = name.trim();
  console.log(name)
  let firstLetter = name.charAt(0);
  let numberPattern = /\d/;
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
  
  if (!checkYear) {
    answer.innerHTML = `Error: el año ${year} no cumple con el siguiente requisito: El año ha de tener 4 dígitos.`;
    answer.style.color = "#FF0000";
    return false;

  } else {
    answer.innerHTML = "";
    return true;
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
  let result = "";
  
  if (day > 28 && month == 2) {
    answer.style.color = "#FF0000";
    result = `Error: la fecha ${day}/${month}/${year} no cumple con el siguiente requisito: El mes de febrero no puede tener más de 28 días.`;

    return result;

  } else if (
    day == 31 &&
    (month == 4 || month == 6 || month == 9 || month == 11)
  ) {
    answer.style.color = "#FF0000";
    result = `Error: la fecha ${day}/${month}/${year} no cumple con el siguiente requisito: El mes ${month} no tiene más de 30 días.`;

    return result;

  } else if (myAge < 0) {
    answer.style.color = "#FF0000";
    result = `Error: la fecha ${day}/${month}/${year} no cumple con el siguiente requisito: Esta fecha aún no ha ocurrido.`;

    return result;

  } else if (actualYear - year > 120) {
    answer.style.color = "#FF0000";
    result = `Error: la fecha ${day}/${month}/${year} no cumple con el siguiente requisito: Esta fecha es demasiado antigua, no creo que tengas más de 120 años.`;

    return result;

  } else if (myAge >= 18 && myAge < 120) {
    return true;
    
  } else {
    answer.style.color = "#FF0000";
    result = `La fecha ${day}/${month}/${year} no cumple con el siguiente requisito: Has de ser mayor de edad para poder enviar el formulario.`;
    return result;
  }
}

function emailValidation() {
  let email = inputEmail.value;
  let emailPattern = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
  let checkEmail = emailPattern.test(email);

  if (!checkEmail) {
    answer.innerHTML = `ERROR. El email ${email} no cumple con el siguiente requisito: El formato del email no es correcto.`
    answer.style.color = "#FF0000";
    return false;

  }else {
    answer.innerHTML = "";
    return true;
  }
}

function dniValidation() {
  const dniPattern = /^[XYZ]?\d{5,8}[A-Z]{1}$/;
  let dni = inputDNI.value;
  dni = dni.toUpperCase();
  let number, letter;
  let result = dni.match(dniPattern);
  let dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";


  if (result) {
    number = dni.substr(0, dni.length - 1);
    number = number.replace("X", 0);
    number = number.replace("Y", 1);
    number = number.replace("Z", 2);
    letter = dni.substr(dni.length - 1, 1);
    number = number % 23;
    dniLetters = dniLetters.substring(number, number + 1);

    if (dniLetters !== letter) {
      answer.innerHTML = `ERROR. El dni ${dni} no cumple con el siguiente requisito: La letra final no es correcta.`;
      answer.style.color = "#FF0000";
      return false;

    } else {
      answer.innerHTML = "";
      return true;
    }  
    
  } else {
    answer.innerHTML = `ERROR. El dni ${dni} no cumple con el siguiente requisito: El formato del dni no es correcto`;
    answer.style.color = "#FF0000";
    return false;
  }
}

const Validation = (event) => {
  let result;

  switch (event.target.name) {
    case "user":
      result = userValidation();
      if (result) {
        inputNombre.style.border = "solid 1px green";
      } else {
        inputNombre.style.border = "solid 1px red";
      }
      break;
    case "phone":
      result = phoneValidation();
      if (result) {
        inputTelf.style.border = "solid 1px green";
      } else {
        inputTelf.style.border = "solid 1px red";
      }
      break;
    case "birth_day":
      result = dayValidation();
      if (result) {
        inputDia.style.border = "solid 1px green";
      } else {
        inputDia.style.border = "solid 1px red";
      }
      break;
    case "birth_month":
      result = monthValidation();
      if (result) {
        inputMes.style.border = "solid 1px green";
      } else {
        inputMes.style.border = "solid 1px red";
      }
      break;
    case "birth_year":
      result = yearValidation();
      if (result) {
        inputAno.style.border = "solid 1px green";
      } else {
        inputAno.style.border = "solid 1px red";
      }
      break;
    case "email":
      result = emailValidation();
      if (result) {
        inputEmail.style.border = "solid 1px green";
      } else {
        inputEmail.style.border = "solid 1px red";
      }
      break;
    case "dni":
      result = dniValidation();
      if (result) {
        inputDNI.style.border = "solid 1px green";
      } else {
        inputDNI.style.border = "solid 1px red";
      }
      break;
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
}

function loadData() {
  inputNombre.value = getCookie("user");
  inputTelf.value = getCookie("phone");
  inputDia.value = getCookie("birth_day");
  inputMes.value = getCookie("birth_month");
  inputAno.value = getCookie("birth_year");
  inputEmail.value = getCookie("email");
  inputDNI.value = getCookie("dni");
  answer.innerHTML = "";
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
  let areYouSure = confirm("¿Seguro que quieres limpiar todos los campos?");

  if (areYouSure) {
    for (const cleaner of inputAll) cleaner.value = "";
    inputConditions.checked = false;
    location.reload();
  }
}

const listeners = [formu.user, formu.phone, formu.birth_day, formu.birth_month, formu.birth_year, formu.email, formu.dni];
for (const listener of listeners) listener.addEventListener("keyup", Validation);