# 🗺️ MAP vs SET - Guía Visual para Principiantes 📦

## 📚 Índice
1. [¿Qué es Map?](#qué-es-map)
2. [¿Qué es Set?](#qué-es-set)
3. [Diferencias Principales](#diferencias-principales)
4. [Métodos y Propiedades](#métodos-y-propiedades)
5. [Ejemplos Prácticos](#ejemplos-prácticos)
6. [Cuándo Usar Cada Uno](#cuándo-usar-cada-uno)

---

## 🗺️ ¿Qué es Map?

**Map es como un DICCIONARIO** 📖

Imagina que tienes un diccionario donde cada palabra tiene su significado:
- **Palabra** (clave) → **Significado** (valor)
- "perro" → "animal que ladra"
- "gato" → "animal que maúlla"

### Características de Map:
- ✅ Guarda **PARES** de datos: clave → valor
- ✅ Cada clave tiene su valor asociado
- ✅ Las claves son **únicas** (no se repiten)
- ✅ Puedes buscar valores por su clave

### Ejemplo Visual:
```
MAP = Agenda de Teléfonos
┌─────────────┬──────────────┐
│   NOMBRE    │   TELÉFONO   │
│   (clave)   │    (valor)   │
├─────────────┼──────────────┤
│   "Mamá"    │  "555-0001"  │
│   "Papá"    │  "555-0002"  │
│  "Abuela"   │  "555-0003"  │
└─────────────┴──────────────┘
```

---

## 📦 ¿Qué es Set?

**Set es como una CAJA ESPECIAL** 🎁

Imagina una caja donde:
- ❌ **NO** puedes tener cosas repetidas
- ✅ Solo guardas cosas **únicas**
- ✅ No hay etiquetas, solo valores

### Características de Set:
- ✅ Guarda solo **VALORES** (sin claves)
- ✅ **NO** permite duplicados
- ✅ Perfecto para listas únicas
- ✅ Automáticamente elimina repetidos

### Ejemplo Visual:
```
SET = Colección de Stickers Únicos
┌─────────────────────────────┐
│     STICKERS (valores)      │
├─────────────────────────────┤
│        "Pikachu"            │
│         "Mario"             │
│         "Sonic"             │
│    (no hay repetidos)       │
└─────────────────────────────┘
```

---

## 🔍 Diferencias Principales

### Tabla Comparativa:

| Característica | 🗺️ MAP | 📦 SET |
|----------------|---------|--------|
| **Estructura** | Clave → Valor | Solo Valores |
| **Duplicados** | Claves únicas, valores pueden repetirse | No permite duplicados |
| **Búsqueda** | Por clave | Por valor |
| **Uso Principal** | Relacionar dos cosas | Guardar cosas únicas |
| **Ejemplo** | Nombre → Edad | Lista de nombres |

### Analogía Simple:

```
🗺️ MAP = DICCIONARIO
   "perro" → "animal que ladra"
   "gato"  → "animal que maúlla"
   (palabra + significado)

📦 SET = LISTA DE INVITADOS
   ["Juan", "María", "Pedro"]
   (solo nombres, sin repetir)
```

---

## 🛠️ Métodos y Propiedades

### Métodos de MAP:

| Método | Descripción | Ejemplo |
|--------|-------------|---------|
| `set(clave, valor)` | Agregar o actualizar | `map.set('Juan', 25)` |
| `get(clave)` | Obtener valor | `map.get('Juan')` → 25 |
| `has(clave)` | Verificar si existe | `map.has('Juan')` → true |
| `delete(clave)` | Eliminar | `map.delete('Juan')` |
| `clear()` | Vaciar todo | `map.clear()` |
| `size` | Cantidad de elementos | `map.size` → 3 |

### Métodos de SET:

| Método | Descripción | Ejemplo |
|--------|-------------|---------|
| `add(valor)` | Agregar elemento | `set.add('Juan')` |
| `has(valor)` | Verificar si existe | `set.has('Juan')` → true |
| `delete(valor)` | Eliminar | `set.delete('Juan')` |
| `clear()` | Vaciar todo | `set.clear()` |
| `size` | Cantidad de elementos | `set.size` → 3 |

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Tienda de Dulces (MAP)

```javascript
// MAP - Relacionar producto con precio
const precios = new Map([
    ['Chocolate', 5],
    ['Gomitas', 3],
    ['Paleta', 2]
]);

console.log(precios.get('Chocolate')); // 5
console.log(precios.has('Chicle'));    // false
console.log(precios.size);             // 3
```

**¿Por qué MAP?** Porque necesitamos relacionar cada dulce con su precio.

### Ejemplo 2: Lista de Invitados (SET)

```javascript
// SET - Lista única de invitados
const invitados = new Set();

invitados.add('Juan');
invitados.add('María');
invitados.add('Juan');  // No se agrega, ya existe

console.log(invitados);           // Set { 'Juan', 'María' }
console.log(invitados.has('Juan')); // true
console.log(invitados.size);      // 2
```

**¿Por qué SET?** Porque solo queremos nombres únicos, sin repetir.

### Ejemplo 3: Agenda Telefónica (MAP)

```javascript
// MAP - Nombre → Teléfono
const agenda = new Map();

agenda.set('Mamá', '555-0001');
agenda.set('Papá', '555-0002');
agenda.set('Abuela', '555-0003');

console.log(agenda.get('Mamá'));  // '555-0001'
```

### Ejemplo 4: Colores Únicos (SET)

```javascript
// SET - Solo colores diferentes
const colores = new Set(['rojo', 'azul', 'verde', 'rojo']);

console.log(colores);  // Set { 'rojo', 'azul', 'verde' }
// El segundo 'rojo' no se agregó
```

---

## 🤔 ¿Cuándo Usar Cada Uno?

### Usa 🗺️ MAP cuando:

✅ Necesites **relacionar dos cosas**
- Nombre → Teléfono
- Producto → Precio
- Estudiante → Calificación
- País → Capital
- Usuario → Contraseña

**Ejemplo Real:**
```javascript
// Calificaciones de estudiantes
const calificaciones = new Map([
    ['Juan', 9.5],
    ['María', 10],
    ['Pedro', 8.5]
]);
```

### Usa 📦 SET cuando:

✅ Solo quieras **valores únicos**
- Lista de invitados (sin repetir)
- Colores disponibles
- Números ganadores
- Tags únicos
- IDs únicos

**Ejemplo Real:**
```javascript
// Eliminar duplicados de un array
const numeros = [1, 2, 2, 3, 3, 4, 5, 5];
const unicos = new Set(numeros);
console.log(unicos); // Set { 1, 2, 3, 4, 5 }
```

---

## 🎯 Resumen Rápido

### MAP 🗺️
```
┌─────────────────────────────────┐
│  MAP = DICCIONARIO              │
│  • Clave → Valor                │
│  • Buscar por clave             │
│  • Relacionar dos cosas         │
│  • Ejemplo: agenda telefónica   │
└─────────────────────────────────┘
```

### SET 📦
```
┌─────────────────────────────────┐
│  SET = CAJA DE ÚNICOS           │
│  • Solo valores                 │
│  • No duplicados                │
│  • Lista especial               │
│  • Ejemplo: lista de invitados  │
└─────────────────────────────────┘
```

---

## 🎓 Ejercicios para Practicar

### Nivel Principiante:
1. Crea un Map con 3 frutas y sus precios
2. Crea un Set con 5 colores favoritos
3. Agrega y elimina elementos de ambos

### Nivel Intermedio:
4. Crea un Map de estudiantes y sus edades
5. Usa Set para eliminar duplicados de un array
6. Recorre un Map con forEach

### Nivel Avanzado:
7. Combina Map y Set (cada persona tiene hobbies únicos)
8. Convierte un array con duplicados a Set y luego a array
9. Crea un sistema de inventario con Map

---

## 📖 Recursos Adicionales

- **Archivo de ejemplos:** `map-propiedas-metodos.js`
- **Ejemplos de Set:** `set.js`
- **Método map() de arrays:** `map.js` (diferente a Map)

---

## 🌟 Consejos Finales

1. **MAP** es tu amigo cuando necesitas un "diccionario"
2. **SET** es perfecto para listas sin duplicados
3. Ambos son más rápidos que arrays para búsquedas
4. Practica con ejemplos de la vida real
5. No confundas `Map` (estructura) con `.map()` (método de arrays)

---

¡Ahora eres un experto en Map y Set! 🎉

**Recuerda:**
- 🗺️ MAP = Etiqueta + Valor
- 📦 SET = Solo valores únicos

 