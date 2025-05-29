// Variables y tipos de datos
let nombre = "Juan";  // String (texto)
const edad = 25;      // Number (número)
let esEstudiante = true;  // Boolean (verdadero/falso)

// Mostrar variables
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?:", esEstudiante);

// Operadores aritméticos
let numero1 = 10;
let numero2 = 5;

console.log("\nOperaciones matemáticas:");
console.log("Suma:", numero1 + numero2);
console.log("Resta:", numero1 - numero2);
console.log("Multiplicación:", numero1 * numero2);
console.log("División:", numero1 / numero2);

// Estructuras de control
console.log("\nEstructuras de control:");

// If-else
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Bucle for
console.log("\nContando del 1 al 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Número:", i);
}

// Arrays (arreglos)
let frutas = ["manzana", "pera", "plátano"];
console.log("\nLista de frutas:", frutas);
console.log("Primera fruta:", frutas[0]);

// Funciones
function saludar(nombre) {
    return "¡Hola " + nombre + "!";
}

console.log("\nLlamando a una función:");
console.log(saludar("María")); 