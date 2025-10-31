# 🔧 Nivel 2: Transformaciones y Lógica ⚡

```
  _                     __                            
 | |                   / _|                           
 | |_ _ __ __ _ _ __  | |_ ___  _ __ _ __ ___  ___   
 | __| '__/ _` | '_ \ |  _/ _ \| '__| '_ ` _ \/ __|  
 | |_| | | (_| | | | || || (_) | |  | | | | | \__ \  
  \__|_|  \__,_|_| |_||_| \___/|_|  |_| |_| |_|___/  
                                                       
```

> **🎯 Objetivo:** Dominar conversiones de tipos, operadores avanzados, comparaciones y control de flujo 💻✨

---

## 🔀 Reto 1: Conversiones Explícitas

**📝 Descripción:** Convierte datos entre diferentes tipos usando funciones 🎭

**⚡ Funcionalidad:** Usar `String()`, `Number()` y `Boolean()` para convertir tipos de datos

**✅ Casos de prueba:**
- ✅ `String(8)` → `"8"` (number a string) 📝
- ✅ `Number("25")` → `25` (string a number) 🔢
- ✅ `Boolean(1)` → `true` (number a boolean) ✅
- ✅ `Boolean(0)` → `false` (0 es falsy) ❌
- ✅ Todos los tipos convertidos correctamente 🎯

**🏗️ Código base:**
```javascript
const age = '25';
const price = '19.99';
const isActive = 1;
// Convert age to number
// Convert price to number
// Convert isActive to boolean
// Show original values and their types
// Show converted values and their types
```

**💡 Tips:**
- 🔹 `String(value)` convierte cualquier cosa a texto 📝
- 🔹 `Number(value)` convierte a número 🔢
- 🔹 `Boolean(value)` convierte a true/false ✅❌
- 🔹 Usa `typeof` para verificar el tipo antes y después 🔍

**🚀 Motivación:** ¡Controlar los tipos de datos es esencial para evitar bugs! 🐛✨

---

## ⚡ Reto 2: Operador Unario +

**📝 Descripción:** Convierte strings a números de forma rápida y elegante ✨

**⚡ Funcionalidad:** Usar el operador unario `+` y funciones `parseInt()` / `parseFloat()`

**✅ Casos de prueba:**
- ✅ `+'42'` → `42` (conversión rápida) ⚡
- ✅ `+'3.14'` → `3.14` (funciona con decimales) 🔢
- ✅ `parseInt('42px')` → `42` (extrae el número) 🎯
- ✅ `parseFloat('3.14')` → `3.14` (mantiene decimales) 📊
- ✅ `+'abc'` → `NaN` (no es un número) 🤯

**🏗️ Código base:**
```javascript
const year = '2024';
const pi = '3.14159';
const width = '150px';
const height = '200.5px';
// Convert year using unary +
// Convert pi using unary +
// Extract number from width using parseInt
// Extract number from height using parseFloat
// Show all results
```

**💡 Tips:**
- 🔹 `+value` es la forma más corta de convertir a número ⚡
- 🔹 `parseInt()` solo toma la parte entera 🔢
- 🔹 `parseFloat()` respeta los decimales 📊
- 🔹 `parseInt('42px')` extrae 42, ignora 'px' 🎯

**🚀 Motivación:** ¡El operador unario + es el truco favorito de los pros! ⚡✨

---

## 💡 Reto 3: Truthy y Falsy

**📝 Descripción:** Identifica valores que son verdaderos o falsos en JavaScript 🕵️‍♂️

**⚡ Funcionalidad:** Evaluar valores truthy/falsy y manejar `NaN`

**✅ Casos de prueba:**
- ✅ Valores **falsy:** `0`, `''`, `null`, `undefined`, `NaN`, `false` ❌
- ✅ Valores **truthy:** cualquier número (excepto 0), strings no vacíos, objetos ✅
- ✅ `isNaN('abc')` → `true` (no es número) 🤯
- ✅ `Number.isNaN('abc')` → `false` (es más estricto) 🎯
- ✅ Detectar correctamente valores truthy/falsy 💡

**🏗️ Código base:**
```javascript
const values = [0, '', 'Hola', null, undefined, 8, false, true, NaN, 'false'];
// Check each value if it's truthy or falsy
// Show: "Value X is truthy/falsy"
// Test isNaN vs Number.isNaN with different values
```

**💡 Tips:**
- 🔹 **Falsy:** `0`, `''`, `null`, `undefined`, `NaN`, `false` ❌
- 🔹 **Truthy:** todo lo demás ✅
- 🔹 `isNaN()` convierte a número primero 🔄
- 🔹 `Number.isNaN()` es más preciso (no convierte) 🎯
- 🔹 Usa `if (value)` para probar truthy/falsy 💡

**🚀 Motivación:** ¡Entender truthy/falsy te salvará de muchos bugs! 💪✨

---

## 🎲 Reto 4: Operadores Matemáticos Avanzados

**📝 Descripción:** Usa operadores matemáticos avanzados 🧮

**⚡ Funcionalidad:** Aplicar `%` (módulo), `**` (potencia), `++` (incremento), `--` (decremento)

**✅ Casos de prueba:**
- ✅ `10 % 3` → `2` (residuo de la división) 📊
- ✅ `2 ** 3` → `8` (2 elevado a la 3) 📈
- ✅ `++counter` incrementa antes de usar ⬆️
- ✅ `counter++` usa y luego incrementa 🔄
- ✅ `--counter` decrementa antes de usar ⬇️

**🏗️ Código base:**
```javascript
const number = 17;
const divisor = 5;
// Calculate remainder (módulo)
// Calculate 2 to the power of 8
// Create a counter and demonstrate ++ (pre and post)
// Demonstrate -- (pre and post)
// Show all results
```

**💡 Tips:**
- 🔹 `%` te da el residuo: `10 % 3 = 1` 📊
- 🔹 `**` es potencia: `2 ** 3 = 8` 📈
- 🔹 `++variable` incrementa primero ⬆️
- 🔹 `variable++` incrementa después 🔄
- 🔹 `%` es útil para saber si un número es par/impar 🎯

**🚀 Motivación:** ¡Estos operadores son súper útiles en algoritmos! 🎲✨

---

## 🔗 Reto 5: Concatenación vs Suma

**📝 Descripción:** Entiende la diferencia entre concatenar y sumar con el operador `+` 🎭

**⚡ Funcionalidad:** Diferenciar cuándo `+` suma números o concatena strings

**✅ Casos de prueba:**
- ✅ `5 + 3` → `8` (suma de números) ➕
- ✅ `'5' + '3'` → `'53'` (concatenación de strings) 🔗
- ✅ `'5' + 3` → `'53'` (number se convierte a string) 🎭
- ✅ `5 + 3 + '2'` → `'82'` (suma primero, luego concatena) 🔄
- ✅ `'2' + 5 + 3` → `'253'` (concatena todo) 📝

**🏗️ Código base:**
```javascript
const num1 = 5;
const num2 = 3;
const str1 = '5';
const str2 = '3';
// Number + Number
// String + String
// String + Number
// Number + Number + String
// String + Number + Number
// Show results and explain what happened
```

**💡 Tips:**
- 🔹 Si AMBOS son números, se suman ➕
- 🔹 Si UNO es string, se concatena 🔗
- 🔹 JavaScript evalúa de izquierda a derecha ⬅️➡️
- 🔹 `5 + 3 + '2'` = `(5 + 3) + '2'` = `'82'` 🎯
- 🔹 Usa `Number()` o `+` para forzar conversión a número ⚡

**🚀 Motivación:** ¡Este es uno de los bugs más comunes en JavaScript! 🐛✨

---

## ⚖️ Reto 6: Comparaciones de Igualdad

**📝 Descripción:** Compara valores usando los operadores correctos 🔍

**⚡ Funcionalidad:** Usar `===`, `!==`, `==`, `!=` y entender sus diferencias

**✅ Casos de prueba:**
- ✅ `5 === 5` → `true` (estricta, mismo tipo y valor) ✅
- ✅ `5 === '5'` → `false` (estricta, diferentes tipos) ❌
- ✅ `5 == '5'` → `true` (suelta, convierte tipos) 🎭
- ✅ `0 == false` → `true` (suelta, 0 es falsy) 💡
- ✅ `0 === false` → `false` (estricta, diferentes tipos) ⚡

**🏗️ Código base:**
```javascript
const number = 8;
const string = '8';
const zero = 0;
const emptyString = '';
// Compare number === string
// Compare number == string
// Compare zero === false
// Compare zero == false
// Compare emptyString === false
// Compare emptyString == false
// Show results and explain the differences
```

**💡 Tips:**
- 🔹 `===` compara valor Y tipo (estricta) ⚡
- 🔹 `==` convierte tipos antes de comparar (suelta) 🎭
- 🔹 **SIEMPRE usa `===` y `!==`** 💎
- 🔹 `==` puede dar resultados inesperados 🤯
- 🔹 `!==` es "no igual estricto" 🚫

**🚀 Motivación:** ¡Usar `===` te evitará horas de debugging! 🔍✨

---

## 🔀 Reto 7: Condicionales If/Else

**📝 Descripción:** Toma decisiones en tu código usando condicionales 🧠

**⚡ Funcionalidad:** Usar `if`, `else if`, `else` para controlar el flujo del programa

**✅ Casos de prueba:**
- ✅ Si edad ≥ 18 → "Mayor de edad" 👨
- ✅ Si edad < 18 y edad ≥ 13 → "Adolescente" 👦
- ✅ Si edad < 13 → "Niño" 👶
- ✅ Valida que la entrada sea un número válido 🔢
- ✅ Usa valores truthy/falsy en condiciones 💡

**🏗️ Código base:**
```javascript
// Ask for user's age
// Validate if it's a valid number
// If age >= 18: "Mayor de edad"
// Else if age >= 13: "Adolescente"
// Else: "Niño"
// Show result with alert
```

**💡 Tips:**
- 🔹 `if (condición) { ... }` ejecuta si es true ✅
- 🔹 `else if` para múltiples condiciones 🔄
- 🔹 `else` para el caso por defecto 🎯
- 🔹 Valida primero con `isNaN()` 🛡️
- 🔹 Puedes usar valores truthy/falsy directamente: `if (age)` 💡

**🚀 Motivación:** ¡Las decisiones hacen que tu código sea inteligente! 🧠✨

---

## 🎚️ Reto 8: Switch Statement

**📝 Descripción:** Maneja múltiples casos con switch 🎯

**⚡ Funcionalidad:** Usar `switch` para evaluar múltiples condiciones de forma limpia

**✅ Casos de prueba:**
- ✅ Días de la semana (1-7) muestran el nombre correcto 📅
- ✅ Lunes a Viernes → "Día laboral" 💼
- ✅ Sábado y Domingo → "Fin de semana" 🎉
- ✅ Número inválido → "Día no válido" ❌
- ✅ Usa `break` correctamente para evitar fall-through 🛑

**🏗️ Código base:**
```javascript
// Ask for a number (1-7) representing day of week
// Use switch to show day name and type
// 1-5: weekday
// 6-7: weekend
// default: invalid
// Show result with alert
```

**💡 Tips:**
- 🔹 `switch (variable) { case value: ... }` 🎚️
- 🔹 `break` es importante para salir del case 🛑
- 🔹 `default` es como el `else` final 🎯
- 🔹 Puedes agrupar casos: `case 1: case 2:` 🔗
- 🔹 Switch usa comparación estricta `===` ⚡

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Ahora puedes tomar decisiones complejas. ¡Eres imparable! 💪✨

---

## 📊 Resumen del Nivel 2 🎯

**🎉 Has completado:**
- ✅ Conversiones explícitas: String(), Number(), Boolean() 🔀
- ✅ Operador unario + para conversiones rápidas ⚡
- ✅ Truthy y Falsy values 💡
- ✅ NaN e isNaN() vs Number.isNaN() 🤯
- ✅ Operadores avanzados: %, **, ++, -- 🎲
- ✅ Concatenación vs Suma 🔗
- ✅ Comparaciones: === vs == ⚖️
- ✅ Condicionales: if/else 🧠
- ✅ Switch statements 🎚️

**⏰ Tiempo estimado:** 2-3 horas 

**🔜 Próximo nivel:** 🔁 Nivel 3 - Repetición y Expresiones

---

💪 **¡Felicidades!** Ahora tu código puede tomar decisiones inteligentes. ¡Sigues avanzando como un campeón! 🏆✨🚀
