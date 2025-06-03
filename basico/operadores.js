// Operadores aritméticos
// +  Suma
// -  Resta
// *  Multiplicación
// /  División
// %  Módulo (resto de la división)
// ** Potencia
let a = 10;
let b = 3;

console.log("Operadores aritméticos:");
console.log("Suma:", a + b);        // 13
console.log("Resta:", a - b);       // 7
console.log("Multiplicación:", a * b); // 30
console.log("División:", a / b);    // 3.333...
console.log("Módulo:", a % b);      // 1
console.log("Potencia:", a ** b);   // 1000

// Operadores de comparación
// ==  Igualdad (sin comparar tipo)
// !=  Desigualdad (sin comparar tipo)
// === Igualdad estricta (compara tipo y valor)
// !== Desigualdad estricta
// >   Mayor que
// <   Menor que
// >=  Mayor o igual que
// <=  Menor o igual que
console.log("\nOperadores de comparación:");
console.log("a == b:", a == b);     // false
console.log("a != b:", a != b);     // true
console.log("a > b:", a > b);       // true
console.log("a < b:", a < b);       // false
console.log("a >= b:", a >= b);     // true
console.log("a <= b:", a <= b);     // false

// Ejemplos de comparación de igualdad
// ==  compara solo el valor, puede convertir tipos
// === compara valor y tipo, no convierte tipos

console.log("\nEjemplos de igualdad:");
let c = 5;
let d = "5";

console.log("c == d:", c == d);     // true, porque convierte "5" a número
console.log("c === d:", c === d);   // false, porque uno es número y el otro string

console.log("10" == 10);            // true, conversión de tipo
console.log("10" === 10);           // false, tipos diferentes
console.log(1 == true);             // true, true se convierte a 1
console.log(1 === true);            // false, tipos diferentes
console.log(0 == false);            // true, false se convierte a 0
console.log(0 === false);           // false, tipos diferentes

// Operadores lógicos
// &&  AND (ambos deben ser verdaderos)
// ||  OR (al menos uno debe ser verdadero)
// !   NOT (niega el valor)
let x = true;
let y = false;

console.log("\nOperadores lógicos:");
console.log("x && y:", x && y);     // false
console.log("x || y:", x || y);     // true
console.log("!x:", !x);             // false
console.log("!y:", !y);             // true 