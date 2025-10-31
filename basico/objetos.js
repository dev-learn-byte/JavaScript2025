/**
 * OBJETOS EN JAVASCRIPT
 * =====================
 *
 * Un objeto es como una bolsa o una caja donde metes cosas juntas.
 * En lugar de tener variables sueltas, puedes poner todo en una sola "bolsa" llamada objeto.
 * Esto hace que sea más fácil organizar y recordar las cosas.
 *
 * Ejemplo: Un juguete como un coche de juguete.
 * El coche tiene:
 * - Un color (rojo)
 * - Un tamaño (pequeño)
 * - Una acción (puede rodar)
 */

// Crear un objeto usando llaves {}
let coche = {
    color: "rojo",
    tamaño: "pequeño",
    rodar: function () {
        console.log("¡El coche está rodando!");
    }
};

// Usar el objeto
console.log(coche.color);  // Muestra: rojo
console.log(coche["tamaño"]);  // Muestra: pequeño
coche.rodar();  // Muestra: ¡El coche está rodando!

// Cambiar una propiedad
coche.color = "azul";
console.log(coche.color);  // Ahora muestra: azul

// Agregar una nueva propiedad
coche.velocidad = "rápida";
console.log(coche.velocidad);  // Muestra: rápida

// Borrar una propiedad
delete coche.tamaño;
console.log(coche.tamaño);  // Muestra: undefined

// Otro ejemplo: Un amigo imaginario
let amigo = {
    nombre: "Pipo",
    edad: 8,
    colorFavorito: "verde",
    saludar: function () {
        console.log("¡Hola! Soy " + this.nombre + " y tengo " + this.edad + " años.");
    }
};

console.log(amigo.nombre);  // Muestra: Pipo
amigo.saludar();  // Muestra: ¡Hola! Soy Pipo y tengo 8 años.

// Otro ejemplo: Una fruta
let manzana = {
    color: "roja",
    sabor: "dulce",
    comer: function () {
        console.log("¡Ñam! La manzana está rica.");
    }
};

manzana.color = "verde";  // Cambiamos el color
console.log(manzana.color);  // Muestra: verde
manzana.comer();  // Muestra: ¡Ñam! La manzana está rica.

// Otro ejemplo: Un animal de peluche
let oso = {
    nombre: "Teddy",
    tamaño: "mediano",
    abrazar: function () {
        console.log("¡Abrazo fuerte de " + this.nombre + "!");
    }
};

oso.abrazar();  // Muestra: ¡Abrazo fuerte de Teddy!

// Crear un objeto usando new Object()
let pelota = new Object();
pelota.color = "amarilla";
pelota.rebotar = function () {
    console.log("¡La pelota rebota!");
};

console.log(pelota.color);  // Muestra: amarilla
pelota.rebotar();  // Muestra: ¡La pelota rebota!
