# 🔁 Nivel 3: Loops y Repetición Mágica 🌀

```
  _                          
 | |                         
 | | ___   ___  _ __  ___    
 | |/ _ \ / _ \| '_ \/ __|   
 | | (_) | (_) | |_) \__ \   
 |_|\___/ \___/| .__/|___/   
               | |            
               |_|            
```

> **🎯 Objetivo:** Dominar bucles for y while para automatizar tareas repetitivas con magia ✨

---

## 🔢 Reto 1: Contador de Números - For Loop Básico

**📖 Historia:** Fe 🌟 necesita contar del 1 al 10 para un ritual mágico, pero hacerlo manualmente es aburrido. ¡Aprende el bucle `for` para automatizar el conteo! El bucle tiene 3 partes: inicio `let i = 1`, condición `i <= 10`, incremento `i++`. Es como una máquina que cuenta sola 🔄✨

**📝 Descripción:** El bucle `for` repite código un número específico de veces. Es perfecto cuando sabes cuántas iteraciones necesitas.

**⚡ Funcionalidad:** 
- Usar `for` para contar números
- Acumular suma de números
- Contar números pares e impares

**✅ Casos de prueba:**

| Input                | Expected Output               |
| -------------------- | ----------------------------- |
| `start=1`, `end=10`  | `sum=55`, `evens=5`, `odds=5` |
| `start=1`, `end=5`   | `sum=15`, `evens=2`, `odds=3` |
| `start=10`, `end=15` | `sum=75`, `evens=3`, `odds=3` |

**💻 Código base:**

```javascript
let start = -1; // Change this
let end = -1; // Change this
let sum = 0;
let evens = 0;
let odds = 0;
// Use for loop: for (let i = start; i <= end; i++)
// Inside loop: add i to sum
// Check if i is even or odd and count
```

**💡 Tips:**
- 🔹 `for (let i = start; i <= end; i++)` estructura básica
- 🔹 `sum += i` acumula valores
- 🔹 `i % 2 === 0` detecta pares
- 🔹 Usa contadores para pares e impares

**🚀 Motivación:** ¡Fe cuenta hasta 10 en un segundo! Los bucles son superpoderes 🔢⚡

**📁 Carpeta:** `o1-counter-for-loop/`

---

## 🔁 Reto 2: Tabla de Multiplicar - For Loop Anidado

**📖 Historia:** Elliot 🤓 necesita generar la tabla de multiplicar del 8 (su número favorito) del 1 al 12. Pero no solo eso: ¡también quiere todas las tablas del 1 al 5! Aprende bucles anidados: un `for` dentro de otro `for`. El exterior controla la tabla, el interior los multiplicadores 🧮✨

**📝 Descripción:** Los bucles anidados son bucles dentro de bucles. Perfectos para patrones bidimensionales como tablas.

**⚡ Funcionalidad:** 
- Usar bucle exterior para la tabla
- Usar bucle interior para multiplicadores
- Generar array de resultados

**✅ Casos de prueba:**

| Input                | Expected Output                                          |
| -------------------- | -------------------------------------------------------- |
| `table=8`, `upTo=5`  | `results=[8,16,24,32,40]`, `totalSum=120`                |
| `table=5`, `upTo=10` | `results=[5,10,15,20,25,30,35,40,45,50]`, `totalSum=275` |
| `table=3`, `upTo=4`  | `results=[3,6,9,12]`, `totalSum=30`                      |

**💻 Código base:**

```javascript
let table = -1; // Change this
let upTo = -1; // Change this
let results = [];
let totalSum = 0;
// Use for loop: for (let i = 1; i <= upTo; i++)
// Calculate: table * i
// Add to results array
// Add to totalSum
```

**💡 Tips:**
- 🔹 `for (let i = 1; i <= upTo; i++)` para multiplicadores
- 🔹 `results.push(table * i)` agrega al array
- 🔹 `totalSum += (table * i)` acumula
- 🔹 Para bucles anidados: exterior = tabla, interior = multiplicador

**🚀 Motivación:** ¡Elliot genera tablas instantáneamente! Bucles anidados son magia pura 🧮🔥

**📁 Carpeta:** `o2-multiplication-for-nested/`

---

## 🌀 Reto 3: Busca el Tesoro - While Loop

**📖 Historia:** Mijael 👦 busca un tesoro escondido en cofres numerados. No sabe en cuál está, pero sabe que debe buscar hasta encontrarlo o llegar al cofre 20. El bucle `while` es perfecto: repite MIENTRAS la condición sea verdadera. A diferencia del `for`, no sabes cuántas veces iterará 🏴‍☠️💰

**📝 Descripción:** El bucle `while` repite mientras la condición sea true. Ideal cuando no sabes cuántas iteraciones necesitas.

**⚡ Funcionalidad:** 
- Usar `while` para buscar un número
- Contar intentos hasta encontrarlo
- Parar cuando se encuentra o llega al límite

**✅ Casos de prueba:**

| Input                     | Expected Output                                                |
| ------------------------- | -------------------------------------------------------------- |
| `treasure=7`, `limit=20`  | `found=true`, `attempts=7`, `message='¡Tesoro encontrado!'`    |
| `treasure=15`, `limit=20` | `found=true`, `attempts=15`, `message='¡Tesoro encontrado!'`   |
| `treasure=25`, `limit=20` | `found=false`, `attempts=20`, `message='Tesoro no encontrado'` |

**💻 Código base:**

```javascript
let treasure = -1; // Change this (target number)
let limit = 20;
let found = false;
let attempts = 0;
let current = 1;
let message = '';
// Use while loop: while (current <= limit && !found)
// Check if current === treasure
// If yes: found = true
// Increment current and attempts
// Set message based on found
```

**💡 Tips:**
- 🔹 `while (condition)` repite mientras sea true
- 🔹 `!found` significa "not found"
- 🔹 Combina condiciones con `&&`
- 🔹 Incrementa variables dentro del loop
- 🔹 ¡Cuidado con loops infinitos! Siempre modifica la condición

**🚀 Motivación:** ¡Mijael encuentra el tesoro! While loops para búsquedas dinámicas 🏴‍☠️✨

**📁 Carpeta:** `o3-treasure-hunt-while/`

---

## 🎯 Reto 4: Adivina el Número - While con Break

**📖 Historia:** Amorosa 💖 pensó un número del 1 al 100 y Chocolate 🐕 debe adivinarlo. Chocolate tiene 7 intentos. Después de cada intento, Amorosa dice "mayor" o "menor". Aprende `break` para salir del loop cuando adivine, sin esperar a los 7 intentos. Break es como una salida de emergencia 🎲🚪

**📝 Descripción:** El comando `break` sale del loop inmediatamente. Útil cuando encuentras lo que buscas.

**⚡ Funcionalidad:** 
- Usar `while` con contador de intentos
- Comparar con número secreto
- Usar `break` para salir al adivinar
- Dar pistas "mayor" o "menor"

**✅ Casos de prueba:**

| Input                                    | Expected Output                                        |
| ---------------------------------------- | ------------------------------------------------------ |
| `secret=42`, `guess=42` (primer intento) | `won=true`, `attempts=1`, `hint='¡Correcto!'`          |
| `secret=42`, `guess=30`                  | `won=false`, `attempts=1`, `hint='El número es mayor'` |
| `secret=42`, `guess=50`                  | `won=false`, `attempts=1`, `hint='El número es menor'` |

**💻 Código base:**

```javascript
let secret = 42;
let guess = -1; // Change this (user's guess)
let maxAttempts = 7;
let attempts = 0;
let won = false;
let hint = '';
// Use while loop: while (attempts < maxAttempts)
// Check if guess === secret
// If yes: won = true, hint = '¡Correcto!', break
// Else: give hint (mayor/menor)
// Increment attempts
// For now, just one guess (next level: multiple)
```

**💡 Tips:**
- 🔹 `break` sale del loop inmediatamente
- 🔹 Útil para encontrar algo y parar
- 🔹 `guess < secret` → "mayor"
- 🔹 `guess > secret` → "menor"
- 🔹 Este reto solo valida un intento, el juego completo vendrá después

**🚀 Motivación:** ¡Chocolate adivina con pistas! Break para salidas inteligentes 🎯🐕

**📁 Carpeta:** `o4-guess-number-break/`

---

## ⏭️ Reto 5: Números Primos - While con Continue

**📖 Historia:** Fe 🌟 necesita encontrar los primeros 5 números primos para un hechizo. Un número primo solo es divisible por 1 y él mismo. Usa `continue` para saltar números que NO son primos sin romper el loop. Continue es como "siguiente, por favor" 🔢✨

**📝 Descripción:** El comando `continue` salta a la siguiente iteración del loop sin ejecutar el código restante.

**⚡ Funcionalidad:** 
- Usar `while` para buscar primos
- Verificar si un número es primo
- Usar `continue` para saltar no-primos
- Recolectar primos en un array

**✅ Casos de prueba:**

| Input     | Expected Output                           |
| --------- | ----------------------------------------- |
| `count=5` | `primes=[2,3,5,7,11]`, `checked=12`       |
| `count=3` | `primes=[2,3,5]`, `checked=6`             |
| `count=7` | `primes=[2,3,5,7,11,13,17]`, `checked=18` |

**💻 Código base:**

```javascript
let count = -1; // Change this (how many primes to find)
let primes = [];
let checked = 0;
let current = 2;
// Use while loop: while (primes.length < count)
// Check if current is prime
// Helper: function to check if number is prime
// If not prime: continue (skip to next)
// If prime: add to primes array
// Increment current and checked
```

**💡 Tips:**
- 🔹 `continue` salta a la siguiente iteración
- 🔹 Para verificar primo: divide entre 2 hasta n-1
- 🔹 Si ninguno divide exactamente, es primo
- 🔹 2 es el primer primo
- 🔹 Usa función auxiliar `isPrime(n)` para claridad

**🚀 Motivación:** ¡Fe encuentra primos mágicos! Continue para saltos inteligentes 🔢🌟

**📁 Carpeta:** `o5-prime-numbers-continue/`

---

## 🌟 Reto 6: Pirámide de Estrellas - Bucles Anidados

**📖 Historia:** Fernanda 👧 quiere dibujar una pirámide de estrellas para decorar su cuarto. Usa bucles anidados: el exterior controla las filas (altura), el interior controla las estrellas por fila. Cada fila tiene más estrellas que la anterior. ¡Es como construir con bloques de código! 🌟🏗️

**📝 Descripción:** Los bucles anidados permiten crear patrones 2D como pirámides, triángulos y cuadrículas.

**⚡ Funcionalidad:** 
- Usar bucle exterior para filas
- Usar bucle interior para estrellas
- Cada fila i tiene i estrellas
- Construir array de strings

**✅ Casos de prueba:**

| Input      | Expected Output                                            |
| ---------- | ---------------------------------------------------------- |
| `height=4` | `pyramid=['*','**','***','****']`, `totalStars=10`         |
| `height=3` | `pyramid=['*','**','***']`, `totalStars=6`                 |
| `height=5` | `pyramid=['*','**','***','****','*****']`, `totalStars=15` |

**💻 Código base:**

```javascript
let height = -1; // Change this
let pyramid = [];
let totalStars = 0;
// Use outer loop: for (let i = 1; i <= height; i++)
// Use inner loop: for (let j = 1; j <= i; j++)
// Build row string with stars
// Add row to pyramid array
// Count total stars
```

**💡 Tips:**
- 🔹 Exterior: `for (let i = 1; i <= height; i++)`
- 🔹 Interior: `for (let j = 1; j <= i; j++)`
- 🔹 Construye string: `row += '*'`
- 🔹 `totalStars += i` (fila i tiene i estrellas)

**🚀 Motivación:** ¡Fernanda dibuja pirámides con código! Bucles anidados = arte digital 🌟🎨

**📁 Carpeta:** `o6-star-pyramid-nested/`

---

## 📊 Resumen del Nivel 3 🎯

**🎉 Has completado:**
- ✅ Bucle `for` básico para contar
- ✅ Bucles `for` anidados para tablas
- ✅ Bucle `while` para búsquedas
- ✅ `break` para salir de loops
- ✅ `continue` para saltar iteraciones
- ✅ Bucles anidados para patrones 2D

**⏰ Tiempo estimado:** 2-3 horas 

**🔜 Próximo nivel:** 🏗️ Nivel 4 - Estructuras de Datos (Arrays y Objects)

---

💪 **¡Felicidades!** Fe, Mijael, Elliot, Fernanda, Chocolate y Amorosa están orgullosos. ¡Dominas los loops! 🔁✨🚀
