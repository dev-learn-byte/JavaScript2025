// Operadores avanzados en JavaScript

// 1. Operador ternario (condición ? valor1 : valor2)
// Permite hacer una condición en una sola línea
let edad = 18;
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log("Operador ternario:", mensaje); // "Mayor de edad"

// 2. Operadores de asignación combinada
let x = 10;
x += 5; // x = x + 5 => 15
x -= 2; // x = x - 2 => 13
x *= 3; // x = x * 3 => 39
x /= 3; // x = x / 3 => 13
x %= 4; // x = x % 4 => 1
x **= 2; // x = x ** 2 => 1
console.log("Asignación combinada:", x);

// 3. Operador de desestructuración
// Array
let [a, b] = [1, 2];
console.log("Desestructuración array:", a, b); // 1 2
// Objeto
let persona = { nombre: "Ana", edad: 25 };
let { nombre, edad: edadPersona } = persona;
console.log("Desestructuración objeto:", nombre, edadPersona); // "Ana" 25

// 4. Operador de propagación (spread ...)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log("Spread array:", arr2); // [1, 2, 3, 4, 5]
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log("Spread objeto:", obj2); // { a: 1, b: 2, c: 3 }

// 5. Operador nullish coalescing (??)
let valor = null;
let resultado = valor ?? "Valor por defecto";
console.log("Nullish coalescing:", resultado); // "Valor por defecto"

// 6. Operador de encadenamiento opcional (?.)
let usuario = null;
console.log("Encadenamiento opcional:", usuario?.nombre); // undefined (no error)

// 7. Operador typeof
console.log("typeof 123:", typeof 123);        // "number"
console.log("typeof 'hola':", typeof "hola");     // "string"
console.log("typeof true:", typeof true);       // "boolean"
console.log("typeof {}:", typeof {});           // "object"
console.log("typeof undefined:", typeof undefined);  // "undefined" 