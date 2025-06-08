# JavaScript2025
Repaso de JS

---

## Strings en JavaScript

Los strings (cadenas de texto) son uno de los tipos de datos más utilizados en JavaScript. Permiten almacenar y manipular texto.

### Declaración de strings
Puedes declarar un string usando comillas dobles, simples o backticks (para plantillas literales):

```js
let saludo = "Hola";
let nombre = 'Fer';
let mensaje = `Bienvenido, ${nombre}!`;
```

### Concatenación de strings
Puedes unir (concatenar) strings usando el operador `+`:

```js
let frase = saludo + " " + nombre + "!"; // "Hola Fer!"
```

### Métodos útiles de los strings
Algunos métodos muy usados para trabajar con strings:

```js
let texto = "JavaScript es genial";
console.log(texto.length); // 20 (longitud)
console.log(texto.toUpperCase()); // "JAVASCRIPT ES GENIAL"
console.log(texto.toLowerCase()); // "javascript es genial"
console.log(texto.includes("genial")); // true
console.log(texto.replace("genial", "poderoso")); // "JavaScript es poderoso"
console.log(texto.substring(0, 10)); // "JavaScript"
```

#### Más ejemplos de includes()
```js
console.log(texto.includes("Java")); // true
console.log(texto.includes("python")); // false
console.log(texto.includes("")); // true
console.log(texto.includes("GENIAL")); // false (distingue mayúsculas)
```

#### Más ejemplos de replace()
```js
let fraseRepetida = "Hola hola hola";
console.log(fraseRepetida.replace("hola", "adiós")); // "Hola adiós hola"

let textoAnimales = "gato gato gato";
console.log(textoAnimales.replace(/gato/g, "perro")); // "perro perro perro"

let mensajeClima = "El clima está frío";
console.log(mensajeClima.replace("frío", "caliente")); // "El clima está caliente"
```

### Plantillas literales (template literals)
Permiten crear strings complejos fácilmente, incluyendo variables dentro del texto usando `${}`:

```js
let edad = 27;
let info = `Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(info); // "Mi nombre es Fer y tengo 27 años."
```

---
