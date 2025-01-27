let answer = prompt("Cuando se ejecuta el JavaScript?");
console.log(answer);
alert(`JavaScript se ejecuta ${answer}`);
//document.querySelector("#mostra").innerHTML = answer;
const mostra = document.querySelector("#mostra");
mostra.innerHTML = answer;