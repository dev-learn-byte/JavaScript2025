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

// Ejemplo básico de switch
let dia = 3;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Día no válido";
}
console.log("Día de la semana:", nombreDia);

// Ejemplo de switch con strings
let fruta = "manzana";
let color;

switch (fruta) {
    case "manzana":
        color = "roja o verde";
        break;
    case "plátano":
        color = "amarillo";
        break;
    case "naranja":
        color = "naranja";
        break;
    default:
        color = "Color desconocido";
}
console.log("Color de la fruta:", color);

// Ejemplo de múltiples casos para un mismo bloque
let notaLetra = "E";
let mensajeNota;

switch (notaLetra) {
    case "A":
        mensajeNota = "Excelente";
        break;
    case "B":
    case "C":
        mensajeNota = "Aprobado";
        break;
    case "D":
    case "F":
        mensajeNota = "Desaprobado";
        break;
    default:
        mensajeNota = "Nota no válida";
}
console.log("Mensaje de la nota:", mensajeNota);

// Ejemplo de uso de continue dentro de un bucle con switch
for (let i = 1; i <= 5; i++) {
    switch (i) {
        case 3:
            // Si i es 3, saltamos a la siguiente iteración del bucle
            continue;
        default:
            console.log("Valor de i:", i);
    }
}
// Imprime: 1, 2, 4, 5 

