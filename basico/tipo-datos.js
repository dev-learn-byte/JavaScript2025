/**
 * TIPOS DE DATOS EN JAVASCRIPT
 * ===========================
 * 
 * 1. PRIMITIVOS:
 *    - String (texto): "Hola", 'Mundo'
 *    - Number (números): 42, 3.14
 *    - Boolean (booleano): true, false
 *    - Undefined: valor por defecto de variables no inicializadas
 *    - Null: valor que representa la ausencia intencional de un valor
 * 
 * 2. DIFERENCIA ENTRE UNDEFINED Y NULL:
 *    - Undefined:
 *      * Se asigna automáticamente cuando:
 *        - Declaras una variable sin valor
 *        - Accedes a una propiedad inexistente
 *        - Una función no retorna valor
 *      * typeof undefined = "undefined"
 * 
 *    - Null:
 *      * Se asigna explícitamente
 *      * Representa ausencia intencional de valor
 *      * typeof null = "object" (error histórico de JavaScript)
 * 
 * 3. COMPARACIONES:
 *    - undefined == null  -> true  (comparación débil)
 *    - undefined === null -> false (comparación estricta)
 */

//primitivos
//cadena de texto
let nombre = "Tony Stark";
alias='Iron Man'
console.log(nombre);
console.log(alias);

//numeros
let edad = 45;
altura=1.72
console.log(edad);
console.log(altura);

//booleanos
let esGenio=true;
console.log(esGenio);


//undefined
//Undefined es un tipo de dato en el cual la variable la  hemos declaro pero aun no le hemos asignado  un valor 
let indefinido;
console.log(indefinido);


//null 
//null es un tipo de dato 
let nulo=null;
console.log(nulo);

// Ejemplos de undefined vs null
console.log("\nDiferencias entre undefined y null:");

// Ejemplo de undefined
let variableNoInicializada;
console.log("Variable no inicializada:", variableNoInicializada); // undefined

let objeto = {};
console.log("Propiedad inexistente:", objeto.propiedadInexistente); // undefined

// Ejemplo de null
let variableNula = null;
console.log("Variable con valor null:", variableNula); // null

// Comparación de tipos
console.log("\nComparación de tipos:");
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null); // "object"

// Comparación de valores
console.log("\nComparación de valores:");
console.log("undefined == null:", undefined == null); // true
console.log("undefined === null:", undefined === null); // false




















