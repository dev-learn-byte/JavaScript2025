// 🎯 FUNCIONES EN JAVASCRIPT - Ejemplos Prácticos
// Ejecuta este archivo con: node basico/funciones.js

console.log("=".repeat(50));
console.log("🎯 BIENVENIDO A LA PRÁCTICA DE FUNCIONES");
console.log("=".repeat(50));
console.log();

// ============================================
// 1️⃣ FUNCIÓN SIMPLE (sin parámetros, sin return)
// ============================================
console.log("1️⃣ FUNCIÓN SIMPLE");
console.log("-".repeat(50));

function saludar() {
    console.log("¡Hola! 👋");
    console.log("¡Bienvenido a JavaScript!");
}

saludar(); // Llamamos la función
console.log();

// ============================================
// 2️⃣ FUNCIÓN CON PARÁMETROS
// ============================================
console.log("2️⃣ FUNCIÓN CON PARÁMETROS");
console.log("-".repeat(50));

function saludarPersona(nombre) {
    console.log("¡Hola " + nombre + "! 👋");
}

saludarPersona("María");
saludarPersona("Pedro");
saludarPersona("Ana");
console.log();

// Con varios parámetros
function presentar(nombre, edad, ciudad) {
    console.log("Me llamo " + nombre);
    console.log("Tengo " + edad + " años");
    console.log("Vivo en " + ciudad);
    console.log("---");
}

presentar("Luis", 10, "Madrid");
presentar("Carmen", 12, "Barcelona");
console.log();

// ============================================
// 3️⃣ FUNCIÓN QUE DEVUELVE UN VALOR (con return)
// ============================================
console.log("3️⃣ FUNCIÓN CON RETURN");
console.log("-".repeat(50));

function sumar(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}

let miSuma = sumar(5, 3);
console.log("5 + 3 = " + miSuma);

console.log("10 + 20 = " + sumar(10, 20));
console.log("100 + 50 = " + sumar(100, 50));
console.log();

// ============================================
// 4️⃣ CALCULADORA BÁSICA
// ============================================
console.log("4️⃣ CALCULADORA BÁSICA");
console.log("-".repeat(50));

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "❌ No se puede dividir entre cero";
    }
    return a / b;
}

console.log("Suma: 10 + 5 = " + sumar(10, 5));
console.log("Resta: 10 - 5 = " + restar(10, 5));
console.log("Multiplicación: 10 × 5 = " + multiplicar(10, 5));
console.log("División: 10 ÷ 5 = " + dividir(10, 5));
console.log("División por cero: 10 ÷ 0 = " + dividir(10, 0));
console.log();

// ============================================
// 5️⃣ FUNCIÓN CON CONDICIONALES
// ============================================
console.log("5️⃣ FUNCIÓN CON CONDICIONALES");
console.log("-".repeat(50));

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "✅ El número " + numero + " es PAR";
    } else {
        return "✅ El número " + numero + " es IMPAR";
    }
}

console.log(esParOImpar(4));
console.log(esParOImpar(7));
console.log(esParOImpar(10));
console.log(esParOImpar(15));
console.log();

// ============================================
// 6️⃣ FUNCIÓN PARA CALCULAR EDAD DE PERRO
// ============================================
console.log("6️⃣ CALCULADORA DE EDAD PERRUNA 🐕");
console.log("-".repeat(50));

function edadPerruna(edadHumana) {
    let edadPerro = edadHumana * 7;
    return edadPerro;
}

console.log("Si tienes 5 años, en edad de perro tienes: " + edadPerruna(5) + " años");
console.log("Si tienes 10 años, en edad de perro tienes: " + edadPerruna(10) + " años");
console.log("Si tienes 15 años, en edad de perro tienes: " + edadPerruna(15) + " años");
console.log();

// ============================================
// 7️⃣ FUNCIÓN PARA CALCULAR ÁREA
// ============================================
console.log("7️⃣ CALCULADORA DE ÁREAS");
console.log("-".repeat(50));

function calcularAreaCuadrado(lado) {
    return lado * lado;
}

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

function calcularAreaCirculo(radio) {
    return 3.1416 * radio * radio;
}

console.log("Área de un cuadrado de lado 5: " + calcularAreaCuadrado(5) + " cm²");
console.log("Área de un rectángulo 5×10: " + calcularAreaRectangulo(5, 10) + " cm²");
console.log("Área de un círculo de radio 3: " + calcularAreaCirculo(3).toFixed(2) + " cm²");
console.log();

// ============================================
// 8️⃣ FUNCIÓN CON PARÁMETROS POR DEFECTO
// ============================================
console.log("8️⃣ PARÁMETROS POR DEFECTO");
console.log("-".repeat(50));

function saludarConHora(nombre = "amigo", hora = "día") {
    console.log("¡Buenos " + hora + ", " + nombre + "!");
}

saludarConHora("María", "días");
saludarConHora("Pedro", "tardes");
saludarConHora(); // Usa los valores por defecto
console.log();

// ============================================
// 9️⃣ FUNCIÓN QUE LLAMA A OTRA FUNCIÓN
// ============================================
console.log("9️⃣ FUNCIONES QUE LLAMAN A OTRAS FUNCIONES");
console.log("-".repeat(50));

function calcularPromedio(num1, num2) {
    let suma = sumar(num1, num2); // Usa la función sumar
    let promedio = suma / 2;
    return promedio;
}

console.log("Promedio de 10 y 20: " + calcularPromedio(10, 20));
console.log("Promedio de 5 y 15: " + calcularPromedio(5, 15));
console.log();

// ============================================
// 🔟 FUNCIÓN PARA CONVERTIR TEMPERATURAS
// ============================================
console.log("🔟 CONVERSOR DE TEMPERATURAS 🌡️");
console.log("-".repeat(50));

function celsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function fahrenheitACelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

console.log("0°C = " + celsiusAFahrenheit(0) + "°F");
console.log("25°C = " + celsiusAFahrenheit(25) + "°F");
console.log("100°C = " + celsiusAFahrenheit(100) + "°F");
console.log("---");
console.log("32°F = " + fahrenheitACelsius(32).toFixed(1) + "°C");
console.log("77°F = " + fahrenheitACelsius(77).toFixed(1) + "°C");
console.log();

// ============================================
// 1️⃣1️⃣ FUNCIÓN PARA CALCULAR DESCUENTOS
// ============================================
console.log("1️⃣1️⃣ CALCULADORA DE DESCUENTOS 💰");
console.log("-".repeat(50));

function calcularDescuento(precio, porcentajeDescuento) {
    let descuento = precio * (porcentajeDescuento / 100);
    let precioFinal = precio - descuento;

    console.log("Precio original: $" + precio);
    console.log("Descuento (" + porcentajeDescuento + "%): -$" + descuento);
    console.log("Precio final: $" + precioFinal);
    console.log("---");

    return precioFinal;
}

calcularDescuento(100, 20);
calcularDescuento(50, 10);
calcularDescuento(200, 15);
console.log();

// ============================================
// 1️⃣2️⃣ FUNCIÓN PARA VERIFICAR CONTRASEÑA
// ============================================
console.log("1️⃣2️⃣ VERIFICADOR DE CONTRASEÑAS 🔐");
console.log("-".repeat(50));

function verificarContraseña(contraseña) {
    if (contraseña.length < 6) {
        return "❌ Contraseña muy corta (mínimo 6 caracteres)";
    } else if (contraseña.length < 8) {
        return "⚠️ Contraseña débil (recomendado 8+ caracteres)";
    } else {
        return "✅ Contraseña segura";
    }
}

console.log(verificarContraseña("abc"));
console.log(verificarContraseña("abc123"));
console.log(verificarContraseña("abc12345"));
console.log(verificarContraseña("MiContraseña123"));
console.log();

// ============================================
// 1️⃣3️⃣ FUNCIÓN PARA GENERAR MENSAJES
// ============================================
console.log("1️⃣3️⃣ GENERADOR DE MENSAJES DE CUMPLEAÑOS 🎂");
console.log("-".repeat(50));

function felicitarCumpleaños(nombre, edad) {
    let mensaje = "🎉 ¡FELIZ CUMPLEAÑOS " + nombre.toUpperCase() + "! 🎂\n";
    mensaje += "¡Ya tienes " + edad + " años! 🎈\n";
    mensaje += "Velas: " + "🕯️ ".repeat(edad);
    return mensaje;
}

console.log(felicitarCumpleaños("María", 10));
console.log();
console.log(felicitarCumpleaños("Pedro", 8));
console.log();

// ============================================
// 1️⃣4️⃣ FUNCIÓN PARA CALCULAR CALIFICACIONES
// ============================================
console.log("1️⃣4️⃣ CALCULADORA DE CALIFICACIONES 📚");
console.log("-".repeat(50));

function obtenerCalificacion(puntos) {
    if (puntos >= 90) {
        return "A - Excelente 🌟";
    } else if (puntos >= 80) {
        return "B - Muy bien 👍";
    } else if (puntos >= 70) {
        return "C - Bien ✓";
    } else if (puntos >= 60) {
        return "D - Suficiente ⚠️";
    } else {
        return "F - Reprobado ❌";
    }
}

console.log("95 puntos: " + obtenerCalificacion(95));
console.log("85 puntos: " + obtenerCalificacion(85));
console.log("75 puntos: " + obtenerCalificacion(75));
console.log("65 puntos: " + obtenerCalificacion(65));
console.log("50 puntos: " + obtenerCalificacion(50));
console.log();

// ============================================
// 1️⃣5️⃣ FUNCIÓN FLECHA (Arrow Function)
// ============================================
console.log("1️⃣5️⃣ FUNCIONES FLECHA (ARROW FUNCTIONS)");
console.log("-".repeat(50));

// Forma tradicional
function duplicarTradicional(numero) {
    return numero * 2;
}

// Forma flecha
const duplicarFlecha = (numero) => {
    return numero * 2;
}

// Forma flecha corta
const duplicarCorta = numero => numero * 2;

console.log("Tradicional: " + duplicarTradicional(5));
console.log("Flecha: " + duplicarFlecha(5));
console.log("Flecha corta: " + duplicarCorta(5));
console.log();

// ============================================
// 1️⃣6️⃣ FUNCIÓN CON MÚLTIPLES RETURNS
// ============================================
console.log("1️⃣6️⃣ FUNCIÓN CON MÚLTIPLES RETURNS");
console.log("-".repeat(50));

function clasificarEdad(edad) {
    if (edad < 0) {
        return "❌ Edad inválida";
    }
    if (edad < 12) {
        return "👶 Niño";
    }
    if (edad < 18) {
        return "🧒 Adolescente";
    }
    if (edad < 60) {
        return "👨 Adulto";
    }
    return "👴 Adulto mayor";
}

console.log("Edad 5: " + clasificarEdad(5));
console.log("Edad 15: " + clasificarEdad(15));
console.log("Edad 30: " + clasificarEdad(30));
console.log("Edad 70: " + clasificarEdad(70));
console.log();

// ============================================
// 1️⃣7️⃣ FUNCIÓN PARA CONTAR VOCALES
// ============================================
console.log("1️⃣7️⃣ CONTADOR DE VOCALES");
console.log("-".repeat(50));

function contarVocales(texto) {
    let contador = 0;
    let textoMinusculas = texto.toLowerCase();

    for (let i = 0; i < textoMinusculas.length; i++) {
        let letra = textoMinusculas[i];
        if (letra === 'a' || letra === 'e' || letra === 'i' ||
            letra === 'o' || letra === 'u') {
            contador++;
        }
    }

    return contador;
}

let frase1 = "Hola mundo";
let frase2 = "JavaScript es divertido";

console.log("'" + frase1 + "' tiene " + contarVocales(frase1) + " vocales");
console.log("'" + frase2 + "' tiene " + contarVocales(frase2) + " vocales");
console.log();

// ============================================
// 1️⃣8️⃣ FUNCIÓN PARA INVERTIR TEXTO
// ============================================
console.log("1️⃣8️⃣ INVERSOR DE TEXTO");
console.log("-".repeat(50));

function invertirTexto(texto) {
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return textoInvertido;
}

console.log("Original: Hola");
console.log("Invertido: " + invertirTexto("Hola"));
console.log();
console.log("Original: JavaScript");
console.log("Invertido: " + invertirTexto("JavaScript"));
console.log();

// ============================================
// 1️⃣9️⃣ FUNCIÓN PARA GENERAR TABLA DE MULTIPLICAR
// ============================================
console.log("1️⃣9️⃣ GENERADOR DE TABLA DE MULTIPLICAR");
console.log("-".repeat(50));

function tablaMultiplicar(numero) {
    console.log("📊 Tabla del " + numero + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " × " + i + " = " + (numero * i));
    }
}

tablaMultiplicar(5);
console.log();

// ============================================
// 2️⃣0️⃣ FUNCIÓN PARA CALCULAR FACTORIAL
// ============================================
console.log("2️⃣0️⃣ CALCULADORA DE FACTORIAL");
console.log("-".repeat(50));

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log("Factorial de 5: " + factorial(5));
console.log("Factorial de 6: " + factorial(6));
console.log("Factorial de 7: " + factorial(7));
console.log();

// ============================================
// 🎉 FIN DE LOS EJEMPLOS
// ============================================
console.log("=".repeat(50));
console.log("🎉 ¡FELICIDADES! Has completado todos los ejemplos");
console.log("💪 Ahora intenta crear tus propias funciones");
console.log("📚 Revisa el archivo README_funciones.md para más info");
console.log("=".repeat(50));
