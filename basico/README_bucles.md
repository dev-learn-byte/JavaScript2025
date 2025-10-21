# 🔄 BUCLES EN JAVASCRIPT - Guía para Principiantes

## 🤔 ¿Qué es un Bucle?

Un **bucle** es como cuando haces la misma cosa varias veces. Por ejemplo:

- 🧼 Lavar 5 platos (uno por uno)
- 🎈 Inflar 10 globos para tu fiesta
- 📚 Leer 3 capítulos de un libro
- 🏃 Correr 4 vueltas en el parque

En programación, los bucles nos ayudan a **repetir acciones** sin escribir el mismo código muchas veces.

---

## 🎯 Tipos de Bucles

### 1️⃣ Bucle FOR - "Para hacer algo X veces"

**¿Cuándo usarlo?** Cuando sabes **exactamente cuántas veces** quieres repetir algo.

**Ejemplo de la vida real:** Contar del 1 al 5 con tus dedos 👆

```javascript
// Contar del 1 al 5
for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
}

// Resultado:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5
```

**Partes del bucle FOR:**
```javascript
for (inicio; condición; incremento) {
    // código a repetir
}
```

- **inicio**: Desde dónde empezamos (let i = 1)
- **condición**: Hasta cuándo seguimos (i <= 5)
- **incremento**: Cómo avanzamos (i++)

---

### 2️⃣ Bucle WHILE - "Mientras algo sea verdad"

**¿Cuándo usarlo?** Cuando quieres repetir algo **mientras** una condición sea verdadera.

**Ejemplo de la vida real:** Comer galletas mientras tengas hambre 🍪

```javascript
let galletas = 5;

while (galletas > 0) {
    console.log("🍪 Comiendo galleta... Quedan " + galletas);
    galletas--;
}

// Resultado:
// 🍪 Comiendo galleta... Quedan 5
// 🍪 Comiendo galleta... Quedan 4
// 🍪 Comiendo galleta... Quedan 3
// 🍪 Comiendo galleta... Quedan 2
// 🍪 Comiendo galleta... Quedan 1
```

**⚠️ CUIDADO:** Si la condición siempre es verdadera, ¡el bucle nunca termina! (bucle infinito)

---

### 3️⃣ Bucle DO-WHILE - "Hacer al menos una vez"

**¿Cuándo usarlo?** Cuando quieres hacer algo **al menos una vez**, y luego repetir si se cumple una condición.

**Ejemplo de la vida real:** Tocar la puerta de tu amigo 🚪

```javascript
let intentos = 0;

do {
    intentos++;
    console.log("🚪 Toc toc... (intento " + intentos + ")");
} while (intentos < 3);

// Resultado:
// 🚪 Toc toc... (intento 1)
// 🚪 Toc toc... (intento 2)
// 🚪 Toc toc... (intento 3)
```

**Diferencia con WHILE:** DO-WHILE siempre se ejecuta **al menos una vez**, aunque la condición sea falsa desde el inicio.

---

### 4️⃣ Bucle FOR...OF - "Para cada elemento de una lista"

**¿Cuándo usarlo?** Cuando quieres recorrer **todos los elementos** de un array (lista).

**Ejemplo de la vida real:** Sacar útiles de tu mochila 🎒

```javascript
let mochila = ["📚 Libro", "✏️ Lápiz", "📐 Regla", "🖍️ Colores"];

for (let util of mochila) {
    console.log("Sacando: " + util);
}

// Resultado:
// Sacando: 📚 Libro
// Sacando: ✏️ Lápiz
// Sacando: 📐 Regla
// Sacando: 🖍️ Colores
```

---

## 🎮 Ejemplos Divertidos

### Ejemplo 1: Lanzamiento de Cohete 🚀

```javascript
for (let cuenta = 10; cuenta >= 0; cuenta--) {
    if (cuenta === 0) {
        console.log("🚀 ¡DESPEGUE!");
    } else {
        console.log(cuenta + "...");
    }
}
```

### Ejemplo 2: Tabla de Multiplicar 🔢

```javascript
for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}
```

### Ejemplo 3: Días de la Semana 📅

```javascript
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (let dia of dias) {
    if (dia === "Sábado" || dia === "Domingo") {
        console.log("🎉 " + dia + " - ¡No hay clases!");
    } else {
        console.log("📚 " + dia + " - Día de escuela");
    }
}
```

---

## 🛑 Palabras Especiales en Bucles

### BREAK - Salir del bucle

```javascript
// Buscar un número específico
for (let i = 1; i <= 10; i++) {
    console.log("Número: " + i);
    if (i === 5) {
        console.log("¡Encontré el 5! Saliendo...");
        break; // Sale del bucle
    }
}
```

### CONTINUE - Saltar a la siguiente iteración

```javascript
// Mostrar solo números impares
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta los números pares
    }
    console.log("Número impar: " + i);
}
```

---

## 📊 Comparación Rápida

| Bucle | ¿Cuándo usar? | Ejemplo |
|-------|---------------|---------|
| **FOR** | Sabes cuántas veces repetir | Contar del 1 al 10 |
| **WHILE** | Repetir mientras algo sea verdad | Comer mientras tengas hambre |
| **DO-WHILE** | Hacer al menos una vez | Tocar la puerta |
| **FOR...OF** | Recorrer una lista | Sacar cosas de tu mochila |

---

## 🎯 Ejercicios para Practicar

### Ejercicio 1: Fácil 🟢
Escribe un bucle que cuente del 1 al 10.

<details>
<summary>Ver solución</summary>

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```
</details>

### Ejercicio 2: Medio 🟡
Escribe un bucle que sume todos los números del 1 al 5.

<details>
<summary>Ver solución</summary>

```javascript
let suma = 0;
for (let i = 1; i <= 5; i++) {
    suma += i;
}
console.log("La suma es: " + suma); // 15
```
</details>

### Ejercicio 3: Medio 🟡
Escribe un bucle que muestre solo los números pares del 2 al 20.

<details>
<summary>Ver solución</summary>

```javascript
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
```
</details>

### Ejercicio 4: Difícil 🔴
Escribe un bucle que recorra un array de frutas y cuente cuántas hay.

<details>
<summary>Ver solución</summary>

```javascript
let frutas = ["🍎", "🍌", "🍊", "🍇", "🍓"];
let contador = 0;

for (let fruta of frutas) {
    contador++;
    console.log("Fruta " + contador + ": " + fruta);
}

console.log("Total de frutas: " + contador);
```
</details>

---

## 💡 Consejos Importantes

1. **Evita bucles infinitos**: Asegúrate de que tu condición eventualmente sea falsa.
   ```javascript
   // ❌ MAL - Bucle infinito
   while (true) {
       console.log("Esto nunca termina");
   }
   
   // ✅ BIEN
   let contador = 0;
   while (contador < 5) {
       console.log(contador);
       contador++; // No olvides incrementar
   }
   ```

2. **Usa nombres descriptivos**: En lugar de `i`, usa nombres que tengan sentido.
   ```javascript
   // ❌ Poco claro
   for (let i = 0; i < 5; i++) { }
   
   // ✅ Más claro
   for (let globo = 0; globo < 5; globo++) { }
   ```

3. **Elige el bucle correcto**: Usa el bucle que mejor se adapte a tu situación.

---

## 🎉 ¡Felicidades!

Ahora sabes cómo usar bucles en JavaScript. Los bucles son muy poderosos y te ayudarán a escribir código más eficiente.

**Recuerda:**
- 🔄 Los bucles repiten acciones
- 🎯 Cada tipo de bucle tiene su uso específico
- 💪 La práctica hace al maestro

---

## 📚 Recursos Adicionales

- Archivo de ejemplos: `bucles.js`
- Practica ejecutando: `node basico/bucles.js`

¡Sigue practicando y te volverás un experto! 🚀
