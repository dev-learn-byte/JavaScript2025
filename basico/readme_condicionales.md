# Condicionales en JavaScript

Los condicionales permiten ejecutar diferentes bloques de código según se cumplan o no ciertas condiciones. Son fundamentales para controlar el flujo de los programas.

## 1. Sentencia `if`
La sentencia `if` evalúa una condición. Si es verdadera (`true`), ejecuta el bloque de código asociado.

```js
if (condicion) {
  // Código a ejecutar si la condición es verdadera
}
```

**Ejemplo:**
```js
let edad = 18;
if (edad >= 18) {
  console.log('Eres mayor de edad');
}
```

## 2. Sentencia `if...else`
Permite ejecutar un bloque de código si la condición es verdadera y otro si es falsa.

```js
if (condicion) {
  // Código si la condición es verdadera
} else {
  // Código si la condición es falsa
}
```

**Ejemplo:**
```js
let esDia = false;
if (esDia) {
  console.log('Es de día');
} else {
  console.log('Es de noche');
}
```

## 3. Sentencia `if...else if...else`
Permite evaluar múltiples condiciones en orden.

```js
if (condicion1) {
  // Código si condicion1 es verdadera
} else if (condicion2) {
  // Código si condicion2 es verdadera
} else {
  // Código si ninguna condición anterior es verdadera
}
```

**Ejemplo:**
```js
let nota = 7;
if (nota >= 9) {
  console.log('Excelente');
} else if (nota >= 6) {
  console.log('Aprobado');
} else {
  console.log('Reprobado');
}
```

## 4. Sentencia `switch`
Permite comparar una variable o expresión contra múltiples valores posibles (casos).

```js
switch (expresion) {
  case valor1:
    // Código si expresion === valor1
    break;
  case valor2:
    // Código si expresion === valor2
    break;
  default:
    // Código si ningún caso coincide
}
```

**Ejemplo:**
```js
let dia = 'lunes';
switch (dia) {
  case 'lunes':
    console.log('Inicio de semana');
    break;
  case 'viernes':
    console.log('Fin de semana cercano');
    break;
  default:
    console.log('Día normal');
}
```

## 5. Operador ternario
Es una forma abreviada de escribir un `if...else`.

```js
condicion ? valorSiVerdadero : valorSiFalso;
```

**Ejemplo:**
```js
let edad = 20;
let mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
console.log(mensaje);
```

## 6. Buenas prácticas
- Utiliza llaves `{}` incluso para bloques de una sola línea para mejorar la legibilidad.
- Evita anidar demasiados condicionales; considera usar `switch` o funciones auxiliares.
- Usa el operador ternario solo para condiciones simples.
- Compara siempre con `===` para evitar conversiones de tipo inesperadas.

---

**Referencias:**
- [MDN Web Docs: if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN Web Docs: switch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN Web Docs: Operador condicional (ternario)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) 