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
console.log("Longitud:", texto.length);                // 20
console.log("Mayúsculas:", texto.toUpperCase());       // JAVASCRIPT ES GENIAL
console.log("Minúsculas:", texto.toLowerCase());       // javascript es genial
console.log("¿Incluye 'genial'?:", texto.includes("genial")); // true
console.log("Reemplazar:", texto.replace("genial", "poderoso")); // JavaScript es poderoso
console.log("Subcadena:", texto.substring(0, 10));     // JavaScript

// Más ejemplos de includes()
console.log("¿Incluye 'Java'?:", texto.includes("Java")); // true
console.log("¿Incluye 'python'?:", texto.includes("python")); // false
console.log("¿Incluye cadena vacía?:", texto.includes("")); // true
console.log("¿Incluye 'GENIAL'?:", texto.includes("GENIAL")); // false (distingue mayúsculas)

// Más ejemplos de replace()
let fraseRepetida = "Hola hola hola";
console.log("Reemplaza solo la primera coincidencia:", fraseRepetida.replace("hola", "adiós")); // Hola adiós hola

let textoAnimales = "gato gato gato";
console.log("Reemplazar todas las coincidencias:", textoAnimales.replace(/gato/g, "perro")); // perro perro perro

let mensajeClima = "El clima está frío";
console.log("Reemplazar palabra:", mensajeClima.replace("frío", "caliente")); // El clima está caliente

// Plantillas literales (template literals)
let edad = 27;
let info = `Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(info); 