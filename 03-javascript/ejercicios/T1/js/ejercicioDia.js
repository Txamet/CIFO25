function ejercicioSeis() {
  let day = prompt("¿Quin dia de la setmana és?");
  let actualDay = day.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  switch (actualDay) {
    case "lunes": case "dilluns": result = `El ${day} és el dia 1 de la setmana`; break;
    case "martes": case "dimarts": result = `El ${day} és el dia 2 de la setmana`; break;
    case "miercoles": case "dimecres": result = `El ${day} és el dia 3 de la setmana`; break;
    case "jueves": case "dijous": result = `El ${day} és el dia 4 de la setmana`; break;
    case "viernes": case "divendres": result = `El ${day} és el dia 5 de la setmana`; break;
    case "sabado": case "disabte": result = `El ${day} és el dia 6 de la setmana`; break;
    case "domingo": case "diumenge": result = `El ${day} és el dia 7 de la setmana`; break;
    default: result = "No has introduït correctament un dia de la setmana.";  
  };

  alert(result);
  document.getElementById("respuesta_ejercicio_seis").innerHTML = result;
};
