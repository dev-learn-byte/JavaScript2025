// Declaración de strings
let saludo = "Hola";
let nombre = 'Fer';
let mensaje = `Bienvenido, ${nombre}!`;

console.log(saludo);           // Hola
console.log(nombre);           // Fer
console.log(mensaje);          // Bienvenido, Fer!

// Concatenación de strings
let frase = saludo + " " + nombre + "!";
console.log(frase);            // Hola Fer!

// Métodos útiles de los strings
let texto = "JavaScript es genial";
console.log("Longitud:", texto.length);                // 19
console.log("Mayúsculas:", texto.toUpperCase());       // JAVASCRIPT ES GENIAL
console.log("Minúsculas:", texto.toLowerCase());       // javascript es genial
console.log("¿Incluye 'genial'?:", texto.includes("genial")); // true
console.log("Reemplazar:", texto.replace("genial", "poderoso")); // JavaScript es poderoso
console.log("Subcadena:", texto.substring(0, 10));     // JavaScript

// Plantillas literales (template literals)
let edad = 30;
let info = `Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(info); 