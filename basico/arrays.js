//arrays

//declaracion de un array

let frutas = ["manzana", "naranja", "platano"];

//acceder a los elementos de un array   

console.log(frutas[0]); //manzana
console.log(frutas[1]); //naranja
console.log(frutas[2]); //platano

// Ejemplo 1: Array de números
let numeros = [10, 20, 30, 40, 50];
console.log('Array de números:', numeros); // [10, 20, 30, 40, 50]

// Ejemplo 2: Array de strings
let colores = ["rojo", "verde", "azul"];
console.log('Segundo color:', colores[1]); // "verde"

// Ejemplo 3: Array mixto (diferentes tipos de datos)
let mezcla = [1, "dos", true, null, undefined];
console.log('Array mixto:', mezcla); // [1, "dos", true, null, undefined]

// Ejemplo 4: Array de arrays (array multidimensional)
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('Elemento matriz[1][2]:', matriz[1][2]); // 6

// Ejemplo 5: Recorrer un array con for
let frutas2 = ["manzana", "banana", "naranja"];
for (let i = 0; i < frutas2.length; i++) {
  console.log('Fruta con for:', frutas2[i]);
}

// Ejemplo 6: Recorrer un array con for...of
let animales = ["perro", "gato", "loro"];
for (let animal of animales) {
  console.log('Animal con for...of:', animal);
}

// Ejemplo 7: Usar métodos de arrays
let letras = ["a", "b", "c"];
letras.push("d"); // Agrega "d" al final
console.log('Después de push:', letras); // ["a", "b", "c", "d"]

letras.pop(); // Elimina el último elemento
console.log('Después de pop:', letras); // ["a", "b", "c"]

letras.unshift("z"); // Agrega "z" al inicio
console.log('Después de unshift:', letras); // ["z", "a", "b", "c"]

// Ejemplo 8: Buscar elementos
let paises = ["México", "Argentina", "Chile"];
console.log('¿Incluye Chile?', paises.includes("Chile")); // true
console.log('Índice de Argentina:', paises.indexOf("Argentina")); // 1

// Ejemplo 9: Array de objetos
let personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 }
];
console.log('Nombre de la primera persona:', personas[0].nombre); // "Ana"

