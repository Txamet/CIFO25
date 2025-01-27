    Tutorial básico de Emmet con Vs Code

# Emmet

Última actualización: _Dec 1 2024_

---

Hola, en esta nota te enseño a usar [_Emmet_](https://emmet.io/), el _plugin_ que nos ayuda a escribir _HTML_ de forma muy rápida y eficiente.

_Emmet_ es un complemento que se puede agregar a cada editor de texto. En _VS Code_ ya está integrado y siempre que el editor reconozca un posible comando de _Emmet_ mostrará una sugerencia.

![Abreviación Emmet](./assets/emmet-abbreviation.jpg)

## Atajos de código

### Estructura básica de _HTML_

Escribe **`!`** o **`html:5`**

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body></body>
    </html>

### Nodos hijos

Usa el **`>`**

    nav>ul>li

    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>

### Nodos hermanos

Usa el **`+`**

    div+p+span

    <div></div>
    <p></p>
    <span></span>

### Nodos superiores

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

### Multiplicadores

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

### Agrupación

Usa los **`( )`**

    ul>li>(p+span)*2

    <ul>
      <li>
        <p></p>
        <span></span>
        <p></p>
        <span></span>
      </li>
    </ul>

### Atributos _id_ y _class_

Usa el **`#`** para identificadores y el **`.`** para clases

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

### Atributos _HTML_

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

### Elementos numerados

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

### Elementos numerados personalizados

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

    h1{Hola soy tu amigo y docente digital}

    <h1>Hola soy tu amigo y docente digital</h1>

    ul>li*3>a{Sección $}

    <ul>
      <li><a href="">Sección 1</a></li>
      <li><a href="">Sección 2</a></li>
      <li><a href="">Sección 3</a></li>
    </ul>

## Aprende más

Consultar más atajos de _Emmet_.

[Abrir Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

---
