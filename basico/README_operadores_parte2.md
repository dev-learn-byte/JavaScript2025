# Operadores Avanzados en JavaScript

Este documento explica y ejemplifica algunos operadores avanzados y menos comunes en JavaScript.

---

## 1. Operador Ternario (`condición ? valor1 : valor2`)
Permite realizar una condición en una sola línea, similar a un `if-else`.

```js
let edad = 18;
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
// Si edad es 18 o más, mensaje será "Mayor de edad", si no, "Menor de edad"
```

---

## 2. Operadores de Asignación Combinada (`+=`, `-=`, `*=`, `/=`, `%=`, `**=`)
Permiten realizar una operación y asignar el resultado a la misma variable en una sola línea.

```js
let x = 10;
x += 5; // x = x + 5
x *= 2; // x = x * 2
```

---

## 3. Operador de Desestructuración
Permite extraer valores de arrays u objetos y asignarlos a variables de forma sencilla.

**Array:**
```js
let [a, b] = [1, 2];
// a = 1, b = 2
```

**Objeto:**
```js
let persona = { nombre: "Ana", edad: 25 };
let { nombre, edad } = persona;
// nombre = "Ana", edad = 25
```

---

## 4. Operador de Propagación (Spread `...`)
Permite expandir los elementos de un array u objeto.

**Array:**
```js
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
```

**Objeto:**
```js
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

---

## 5. Operador Nullish Coalescing (`??`)
Devuelve el valor de la derecha solo si el de la izquierda es `null` o `undefined`.

```js
let valor = null;
let resultado = valor ?? "Valor por defecto"; // "Valor por defecto"
```

---

## 6. Operador de Encadenamiento Opcional (`?.`)
Permite acceder a propiedades de un objeto que podría ser `null` o `undefined` sin que lance error.

```js
let usuario = null;
console.log(usuario?.nombre); // undefined (no error)
```

---

## 7. Operador `typeof`
Devuelve el tipo de dato de una variable o valor.

```js
console.log(typeof 123);        // "number"
console.log(typeof "hola");     // "string"
console.log(typeof true);       // "boolean"
console.log(typeof {});         // "object"
console.log(typeof undefined);  // "undefined"
``` 