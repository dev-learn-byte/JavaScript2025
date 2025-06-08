// Ejemplo básico de Set
const miSet = new Set();

miSet.add(1);
miSet.add(2);
miSet.add(2); // Este valor no se agregará porque ya existe
miSet.add('hola');
miSet.add({ nombre: 'Juan' });

console.log(miSet); // Set(4) { 1, 2, 'hola', { nombre: 'Juan' } }

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
