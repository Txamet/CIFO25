function ejercicioUno() {
  let number = parseInt(prompt("Escriu un nombre enter menor que 20:"));

  while (!number || number < 0 || number > 20) {
    number = parseInt(
      prompt("Valor incorrecte, escriu un nombre enter menor que 20:")
    );
  }

  let j = number;

  for (let i = number; i >= 0; i--) {
    console.log("FOR: ", i);
  }

  while (number >= 0) {
    console.log("WHILE: ", number);
    number--;
  }

  do {
    console.log("DO-WHILE: ", j);
    j--;
  } while (j >= 0);
}

function ejercicioDos() {
  let number = parseInt(prompt("Escriu un nombre enter"));
  let forTotal = 1;
  let whileTotal = 1;
  let doWhileTotal = 1;
  let doWhilenumber = number;
  let count = number;

  while (!number || number <= 0) {
    number = parseInt(prompt("Valor incorrecte, escriu un nombre enter:"));
  }

  for (let i = number; i >= 2; i--) {
    count += "x" + (i - 1);
  }

  for (let i = number; i >= 1; i--) {
    forTotal *= i;
  }
  console.log("FOR: ", count, "=", forTotal);

  while (number >= 1) {
    whileTotal *= number;
    number--;
  }
  console.log("WHILE: ", count, "=", whileTotal);

  do {
    doWhileTotal *= doWhilenumber;
    doWhilenumber--;
  } while (doWhilenumber >= 1);

  console.log("DO-WHILE: ", count, "=", doWhileTotal);
}

function ejercicioTres() {
  let nota = parseFloat(prompt("Escriu la teva nota:").replace(",", "."));
  let grade = String(nota).replace(".", ",");
  let result;

  if (nota >= 0 && nota < 5) {
    result = `La teva nota és: Suspens (${grade})`;
  } else if (nota >= 5 && nota < 6) {
    result = `La teva nota és: Aprovat (${grade})`;
  } else if (nota >= 6 && nota < 7) {
    result = `La teva nota és: Bé (${grade})`;
  } else if (nota >= 7 && nota < 9) {
    result = `La teva nota és: Notable (${grade})`;
  } else if (nota >= 9 && nota <= 10) {
    result = `La teva nota és: Excel·lent (${grade})`;
  } else {
    result = `La nota introduïda és incorrecta`;
  }

  alert(result);
  document.getElementById("respuesta_ejercicio_tres").innerHTML = result;
}

function ejercicioCuatro() {
  let notaUno = parseFloat(prompt("Escriu la primera nota:").replace(",", "."));
  while (!notaUno || notaUno < 0 || notaUno > 10) {
    notaUno = parseInt(
      prompt("Valor incorrecte, escriu de nou la primera nota:").replace(
        ",",
        "."
      )
    );
  }

  let notaDos = parseFloat(prompt("Escriu la segona nota:").replace(",", "."));
  while (!notaDos || notaDos < 0 || notaDos > 10) {
    notaDos = parseInt(
      prompt("Valor incorrecte, escriu de nou la segona nota:").replace(
        ",",
        "."
      )
    );
  }

  let nota = (notaUno + notaDos) / 2;
  let grade = String(nota.toFixed(2)).replace(".", ",");
  let result;

  if (nota >= 0 && nota < 5) {
    result = `La teva nota és: Suspens (${grade})`;
  } else if (nota >= 5 && nota < 6) {
    result = `La teva nota és: Aprovat (${grade})`;
  } else if (nota >= 6 && nota < 7) {
    result = `La teva nota és: Bé (${grade})`;
  } else if (nota >= 7 && nota < 9) {
    result = `La teva nota és: Notable (${grade})`;
  } else if (nota >= 9 && nota <= 10) {
    result = `La teva nota és: Excel·lent (${grade})`;
  }

  alert(result);
  document.getElementById("respuesta_ejercicio_cuatro").innerHTML = result;
}
