# 🎯 FUNCIONES EN JAVASCRIPT - Guía para Principiantes

## 🤔 ¿Qué es una Función?

Una **función** es como una **máquina mágica** o una **receta de cocina** que hace algo específico cuando la usas.

### Ejemplos de la vida real:

- 🧃 **Licuadora**: Le pones frutas → presionas el botón → te da jugo
- 🎮 **Control de videojuegos**: Presionas un botón → el personaje salta
- 🧮 **Calculadora**: Le das números → presionas "=" → te da el resultado
- 🎨 **Máquina de pintar**: Le das un color → pinta la pared

En programación, una función es un **bloque de código** que:
1. Tiene un **nombre** (como "hacerJugo")
2. Puede recibir **ingredientes** (parámetros)
3. Hace algo específico
4. Puede **devolver** un resultado

---

## 🎪 ¿Por qué usar Funciones?

### Sin funciones (repetitivo y aburrido):
```javascript
console.log("¡Hola María!");
console.log("¡Hola Pedro!");
console.log("¡Hola Ana!");
console.log("¡Hola Luis!");
```

### Con funciones (¡mucho mejor!):
```javascript
function saludar(nombre) {
    console.log("¡Hola " + nombre + "!");
}

saludar("María");
saludar("Pedro");
saludar("Ana");
saludar("Luis");
```

**Ventajas:**
- ✅ Escribes menos código
- ✅ Es más fácil de entender
- ✅ Puedes reutilizar el código
- ✅ Si hay un error, solo lo arreglas en un lugar

---

## 🏗️ Cómo Crear una Función

### Estructura básica:

```javascript
function nombreDeLaFuncion(parametros) {
    // Código que hace algo
    return resultado; // Opcional
}
```

### Partes de una función:

1. **`function`** - Palabra mágica que dice "aquí empieza una función"
2. **Nombre** - Cómo se llama tu función (usa nombres descriptivos)
3. **Parámetros** - Los "ingredientes" que necesita (van entre paréntesis)
4. **Cuerpo** - El código que hace el trabajo (va entre llaves `{}`)
5. **`return`** - Lo que devuelve la función (opcional)

---

## 🎨 Tipos de Funciones

### 1️⃣ Función Simple (sin parámetros, sin return)

**Ejemplo:** Una función que saluda

```javascript
function saludar() {
    console.log("¡Hola! 👋");
}

// Usar la función (llamarla)
saludar(); // Imprime: ¡Hola! 👋
```

---

### 2️⃣ Función con Parámetros (recibe ingredientes)

**Ejemplo:** Una función que saluda a alguien específico

```javascript
function saludarPersona(nombre) {
    console.log("¡Hola " + nombre + "! 👋");
}

saludarPersona("María");  // ¡Hola María! 👋
saludarPersona("Pedro");  // ¡Hola Pedro! 👋
```

**Con varios parámetros:**

```javascript
function presentar(nombre, edad) {
    console.log("Me llamo " + nombre + " y tengo " + edad + " años");
}

presentar("Ana", 10);  // Me llamo Ana y tengo 10 años
presentar("Luis", 12); // Me llamo Luis y tengo 12 años
```

---

### 3️⃣ Función que Devuelve un Valor (con return)

**Ejemplo:** Una calculadora que suma

```javascript
function sumar(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}

let miSuma = sumar(5, 3);
console.log(miSuma); // 8

console.log(sumar(10, 20)); // 30
```

**¿Qué hace `return`?**
- 🎁 Devuelve un valor que puedes guardar o usar
- 🛑 Termina la función inmediatamente

---

### 4️⃣ Función Flecha (Arrow Function) - Forma moderna

**Forma tradicional:**
```javascript
function multiplicar(a, b) {
    return a * b;
}
```

**Forma flecha (más corta):**
```javascript
const multiplicar = (a, b) => {
    return a * b;
}

// O aún más corta:
const multiplicar = (a, b) => a * b;
```

---

## 🎮 Ejemplos Divertidos

### Ejemplo 1: Máquina de Hacer Jugo 🧃

```javascript
function hacerJugo(fruta, cantidad) {
    console.log("🧃 Haciendo jugo de " + fruta);
    console.log("📊 Cantidad: " + cantidad + " vasos");
    return "¡Jugo de " + fruta + " listo!";
}

let miJugo = hacerJugo("naranja", 2);
console.log(miJugo); // ¡Jugo de naranja listo!
```

---

### Ejemplo 2: Calculadora de Edad de Perro 🐕

```javascript
function edadPerruna(edadHumana) {
    let edadPerro = edadHumana * 7;
    return edadPerro;
}

console.log("Si tienes 10 años, en edad de perro tienes: " + edadPerruna(10) + " años");
// Si tienes 10 años, en edad de perro tienes: 70 años
```

---

### Ejemplo 3: Verificador de Contraseña 🔐

```javascript
function esContraseñaSegura(contraseña) {
    if (contraseña.length >= 8) {
        return "✅ Contraseña segura";
    } else {
        return "❌ Contraseña muy corta";
    }
}

console.log(esContraseñaSegura("abc"));      // ❌ Contraseña muy corta
console.log(esContraseñaSegura("abc12345")); // ✅ Contraseña segura
```

---

### Ejemplo 4: Generador de Mensajes de Cumpleaños 🎂

```javascript
function felicitarCumpleaños(nombre, edad) {
    let mensaje = "🎉 ¡Feliz cumpleaños " + nombre + "! 🎂\n";
    mensaje += "¡Ya tienes " + edad + " años! 🎈";
    
    // Agregar velas según la edad
    mensaje += "\n🕯️".repeat(edad);
    
    return mensaje;
}

console.log(felicitarCumpleaños("María", 10));
```

---

### Ejemplo 5: Calculadora Completa 🧮

```javascript
function calculadora(numero1, numero2, operacion) {
    if (operacion === "sumar") {
        return numero1 + numero2;
    } else if (operacion === "restar") {
        return numero1 - numero2;
    } else if (operacion === "multiplicar") {
        return numero1 * numero2;
    } else if (operacion === "dividir") {
        return numero1 / numero2;
    } else {
        return "❌ Operación no válida";
    }
}

console.log(calculadora(10, 5, "sumar"));       // 15
console.log(calculadora(10, 5, "restar"));      // 5
console.log(calculadora(10, 5, "multiplicar")); // 50
console.log(calculadora(10, 5, "dividir"));     // 2
```

---

## 🎯 Parámetros por Defecto

Puedes dar valores por defecto a los parámetros:

```javascript
function saludar(nombre = "amigo") {
    console.log("¡Hola " + nombre + "!");
}

saludar("María"); // ¡Hola María!
saludar();        // ¡Hola amigo! (usa el valor por defecto)
```

---

## 🔄 Funciones que Llaman a Otras Funciones

```javascript
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function calcularPromedio(num1, num2) {
    let suma = sumar(num1, num2);
    let promedio = suma / 2;
    return promedio;
}

console.log(calcularPromedio(10, 20)); // 15
```

---

## 🎪 Scope (Alcance de las Variables)

### Variables Locales (dentro de la función):

```javascript
function jugar() {
    let juguete = "pelota"; // Solo existe dentro de la función
    console.log(juguete);
}

jugar(); // pelota
// console.log(juguete); // ❌ Error: juguete no existe aquí
```

### Variables Globales (fuera de la función):

```javascript
let nombre = "María"; // Variable global

function saludar() {
    console.log("¡Hola " + nombre + "!"); // Puede usar la variable global
}

saludar(); // ¡Hola María!
console.log(nombre); // María (también funciona aquí)
```

---

## 📊 Comparación: Función vs No Función

### ❌ Sin función (código repetido):
```javascript
console.log("El área del cuadrado 1 es: " + (5 * 5));
console.log("El área del cuadrado 2 es: " + (10 * 10));
console.log("El área del cuadrado 3 es: " + (7 * 7));
```

### ✅ Con función (código reutilizable):
```javascript
function calcularAreaCuadrado(lado) {
    return lado * lado;
}

console.log("El área del cuadrado 1 es: " + calcularAreaCuadrado(5));
console.log("El área del cuadrado 2 es: " + calcularAreaCuadrado(10));
console.log("El área del cuadrado 3 es: " + calcularAreaCuadrado(7));
```

---

## 🎯 Ejercicios para Practicar

### Ejercicio 1: Fácil 🟢
Crea una función que diga "Buenos días".

<details>
<summary>Ver solución</summary>

```javascript
function buenosDias() {
    console.log("¡Buenos días! ☀️");
}

buenosDias();
```
</details>

---

### Ejercicio 2: Fácil 🟢
Crea una función que reciba un nombre y diga "Buenas noches [nombre]".

<details>
<summary>Ver solución</summary>

```javascript
function buenasNoches(nombre) {
    console.log("Buenas noches " + nombre + " 🌙");
}

buenasNoches("María");
```
</details>

---

### Ejercicio 3: Medio 🟡
Crea una función que calcule el área de un rectángulo (base × altura).

<details>
<summary>Ver solución</summary>

```javascript
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

console.log(calcularAreaRectangulo(5, 10)); // 50
```
</details>

---

### Ejercicio 4: Medio 🟡
Crea una función que determine si un número es par o impar.

<details>
<summary>Ver solución</summary>

```javascript
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es PAR";
    } else {
        return "El número " + numero + " es IMPAR";
    }
}

console.log(esParOImpar(4)); // El número 4 es PAR
console.log(esParOImpar(7)); // El número 7 es IMPAR
```
</details>

---

### Ejercicio 5: Difícil 🔴
Crea una función que convierta grados Celsius a Fahrenheit.
Fórmula: F = (C × 9/5) + 32

<details>
<summary>Ver solución</summary>

```javascript
function celsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log(celsiusAFahrenheit(0));   // 32
console.log(celsiusAFahrenheit(100)); // 212
console.log(celsiusAFahrenheit(25));  // 77
```
</details>

---

### Ejercicio 6: Difícil 🔴
Crea una función que calcule el precio final con descuento.

<details>
<summary>Ver solución</summary>

```javascript
function calcularPrecioConDescuento(precio, descuento) {
    let montoDescuento = precio * (descuento / 100);
    let precioFinal = precio - montoDescuento;
    return precioFinal;
}

console.log(calcularPrecioConDescuento(100, 20)); // 80
console.log(calcularPrecioConDescuento(50, 10));  // 45
```
</details>

---

## 💡 Consejos Importantes

### 1. Usa nombres descriptivos
```javascript
// ❌ MAL
function f(x) {
    return x * 2;
}

// ✅ BIEN
function duplicarNumero(numero) {
    return numero * 2;
}
```

### 2. Una función debe hacer UNA cosa
```javascript
// ❌ MAL - hace muchas cosas
function hacerTodo(nombre, edad, ciudad) {
    console.log(nombre);
    console.log(edad);
    console.log(ciudad);
    return nombre + edad + ciudad;
}

// ✅ BIEN - funciones específicas
function mostrarNombre(nombre) {
    console.log(nombre);
}

function mostrarEdad(edad) {
    console.log(edad);
}
```

### 3. Usa return cuando necesites el resultado
```javascript
// Si solo quieres mostrar algo:
function saludar() {
    console.log("Hola");
}

// Si necesitas usar el resultado después:
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado * 2); // Puedes usar el resultado
```

---

## 🎭 Analogías para Recordar

| Concepto | Analogía |
|----------|----------|
| **Función** | 🎰 Máquina que hace algo |
| **Parámetros** | 🎫 Ingredientes que le das |
| **Return** | 🎁 Regalo que te devuelve |
| **Llamar función** | 🔘 Presionar el botón |
| **Nombre función** | 🏷️ Etiqueta de la máquina |

---

## 🎉 Resumen

**Una función es como una receta:**

1. **Tiene un nombre** → "Receta de galletas"
2. **Recibe ingredientes** → (harina, azúcar, huevos)
3. **Hace algo** → Mezcla, hornea
4. **Devuelve resultado** → ¡Galletas deliciosas! 🍪

**Recuerda:**
- 🎯 Las funciones hacen tu código más organizado
- 🔄 Puedes reutilizar funciones muchas veces
- 📦 Los parámetros son como cajas que reciben valores
- 🎁 `return` devuelve un resultado
- 💪 ¡Practica creando tus propias funciones!

---

## 📚 Recursos Adicionales

- Archivo de ejemplos: `funciones.js`
- Practica ejecutando: `node basico/funciones.js`

---

## 🚀 Siguiente Paso

Ahora que entiendes las funciones, puedes:
- Combinarlas con bucles
- Usarlas con arrays
- Crear programas más complejos

¡Sigue practicando y te volverás un experto en funciones! 🌟
