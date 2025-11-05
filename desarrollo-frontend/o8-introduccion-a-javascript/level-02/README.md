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

**📝 Descripción:** Convierte tres ingredientes mágicos a sus tipos correctos usando `String()`, `Number()` y `Boolean()`. Cada poción necesita su ingrediente en el formato exacto o no funcionará.

**⚡ Funcionalidad:** 
- Poción de Invisibilidad: duración en minutos (string → number)
- Poción de Fuerza: nivel de poder (number → string)  
- Poción de Velocidad: estado activo/inactivo (number → boolean)

**✅ Casos de prueba:**

| Ingrediente        | Input  | Output Esperado      | Tipo      |
| ------------------ | ------ | -------------------- | --------- |
| Invisibilidad      | `'30'` | `30`                 | `number`  |
| Fuerza             | `8`    | `'8'`                | `string`  |
| Velocidad          | `1`    | `true`               | `boolean` |
| **Tipo retornado** | -      | `"Pociones listas!"` | `string`  |

**💻 Código base:**

```javascript
const invisibilityDuration = '30';
const strengthLevel = 8;
const speedActive = 1;
// Convert each ingredient to correct type
// Create message: "¡Pociones listas! Invisibilidad: X min, Fuerza: Y, Velocidad: activa"
// Show with alert()
```

**💡 Tips:**
- 🔹 `Number("30")` convierte string a número ⚡
- 🔹 `String(8)` convierte número a texto 📝
- 🔹 `Boolean(1)` da `true`, `Boolean(0)` da `false` ✅❌
- 🔹 Usa template strings para el mensaje final 💬

**🚀 Motivación:** ¡Salva el laboratorio de Fernanda! Cada conversión correcta es una poción lista para la aventura 🧙‍♀️✨

**📁 Carpeta:** `o1-magic-potions-lab/`

---

## 🐷 Reto 2: El Chanchito de la Verdad

**📖 Historia:** En el reino mágico vive un chanchito especial llamado Chocolate (sí, como el gato, pero versión chanchito 🐷). Este chanchito tiene un poder único: puede detectar si alguien dice la verdad o miente. Cuando le das un valor **truthy** (positivo, con contenido), oinkea "¡VERDAD! 🟢". Pero si le das algo **falsy** (vacío, cero, nada), gruñe "¡MENTIRA! 🔴". Mijael quiere probarlo con diferentes valores... ¡ayúdalo! 🎯

**📝 Descripción:** Usa el operador unario `+` para convertir valores rápidamente y determina si el chanchito detectará verdad o mentira según si el resultado es truthy o falsy.

**⚡ Funcionalidad:** 
- Convierte el input con `+` si parece número
- Evalúa si el valor final es truthy o falsy
- El chanchito oinkea el resultado

**✅ Casos de prueba:**

| Input              | Conversión | Es Truthy/Falsy | Output Esperado      |
| ------------------ | ---------- | --------------- | -------------------- |
| `'15'`             | `15`       | Truthy          | `"¡OINK! VERDAD 🟢"`  |
| `'0'`              | `0`        | Falsy           | `"¡OINK! MENTIRA 🔴"` |
| `'Fe'`             | `NaN`      | Falsy           | `"¡OINK! MENTIRA 🔴"` |
| **Tipo retornado** | -          | -               | `string`             |

**💻 Código base:**

```javascript
const input = prompt('Dile algo al chanchito:');
const converted = +input;
// Check if converted is truthy or falsy
// If NaN, it's falsy
// Show "¡OINK! VERDAD 🟢" or "¡OINK! MENTIRA 🔴"
```

**💡 Tips:**
- 🔹 `+value` convierte string a número instantáneamente ⚡
- 🔹 `NaN` es falsy (usa `isNaN()` para detectarlo) 🤯
- 🔹 **Truthy:** números distintos de 0, strings no vacíos ✅
- 🔹 **Falsy:** `0`, `""`, `null`, `undefined`, `NaN`, `false` ❌
- 🔹 Puedes probar con `if (converted) { ... }` 💡

**🚀 Motivación:** ¡El chanchito Chocolate es el detector de mentiras más confiable del reino! Mijael confía en él para todo 🐷💫

**📁 Carpeta:** `o2-truth-pig/`

---

## 🎲 Reto 3: Casino Mágico de Operadores

**📖 Historia:** Elliot acaba de abrir el casino más extraño del reino: ¡El Casino Mágico! 🎰✨ Aquí no ganas con suerte, ¡ganas con matemáticas! Los jugadores apuestan números y compiten en tres desafíos: **¿Es par o impar?** (módulo %), **¿Quién tiene el cuadrado más grande?** (potencia **), y **¿Cuántas victorias llevas?** (incremento ++). Fe y Doky van a competir... ¡tú llevas la cuenta! 🏆

**📝 Descripción:** Usa operadores matemáticos avanzados (`%`, `**`, `++`) para determinar ganadores en el casino mágico.

**⚡ Funcionalidad:**
- Usa `%` para saber si un número es par o impar
- Usa `**` para elevar números al cuadrado
- Usa `++` para contar victorias

**✅ Casos de prueba:**

| Operación          | Input | Output Esperado | Explicación                 |
| ------------------ | ----- | --------------- | --------------------------- |
| `8 % 2`            | `8`   | `0` (par)       | 8 dividido 2 = 4, resto 0 ✅ |
| `7 % 2`            | `7`   | `1` (impar)     | 7 dividido 2 = 3, resto 1 🎯 |
| `5 ** 2`           | `5`   | `25`            | 5 al cuadrado = 25 📈        |
| **Tipo retornado** | -     | `"Fe ganó!"`    | `string`                    |

**💻 Código base:**

```javascript
const bet1 = 8;
const bet2 = 7;
let wins = 0;
// Check if bet1 is even: bet1 % 2 === 0
// Check if bet2 is even
// Calculate squared values
// Count wins with ++
// Show results
```

**💡 Tips:**
- 🔹 `n % 2 === 0` → es par 📊
- 🔹 `n % 2 === 1` → es impar 🎯
- 🔹 `n ** 2` → n al cuadrado 📈
- 🔹 `++counter` incrementa en 1 ⬆️

**🚀 Motivación:** ¡Matemáticas + diversión en el casino de Elliot! Fe y Doky confían en ti para saber quién gana 🎲💎

**📁 Carpeta:** `o3-magic-casino/`

---

## 🔗 Reto 4: La Maldición del Signo +

**📖 Historia:** Hace 100 años, una bruja malvada maldijo el símbolo `+` de JavaScript 🧙‍♀️🔮. Desde entonces, a veces suma números (como debe ser), ¡pero otras veces CONCATENA todo como strings! Los programadores del reino viven confundidos. Amorosa necesita romper la maldición entendiendo sus reglas secretas... ¿la ayudas? 💫

**📝 Descripción:** El operador `+` tiene comportamiento dual: suma números PERO concatena strings. Demuestra cuándo hace cada cosa.

**⚡ Funcionalidad:**
- Prueba `+` con números puros
- Prueba `+` con strings puros  
- Prueba `+` mezclando tipos
- Demuestra que el orden importa

**✅ Casos de prueba:**

| Expresión          | Cálculo         | Output | Razón                     |
| ------------------ | --------------- | ------ | ------------------------- |
| `5 + 3`            | número + número | `8`    | Suma normal ➕             |
| `'5' + '3'`        | string + string | `'53'` | Concatena 🔗               |
| `'5' + 3`          | string + número | `'53'` | Convierte todo a string 🎭 |
| **Tipo retornado** | -               | `'53'` | `string`                  |

**💻 Código base:**

```javascript
const test1 = 5 + 3;
const test2 = '5' + '3';
const test3 = '5' + 3;
const test4 = 5 + 3 + '2';
const test5 = '2' + 5 + 3;
// Show each result
// Explain what happened in each case
```

**💡 Tips:**
- 🔹 Number + Number = suma ➕
- 🔹 String + String = concatenación 🔗
- 🔹 String + Number = concatenación 🎭
- 🔹 JavaScript evalúa de izquierda a derecha ⬅️➡️
- 🔹 `5 + 3 + '2'` = `(5 + 3) + '2'` = `'82'` ⚡

**🚀 Motivación:** ¡Rompe la maldición! Amorosa cuenta contigo para entender el misterioso comportamiento del + 🔮✨

**📁 Carpeta:** `o4-plus-curse/`

---

## ⚖️ Reto 5: Tribunal de la Igualdad

**📖 Historia:** Doky 🐕 ha sido nombrado Juez Supremo del Tribunal de la Igualdad. Su trabajo es decidir si dos valores son "realmente iguales" usando `===` (igualdad estricta) o solo "parecidos" usando `==` (igualdad suelta). Hoy tiene casos complicados: ¿Es `8` igual a `'8'`? ¿Es `0` igual a `false`? ¡Ayuda a Doky a juzgar correctamente! ⚖️

**📝 Descripción:** Compara valores usando `===` (estricto) y `==` (suelto) para entender la diferencia crucial entre ambos operadores.

**⚡ Funcionalidad:**
- Compara el mismo valor en diferentes tipos
- Usa `===` (compara valor Y tipo)
- Usa `==` (convierte tipos antes de comparar)
- Muestra el veredicto de Doky

**✅ Casos de prueba:**

| Comparación        | `===`   | `==`   | Explicación          |
| ------------------ | ------- | ------ | -------------------- |
| `8 === '8'`        | `false` | `true` | Diferentes tipos ❌/✅ |
| `0 === false`      | `false` | `true` | Diferentes tipos ❌/✅ |
| `'' === false`     | `false` | `true` | Diferentes tipos ❌/✅ |
| **Tipo retornado** | -       | -      | Ambos dan `boolean`  |

**💻 Código base:**

```javascript
const num = 8;
const str = '8';
// Compare with ===
// Compare with ==
// Show Doky's verdict
// Explain: ALWAYS use ===
```

**💡 Tips:**
- 🔹 `===` compara valor Y tipo (estricto) ⚡
- 🔹 `==` convierte tipos antes (suelto) 🎭
- 🔹 **SIEMPRE usa `===` y `!==`** 💎
- 🔹 `==` puede dar resultados raros 🤯
- 🔹 Doky recomienda `===` para evitar bugs 🐕

**🚀 Motivación:** ¡Doky te enseña la lección más importante! Usar `===` te ahorrará horas de debugging 🐕⚖️✨

**📁 Carpeta:** `o5-equality-tribunal/`

---

## 🎓 Reto 6: Examen de Ingreso a Hogwarts

**📖 Historia:** ¡Amorosa 💖 recibió su carta de Hogwarts! Pero para entrar, debe pasar el examen del Sombrero Seleccionador 🎩✨. El sombrero hará 3 preguntas mágicas y según sus respuestas, la asignará a una de las 4 casas: Gryffindor 🦁 (valientes), Slytherin 🐍 (astutos), Ravenclaw 🦅 (sabios) o Hufflepuff 🦡 (leales). ¡Ayúdala a responder! 🔮

**📝 Descripción:** Haz 3 preguntas con `prompt()` y usa condicionales `if/else` para asignar una casa según las respuestas.

**⚡ Funcionalidad:**
- Pregunta 1: ¿Eres valiente? (sí/no)
- Pregunta 2: ¿Eres astuto? (sí/no)
- Pregunta 3: ¿Eres leal? (sí/no)
- Asigna casa según combinación de respuestas

**✅ Casos de prueba:**

| Valiente           | Astuto | Leal | Casa Asignada |
| ------------------ | ------ | ---- | ------------- |
| sí                 | no     | no   | Gryffindor 🦁  |
| no                 | sí     | no   | Slytherin 🐍   |
| no                 | sí     | sí   | Ravenclaw 🦅   |
| **Tipo retornado** | -      | -    | `string`      |

**💻 Código base:**

```javascript
// Welcome message
// Ask 3 questions
// Validate all answered
// Use if/else to assign house
// Show result with alert()
```

**💡 Tips:**
- 🔹 Usa `.toLowerCase()` para evitar errores 🔄
- 🔹 Valida respuestas vacías con `!variable` 🛡️
- 🔹 `if/else if/else` para las combinaciones 🧠
- 🔹 Hufflepuff es el `else` final (default) 🦡

**🚀 Motivación:** ¡Amorosa finalmente entrará a Hogwarts! La magia de los condicionales la llevará a su casa 🎓✨

**📁 Carpeta:** `o6-hogwarts-exam/`

---

## 🐾 Reto 7: Test de Personalidad de Mascotas

**📖 Historia:** Mijael 👦 quiere adoptar una mascota mágica, pero no sabe cuál es la ideal para él. El Oráculo de las Mascotas 🔮 tiene un test especial: según tus preferencias de comida 🍕, actividad 🏃‍♂️ y lugar favorito 🏔️, te dice si eres más como un Perro 🐕 (activo y leal), Gato 🐱 (independiente), Hamster 🐹 (tranquilo) o ¡Dragón! 🐲 (aventurero). ¿Qué mascota le tocará a Mijael? 🎯

**📝 Descripción:** Test interactivo con 3 preguntas. Usa condicionales para determinar la mascota ideal según las respuestas.

**⚡ Funcionalidad:**
- Pregunta por comida favorita
- Pregunta por actividad favorita
- Pregunta por lugar favorito
- Asigna mascota según combinaciones

**✅ Casos de prueba:**

| Comida             | Actividad | Lugar  | Mascota   |
| ------------------ | --------- | ------ | --------- |
| pizza              | correr    | parque | Perro 🐕   |
| sushi              | leer      | casa   | Gato 🐱    |
| galletas           | dormir    | cama   | Hamster 🐹 |
| **Tipo retornado** | -         | -      | `string`  |

**💻 Código base:**

```javascript
// Ask about favorite food
// Ask about favorite activity
// Ask about favorite place
// Use if/else to determine pet
// Show result
```

**💡 Tips:**
- 🔹 Usa `.toLowerCase()` para validar 🔄
- 🔹 Combina respuestas con `&&` (AND) 🧩
- 🔹 El dragón es el caso más raro (aventurero) 🐲
- 🔹 Usa emojis para hacer el resultado divertido 🎨

**🚀 Motivación:** ¡Mijael encontrará su mascota perfecta! La lógica condicional lo ayudará 🐾✨

**📁 Carpeta:** `o7-pet-personality/`

---

## 🎚️ Reto 8: Selector de Misión Épica

**📖 Historia:** Chocolate el gato 🐱 es un guerrero legendario (sí, un gato guerrero). Cada día de la semana tiene una misión diferente asignada por el Rey Fe 🤴. Los lunes entrena con espadas ⚔️, los miércoles explora mazmorras 🗝️, los viernes descansa en la taberna 🍺, y los domingos... ¡fiesta en el castillo! 🎉 Usa `switch` para mostrar la misión del día. 🗓️

**📝 Descripción:** Pide un número del 1-7 (día de la semana) y usa `switch` para asignar la misión correspondiente a Chocolate.

**⚡ Funcionalidad:**
- Lunes-Viernes: misiones diferentes
- Sábado-Domingo: descanso/fiesta
- Número inválido: error

**✅ Casos de prueba:**

| Día                | Número | Misión                  |
| ------------------ | ------ | ----------------------- |
| Lunes              | 1      | Entrenar con espadas ⚔️  |
| Miércoles          | 3      | Explorar mazmorras 🗝️    |
| Domingo            | 7      | Fiesta en el castillo 🎉 |
| **Tipo retornado** | -      | `string`                |

**💻 Código base:**

```javascript
// Ask for day number (1-7)
// Use switch
// Assign mission for each day
// Use break
// Show mission
```

**💡 Tips:**
- 🔹 `switch (day) { case 1: ... break; }` 🎚️
- 🔹 Usa `break` para salir de cada case 🛑
- 🔹 `default` para días inválidos 🎯
- 🔹 Agrupa casos similares si quieres 🔗

**🚀 Motivación:** ¡Chocolate tiene aventuras épicas toda la semana! El switch hace que cada día sea único 🐱⚔️✨

**📁 Carpeta:** `o8-epic-mission-selector/`

---

## 🧙‍♂️ Reto 9: Duelo de Magos Numéricos

**📖 Historia:** ¡Es el torneo anual de magos! 🏆⚡ Fernanda y Elliot competirán en el Duelo de Números Mágicos. Cada uno elige un número secreto. El duelo tiene 3 rondas: **¿Quién tiene el número más grande?**, **¿Quién tiene un número par?**, y **¿Quién tiene más dígitos?**. El mago que gane más rondas será el campeón. Fe será el árbitro... ¡tú llevas la cuenta! 🎯

**📝 Descripción:** Compara dos números en 3 rondas diferentes usando operadores de comparación y lógica. Determina el ganador.

**⚡ Funcionalidad:**
- Ronda 1: Mayor número gana (>, <)
- Ronda 2: Número par gana (% 2)
- Ronda 3: Más dígitos gana (convertir a string y .length)
- Contar victorias y declarar campeón

**✅ Casos de prueba:**

| Fernanda           | Elliot | Ganador  | Razón                              |
| ------------------ | ------ | -------- | ---------------------------------- |
| 42                 | 35     | Fernanda | Mayor, par, mismos dígitos (2-1)   |
| 100                | 99     | Fernanda | Mayor, par, más dígitos (3-0)      |
| 8                  | 15     | Empate   | Fernanda par, Elliot mayor (1-1-0) |
| **Tipo retornado** | -      | `string` | (nombre del ganador)               |

**💻 Código base:**

```javascript
const fernandaNum = 42;
const elliotNum = 35;
let fernandaWins = 0;
let elliotWins = 0;
// Round 1: Compare numbers
// Round 2: Check if even
// Round 3: Compare digits
// Determine winner
// Show results
```

**💡 Tips:**
- 🔹 Usa `>` y `<` para comparar 📊
- 🔹 Usa `% 2 === 0` para detectar pares ✅
- 🔹 Usa `String(num).length` para contar dígitos 🔢
- 🔹 Incrementa contadores con `++` 📈
- 🔹 Usa `if/else` para determinar ganador final 🏆

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL ÉPICO! Combinas comparaciones, operadores, lógica y decisiones. ¡Fernanda y Elliot confían en tu código para el duelo! 🧙‍♂️⚡✨

**📁 Carpeta:** `o9-number-wizard-duel/`

---

## 📊 Resumen del Nivel 2 🎯

**🎉 Has completado:**
- ✅ Conversiones con pociones de Fernanda 🧪
- ✅ Truthy/Falsy con Chocolate el chanchito 🐷
- ✅ Operadores en el casino de Elliot 🎲
- ✅ La maldición del + con Amorosa 🔗
- ✅ Comparaciones en el tribunal de Doky ⚖️
- ✅ Condicionales en Hogwarts 🎓
- ✅ Test de mascotas para Mijael 🐾
- ✅ Misiones épicas de Chocolate 🎚️
- ✅ Duelo de magos numéricos 🧙‍♂️

**⏰ Tiempo estimado:** 2-3 horas 

**🔜 Próximo nivel:** 🔁 Nivel 3 - Loops y Repetición Mágica

---

💪 **¡Felicidades!** Has dominado las transformaciones y la lógica. Fernanda, Mijael, Fe, Elliot, Doky, Amorosa y Chocolate están orgullosos de ti. ¡Eres un mago del código! 🏆✨🚀
