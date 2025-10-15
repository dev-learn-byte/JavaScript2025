//DECLARACION DE LA FUNCION MAP
// La función map en JavaScript se utiliza para transformar los elementos de un array aplicando
//  una función a cada uno de ellos. Devuelve un nuevo array con los resultados de 
// la función aplicada a cada elemento del array original.

// Sintaxis básica:
// array.map((elemento, índice, array) => { /* transformación */ });
// Parámetros:
// elemento: El elemento actual del array que se está procesando.
// índice (opcional): El índice del elemento actual.
// array (opcional): El array original sobre el que se llamó map.
// Retorna:
// Un nuevo array con los elementos transformados.

let map=new Map();
console.log(map);
//crea un mapa con tres entradas
//cada entrada es un par clave-valor
//la clave es un string y el valor es otro string
//las claves son '1', '2' y '3'
//los valores son 'uno', 'dos' y 'tres'
mymap = new Map([   
    ['1', 'uno'],
    ['2', 'dos'],
    ['3', 'tres']
]);

console.log(mymap);

//ejemplos de uso de map
console.log('=== Ejemplos de uso de map ===');
    
//1) Map con números: duplicar valores
 console.log('1) Map con números: duplicar valores');
const numeros = [1, 2, 3, 4];
 const duplicados = numeros.map(n => n * 2);
 console.log('Duplicados:', duplicados);

// 2) Map con objetos: transformar propiedades
 console.log('2) Map con objetos: transformar propiedades');


 /*
 Recorre cada elemento del array usuarios
Aplica una función a cada elemento
Devuelve un NUEVO array con los resultados
La función u => u.nombre:

u es cada usuario (cada objeto del array)
=> es una arrow function (función flecha)
u.nombre extrae solo la propiedad "nombre" de cada objeto
 */

 const usuarios = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 30 },
  { nombre: 'María', edad: 22 },
    { nombre: 'Elvis', edad: 28 }
];
//imprimir array original de usuarios
 console.log('Usuarios:', usuarios);
 // Extraer solo los nombres de los usuarios
const nombres = usuarios.map(u => u.nombre);
console.log('Nombres:', nombres);
// Extraer solo las edades de los usuarios
console.log('Edades:', usuarios.map(u => u.edad));

//3) Uso del índice y array original
console.log('3) Uso del índice y array original');

//const numeros = [1, 2, 3, 4];

const sumConIndice = numeros.map((n, i, arr) => {
    console.log(`  Iteración: elemento=${n}, índice=${i}, array completo=${arr}`);
    return n + i;
});
console.log('Sumados con índice:', sumConIndice);
/*
EXPLICACIÓN DETALLADA:
map() puede recibir hasta 3 parámetros en su función callback:
1. n (elemento actual) - El valor del elemento que se está procesando
2. i (índice) - La posición del elemento en el array (0, 1, 2, 3...)
3. arr (array original) - El array completo sobre el que se llamó map()

En este ejemplo: numeros.map((n, i, arr) => n + i)
- n es el número actual: 1, 2, 3, 4
- i es su índice: 0, 1, 2, 3
- arr es el array completo: [1, 2, 3, 4]

PROCESO PASO A PASO:
Iteración 1: n=1, i=0 → 1 + 0 = 1
Iteración 2: n=2, i=1 → 2 + 1 = 3
Iteración 3: n=3, i=2 → 3 + 2 = 5
Iteración 4: n=4, i=3 → 4 + 3 = 7

Resultado: [1, 3, 5, 7]
*/

// // Ejemplo adicional: Usar el array original para calcular porcentajes
// console.log('\nEjemplo adicional: Calcular porcentaje de cada número respecto al total');
// const total = numeros.reduce((sum, num) => sum + num, 0); // suma total = 10
// const porcentajes = numeros.map((n, i, arr) => {
//     const suma = arr.reduce((sum, num) => sum + num, 0);
//     const porcentaje = (n / suma * 100).toFixed(2);
//     return `${n} es el ${porcentaje}% del total`;
// });
// console.log('Porcentajes:', porcentajes);


// 4) Encadenando map y filter
console.log('4) Encadenando map y filter');
/*
const usuarios = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 30 },
  { nombre: 'María', edad: 22 }
]; */
// Obtener nombres de usuarios mayores de 25 años
const mayoresDe25 = usuarios
  .filter(u => u.edad > 25)
  .map(u => u.nombre);
console.log('Mayores de 25:', mayoresDe25);

// 5) Diferencia con forEach (map devuelve nuevo array)
console.log('5) Diferencia con forEach (map devuelve nuevo array)');
const forEachResultado = [];
numeros.forEach(n => forEachResultado.push(n * 2));
console.log('forEachResultado:', forEachResultado);

// Nota: map no modifica el array original, devuelve uno nuevo
console.log('Array original numeros:', numeros);

 console.log('===  Agregar un emoji a cada fruta ===');  
// Ejemplo práctico: Agregar un emoji a cada fruta
let frutas = ["manzana", "plátano", "naranja"];

// Agregamos un emoji a cada fruta
let frutasConEmoji = frutas.map(function(fruta) {
    return fruta + " 🍎";
});

console.log(frutasConEmoji);
// Salida: ["manzana 🍎", "plátano 🍎", "naranja 🍎"]
console.log("--- Fin de los ejemplos de map ---");