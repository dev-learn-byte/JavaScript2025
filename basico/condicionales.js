// Ejemplo básico de if
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// If-else
let tieneLicencia = false;
if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}

// If-else if-else
let nota = 15;
if (nota >= 18) {
    console.log("Excelente");
} else if (nota >= 11) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}

// Operador ternario
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log("Operador ternario:", mensaje); 