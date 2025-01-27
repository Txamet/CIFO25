function ejercicioSiete() {
  let number = 0;
  let result = "";
  let count = 0;

  do {
    number = Number(prompt("Escriu un nombre").trim());
    while (!number) number = Number(prompt("Valor no vàlid. Si us plau, escriu un nombre"));
    if (number) count++;

  } while (number <= 50);

  result = `${number} es major que 50 i has escrit un nombre ${count} vegades.`;

  alert(result);
  document.getElementById("respuesta_ejercicio_siete").innerHTML = result;
};  