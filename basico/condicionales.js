// Ejemplo básico de if
let edad = 18;

// Si la edad es mayor o igual a 18, muestra "Eres mayor de edad"
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// If-else
let tieneLicencia = false;
// Si la edad es mayor o igual a 18 y tiene licencia, puede conducir; si no, no puede conducir
if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}

// If-else if-else
let nota = 15;
// Si la nota es mayor o igual a 18, muestra "Excelente";
// si es mayor o igual a 11, muestra "Aprobado";
// si no, muestra "Desaprobado"
if (nota >= 18) {
    console.log("Excelente");
} else if (nota >= 11) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}

// Operador ternario anidado
        // Es una forma compacta de escribir condicionales múltiples:
// Si nota >= 18, resultado es "Excelente"
// Si nota >= 11, resultado es "Aprobado"
// Si no, resultado es "Desaprobado"
let resultado = (nota >= 18) ? "Excelente" : (nota >= 11) ? "Aprobado" : "Desaprobado";
console.log("Resultado:", resultado);

// Operador ternario simple
// Si edad >= 18, mensaje es "Mayor de edad", si no, "Menor de edad"
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log("Operador ternario:", mensaje); 
