// ============================================
// 🗺️ MAP Y SET EXPLICADO PARA NIÑOS 🎒
// ============================================

/**
 * ¡HOLA! 👋
 * 
 * Imagina que tienes dos tipos de cajas mágicas para guardar cosas:
 * 
 * 📦 SET = Una caja donde NO puedes tener cosas repetidas
 * 🗺️ MAP = Una caja donde cada cosa tiene una etiqueta especial
 * 
 * ¡Vamos a aprender sobre ellas!
 */

console.log("=".repeat(50));
console.log("🗺️ BIENVENIDO AL MUNDO DE MAP Y SET 🎒");
console.log("=".repeat(50));

// ============================================
// PARTE 1: ¿QUÉ ES UN MAP? 🗺️
// ============================================

console.log("\n📚 PARTE 1: ¿QUÉ ES UN MAP?");
console.log("-".repeat(50));

/**
 * 🗺️ MAP ES COMO UN DICCIONARIO
 * 
 * Imagina que tienes un diccionario:
 * - Cada palabra (CLAVE) tiene su significado (VALOR)
 * - "perro" → "animal de cuatro patas que ladra"
 * - "gato" → "animal de cuatro patas que maúlla"
 * 
 * En Map:
 * - Guardas PARES de cosas: una CLAVE y su VALOR
 * - La CLAVE es como la etiqueta
 * - El VALOR es lo que guardas
 */

// Crear un Map vacío
const miPrimerMap = new Map();
console.log("\n✨ Mi primer Map vacío:", miPrimerMap);

// Crear un Map con datos desde el inicio
const coloresFavoritos = new Map([
    ['Juan', 'azul'],      // Juan → azul
    ['María', 'rosa'],     // María → rosa
    ['Pedro', 'verde']     // Pedro → verde
]);

console.log("\n🎨 Colores favoritos de mis amigos:", coloresFavoritos);

// ============================================
// PARTE 2: MÉTODOS PRINCIPALES DE MAP 🛠️
// ============================================

console.log("\n\n📚 PARTE 2: MÉTODOS DE MAP (Las herramientas mágicas)");
console.log("-".repeat(50));

// Crear un Map para los ejemplos
const miMochila = new Map();

// 1️⃣ SET - Guardar cosas en el Map
console.log("\n1️⃣ SET - Guardar cosas");
console.log("   (Como poner una etiqueta a cada cosa)");

miMochila.set('lápiz', 'color rojo');
miMochila.set('cuaderno', 'de matemáticas');
miMochila.set('borrador', 'blanco y suave');

console.log("   Mi mochila ahora tiene:", miMochila);

// 2️⃣ GET - Buscar algo por su etiqueta
console.log("\n2️⃣ GET - Buscar algo");
console.log("   (Como buscar algo por su etiqueta)");

const miLapiz = miMochila.get('lápiz');
console.log("   ¿Qué lápiz tengo?", miLapiz);

const miCuaderno = miMochila.get('cuaderno');
console.log("   ¿Qué cuaderno tengo?", miCuaderno);

// 3️⃣ HAS - Preguntar si algo existe
console.log("\n3️⃣ HAS - Preguntar si existe");
console.log("   (Como preguntar: ¿Tengo esto en mi mochila?)");

console.log("   ¿Tengo un lápiz?", miMochila.has('lápiz'));        // true
console.log("   ¿Tengo una regla?", miMochila.has('regla'));       // false

// 4️⃣ DELETE - Sacar algo del Map
console.log("\n4️⃣ DELETE - Sacar algo");
console.log("   (Como sacar algo de la mochila)");

miMochila.delete('borrador');
console.log("   Saqué el borrador. Ahora tengo:", miMochila);

// 5️⃣ SIZE - Contar cuántas cosas hay
console.log("\n5️⃣ SIZE - Contar cosas");
console.log("   (Como contar cuántas cosas hay en la mochila)");

console.log("   Tengo", miMochila.size, "cosas en mi mochila");

// 6️⃣ CLEAR - Vaciar todo el Map
console.log("\n6️⃣ CLEAR - Vaciar todo");
console.log("   (Como vaciar toda la mochila)");

const mochilaParaVaciar = new Map([
    ['libro', 'de cuentos'],
    ['juguete', 'carro rojo']
]);
console.log("   Antes de vaciar:", mochilaParaVaciar);
mochilaParaVaciar.clear();
console.log("   Después de vaciar:", mochilaParaVaciar);

// ============================================
// PARTE 3: EJEMPLOS DIVERTIDOS CON MAP 🎮
// ============================================

console.log("\n\n📚 PARTE 3: EJEMPLOS DIVERTIDOS");
console.log("-".repeat(50));

// Ejemplo 1: Agenda de teléfonos
console.log("\n📱 Ejemplo 1: Mi agenda de teléfonos");
const agenda = new Map();

agenda.set('Mamá', '555-0001');
agenda.set('Papá', '555-0002');
agenda.set('Abuela', '555-0003');
agenda.set('Mejor amigo', '555-0004');

console.log("   Teléfono de Mamá:", agenda.get('Mamá'));
console.log("   ¿Tengo el teléfono de mi tío?", agenda.has('Tío'));
console.log("   Total de contactos:", agenda.size);

// Ejemplo 2: Puntuaciones de videojuegos
console.log("\n🎮 Ejemplo 2: Puntuaciones de videojuegos");
const puntuaciones = new Map();

puntuaciones.set('Mario Kart', 9500);
puntuaciones.set('Minecraft', 12000);
puntuaciones.set('Pokemon', 8750);

console.log("   Mi puntuación en Mario Kart:", puntuaciones.get('Mario Kart'));
console.log("   Mi puntuación en Minecraft:", puntuaciones.get('Minecraft'));

// Ejemplo 3: Inventario de juguetes
console.log("\n🧸 Ejemplo 3: Mis juguetes y dónde están");
const juguetes = new Map();

juguetes.set('Pelota', 'en el jardín');
juguetes.set('Muñeca', 'en mi cuarto');
juguetes.set('Carro', 'en la sala');
juguetes.set('Rompecabezas', 'en el estante');

console.log("   ¿Dónde está mi pelota?", juguetes.get('Pelota'));
console.log("   ¿Dónde está mi muñeca?", juguetes.get('Muñeca'));

// ============================================
// PARTE 4: RECORRER UN MAP 🚶
// ============================================

console.log("\n\n📚 PARTE 4: RECORRER UN MAP (Ver todas las cosas)");
console.log("-".repeat(50));

const animalesFavoritos = new Map([
    ['Juan', 'perro'],
    ['María', 'gato'],
    ['Pedro', 'conejo'],
    ['Ana', 'pájaro']
]);

// Forma 1: Usando forEach
console.log("\n🔄 Forma 1: Usando forEach");
animalesFavoritos.forEach((animal, persona) => {
    console.log(`   A ${persona} le gusta el ${animal}`);
});

// Forma 2: Usando for...of
console.log("\n🔄 Forma 2: Usando for...of");
for (let [persona, animal] of animalesFavoritos) {
    console.log(`   ${persona} → ${animal}`);
}

// Forma 3: Ver solo las claves (etiquetas)
console.log("\n🔑 Ver solo las CLAVES (nombres de personas):");
for (let persona of animalesFavoritos.keys()) {
    console.log(`   - ${persona}`);
}

// Forma 4: Ver solo los valores
console.log("\n💎 Ver solo los VALORES (animales):");
for (let animal of animalesFavoritos.values()) {
    console.log(`   - ${animal}`);
}

// ============================================
// PARTE 5: ¿QUÉ ES UN SET? 📦
// ============================================

console.log("\n\n📚 PARTE 5: ¿QUÉ ES UN SET?");
console.log("-".repeat(50));

/**
 * 📦 SET ES COMO UNA CAJA ESPECIAL
 * 
 * Imagina una caja donde:
 * - NO puedes tener cosas repetidas
 * - Si intentas meter dos pelotas iguales, solo se queda una
 * - Es perfecta para guardar cosas únicas
 * 
 * Diferencia con Map:
 * - Set: Solo guardas COSAS (sin etiquetas)
 * - Map: Guardas PARES (etiqueta + cosa)
 */

// Crear un Set
const misJuguetesUnicos = new Set();

misJuguetesUnicos.add('pelota');
misJuguetesUnicos.add('carro');
misJuguetesUnicos.add('pelota');  // ¡No se agrega! Ya existe
misJuguetesUnicos.add('muñeca');

console.log("\n🎁 Mis juguetes únicos:", misJuguetesUnicos);
console.log("   Cantidad de juguetes diferentes:", misJuguetesUnicos.size);

// ============================================
// PARTE 6: MÉTODOS DE SET 🛠️
// ============================================

console.log("\n\n📚 PARTE 6: MÉTODOS DE SET");
console.log("-".repeat(50));

const coloresUnicos = new Set();

// 1️⃣ ADD - Agregar algo
console.log("\n1️⃣ ADD - Agregar colores");
coloresUnicos.add('rojo');
coloresUnicos.add('azul');
coloresUnicos.add('verde');
coloresUnicos.add('rojo');  // No se agrega, ya existe
console.log("   Colores:", coloresUnicos);

// 2️⃣ HAS - Preguntar si existe
console.log("\n2️⃣ HAS - ¿Tengo este color?");
console.log("   ¿Tengo rojo?", coloresUnicos.has('rojo'));
console.log("   ¿Tengo amarillo?", coloresUnicos.has('amarillo'));

// 3️⃣ DELETE - Quitar algo
console.log("\n3️⃣ DELETE - Quitar un color");
coloresUnicos.delete('azul');
console.log("   Después de quitar azul:", coloresUnicos);

// 4️⃣ SIZE - Contar
console.log("\n4️⃣ SIZE - Contar colores");
console.log("   Tengo", coloresUnicos.size, "colores diferentes");

// 5️⃣ CLEAR - Vaciar todo
console.log("\n5️⃣ CLEAR - Vaciar todo");
const setParaVaciar = new Set(['a', 'b', 'c']);
console.log("   Antes:", setParaVaciar);
setParaVaciar.clear();
console.log("   Después:", setParaVaciar);

// ============================================
// PARTE 7: DIFERENCIAS ENTRE MAP Y SET 🔍
// ============================================

console.log("\n\n📚 PARTE 7: DIFERENCIAS ENTRE MAP Y SET");
console.log("=".repeat(50));

console.log("\n🗺️ MAP (Diccionario con etiquetas):");
console.log("   ✅ Guarda PARES: clave → valor");
console.log("   ✅ Cada cosa tiene una etiqueta");
console.log("   ✅ Puedes buscar por la etiqueta");
console.log("   ✅ Ejemplo: 'Juan' → 'azul'");

console.log("\n📦 SET (Caja de cosas únicas):");
console.log("   ✅ Guarda solo VALORES (sin etiquetas)");
console.log("   ✅ NO permite duplicados");
console.log("   ✅ Perfecto para listas únicas");
console.log("   ✅ Ejemplo: ['rojo', 'azul', 'verde']");

// ============================================
// PARTE 8: COMPARACIÓN LADO A LADO 👥
// ============================================

console.log("\n\n📚 PARTE 8: COMPARACIÓN PRÁCTICA");
console.log("-".repeat(50));

// Usando MAP - Guardar edades de amigos
console.log("\n🗺️ Usando MAP - Edades de amigos:");
const edades = new Map();
edades.set('Juan', 10);
edades.set('María', 9);
edades.set('Pedro', 11);

console.log("   ¿Cuántos años tiene Juan?", edades.get('Juan'));
console.log("   ¿Cuántos años tiene María?", edades.get('María'));

// Usando SET - Lista de amigos (sin repetir)
console.log("\n📦 Usando SET - Lista de amigos únicos:");
const amigos = new Set();
amigos.add('Juan');
amigos.add('María');
amigos.add('Pedro');
amigos.add('Juan');  // No se agrega, ya existe

console.log("   Mis amigos:", amigos);
console.log("   ¿Es Juan mi amigo?", amigos.has('Juan'));

// ============================================
// PARTE 9: CUÁNDO USAR CADA UNO 🤔
// ============================================

console.log("\n\n📚 PARTE 9: ¿CUÁNDO USAR CADA UNO?");
console.log("-".repeat(50));

console.log("\n🗺️ USA MAP CUANDO:");
console.log("   📌 Necesites relacionar dos cosas");
console.log("   📌 Ejemplo: nombre → teléfono");
console.log("   📌 Ejemplo: producto → precio");
console.log("   📌 Ejemplo: estudiante → calificación");

console.log("\n📦 USA SET CUANDO:");
console.log("   📌 Solo quieras guardar cosas únicas");
console.log("   📌 Ejemplo: lista de invitados (sin repetir)");
console.log("   📌 Ejemplo: colores disponibles");
console.log("   📌 Ejemplo: números ganadores de lotería");

// ============================================
// PARTE 10: EJEMPLOS FINALES DIVERTIDOS 🎉
// ============================================

console.log("\n\n📚 PARTE 10: EJEMPLOS FINALES");
console.log("-".repeat(50));

// Ejemplo 1: Tienda de dulces con MAP
console.log("\n🍬 Ejemplo 1: Tienda de dulces (MAP)");
const preciosDulces = new Map([
    ['Chocolate', 5],
    ['Gomitas', 3],
    ['Paleta', 2],
    ['Chicle', 1]
]);

console.log("   ¿Cuánto cuesta el chocolate?", preciosDulces.get('Chocolate'), "pesos");
console.log("   ¿Cuánto cuesta la paleta?", preciosDulces.get('Paleta'), "pesos");
console.log("   Total de dulces diferentes:", preciosDulces.size);

// Ejemplo 2: Colección de stickers con SET
console.log("\n⭐ Ejemplo 2: Colección de stickers (SET)");
const misStickers = new Set();

misStickers.add('Pikachu');
misStickers.add('Mario');
misStickers.add('Sonic');
misStickers.add('Pikachu');  // Ya lo tengo, no se agrega

console.log("   Mis stickers únicos:", misStickers);
console.log("   ¿Tengo a Pikachu?", misStickers.has('Pikachu'));
console.log("   ¿Tengo a Luigi?", misStickers.has('Luigi'));
console.log("   Total de stickers diferentes:", misStickers.size);

// Ejemplo 3: Combinando MAP y SET
console.log("\n🎨 Ejemplo 3: Combinando MAP y SET");
console.log("   (Cada persona tiene sus colores favoritos únicos)");

const coloresPorPersona = new Map();

coloresPorPersona.set('Juan', new Set(['rojo', 'azul', 'rojo']));  // rojo solo cuenta una vez
coloresPorPersona.set('María', new Set(['rosa', 'morado', 'rosa']));

console.log("   Colores de Juan:", coloresPorPersona.get('Juan'));
console.log("   Colores de María:", coloresPorPersona.get('María'));

// ============================================
// RESUMEN FINAL 📝
// ============================================

console.log("\n\n" + "=".repeat(50));
console.log("📝 RESUMEN FINAL - LO MÁS IMPORTANTE");
console.log("=".repeat(50));

console.log("\n🗺️ MAP:");
console.log("   • Es como un diccionario");
console.log("   • Guarda pares: clave → valor");
console.log("   • Métodos: set(), get(), has(), delete(), clear()");
console.log("   • Propiedad: size");
console.log("   • Usa cuando necesites relacionar dos cosas");

console.log("\n📦 SET:");
console.log("   • Es como una caja de cosas únicas");
console.log("   • NO permite duplicados");
console.log("   • Métodos: add(), has(), delete(), clear()");
console.log("   • Propiedad: size");
console.log("   • Usa cuando solo quieras valores únicos");

console.log("\n💡 DIFERENCIA PRINCIPAL:");
console.log("   • MAP = Etiqueta + Valor (como un diccionario)");
console.log("   • SET = Solo valores únicos (como una lista especial)");

console.log("\n" + "=".repeat(50));
console.log("🎉 ¡FIN DE LA LECCIÓN! ¡AHORA ERES UN EXPERTO! 🎉");
console.log("=".repeat(50));
