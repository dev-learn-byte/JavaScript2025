// Ejemplo básico de Set
// forma correcta de declarar un set
let mySet=new Set();
console.log(mySet);

let myset2={}
console.log(myset2);

//no es la forma correcta de crear un set
mySet3 =new Set("Nezuko","Kamado",14,true,"nezuko@gmail.com"); 
console.log(mySet3);
//la forma correcta de inicializar un set
mySet4 =new Set(["Nezuko","Kamado",14,true,"nezuko@gmail.com"]); 
console.log(mySet4);

//metodos de set comunes

const miSet = new Set();

miSet.add(1);
miSet.add(2);
miSet.add(2); // Este valor no se agregará porque ya existe
miSet.add('hola');
miSet.add({ nombre: 'Juan' });


console.log(miSet); // Set(4) { 1, 2, 'hola', { nombre: 'Juan' } }

miSet.delete();
console.log(miSet);

 miSet.clear();
 console.log(miSet);



// Ejemplo de uso de métodos
const numeros = new Set([1, 2, 3]);

numeros.add(4); // Set {1, 2, 3, 4}
numeros.delete(2); // Set {1, 3, 4}
console.log(numeros.has(3)); // true
console.log(numeros.size); // 3
numeros.clear(); // Set {}

// Recorrer un Set
const colores = new Set(['rojo', 'verde', 'azul']);

for (let color of colores) {
  console.log(color);
}

// O usando forEach
colores.forEach(color => console.log(color));

// ===========================================
// DOCUMENTACIÓN DEL MÉTODO has()
// ===========================================

/**
 * MÉTODO has() EN JAVASCRIPT
 * 
 * El método has() se utiliza en Sets y Maps para verificar si un elemento existe
 * dentro de la colección.
 * 
 * SINTAXIS:
 * miSet.has(valor)
 * 
 * RETORNA:
 * - true: si el elemento existe en el Set
 * - false: si el elemento NO existe en el Set
 * 
 * CARACTERÍSTICAS:
 * - Es case sensitive (distingue mayúsculas y minúsculas)
 * - Es muy eficiente para búsquedas rápidas
 * - No modifica el Set original
 */

// Ejemplos básicos del método has()
console.log("\n=== EJEMPLOS DEL MÉTODO has() ===");

const frutas = new Set(['manzana', 'banana', 'naranja', 'uva']);

console.log("Frutas en el Set:", frutas);
console.log("¿Existe 'manzana'?", frutas.has('manzana')); // true
console.log("¿Existe 'pera'?", frutas.has('pera')); // false
console.log("¿Existe 'BANANA'?", frutas.has('BANANA')); // false (case sensitive)

// Ejemplo con números
const numerosSet = new Set([1, 2, 3, 4, 5]);
console.log("\nNúmeros en el Set:", numerosSet);
console.log("¿Existe el número 3?", numerosSet.has(3)); // true
console.log("¿Existe el número 10?", numerosSet.has(10)); // false

// Ejemplo con objetos (comportamiento especial)
const personas = new Set([
  { nombre: 'Juan', edad: 25 },
  { nombre: 'María', edad: 30 }
]);

console.log("\nPersonas en el Set:", personas);
console.log("¿Existe { nombre: 'Juan', edad: 25 }?", 
  personas.has({ nombre: 'Juan', edad: 25 })); // false (objetos diferentes)

// Para objetos, necesitas usar la referencia original
const juan = { nombre: 'Juan', edad: 25 };
personas.add(juan);
console.log("¿Existe la referencia a 'juan'?", personas.has(juan)); // true

// ===========================================
// MAS EJEMPLOS 
// ===========================================
// Creamos dos manzanas con el mismo contenido, pero son objetos diferentes
let manzanaA = { tipo: 'Golden', peso: 150 };
let manzanaB = { tipo: 'Golden', peso: 150 };

// Creamos el Set y agregamos manzanaA
const cajaDeFrutas = new Set();
cajaDeFrutas.add(manzanaA);
//cajaDeFrutas.add(manzanaB); // manzanaB es un objeto diferente, se agrega

// ¿Está manzanaA en la caja?
console.log("¿Existe la referencia a 'manzanaA'?",cajaDeFrutas.has(manzanaA)); // true

// ¿Está manzanaB en la caja?
console.log("¿Existe la referencia a 'manzanaB'?",cajaDeFrutas.has(manzanaB)); // false

// CASOS DE USO PRÁCTICOS
console.log("\n=== CASOS DE USO PRÁCTICOS ===");

// 1. Verificar si un usuario está en una lista de usuarios activos
const usuariosActivos = new Set(['user123', 'user456', 'user789']);
const usuarioVerificar = 'user123';

if (usuariosActivos.has(usuarioVerificar)) {
  console.log(`El usuario ${usuarioVerificar} está activo`);
} else {
  console.log(`El usuario ${usuarioVerificar} no está activo`);
}

// 2. Verificar si un producto está en un carrito de compras
const carrito = new Set(['laptop', 'mouse', 'teclado']);
const producto = 'mouse';

if (carrito.has(producto)) {
  console.log(`El producto ${producto} ya está en el carrito`);
} else {
  console.log(`Agregando ${producto} al carrito...`);
  carrito.add(producto);
}

// 3. Validar permisos de usuario
const permisos = new Set(['lectura', 'escritura', 'eliminacion']);
const permisoSolicitado = 'escritura';

if (permisos.has(permisoSolicitado)) {
  console.log(`El usuario tiene permiso de ${permisoSolicitado}`);
} else {
  console.log(`El usuario NO tiene permiso de ${permisoSolicitado}`);
}

console.log("\n=== FIN DE LA DOCUMENTACIÓN ===");

// ===========================================
// CONVERSIÓN ENTRE SETS Y ARRAYS
// ===========================================

/**
 * CONVERSIÓN SET ↔ ARRAY
 * 
 * Es muy común necesitar convertir entre Sets y Arrays
 * para aprovechar las ventajas de cada estructura de datos.
 */

console.log("\n=== CONVERSIÓN SET ↔ ARRAY ===");

// ===========================================
// DE ARRAY A SET
// ===========================================

console.log("\n--- DE ARRAY A SET ---");

// 1. Conversión básica (elimina duplicados automáticamente)
const arrayConDuplicados = [1, 2, 2, 3, 3, 4, 5, 5, 5];
const setSinDuplicados = new Set(arrayConDuplicados);

console.log("Array original:", arrayConDuplicados);
console.log("Set sin duplicados:", setSinDuplicados);

// 2. Conversión de array de strings
const nombres = ['Juan', 'María', 'Juan', 'Pedro', 'María', 'Ana'];
const nombresUnicos = new Set(nombres);

console.log("\nNombres originales:", nombres);
console.log("Nombres únicos:", nombresUnicos);

// 3. Conversión de array de objetos (cuidado: objetos diferentes)
const productos = [
  { id: 1, nombre: 'Laptop' },
  { id: 2, nombre: 'Mouse' },
  { id: 1, nombre: 'Laptop' } // Duplicado
];
const productosSet = new Set(productos);

console.log("\nProductos originales:", productos);
console.log("Productos en Set:", productosSet); // Los objetos se mantienen separados

// ===========================================
// DE SET A ARRAY
// ===========================================

console.log("\n--- DE SET A ARRAY ---");

// 1. Usando Array.from() (método recomendado)
const miSetConvertido = new Set(['a', 'b', 'c', 'd']);
const miArray = Array.from(miSetConvertido);

console.log("Set original:", miSetConvertido);
console.log("Array convertido:", miArray);

// 2. Usando spread operator (...)
const coloresSet = new Set(['rojo', 'verde', 'azul', 'amarillo']);
const coloresArray = [...coloresSet];

console.log("\nColores Set:", coloresSet);
console.log("Colores Array:", coloresArray);

// 3. Usando Array.from() con función de mapeo
const numerosSetConvertido = new Set([1, 2, 3, 4, 5]);
const numerosDuplicados = Array.from(numerosSetConvertido, num => num * 2);

console.log("\nNúmeros Set:", numerosSetConvertido);
console.log("Números duplicados:", numerosDuplicados);

// ===========================================
// CASOS DE USO PRÁCTICOS
// ===========================================

console.log("\n--- CASOS DE USO PRÁCTICOS ---");

// 1. Eliminar duplicados de un array
const emails = [
  'user1@email.com',
  'user2@email.com', 
  'user1@email.com',
  'user3@email.com',
  'user2@email.com'
];

// Método 1: Usando Set
const emailsUnicos = [...new Set(emails)];
console.log("Emails originales:", emails);
console.log("Emails únicos:", emailsUnicos);

// Método 2: Usando Array.from()
const emailsUnicos2 = Array.from(new Set(emails));
console.log("Emails únicos (método 2):", emailsUnicos2);

// 2. Combinar arrays y eliminar duplicados
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const array3 = [5, 6, 7, 8];

const combinado = [...new Set([...array1, ...array2, ...array3])];
console.log("\nArray 1:", array1);
console.log("Array 2:", array2);
console.log("Array 3:", array3);
console.log("Combinado sin duplicados:", combinado);

// 3. Filtrar elementos únicos de un array de objetos
const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' },
  { id: 1, nombre: 'Juan' }, // Duplicado
  { id: 3, nombre: 'Pedro' }
];

// Para objetos, necesitamos una estrategia diferente
const idsUnicos = [...new Set(usuarios.map(user => user.id))];
console.log("\nUsuarios:", usuarios);
console.log("IDs únicos:", idsUnicos);

// 4. Crear un array de elementos únicos basado en una propiedad
const productos2 = [
  { id: 1, categoria: 'Electrónicos' },
  { id: 2, categoria: 'Ropa' },
  { id: 3, categoria: 'Electrónicos' },
  { id: 4, categoria: 'Libros' }
];

const categoriasUnicas = [...new Set(productos2.map(p => p.categoria))];
console.log("\nProductos:", productos2);
console.log("Categorías únicas:", categoriasUnicas);

// ===========================================
// MÉTODOS ALTERNATIVOS
// ===========================================

console.log("\n--- MÉTODOS ALTERNATIVOS ---");

// Usando forEach para convertir Set a Array
const frutasSet = new Set(['manzana', 'banana', 'naranja']);
const frutasArray = [];
frutasSet.forEach(fruta => frutasArray.push(fruta));

console.log("Set de frutas:", frutasSet);
console.log("Array de frutas:", frutasArray);

// Usando for...of para convertir Set a Array
const animalesSet = new Set(['perro', 'gato', 'conejo']);
const animalesArray = [];
for (let animal of animalesSet) {
  animalesArray.push(animal);
}

console.log("\nSet de animales:", animalesSet);
console.log("Array de animales:", animalesArray);

console.log("\n=== FIN DE CONVERSIÓN SET ↔ ARRAY ===");




