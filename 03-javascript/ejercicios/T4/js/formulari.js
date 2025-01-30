const inputNombre = document.querySelector("#user");
const inputTelf = document.querySelector("#phone");
const inputAge = document.querySelector("#age");
const inputEmail = document.querySelector("#email");
const inputDNI = document.querySelector("#dni");
const inputAll = document.querySelectorAll("input");

function saveData() {}

function loadData() {}

function clean() {
  /* for (let i = 0; i < inputAll.length; i++) {
    inputAll[i].value = "";
  } */
  for (const cleaner of inputAll) cleaner.value = "";
}
