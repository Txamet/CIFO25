function ejercicioDos() {
  let x = Number.MAX_VALUE;
  let y = Number.MIN_VALUE;
  let screenWidth = screen.width;
  let screenHeight = screen.height;
  let webWidth = window.innerWidth;
  let webHeight = window.innerHeight;
  let url = document.URL; //location.href;
  let webNameExt = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  let webNameNoExt = webNameExt.slice(0, 5);
  let randomNum = Math.round(Math.random() * 20) + 1;
  let myOS = navigator.userAgent; //navigator.platform está deprecado;

  document.getElementById("table").innerHTML = `    
      <table>
        <tr>
          <th class="header_tabla_uno">PROPIETAT</th>
          <th class="header_tabla_dos">VALOR OBTINGUT AMB JS</th>
        </tr>
        <tr>
          <td>Valor màxim que pot tenir un número en JavaScript</td>
          <td>${x}</td>
        </tr>
        <tr>
          <td>Valor mínim que pot tenir un número en JavaScript</td>
          <td>${y}</td>
        </tr>
        <tr>
          <td>Alçada total de la pantalla</td>
          <td>${screenWidth}</td>
        </tr>
        <tr>
          <td>Amplada total de la pantalla</td>
          <td>${screenHeight}</td>
        </tr>
        <tr>
          <td>Alçada de la pàgina web</td>
          <td>${webWidth}</td>
        </tr>
        <tr>
          <td>Amplada de la pàgina web</td>
          <td>${webHeight}</td>
        </tr>
        <tr>
          <td>URL de la pàgina web</td>
          <td>${url}</td>
        </tr>
        <tr>
          <td>Nom de la pàgina web amb la seva extensió (index.html)</td>
          <td>${webNameExt}</td>
        </tr>
        <tr>
          <td>Nom de la pàgina web sense la seva extensió (index)</td>
          <td>${webNameNoExt}</td>
        </tr>
        <tr>
          <td>Un valor aleatori entre 0 i 200 (utilitza Math)</td>
          <td>${randomNum}</td>
        </tr>
        <tr>
          <td>Sistema operatiu de l'ordinador</td>
          <td>${myOS}</td>
        </tr>
      </table>`;
}

function ejercicioTres() {
  let userCookies;

  if (!document.cookie) {
    do {
      userCookies = confirm(
        "Per romandre a la web has d'acceptar l'ús de cookies"
      );
    } while (userCookies === false);

    document.cookie = "username=John Doe";
  }
  console.log(document.cookie);
}

function ejercicioCuatro() {
  let newTitle;

  do {
    newTitle = prompt("Escriu un nou nom per la pàgina");
  } while (!newTitle);

  document.title = newTitle.toUpperCase();
}

function ejercicioSeisANueve() {
  let values;
  while (!values || !values.includes(","))
    values = prompt(
      "Escriu dues paraules separades per una coma tenint en compte el següent:\n1 - La primera paraula és un títol que ha tenir entre 3 i 20 caràcters\n2 - La segona paraula ha de ser 'yes' o 'no' i fa referència a si vols barres de scroll."
    );

  let valuesArray = values.split(",");
  let titol = valuesArray[0].trim();
  let barra = valuesArray[1].trim();

  while (
    valuesArray.length > 2 ||
    !titol ||
    !barra ||
    titol.length < 3 ||
    titol.length > 20 ||
    !(barra == "yes" || barra == "no")
  ) {
    values = prompt(
      "***No compleixes les condicions****\nEscriu dues paraules separades per una coma tenint en compte el següent:\n1 - La primera paraula és un títol que ha tenir entre 3 i 20 caràcters\n2 - La segona paraula ha de ser 'yes' o 'no' i fa referència a si vols barres de scroll."
    );
    valuesArray = values.split(",");
    titol = valuesArray[0].trim();
    barra = valuesArray[1].trim();
  }

  let height = Math.floor(Math.random() * (400 - 50) + 50);
  let width = Math.floor(Math.random() * (400 - 50) + 50);

  let finestra = window.open(
    "./finestra.html",
    "Finestra nova",
    `width=${width},height=${height},scrollbars=${barra}`
  );

  //Método con .onload:
  /* 
  finestra.onload = () => {
    finestra.document.title = titol;
  }; 
  */

  //Método con setTimeout:

  setTimeout(() => {
    finestra.document.title = titol;
  }, 100);

  //  Método con addEventListener:
  /*
  finestra.addEventListener(
    "load",
    () => {
      finestra.document.title = titol;
    },
    false
  ); 
  */
}

ejercicioDos();
ejercicioTres();
ejercicioCuatro();
ejercicioSeisANueve();
