// FUNCIONES 
// Una función es un bloque de código diseñado para realizar una tarea específica.
// Se define una función utilizando la palabra clave "function", seguida del nombre de la función, 
// paréntesis y llaves que contienen el código a ejecutar.

function miFuncion() {
    // Código a ejecutar
}
// Para llamar o invocar la función, simplemente se escribe su nombre seguido de paréntesis.
miFuncion();

//FUNCIÓN SIMPLE (Sin parámetros)
console.log("=".repeat(50));
console.log('1)FUNCIÓN SIMPLE (Sin parámetros)');
// Una función simple  es aquella que no recibe parámetros y no devuelve un valor.
// que no recibe parámetros y solo imprime mensajes en la consola.
function saludar() {
    console.log("¡Hola, bienvenido!");
    console.log("Esta es una función simple.");
}
// Llamada a la función
saludar();
// Salida:
// ¡Hola, bienvenido!
// Esta es una función simple.

console.log("=====Mas ejemplos de funciones simples:=====");
function despedirse() {
    console.log("¡Adiós! ¡Hasta luego!");
}
// Llamada a la función
despedirse();
// Salida:  ¡Adiós! ¡Hasta luego!

// EJEMPLO  Contar manzanas
console.log("---EJEMPLO:Contar manzanas---");
function contarManzanas() {
    console.log("🍎 Tengo 1 manzana");
    console.log("🍎🍎 Tengo 2 manzanas");
    console.log("🍎🍎🍎 Tengo 3 manzanas");
}

contarManzanas(); // Ejecuta todo el código de adentro


// EJEMPLO  Hacer ejercicio
console.log("---EJEMPLO:Hacer ejercicio---");
function hacerEjercicio() {
    console.log("1. Salto 🤸");
    console.log("2. Salto 🤸");
    console.log("3. Salto 🤸");
    console.log("¡Terminé!");
}

hacerEjercicio(); // Hace los 3 saltos

console.log("=".repeat(50));

//2️⃣ FUNCIÓN CON PARÁMETROS4
console.log('2) FUNCIÓN CON PARÁMETROS');
// Una función con parámetros es aquella que recibe valores de entrada (parámetros) 
// para realizar operaciones o cálculos específicos.
function saludarPersona(nombre) {
    console.log(`¡Hola, ${nombre}! Bienvenido.`);
}
// Llamada a la función con diferentes argumentos
saludarPersona("Tony Stark"); // Salida: ¡Hola, Tony Stark! Bienvenido/a.
saludarPersona("Hulk"); // Salida: ¡Hola, Hulk! Bienvenido/a.
saludarPersona("Steve Rogers"); // Salida: ¡Hola, Steve Rogers! Bienvenido/a.
saludarPersona("Thor"); // Salida: ¡Hola, Thor! Bienvenido/a.
//ejemplos de funciones con parámetros
console.log("=====Mas ejemplos de funciones con parámetros:=====");
function despedirsePersona(nombre) {
    console.log(`¡Adiós, ${nombre}!`);
    console.log(`¡Que tengas un buen día, ${nombre}!`);

}
// Llamada a la función con diferentes argumentos
despedirsePersona("Natasha Romanoff");
despedirsePersona("Clint Barton");
despedirsePersona("Wanda Maximoff");
despedirsePersona("Vision");

//Contar frutas (con 2 parámetros)
console.log("---EJEMPLO:Contar frutas (con 2 parámetros)---");
function contarFrutas(manzanas, peras) {
    console.log("Tengo " + manzanas + " manzanas 🍎");
    console.log("Tengo " + peras + " peras 🍐");
    console.log("Total: " + (manzanas + peras) + " frutas");
}

contarFrutas(3, 2);  // 3 manzanas, 2 peras = 5 frutas
contarFrutas(5, 4);  // 5 manzanas, 4 peras = 9 frutas
contarFrutas(10, 7); // 10 manzanas, 7 peras = 17 frutas

// Hacer un sándwich personalizado
console.log("---EJEMPLO:Hacer un sándwich personalizado---");
function hacerSandwich(pan, relleno, salsa) {
    console.log("🍞 Tomamos " + pan);
    console.log("🥪 Le ponemos " + relleno);
    console.log("🥫 Le agregamos " + salsa);
    console.log("¡Sándwich listo!👌🥪");
}

hacerSandwich("pan integral", "jamón", "mayonesa");
hacerSandwich("pan blanco", "queso", "mostaza");
console.log("=".repeat(50));

//3️⃣ FUNCIÓN CON VALOR DE RETORNO
console.log('3) FUNCIÓN CON VALOR DE RETORNO');
// Una función con valor de retorno es aquella que devuelve un valor después de realizar
// una operación o cálculo. Se utiliza la palabra clave "return" para especificar el valor que se va a devolver.


function sumar(a, b) {
    console.log("a)Sumando " + a + " + " + b);
    console.log("b)El resultado es: " + (a + b));
    console.log("c)Devolviendo el resultado...");
    return a + b;
}
// Llamada a la función y almacenamiento del resultado
let resultado1 = sumar(5, 3);
console.log("--Resultado de sumar(5, 3):", resultado1); // Salida: 8
let resultado2 = sumar(10, 15);
console.log("--Resultado de sumar(10, 15):", resultado2); // Salida: 25



//ejemplos de funciones con valor de retorno
console.log("=====Mas ejemplos de funciones con valor de retorno:=====");
function restar(a, b) {
    return a - b;
}
let resultado3 = restar(10, 5);
console.log("Resultado de restar(10, 5):", resultado3); // Salida: 5
let resultado4 = restar(20, 15);
console.log("Resultado de restar(20, 15):", resultado4); // Salida: 5

// Calcular el área de un rectángulo
console.log("---EJEMPLO:Calcular el área de un rectángulo---");
function calcularAreaRectangulo(ancho, alto) {
    return ancho * alto;
}
let area1 = calcularAreaRectangulo(5, 10);
console.log("Área del rectángulo (5x10):", area1); // Salida: 50
let area2 = calcularAreaRectangulo(7, 3);
console.log("Área del rectángulo (7x3):", area2); // Salida: 21

// Calcular el perímetro de un círculo
console.log("---EJEMPLO:Calcular el perímetro de un círculo---");
function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}
let perimetro1 = calcularPerimetroCirculo(5);
console.log(typeof (("Perímetro del círculo (radio 5):", perimetro1)));//.toFixed(2)); // Salida: 31.42
console.log("Perímetro del círculo (radio 5):", perimetro1);
let perimetro2 = calcularPerimetroCirculo(10);
console.log(typeof (("Perímetro del círculo (radio 10):", perimetro2.toFixed(2)))); // Salida: 62.83
console.log("Perímetro del círculo (radio 10):", perimetro2.toFixed(2));

//4️⃣ FUNCIONES ANÓNIMAS
console.log('4) FUNCIONES ANÓNIMAS');
// Una función anónima es una función que no tiene un nombre asignado. 
// Se utiliza comúnmente como una función de devolución de llamada (callback) o se asigna a una variable.

let saludo = function (nombre) {
    console.log("¡Hola, " + nombre + "!");
};

saludo("Natasha Romanoff");// La usamos con el nombre de la variablex|
saludo("Clint Barton");
saludo("Wanda Maximoff");
saludo("Vision");

// EJEMPLO: Función anónima para calcular el cuadrado de un número
console.log("---EJEMPLO: Función anónima para calcular el cuadrado de un número---");
let cuadrado = function (numero) {
    return numero * numero;
};
let resultadoCuadrado = cuadrado(4);
console.log("El cuadrado de 4 es:", resultadoCuadrado); // Salida: 16
let resultadoCuadrado2 = cuadrado(7);
console.log("El cuadrado de 7 es:", resultadoCuadrado2); // Salida: 49
// EJEMPLO: Función anónima para saludar
console.log("---EJEMPLO: Función anónima para saludar---");
let saludarAnonimo = function (nombre) {
    console.log("¡Hola, " + nombre + "! Esta es una función anónima.");
};
saludarAnonimo("Bruce Banner");
saludarAnonimo("Peter Parker");
// EJEMPLO: Función anónima para calcular el área de un triángulo
console.log("---EJEMPLO: Función anónima para calcular el área de un triángulo---");
let areaTriangulo = function (base, altura) {
    return (base * altura) / 2;
}
let area1Triangulo = areaTriangulo(5, 10);

console.log("Área del triángulo (base 5, altura 10):", area1Triangulo); // Salida: 25
let area2Triangulo = areaTriangulo(8, 6);
console.log("Área del triángulo (base 8, altura 6):", area2Triangulo); // Salida: 24
console.log("=".repeat(50));
//5️⃣ FUNCIONES FLECHA (ARROW FUNCTIONS)
console.log('5) FUNCIONES FLECHA (ARROW FUNCTIONS)');
// Las funciones flecha son una forma más concisa de escribir funciones en JavaScript. 
// Se definen utilizando la sintaxis "=>".  
// Arrow function simple
// Ejemplo de función flecha sin parámetros
console.log("---EJEMPLO: Función flecha para saludar rápidamente---");

let saludarRapido = () => {
    console.log("¡Hola! 👋");
};

saludarRapido();// Salida: ¡Hola!   👋


// EJEMPLO: Función flecha para sumar dos números
console.log("---EJEMPLO: Función flecha para sumar dos números---");
let sumarFlecha = (a, b) => {
    return a + b;
};
let resultadoFlecha = sumarFlecha(7, 3);
console.log("Resultado de sumarFlecha(7, 3):", resultadoFlecha); // Salida: 10
// EJEMPLO: Función flecha para calcular el doble de un número
console.log("---EJEMPLO: Función flecha para calcular el doble de un número---");
let doble = numero => numero * 2;
let resultadoDoble = doble(5);
console.log("El doble de 5 es:", resultadoDoble); // Salida: 10
let resultadoDoble2 = doble(8);
console.log("El doble de 8 es:", resultadoDoble2); // Salida: 16

// EJEMPLO: Función flecha para saludar a una persona
console.log("---EJEMPLO: Función flecha para saludar a una persona---");
let saludarPersonaFlecha = nombre => {
    console.log(`¡Hola, ${nombre}! Esta es una función flecha.`);
};
saludarPersonaFlecha("Tony Stark");
saludarPersonaFlecha("Steve Rogers");


// Versión súper corta (una línea)
console.log("---EJEMPLO: Función flecha para multiplicar dos números (versión súper corta)---");

let multiplicar = (a, b) => a * b;  // No necesita 'return'

console.log(multiplicar(3, 4));  // 12
console.log(multiplicar(5, 2));  // 10
console.log("=".repeat(50));

// 6️⃣ FUNCIONES ANIDADAS (Una función dentro de otra)

// Las funciones anidadas son funciones definidas dentro de otra función.
// Estas funciones internas solo son accesibles desde la función externa.
console.log('6) FUNCIONES ANIDADAS (Una función dentro de otra)');
function externa() {
    console.log("Estoy en la función externa");

    // Esta función está DENTRO de la otra  
    function interna() {
        console.log("Estoy en la función interna");
    }
    // Llamada a la función interna desde la función externa
    interna();
    console.log("Volví a la función externa");
}

// Llamada a la función externa
externa();
// Salida:
// Estoy en la función externa
// Estoy en la función interna
// Volví a la función externa

//Calculadora
console.log("---EJEMPLO: Calculadora con funciones anidadas---");
function calculadora(numero1, numero2) {

    function sumar() {
        return numero1 + numero2;
    }

    function restar() {
        return numero1 - numero2;
    }

    console.log("Suma: " + sumar());
    console.log("Resta: " + restar());
}

calculadora(10, 5);
// Imprime:
// Suma: 15
// Resta: 5
console.log("=".repeat(50));
//7️⃣ FUNCIONES DE ORDEN SUPERIOR (Funciones que usan otras funciones)
console.log('7) FUNCIONES DE ORDEN SUPERIOR (Funciones que usan otras funciones)');
// Las funciones de orden superior son funciones que pueden recibir otras funciones como argumentos
// o devolver funciones como resultado.
// Función que RECIBE otra función como parámetro
function hacerAlgoTresVeces(accion) {
    accion(); // Ejecuta la función que recibió
    accion();
    accion();
}

// Creamos una función simple
function aplaudir() {
    console.log("👏 ¡Aplauso!");
}

// Le pasamos la función a otra función
hacerAlgoTresVeces(aplaudir);
// Imprime:
// 👏 ¡Aplauso!
// 👏 ¡Aplauso!
// 👏 ¡Aplauso!


// EJEMPLO: Función de orden superior para operar con dos números
console.log("---EJEMPLO: Función de orden superior para operar con dos números---");

    function operar(a, b, operacion) {
        return operacion(a, b);
        console.log("Operación realizada.");    // Esta línea nunca se ejecutará
                
    }

    function sumar(a, b) {
        return a + b;
        console.log("Suma realizada."); // Esta línea nunca se ejecutará
        
    }

    function restar(a, b) {
        return a - b;
        console.log("Resta realizada."); // Esta línea nunca se ejecutará
    }
    let resultadoSuma = operar(5, 3, sumar);

    console.log("Resultado de la suma:", resultadoSuma); // Salida: 8
    let resultadoResta = 
    operar(10, 4, restar);
    console.log("Resultado de la resta:", resultadoResta); // Salida: 6

// EJEMPLO: Función de orden superior para aplicar un descuento
console.log("---EJEMPLO: Función de orden superior para aplicar un descuento---");
function aplicarDescuento(precio, descuento, calcularDescuento) {
    let montoDescuento = calcularDescuento(precio, descuento);
    return precio - montoDescuento;
}

function calcularDescuento(precio, descuento) {
    return precio * (descuento / 100);
}
let precioFinal = aplicarDescuento(200, 15, calcularDescuento);
console.log("Precio final con descuento:", precioFinal); // Salida: 170
let precioFinal2 = aplicarDescuento(150, 10, calcularDescuento);
console.log("Precio final con descuento:", precioFinal2); // Salida: 135
console.log("=".repeat(50));

//8️⃣ FUNCIONES GLOBALES vs INTERNAS (Scope/Alcance)
console.log('8) FUNCIONES GLOBALES vs INTERNAS (Scope/Alcance)');
// Las funciones globales son accesibles desde cualquier parte del código,
// mientras que las funciones internas (o locales) solo son accesibles dentro del bloque donde se definen.
// ¿Para qué sirve? Para mantener las cosas organizadas y evitar que las variables se mezclen.

// Función global
// Variable GLOBAL (todos pueden verla)

console.log("---EJEMPLO: Función global vs interna---");
console.log("===Variable GLOBAL===");
let nombreGlobal = "Juan";

function funcionA() {
    console.log("Función A ve: " + nombreGlobal); // Puede verla
}

function funcionB() {
    console.log("Función B ve: " + nombreGlobal); // También puede verla
}

funcionA(); // Función A ve: Juan
funcionB(); // Función B ve: Juan

// Variable INTERNA (solo vive dentro de la función)
console.log("===Variable INTERNA===");
function miFuncion() {
    let nombreInterno = "María"; // Solo existe aquí dentro
    console.log(nombreInterno);  // Funciona bien
}

miFuncion(); // Imprime: María

// Si intentamos usar la variable fuera, ¡ERROR!
// console.log(nombreInterno); // ❌ Error: no está definida

// EJEMPLO: Puntos en un juego
console.log("---EJEMPLO: Puntos en un juego---");

let puntosGlobales = 0; // Todos pueden verlo

function jugarNivel1() {
    let puntosNivel = 10; // Solo existe aquí
    puntosGlobales += puntosNivel;
    //puntosGlobales←puntosGlobales+puntosNivel
    console.log("Puntos del nivel 1: " + puntosNivel);
    console.log("Puntos totales: " + puntosGlobales);
}

function jugarNivel2() {
    let puntosNivel = 20; // Diferente al de nivel1
    puntosGlobales += puntosNivel;
    //puntosGlobales←puntosGlobales+puntosNivel
    console.log("Puntos del nivel 2: " + puntosNivel);
    console.log("Puntos totales: " + puntosGlobales);
}

jugarNivel1();
// Puntos del nivel: 10
// Puntos totales: 10

jugarNivel2();
// Puntos del nivel: 20
// Puntos totales: 30

console.log("=".repeat(50));

//9️⃣ FUNCIONES CON FOREACH (Recorrer listas)

console.log('9) FUNCIONES CON FOREACH (Recorrer listas)');
// El método forEach() es una función de orden superior que se utiliza para 
// iterar sobre los elementos de un array (lista) y ejecutar una función para cada elemento.    
let fruit = ["manzana", "banana", "cereza"];

fruit.forEach(function (fruta) {
    console.log("Me gusta la " + fruta);
});
// Salida:
// Me gusta la manzana
// Me gusta la banana
// Me gusta la cereza   
// EJEMPLO: Usando forEach con una función flecha
console.log("---EJEMPLO: Usando forEach con una función flecha---");
let numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => {
    console.log("Número: " + numero);
});
// Salida:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5

// Con arrow function (más moderno)
let frutas = ["🍎 Manzana", "🍌 Plátano", "🍇 Uvas"];

frutas.forEach(fruta => {
    console.log("Me gusta: " + fruta);
});
// Imprime:
// Me gusta: 🍎 Manzana
// Me gusta: 🍌 Plátano
// Me gusta: 🍇 Uvas

// ================================

// forEach también te dice la POSICIÓN (índice)
let colores = ["Rojo", "Verde", "Azul"];

colores.forEach(function(color, indice) {
    console.log("Posición " + indice + ": " + color);
});
// Imprime:
// Posición 0: Rojo
// Posición 1: Verde
// Posición 2: Azul

// ================================

// Ejemplo práctico: Calcular el total
let precios = [10, 20, 15, 30];
let total = 0;

precios.forEach(function(precio) {
    total = total + precio;
});

console.log("El total es: $" + total); // El total es: $75

