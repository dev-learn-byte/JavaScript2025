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

### Uso de slice en strings

El método .slice() es otra herramienta fundamental y muy poderosa para manipular cadenas de texto (strings) en JavaScript.

Imagina que la cadena de texto es una barra de pan. El método slice() es el cuchillo que usas para cortar una rebanada de ese pan.

¿Qué hace slice()?
El método slice() extrae una sección de una cadena de texto y devuelve una nueva cadena con esa sección. Es muy importante recordar que no modifica la cadena original.

Sintaxis Principal
La sintaxis básica tiene dos parámetros, ambos opcionales:

string.slice(indiceInicio, indiceFin)

indiceInicio: La posición donde comienza la extracción. El carácter en esta posición sí se incluye en el resultado.
indiceFin: La posición donde termina la extracción. El carácter en esta posición NO se incluye en el resultado.
Si se omite indiceFin, slice extraerá hasta el final de la cadena.

En pocas palabras ,el método `slice` permite extraer una parte de un string sin modificar el original. Su sintaxis es `string.slice(inicio, fin)`, donde `inicio` es el índice desde donde comienza la extracción (incluido) y `fin` es el índice donde termina (no incluido).
Vamos a usar un ejemplo para que todo quede claro.
 
const texto = "JavaScript es genial";
Visualicemos sus índices (posiciones):

| J | a | v | a | S | c | r | i | p | t |  | e | s |  | g | e | n | i | a | l |
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |11 |12 |13 |14 |15 |16 |17 |18 |19 |

Ejemplos Prácticos
1. Extraer una palabra del principio
Queremos obtener solo la palabra "JavaScript".

Comienza en el índice 0.
Termina en el índice 10 (el espacio), pero como slice no incluye el final, es la posición perfecta.
 

const palabra = texto.slice(0, 10);
console.log(palabra); // Resultado: "JavaScript"

2. Extraer desde un punto hasta el final
Queremos obtener todo a partir de la palabra "es".

La palabra "es" comienza en el índice 11.
Omitimos el segundo parámetro para que corte hasta el final.

const frase = texto.slice(11);
console.log(frase); // Resultado: "es genial"

El Poder de los Índices Negativos
Aquí es donde slice() se vuelve aún más flexible. Puedes usar números negativos para contar desde el final de la cadena hacia la izquierda.

-1 es el último carácter.
-2 es el penúltimo, y así sucesivamente.
Revisemos los índices negativos de nuestro ejemplo:

| J | a | v | a | S | c | r | i | p | t |  | e | s |  | g | e | n | i | a | l |
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|-20|-19|-18|-17|-16|-15|-14|-13|-12|-11|-10|-9 |-8 |-7 |-6 |-5 |-4 |-3 |-2 |-1 |

3. Extraer los últimos caracteres
Queremos obtener la última palabra, "genial".

"genial" tiene 6 letras. Así que podemos pedir los últimos 6 caracteres.
JavaScript

const ultimaPalabra = texto.slice(-6);
console.log(ultimaPalabra); // Resultado: "genial"
4. Extraer una sección intermedia usando índices negativos
Queremos obtener la palabra "es".

Comienza en el índice -9.
Termina en el índice -7 (el espacio).


const palabraEs = texto.slice(-9, -7);
console.log(palabraEs); // Resultado: "es"
5. Combinar índice positivo y negativo
Queremos quitar la primera y la última palabra, dejando solo "es".

Comienza en el índice 11.
Termina en el índice -7.


const centro = texto.slice(11, -7);
console.log(centro); // Resultado: "es " (con el espacio al final)

| Uso                           | Ejemplo                   | Resultado     |
|-------------------------------|---------------------------|--------------|
| Inicio y Fin                  | `texto.slice(0, 10)`      | JavaScript   |
| Solo Inicio                   | `texto.slice(11)`         | es genial    |
| Inicio Negativo               | `texto.slice(-6)`         | genial       |
| Inicio y Fin Negativos        | `texto.slice(-9, -7)`     | es           |
| Inicio Positivo y Fin Negativo| `texto.slice(11, -7)`     | es           |

 
Recordatorio Clave: Inmutabilidad
slice() nunca cambia la variable original. Siempre te da una copia.


const original = "Hola Mundo";
const rebanada = original.slice(0, 4); // Cortamos "Hola"

console.log(rebanada);  // Muestra "Hola"
console.log(original); // Muestra "Hola Mundo" (¡sigue intacto!)
Espero que esta explicación detallada te sirva para dominar el método .slice(). ¡Es extremadamente útil! Si tienes otra pregunta, ¡adelante!

**Mas Ejemplos:**
```js
let fraseSlice = "Aprender JavaScript es divertido";
let palabra = fraseSlice.slice(9, 19);
console.log(palabra); // "JavaScript"

let texto2 = "Hola mundo";
console.log(texto2.slice(5)); // "mundo"

let saludo2 = "¡Bienvenido!";
console.log(saludo2.slice(-4)); // "ido!"

let nombre2 = "Fernando";
console.log(nombre2.slice(0, 3)); // "Fer"

let palabra2 = "Programar";
console.log(palabra2.slice(1, -1)); // "rograma"

let texto3 = "JavaScript";
console.log(texto3.slice(7, 4)); // ""


```

# Arrays en JavaScript

Un **array** (arreglo) es una estructura de datos que permite almacenar varios valores en una sola variable. Cada valor dentro del array se llama **elemento** y cada elemento tiene una **posición** (índice), que comienza en 0.

## Ejemplo básico

```js
let frutas = ["manzana", "banana", "naranja"];
```

En este ejemplo, `frutas` es un array con 3 elementos.

| Índice | Valor      |
|--------|------------|
|   0    | "manzana"  |
|   1    | "banana"   |
|   2    | "naranja"  |

---

## Cómo crear un array

Hay varias formas de crear un array:

### 1. Usando corchetes `[]` (la más común)

```js
let numeros = [1, 2, 3, 4, 5];
```

### 2. Usando el constructor `Array`

```js
let colores = new Array("rojo", "verde", "azul");
```

> **Nota:** Se recomienda usar los corchetes `[]` por simplicidad y claridad.

---

## Acceder a los elementos

Para acceder a un elemento, se usa su índice:

```js
let primerFruta = frutas[0]; // "manzana"
let segundaFruta = frutas[1]; // "banana"
```

---

## Modificar elementos

Puedes cambiar el valor de un elemento usando su índice:

```js
frutas[1] = "pera";
console.log(frutas); // ["manzana", "pera", "naranja"]
```

---

## Propiedad `.length`

El array tiene una propiedad `.length` que indica cuántos elementos contiene:

```js
console.log(frutas.length); // 3
```

---

## Métodos útiles de los arrays

### Agregar elementos

- **.push()**: Agrega al final

  ```js
  frutas.push("kiwi");
  // ["manzana", "pera", "naranja", "kiwi"]
  ```

- **.unshift()**: Agrega al inicio

  ```js
  frutas.unshift("fresa");
  // ["fresa", "manzana", "pera", "naranja", "kiwi"]
  ```

### Eliminar elementos

- **.pop()**: Elimina el último

  ```js
  frutas.pop();
  // ["fresa", "manzana", "pera", "naranja"]
  ```

- **.shift()**: Elimina el primero

  ```js
  frutas.shift();
  // ["manzana", "pera", "naranja"]
  ```

### Buscar elementos

- **.indexOf()**: Devuelve el índice del elemento (o -1 si no está)

  ```js
  let indice = frutas.indexOf("pera"); // 1
  ```

- **.includes()**: Devuelve `true` si el elemento está

  ```js
  frutas.includes("naranja"); // true
  ```

### Recorrer un array

- **for clásico**

  ```js
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
  ```

- **for...of**

  ```js
  for (let fruta of frutas) {
    console.log(fruta);
  }
  ```

- **forEach()**

  ```js
  frutas.forEach(function(fruta, indice) {
    console.log(indice, fruta);
  });
  ```

---

## Otros métodos útiles

- **.slice(inicio, fin)**: Devuelve una copia de una parte del array (no incluye el índice `fin`).

  ```js
  let algunasFrutas = frutas.slice(1, 3); // ["pera", "naranja"]
  ```

- **.splice(inicio, cantidad, ...elementos)**: Permite eliminar, reemplazar o agregar elementos.

  ```js
  // Eliminar 1 elemento en la posición 1
  frutas.splice(1, 1); // ["manzana", "naranja"]
  // Agregar elementos en la posición 1
  frutas.splice(1, 0, "uva", "sandía"); // ["manzana", "uva", "sandía", "naranja"]
  ```

- **.join(separador)**: Une todos los elementos en un string.

  ```js
  let texto = frutas.join(", "); // "manzana, uva, sandía, naranja"
  ```

- **.reverse()**: Invierte el orden del array.

  ```js
  frutas.reverse();
  ```

- **.sort()**: Ordena los elementos (alfabéticamente por defecto).

  ```js
  frutas.sort();
  ```

---

## Arrays de diferentes tipos

Un array puede contener cualquier tipo de dato, incluso otros arrays (arrays multidimensionales):

```js
let mezcla = [1, "dos", true, [3, 4]];
```

---

## Ejemplo práctico

```js
let numeros = [10, 20, 30, 40, 50];

// Sumar todos los números
let suma = 0;
for (let numero of numeros) {
  suma += numero;
}
console.log("La suma es:", suma); // La suma es: 150
```

---

## Resumen

- Los arrays almacenan varios valores en una sola variable.
- Los índices empiezan en 0.
- Tienen muchos métodos útiles para manipularlos.
- Son fundamentales para trabajar con colecciones de datos en JavaScript.

---

# Sets en JavaScript

Un **Set** es una estructura de datos introducida en ES6 que permite almacenar una colección de valores únicos, es decir, no permite elementos duplicados. Los valores pueden ser de cualquier tipo: números, strings, objetos, etc.

## Características principales

- **No permite duplicados:** Si intentas agregar un valor que ya existe, simplemente lo ignora.
- **Orden de inserción:** Los elementos se mantienen en el orden en que fueron agregados.
- **Iterables:** Puedes recorrer un Set usando `for...of` o `forEach`.

## Ejemplo básico

```js
const miSet = new Set();

miSet.add(1);
miSet.add(2);
miSet.add(2); // Este valor no se agregará porque ya existe
miSet.add('hola');
miSet.add({ nombre: 'Juan' });

console.log(miSet); // Set(4) { 1, 2, 'hola', { nombre: 'Juan' } }
```

## Métodos principales

- **add(valor):** Agrega un nuevo valor al Set.
- **delete(valor):** Elimina un valor del Set.
- **has(valor):** Verifica si el valor existe en el Set.
- **clear():** Elimina todos los valores del Set.
- **size:** Propiedad que indica cuántos elementos tiene el Set.

## Ejemplo de uso de métodos

```js
const numeros = new Set([1, 2, 3]);

numeros.add(4); // Set {1, 2, 3, 4}
numeros.delete(2); // Set {1, 3, 4}
console.log(numeros.has(3)); // true
console.log(numeros.size); // 3
numeros.clear(); // Set {}
```

## Recorrer un Set

```js
const colores = new Set(['rojo', 'verde', 'azul']);

for (let color of colores) {
  console.log(color);
}

// O usando forEach
colores.forEach(color => console.log(color));
```

## ¿Cuándo usar un Set?

- Cuando necesitas almacenar una colección de valores únicos.
- Cuando necesitas comprobar rápidamente si un valor ya existe en la colección.

---
