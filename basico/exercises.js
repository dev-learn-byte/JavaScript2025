
// ============================================
// EJERCICIOS PARA PRACTICAR 📚
// ============================================

console.log("\n\n📚 EJERCICIOS PARA PRACTICAR");
console.log("-".repeat(50));

console.log("\n✏️ Ejercicio 1: Crea un Map con tus 3 comidas favoritas y sus precios");
const comidasFavoritas = new Map();
comidasFavoritas.set('Tallarines con papa a la huancaína', 20);
comidasFavoritas.set('Ceviche', 15);
comidasFavoritas.set('Lomo saltado', 25);
console.log(comidasFavoritas);
console.log("Mis comidas favoritas son:", [...comidasFavoritas.keys()].join(", "));
console.log("Sus precios son:", [...comidasFavoritas.values()].join(", "));

console.log("✏️ Ejercicio 2: Crea un Set con los nombres de tus 5 mejores personajes de anime");
const mejoresPersonajes = new Set(['Goku', 'Tanjiro', 'Muzan', 'Ichikawa', 'Deku']);
console.log(mejoresPersonajes);
console.log("Los mejores personajes de anime son:", [...mejoresPersonajes].join(", "));

console.log("✏️ Ejercicio 3: Usa Map para guardar las calificaciones de 4 materias");
const calificaciones = new Map();
calificaciones.set('Matemáticas', 18);
calificaciones.set('Física', 17);
calificaciones.set('Química', 16);
calificaciones.set('Historia', 19);
console.log(calificaciones);

console.log("✏️ Ejercicio 4: Usa Set para guardar los días de la semana que tienes clase");
const diasConClase = new Set(['Lunes', 'Miércoles', 'Viernes']);
console.log(diasConClase);
console.log("Los días de la semana que tengo clase son:", [...diasConClase].join(", "));
console.log("✏️ Ejercicio 5: Combina Map y Set para guardar los hobbies únicos de cada amigo");
const amigosHobbies = new Map();
amigosHobbies.set('Carlos', new Set(['Fútbol', 'Videojuegos', 'Cine']));
amigosHobbies.set('Ana', new Set(['Lectura', 'Cine', 'Viajes']));
amigosHobbies.set('Luis', new Set(['Música', 'Fútbol', 'Viajes']));
console.log(amigosHobbies);
console.log("\n¡Practica estos ejercicios para ser un maestro de Map y Set! 🌟");
