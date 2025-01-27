setInterval(() => {
  let day = new Date();
  let hour = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();
  let result = "";

  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  if (hour >= 6 && hour <= 14) {
    result = `Bon dia! Són les ${hour}:${minutes}:${seconds}`;
  } else if (hour > 14 && hour < 20) {
    result = `Bona tarda! Són les ${hour}:${minutes}:${seconds}`;
  } else {
    result = `Bona nit! Són les ${hour}:${minutes}:${seconds}`;
  }

  document.getElementById("mostrar").innerHTML = result;
}, 1000);

let newURL;
let test;
const checkURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

do {
  test = false;
  newURL = prompt("Introdueix una nova URL");

  if (newURL) test = checkURL(newURL);
} while (newURL != null && !test);

if (test) window.opener.location.href = newURL;
