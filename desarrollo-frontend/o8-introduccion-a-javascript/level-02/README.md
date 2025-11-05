# 🔧 Nivel 2: Transformaciones y Lógica Mágica ⚡

```
  _                            __                         
 | |                          / _|                        
 | |_ _ __ __ _ _ __  ___    | |_ ___  _ __ _ __ ___  ___
 | __| '__/ _` | '_ \/ __|   |  _/ _ \| '__| '_ ` _ \/ __|
 | |_| | | (_| | | | \__ \   | || (_) | |  | | | | | \__ \
  \__|_|  \__,_|_| |_|___/   |_| \___/|_|  |_| |_| |_|___/
                                                            
```

> **🎯 Objetivo:** Dominar conversiones de tipos, operadores avanzados, comparaciones y control de flujo con MAGIA ✨

---

## 🧪 Reto 1: Laboratorio de Pociones Mágicas

**📖 Historia:** Fernanda acaba de abrir su laboratorio de pociones mágicas. Los ingredientes llegan en formatos caóticos: algunos números vienen como texto `"30"`, otros estados vienen como números `1` o `0`. ¡Necesita tu ayuda para convertirlos correctamente antes de que explote el caldero! 💥🧙‍♀️

**📝 Descripción:** Convierte tres ingredientes mágicos a sus tipos correctos usando `String()`, `Number()` y `Boolean()`. Cada poción necesita su ingrediente en el formato exacto.

**⚡ Funcionalidad:** 
- Poción de Invisibilidad: duración en minutos (string → number)
- Poción de Fuerza: nivel de poder (number → string)  
- Poción de Velocidad: estado activo/inactivo (number → boolean)

**✅ Casos de prueba:**

| Ingrediente        | Input  | Output Esperado                  | Tipo      |
| ------------------ | ------ | -------------------------------- | --------- |
| Invisibilidad      | `'30'` | `30`                             | `number`  |
| Fuerza             | `8`    | `'8'`                            | `string`  |
| Velocidad          | `1`    | `true`                           | `boolean` |
| **Tipo retornado** | -      | `"Pociones listas: 30, 8, true"` | `string`  |

**💻 Código base:**

```javascript
const invisibilityDuration = '30';
const strengthLevel = 8;
const speedActive = 1;
// Convert invisibilityDuration to number using Number()
// Convert strengthLevel to string using String()
// Convert speedActive to boolean using Boolean()
// Create message with all three converted values
// Show with console.log()
```

**💡 Tips:**
- 🔹 `Number("30")` convierte string a número ⚡
- 🔹 `String(8)` convierte número a texto 📝
- 🔹 `Boolean(1)` da `true`, `Boolean(0)` da `false` ✅❌
- 🔹 Usa template strings para el mensaje final 💬
- 🔹 NO uses if/else, solo conversiones 🎯

**🚀 Motivación:** ¡Salva el laboratorio de Fernanda! Cada conversión correcta es una poción lista para la aventura 🧙‍♀️✨

**📁 Carpeta:** `o1-magic-potions-lab/`

---

## ⚡ Reto 2: Convertidor Relámpago

**📖 Historia:** Elliot descubrió un poder mágico: puede convertir cualquier texto a número usando el operador unario `+` en un solo movimiento. Es como un rayo ⚡ que transforma instantáneamente. Mijael quiere probarlo con diferentes valores y ver qué pasa... ¡algunos se convierten en `NaN`! 🤯

**📝 Descripción:** Usa el operador unario `+` para convertir strings a números rápidamente. También practica con `parseInt()` y `parseFloat()`.

**⚡ Funcionalidad:** 
- Convierte strings de números usando `+`
- Extrae números de strings con unidades usando `parseInt()`
- Mantiene decimales usando `parseFloat()`

**✅ Casos de prueba:**

| Input               | Conversión | Output Esperado | Tipo     |
| ------------------- | ---------- | --------------- | -------- |
| `+'42'`             | Unary +    | `42`            | `number` |
| `+'3.14'`           | Unary +    | `3.14`          | `number` |
| `parseInt('100px')` | parseInt   | `100`           | `number` |
| **Tipo retornado**  | -          | `42`            | `number` |

**💻 Código base:**

```javascript
const age = '42';
const pi = '3.14';
const width = '100px';
const height = '50.5px';
// Convert age using unary + operator
// Convert pi using unary + operator
// Extract number from width using parseInt()
// Extract number from height using parseFloat()
// Show all results with console.log()
```

**💡 Tips:**
- 🔹 `+value` es la forma MÁS corta de convertir a número ⚡
- 🔹 `parseInt("100px")` extrae solo 100 🎯
- 🔹 `parseFloat("50.5px")` mantiene decimales 📊
- 🔹 `+"abc"` da `NaN` (Not a Number) 🤯
- 🔹 NO uses if/else, solo convierte y muestra 📝

**🚀 Motivación:** ¡Elliot y Mijael te enseñan el truco del rayo convertidor! El operador `+` es magia pura ⚡✨

**📁 Carpeta:** `o2-lightning-converter/`

---

## 🐷 Reto 3: El Chanchito de la Verdad

**📖 Historia:** En el reino mágico vive un chanchito especial llamado NN (sí, ese es su nombre 🐷). Este chanchito tiene un poder único: puede detectar si un valor es "verdadero" o "falso" en el mundo de JavaScript. Cuando le das algo **truthy** (número positivo, texto con contenido), hace "¡OINK! 🟢". Pero si le das algo **falsy** (0, "", null), hace "¡GRUÑIDO! 🔴". Fe quiere probarlo con diferentes valores...

**📝 Descripción:** Evalúa diferentes valores para determinar si son truthy o falsy. Muestra el resultado usando el valor booleano directo.

**⚡ Funcionalidad:** 
- Evalúa valores truthy y falsy
- Usa conversión con `Boolean()` o doble negación `!!`
- Muestra si cada valor es truthy o falsy

**✅ Casos de prueba:**

| Input              | Boolean(Input) | Truthy/Falsy | Output             |
| ------------------ | -------------- | ------------ | ------------------ |
| `8`                | `true`         | Truthy       | `"8 es truthy 🟢"`  |
| `0`                | `false`        | Falsy        | `"0 es falsy 🔴"`   |
| `'Fe'`             | `true`         | Truthy       | `"Fe es truthy 🟢"` |
| **Tipo retornado** | -              | -            | `string`           |

**💻 Código base:**

```javascript
const value1 = 8;
const value2 = 0;
const value3 = 'Fe';
const value4 = '';
const value5 = null;
// Convert each to boolean using Boolean()
// Show each result: "X es truthy 🟢" or "X es falsy 🔴"
// Use template strings to create messages
// NO uses if/else, solo muestra el resultado booleano
```

**💡 Tips:**
- 🔹 `Boolean(8)` da `true` (truthy) ✅
- 🔹 `Boolean(0)` da `false` (falsy) ❌
- 🔹 **Falsy values:** `0`, `""`, `null`, `undefined`, `NaN`, `false` 🔴
- 🔹 **Truthy values:** todo lo demás 🟢
- 🔹 Puedes usar `!!value` como alternativa a `Boolean()` 💡
- 🔹 Solo muestra los resultados, NO uses condicionales aún 📝

**🚀 Motivación:** ¡El chanchito NN es el detector de valores del reino! Fe confía en él para entender truthy/falsy 🐷💫

**📁 Carpeta:** `o3-truth-pig/`

---

## 🎲 Reto 4: Casino Mágico de Operadores

**📖 Historia:** Doky 🐕 acaba de abrir el casino más extraño del reino: ¡El Casino Mágico! 🎰✨ Aquí los números compiten en desafíos matemáticos. Ronda 1: **¿Tu número es par o impar?** (módulo %). Ronda 2: **¿Cuál es tu número al cuadrado?** (potencia **). Ronda 3: **Cuenta tus victorias** (incremento ++). Fe y Amorosa van a competir...

**📝 Descripción:** Usa operadores matemáticos avanzados (`%`, `**`, `++`, `--`) para calcular resultados. Solo muestra los cálculos, sin decidir ganadores aún.

**⚡ Funcionalidad:**
- Usa `%` para calcular el residuo (par o impar)
- Usa `**` para elevar números al cuadrado
- Usa `++` para incrementar contadores

**✅ Casos de prueba:**

| Operación          | Input | Output | Explicación         |
| ------------------ | ----- | ------ | ------------------- |
| `8 % 2`            | `8`   | `0`    | Residuo 0 = par ✅   |
| `7 % 2`            | `7`   | `1`    | Residuo 1 = impar 🎯 |
| `5 ** 2`           | `5`   | `25`   | 5 al cuadrado 📈     |
| **Tipo retornado** | -     | `25`   | `number`            |

**💻 Código base:**

```javascript
const feNumber = 8;
const amorosaNumber = 7;
let victories = 0;
// Calculate: feNumber % 2 (is it even?)
// Calculate: amorosaNumber % 2 (is it even?)
// Calculate: feNumber ** 2
// Calculate: amorosaNumber ** 2
// Increment victories with ++
// Show all calculations with console.log()
```

**💡 Tips:**
- 🔹 `n % 2 === 0` → residuo 0 significa par 📊
- 🔹 `n % 2 === 1` → residuo 1 significa impar 🎯
- 🔹 `n ** 2` → n al cuadrado 📈
- 🔹 `++counter` incrementa antes, `counter++` incrementa después 🔄
- 🔹 Solo calcula y muestra, NO decidas quién gana aún ⚡

**🚀 Motivación:** ¡Matemáticas + diversión en el casino de Doky! Fe y Amorosa confían en ti para los cálculos 🎲💎

**📁 Carpeta:** `o4-magic-casino/`

---

## 🔗 Reto 5: La Maldición del Signo +

**📖 Historia:** Hace 100 años, una bruja malvada maldijo el símbolo `+` de JavaScript 🧙‍♀️🔮. Desde entonces, a veces suma números (como debe ser), ¡pero otras veces CONCATENA todo como strings! Mijael está confundido porque `5 + 3` da `8` pero `'5' + 3` da `'53'`. ¿Puedes mostrarle todos los casos para que entienda la maldición? 💫

**📝 Descripción:** El operador `+` tiene comportamiento dual: suma números PERO concatena strings. Demuestra cuándo hace cada cosa mostrando diferentes ejemplos.

**⚡ Funcionalidad:**
- Prueba `+` con números puros (suma)
- Prueba `+` con strings puros (concatena)
- Prueba `+` mezclando tipos (concatena)
- Demuestra que el orden importa

**✅ Casos de prueba:**

| Expresión          | Tipo Operación | Output | Razón                         |
| ------------------ | -------------- | ------ | ----------------------------- |
| `5 + 3`            | Suma           | `8`    | number + number = suma ➕      |
| `'5' + '3'`        | Concatenación  | `'53'` | string + string = concatena 🔗 |
| `'5' + 3`          | Concatenación  | `'53'` | string + number = concatena 🎭 |
| **Tipo retornado** | -              | `'53'` | `string`                      |

**💻 Código base:**

```javascript
const test1 = 5 + 3;
const test2 = '5' + '3';
const test3 = '5' + 3;
const test4 = 5 + 3 + '2';
const test5 = '2' + 5 + 3;
// Show each result with console.log()
// Show the type of each result with typeof
// Explain what happened in each case with a message
```

**💡 Tips:**
- 🔹 `number + number` = suma ➕
- 🔹 `string + string` = concatenación 🔗
- 🔹 `string + number` = convierte todo a string y concatena 🎭
- 🔹 JavaScript evalúa de izquierda a derecha ⬅️➡️
- 🔹 `5 + 3 + '2'` = `(5 + 3) + '2'` = `'82'` ⚡
- 🔹 Solo muestra los resultados, explica con mensajes 📝

**🚀 Motivación:** ¡Rompe la maldición! Mijael necesita entender el misterioso comportamiento del + 🔮✨

**📁 Carpeta:** `o5-plus-curse/`

---

## ⚖️ Reto 6: Tribunal de la Igualdad

**📖 Historia:** Chocolate 🐕 ha sido nombrado Juez Supremo del Tribunal de la Igualdad. Su trabajo es comparar valores usando `===` (igualdad estricta) y `==` (igualdad suelta). Hoy tiene casos importantes: ¿Es `8` igual a `'8'`? ¿Es `0` igual a `false`? Muestra los resultados de las comparaciones para que Chocolate pueda dar su veredicto. ⚖️

**📝 Descripción:** Compara valores usando `===` (estricto) y `==` (suelto). Solo muestra los resultados booleanos de las comparaciones.

**⚡ Funcionalidad:**
- Compara el mismo valor en diferentes tipos
- Usa `===` (compara valor Y tipo)
- Usa `==` (convierte tipos antes de comparar)
- Muestra los resultados booleanos

**✅ Casos de prueba:**

| Comparación        | `===`     | `==`      | Explicación            |
| ------------------ | --------- | --------- | ---------------------- |
| `8 === '8'`        | `false`   | `true`    | Diferentes tipos ❌/✅   |
| `0 === false`      | `false`   | `true`    | Diferentes tipos ❌/✅   |
| `8 === 8`          | `true`    | `true`    | Mismo tipo y valor ✅/✅ |
| **Tipo retornado** | `boolean` | `boolean` | Ambos dan booleanos    |

**💻 Código base:**

```javascript
const num = 8;
const str = '8';
const zero = 0;
const bool = false;
// Compare num === str
// Compare num == str
// Compare zero === bool
// Compare zero == bool
// Show all results with console.log()
// Show that === is more strict
```

**💡 Tips:**
- 🔹 `===` compara valor Y tipo (estricto) ⚡
- 🔹 `==` convierte tipos antes (suelto) 🎭
- 🔹 Las comparaciones retornan `true` o `false` ✅❌
- 🔹 `!==` es "no igual estricto", `!=` es "no igual suelto" 🚫
- 🔹 Solo muestra las comparaciones, NO uses if/else aún 📝

**🚀 Motivación:** ¡Chocolate te enseña a comparar correctamente! Entender === vs == es fundamental 🐕⚖️✨

**📁 Carpeta:** `o6-equality-tribunal/`

---

## 🎓 Reto 7: Examen de Ingreso a Hogwarts

**📖 Historia:** ¡Amorosa 💖 recibió su carta de Hogwarts! Pero para entrar, debe pasar el examen del Sombrero Seleccionador 🎩✨. El sombrero hará 3 preguntas mágicas y según sus respuestas, la asignará a una de las 4 casas: Gryffindor 🦁 (valientes), Slytherin 🐍 (astutos), Ravenclaw 🦅 (sabios) o Hufflepuff 🦡 (leales). ¡Ahora SÍ puedes usar if/else para decidir! 🔮

**📝 Descripción:** Haz 3 preguntas con `prompt()` y usa condicionales `if/else` para asignar una casa según las respuestas.

**⚡ Funcionalidad:**
- Pregunta 1: ¿Eres valiente? (sí/no)
- Pregunta 2: ¿Eres astuto? (sí/no)
- Pregunta 3: ¿Eres leal? (sí/no)
- Usa `if/else` para asignar casa

**✅ Casos de prueba:**

| Valiente           | Astuto | Leal | Casa Asignada |
| ------------------ | ------ | ---- | ------------- |
| sí                 | no     | no   | Gryffindor 🦁  |
| no                 | sí     | no   | Slytherin 🐍   |
| no                 | sí     | sí   | Ravenclaw 🦅   |
| **Tipo retornado** | -      | -    | `string`      |

**💻 Código base:**

```javascript
// Welcome with alert
// Ask 3 questions with prompt
// Use .toLowerCase() to normalize answers
// Use if/else if/else to determine house
// Show result with alert
```

**💡 Tips:**
- 🔹 Usa `.toLowerCase()` para evitar errores con mayúsculas 🔄
- 🔹 `if (brave === 'sí' && clever === 'no')` para Gryffindor 🦁
- 🔹 `else if` para las demás casas 🔄
- 🔹 `else` final para Hufflepuff (default) 🦡

**🚀 Motivación:** ¡Amorosa finalmente entrará a Hogwarts! La magia de los condicionales la llevará a su casa 🎓✨

**📁 Carpeta:** `o7-hogwarts-exam/`

---

## 🐾 Reto 8: Test de Personalidad de Mascotas

**📖 Historia:** Mijael 👦 quiere adoptar una mascota mágica, pero no sabe cuál es la ideal para él. El Oráculo de las Mascotas 🔮 tiene un test especial: según tus preferencias de comida 🍕, actividad 🏃‍♂️ y lugar favorito 🏔️, te dice si eres más como un Perro 🐕 (activo y leal), Gato 🐱 (independiente), Hamster 🐹 (tranquilo) o ¡Dragón! 🐲 (aventurero). ¿Qué mascota le tocará a Mijael? 🎯

**📝 Descripción:** Test interactivo con 3 preguntas. Usa condicionales `if/else` para determinar la mascota ideal según las respuestas.

**⚡ Funcionalidad:**
- Pregunta por comida favorita
- Pregunta por actividad favorita
- Pregunta por lugar favorito
- Usa `if/else` para asignar mascota

**✅ Casos de prueba:**

| Comida             | Actividad | Lugar | Mascota   |
| ------------------ | --------- | ----- | --------- |
| pizza              | correr    | -     | Perro 🐕   |
| sushi              | leer      | -     | Gato 🐱    |
| -                  | dormir    | -     | Hamster 🐹 |
| **Tipo retornado** | -         | -     | `string`  |

**💻 Código base:**

```javascript
// Welcome with alert
// Ask about favorite food
// Ask about favorite activity  
// Ask about favorite place
// Use if/else to determine pet
// Show result with alert
```

**💡 Tips:**
- 🔹 Usa `.toLowerCase()` para validar 🔄
- 🔹 Combina respuestas con `&&` (AND) 🧩
- 🔹 El dragón es el `else` final (caso raro) 🐲
- 🔹 Usa emojis para hacer el resultado divertido 🎨

**🚀 Motivación:** ¡Mijael encontrará su mascota perfecta! La lógica condicional lo ayudará 🐾✨

**📁 Carpeta:** `o8-pet-personality/`

---

## 🎚️ Reto 9: Selector de Misión Épica

**📖 Historia:** Chocolate el perro 🐕 es un guerrero legendario (sí, un perro guerrero). Cada día de la semana tiene una misión diferente asignada por el Rey Fe 🤴. Los lunes entrena con espadas ⚔️, los miércoles explora mazmorras 🗝️, los viernes descansa en la taberna 🍺, y los domingos... ¡fiesta en el castillo! 🎉 Usa `switch` para mostrar la misión del día. 🗓️

**📝 Descripción:** Pide un número del 1-7 (día de la semana) y usa `switch` para asignar la misión correspondiente a Chocolate.

**⚡ Funcionalidad:**
- Lunes-Viernes: misiones diferentes
- Sábado-Domingo: descanso/fiesta
- Número inválido: error
- Usa `switch` con `break`

**✅ Casos de prueba:**

| Día                | Número | Misión                  |
| ------------------ | ------ | ----------------------- |
| Lunes              | 1      | Entrenar con espadas ⚔️  |
| Miércoles          | 3      | Explorar mazmorras 🗝️    |
| Domingo            | 7      | Fiesta en el castillo 🎉 |
| **Tipo retornado** | -      | `string`                |

**💻 Código base:**

```javascript
// Ask for day number (1-7) with prompt
// Convert to number with +
// Use switch statement
// Assign mission for each day
// Use break after each case
// Use default for invalid days
// Show mission with alert
```

**💡 Tips:**
- 🔹 `switch (day) { case 1: ... break; }` 🎚️
- 🔹 Usa `break` para salir de cada case 🛑
- 🔹 `default` para días inválidos 🎯
- 🔹 Puedes agrupar casos si quieres 🔗

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Chocolate tiene aventuras épicas toda la semana. El `switch` hace que cada día sea único 🐕⚔️✨

**📁 Carpeta:** `o9-epic-mission-selector/`

---

## 📊 Resumen del Nivel 2 🎯

**🎉 Has completado:**
- ✅ Conversiones explícitas: `String()`, `Number()`, `Boolean()` 🧪
- ✅ Operador unario `+`, `parseInt()`, `parseFloat()` ⚡
- ✅ Truthy y Falsy values 🐷
- ✅ Operadores avanzados: `%`, `**`, `++` 🎲
- ✅ Concatenación vs Suma 🔗
- ✅ Comparaciones: `===` vs `==` ⚖️
- ✅ Condicionales: `if/else` 🎓
- ✅ Test de personalidad 🐾
- ✅ Switch statements 🎚️

**⏰ Tiempo estimado:** 2-3 horas 

**🔜 Próximo nivel:** 🔁 Nivel 3 - Loops y Repetición Mágica

---

💪 **¡Felicidades!** Has dominado las transformaciones y la lógica. Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y NN están orgullosos de ti. ¡Eres un mago del código! 🏆✨🚀
