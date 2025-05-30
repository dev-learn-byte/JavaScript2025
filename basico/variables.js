// Diferentes formas de declarar variables
var variableAntigua = "No recomendada";  // Forma antigua (no recomendada)
let variableModerna = "Recomendada";     // Forma moderna (recomendada)
const constante = "No se puede cambiar"; // Constante (no se puede reasignar)

// Tipos de datos básicos
let texto = "Hola";                    // String (texto)
let numero = 42;                       // Number (número)
let decimal = 3.14;                    // Number (decimal)
let booleano = true;                   // Boolean (verdadero/falso)
let nulo = null;                       // Null (valor nulo)
let indefinido = undefined;            // Undefined (no definido)

// Mostrar los tipos de datos
console.log("Tipos de datos:");
console.log("Texto:", texto, "Tipo:", typeof texto);
console.log("Número:", numero, "Tipo:", typeof numero);
console.log("Decimal:", decimal, "Tipo:", typeof decimal);
console.log("Booleano:", booleano, "Tipo:", typeof booleano);
console.log("Nulo:", nulo, "Tipo:", typeof nulo);
console.log("Indefinido:", indefinido, "Tipo:", typeof indefinido);

// Operaciones con variables
let a = 10;
let b = 5;

console.log("\nOperaciones con variables:");
console.log("Suma:", a + b);
console.log("Concatenación:", texto + " " + numero);

// // Reasignación de variables
let x = 1;
console.log("\nReasignación de variables:");
console.log("Valor inicial de x:", x);
x = 2;
console.log("Nuevo valor de x:", x);

// Intentar reasignar una constante (esto causará un error)
// constante = "Nuevo valor";  // Esto daría error
// console.log(constante);

// // Variables con scope (alcance)
{
    let variableLocal = "Solo visible en este bloque";
    console.log("\nVariable local:", variableLocal);
}
console.log(variableLocal);  // Esto daría error porque la variable no es accesible fuera del bloque 