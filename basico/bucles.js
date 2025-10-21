// ============================================
// 🔄 BUCLES EN JAVASCRIPT - EXPLICACIÓN FÁCIL
// ============================================

/*
¿QUÉ ES UN BUCLE? 🤔

Imagina que tu mamá te pide que laves 5 platos.
¿Qué haces? Lavas un plato, luego otro, luego otro... hasta terminar los 5.

Un BUCLE es como hacer la misma tarea varias veces.
En programación, los bucles nos ayudan a repetir acciones sin escribir el mismo código muchas veces.
*/

console.log("=== 🎯 EJEMPLOS DE BUCLES ===\n");

// ============================================
// 1️⃣ BUCLE FOR - "Para" hacer algo X veces
// ============================================

console.log("--- 1. BUCLE FOR ---");
console.log("Imagina que cuentas del 1 al 5 con tus dedos:\n");

for (let i = 1; i <= 5; i++) {
    console.log("👆 Dedo número " + i);
}

console.log("\n🎈 Ejemplo: Inflar globos para una fiesta");
for (let globo = 1; globo <= 3; globo++) {
    console.log("🎈 Inflando globo número " + globo);
}

// ============================================
// 2️⃣ BUCLE WHILE - "Mientras" algo sea verdad
// ============================================

console.log("\n--- 2. BUCLE WHILE ---");
console.log("Imagina que comes galletas mientras tengas hambre:\n");

let galletas = 5;
let hambre = true;

while (galletas > 0 && hambre) {
    console.log("🍪 Comiendo galleta... Quedan " + galletas + " galletas");
    galletas--;

    if (galletas === 2) {
        hambre = false; // Ya no tengo hambre
        console.log("😊 Ya estoy lleno, no quiero más galletas");
    }
}

console.log("\n🏃 Ejemplo: Correr vueltas en el parque");
let vueltas = 0;
let cansado = false;

while (vueltas < 3 && !cansado) {
    vueltas++;
    console.log("🏃 Corriendo vuelta número " + vueltas);
}

// ============================================
// 3️⃣ BUCLE DO-WHILE - Hacer al menos una vez
// ============================================

console.log("\n--- 3. BUCLE DO-WHILE ---");
console.log("Imagina que tocas la puerta de tu amigo:\n");

let intentos = 0;
let abreLaPuerta = false;

do {
    intentos++;
    console.log("🚪 Toc toc... (intento " + intentos + ")");

    if (intentos === 3) {
        abreLaPuerta = true;
        console.log("👋 ¡Tu amigo abrió la puerta!");
    }
} while (!abreLaPuerta && intentos < 5);

// ============================================
// 4️⃣ BUCLE FOR...OF - Para recorrer listas
// ============================================

console.log("\n--- 4. BUCLE FOR...OF ---");
console.log("Imagina que tienes una mochila con útiles escolares:\n");

let mochila = ["📚 Libro", "✏️ Lápiz", "📐 Regla", "🖍️ Colores", "✂️ Tijeras"];

console.log("Sacando cosas de mi mochila:");
for (let util of mochila) {
    console.log("  → " + util);
}

console.log("\n🍎 Ejemplo: Frutas en una canasta");
let frutas = ["🍎 Manzana", "🍌 Plátano", "🍊 Naranja", "🍇 Uvas"];

for (let fruta of frutas) {
    console.log("Me como: " + fruta);
}

// ============================================
// 🎮 EJEMPLOS DIVERTIDOS Y PRÁCTICOS
// ============================================

console.log("\n=== 🎮 EJEMPLOS DIVERTIDOS ===\n");

// Ejemplo 1: Contar estrellas en el cielo
console.log("--- ⭐ Contando estrellas ---");
for (let estrella = 1; estrella <= 10; estrella++) {
    console.log("⭐".repeat(estrella));
}

// Ejemplo 2: Tabla de multiplicar del 2
console.log("\n--- 🔢 Tabla del 2 ---");
for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}

// Ejemplo 3: Días de la semana
console.log("\n--- 📅 Días de la semana ---");
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (let dia of dias) {
    if (dia === "Sábado" || dia === "Domingo") {
        console.log("🎉 " + dia + " - ¡No hay clases!");
    } else {
        console.log("📚 " + dia + " - Día de escuela");
    }
}

// Ejemplo 4: Contar hacia atrás (como un cohete)
console.log("\n--- 🚀 Lanzamiento de cohete ---");
for (let cuenta = 10; cuenta >= 0; cuenta--) {
    if (cuenta === 0) {
        console.log("🚀 ¡DESPEGUE!");
    } else {
        console.log(cuenta + "...");
    }
}

// Ejemplo 5: Buscar un juguete en una caja
console.log("\n--- 🎁 Buscando mi juguete favorito ---");
let juguetes = ["🧸 Osito", "🚗 Carrito", "🎮 Videojuego", "⚽ Pelota", "🪁 Cometa"];
let jugueteFavorito = "🎮 Videojuego";
let encontrado = false;

for (let juguete of juguetes) {
    console.log("Revisando: " + juguete);
    if (juguete === jugueteFavorito) {
        console.log("✅ ¡Encontré mi juguete favorito!");
        encontrado = true;
        break; // Salimos del bucle porque ya lo encontramos
    }
}

// ============================================
// 🎯 EJERCICIOS PARA PRACTICAR
// ============================================

console.log("\n=== 🎯 EJERCICIOS PARA TI ===\n");

console.log("Ejercicio 1: Suma de números del 1 al 5");
let suma = 0;
for (let num = 1; num <= 5; num++) {
    suma += num;
    console.log("Sumando " + num + "... Total hasta ahora: " + suma);
}
console.log("✅ Resultado final: " + suma);

console.log("\nEjercicio 2: Contar números pares del 2 al 10");
for (let par = 2; par <= 10; par += 2) {
    console.log("Número par: " + par);
}

console.log("\nEjercicio 3: Repetir mi nombre 3 veces");
let miNombre = "Fernando";
for (let vez = 1; vez <= 3; vez++) {
    console.log(vez + ". " + miNombre);
}

// ============================================
// 📝 RESUMEN IMPORTANTE
// ============================================

console.log("\n=== 📝 RESUMEN ===\n");
console.log("🔄 FOR: Cuando sabes CUÁNTAS veces repetir");
console.log("   Ejemplo: Contar del 1 al 10\n");

console.log("🔄 WHILE: Cuando repites MIENTRAS algo sea verdad");
console.log("   Ejemplo: Comer mientras tengas hambre\n");

console.log("🔄 DO-WHILE: Hacer algo AL MENOS UNA VEZ");
console.log("   Ejemplo: Tocar la puerta al menos una vez\n");

console.log("🔄 FOR...OF: Para recorrer LISTAS de cosas");
console.log("   Ejemplo: Sacar útiles de tu mochila\n");

console.log("💡 RECUERDA: Los bucles nos ayudan a no escribir el mismo código muchas veces!");
console.log("🎉 ¡Practica y te volverás un experto en bucles!");
