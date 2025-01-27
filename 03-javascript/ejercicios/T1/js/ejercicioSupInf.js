function ejercicioCinco(){
  let firstNumber = 0;
  let secondNumber = 0;
  let result;

  firstNumber = Number(prompt("Introdueix el primer nombre"));
  while (isNaN(firstNumber) || !firstNumber) {
    firstNumber = Number(prompt("No has escrit un nombre. si us plau, introdueix el primer nombre de nou."));
  };

  secondNumber = Number(prompt("Introdueix el segon nombre"));
  while (isNaN(secondNumber) || !secondNumber) {
    secondNumber = Number(prompt("No has escrit un nombre. si us plau, introdueix el segon nombre de nou."));
  };

  if (firstNumber === secondNumber) {
    result = `${firstNumber} és igual a ${secondNumber}`;

  } else if (firstNumber > secondNumber) {
    result = `${firstNumber} és major que ${secondNumber}`;
    
  } else if (firstNumber < secondNumber) {
    result = `${firstNumber} és menor que ${secondNumber}`;
  }

  alert(result);
  document.getElementById("respuesta_ejercicio_cinco").innerHTML = result;
}