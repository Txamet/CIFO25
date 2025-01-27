    Tutorial bàsic d'Emmet amb Vs Code

# Emmet

Última actualització: _Dec 1 2024_

---

Utilització d'[_Emmet_](https://emmet.io/), el _connector_ que ens ajuda a escriure _HTML_ de manera ràpida i eficient.

_Emmet_ és un complement que es pot agregar a cada editor de text. En _VS Code_ ja està integrat i sempre que l'editor reconegui un possible comando d'_Emmet_ mostrarà una suggerència.

![Abreviación Emmet](./assets/emmet-abbreviation.jpg)

## Dreceres de codi

### Estructura bàsica d'_HTML_

Escriu **`!`** o **`html:5`**

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body></body>
    </html>

### Nodes fills

Usa el **`>`**

    nav>ul>li

    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>

### Nodes germans

Usa el **`+`**

    div+p+span

    <div></div>
    <p></p>
    <span></span>

### Nodes superiors

Usa el **`^`**

    ul>li>div+p^li>span

    <ul>
      <li>
        <div></div>
        <p></p>
      </li>
      <li><span></span></li>
    </ul>

    ul>li>div+p^^p

    <ul>
      <li>
        <div></div>
        <p></p>
      </li>
    </ul>
    <p></p>

### Multiplicadors

Usa el **`*`**

    ul>li*5>p

    <ul>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
    </ul>

### Agrupació

Usa els **`( )`**

    ul>li>(p+span)*2

    <ul>
      <li>
        <p></p>
        <span></span>
        <p></p>
        <span></span>
      </li>
    </ul>

### Atributs _id_ i _class_

Usa el **`#`** per identificadors i el **`.`** per classes

    ul>li>p.text-center#first

    <ul>
      <li>
        <p class="text-center" id="first"></p>
      </li>
    </ul>

    ul>li>p.text-center.bg-blue#first

    <ul>
      <li>
        <p class="text-center bg-blue" id="first"></p>
      </li>
    </ul>

### Atributs _HTML_

Usa el **`[ ]`**

    ul>li*3>a[target="new"]

    <ul>
      <li><a href="" target="new"></a></li>
      <li><a href="" target="new"></a></li>
      <li><a href="" target="new"></a></li>
    </ul>

    ul>li*3>a[target="new" role="link"]

    <ul>
      <li><a href="" target="new" role="link"></a></li>
      <li><a href="" target="new" role="link"></a></li>
      <li><a href="" target="new" role="link"></a></li>
    </ul>

### Elements numerats

Usa el **`$`**

    ul>li.item$*2>p

    <ul>
      <li class="item1">
        <p></p>
      </li>
      <li class="item2">
        <p></p>
      </li>
    </ul>

### Elements numerats personalitzatss

Usa el **`@`**

    ul>li.item$@10*2>p

    <ul>
      <li class="item10">
        <p></p>
      </li>
      <li class="item11">
        <p></p>
      </li>
    </ul>

### Contenido _HTML_

Usa los **`{ }`**

    h1{Hola soc el teu formador}

    <h1>Hola soc el teu formador</h1>

    ul>li*3>a{Secció $}

    <ul>
      <li><a href="">Secció 1</a></li>
      <li><a href="">Secció 2</a></li>
      <li><a href="">Secció 3</a></li>
    </ul>

## Aprèn més

Consultar més dreceress d'_Emmet_.

[Obrir Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

---
