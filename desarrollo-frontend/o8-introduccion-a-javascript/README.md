# 🚀✨ JavaScript Nivel 1: Fundamentos de Programación 💻🎯

¡Bienvenido a tu primer paso en el mundo mágico de JavaScript! 🌟🎉 En este nivel aprenderás los conceptos más básicos pero esenciales para convertirte en un desarrollador frontend extraordinario. Desde mostrar tu primer "¡Hola Mundo!" 👋 hasta crear un simulador de batalla épica ⚔️🐲, cada reto te acercará más a dominar la programación como un verdadero mago del código. 🧙‍♂️💫

Este nivel está diseñado para ser práctico, divertido y lleno de personalidad única. ¡Prepárate para programar aventuras increíbles con Mijael 👦, Fernanda 👧, Fe 🌟, Elliot 🤓, Doky 🐕, Amorosa 💖 y hasta chanchitos mágicos voladores! 🐷✨🚁

---

## 🎯 Objetivos
* 💻 **Dominar la sintaxis básica** de JavaScript (variables, console.log, operadores)
* 🤝 **Entender la interacción con el usuario** mediante prompt() y alert()
* 🧠 **Aplicar lógica condicional** para tomar decisiones en el código
* 🎮 **Manipular datos básicos** como strings, números y arrays
* 🧩 **Desarrollar pensamiento algorítmico** resolviendo problemas paso a paso
* 🛡️ **Validar datos de entrada** para crear programas robustos
* 📚 **Construir narrativas dinámicas** que cambien según la entrada del usuario
---

## 📚✨ Conceptos a Aprender

```
    🎭✨ VARIABLES & DATOS          🧠⚡ LÓGICA & DECISIONES
    ┌──────────────────────┐       ┌──────────────────────┐
    │ • const, let, var 📝 │       │ • if/else 🤔         │
    │ • strings 📜         │       │ • operadores ➕➖    │
    │ • numbers 🔢         │  ──►  │ • comparaciones ⚖️   │
    │ • template strings 🎯│       │ • validaciones ✅    │
    │ • typeof 🔍          │       │ • flujo de control 🌊│
    └──────────────────────┘       └──────────────────────┘
             │                             │
             ▼                             ▼
    🎲🎪 ALEATORIEDAD & ARRAYS      💬🎉 INTERACCIÓN USUARIO
    ┌─────────────────────┐       ┌─────────────────────┐
    │ • Math.random() 🎰  │       │ • prompt() 💭       │
    │ • Math.floor() 📐   │       │ • alert() 🔔        │
    │ • arrays básicos 📋 │  ◄──  │ • console.log 🖥️    │
    │ • array.length 📏   │       │ • entrada/salida 🔄 │
    │ • índices 🎯        │       │ • experiencia UX 🎨 │
    └─────────────────────┘       └─────────────────────┘
             │                             │
             ▼                             ▼
    🔄🌀 BUCLES & REPETICIÓN        🎮🚀 APLICACIONES
    ┌─────────────────────┐       ┌───────────────────────┐
    │ • while loops 🔁    │       │ • calculadoras 🧮     │
    │ • condiciones 🎚️    │       │ • generadores 🎲      │
    │ • iteración 🔄      │  ──►  │ • tests interactivos🧪│
    │ • contadores 📊     │       │ • simuladores 🎭      │
    │ • estados 📡        │       │ • mini-juegos 🎮      │
    └─────────────────────┘       └───────────────────────┘

        🎯🏆 RESULTADO: ¡Tu primera app JavaScript completa! 🎉✨
```

---

## 🏆✨ Retos

### 🧑‍💻 o1 ¡Hola, Programador!

Crea un pequeño programa que salude al usuario usando su nombre 🖐️😊

**🧠 Fundamentos:** `console.log`, variables, concatenación, template strings

---

#### 🎯 Problemática

Queremos saludar al usuario de forma personalizada usando una variable con su nombre. El mensaje debe mostrarse por consola 🖥️

> “¡Hola, Elliot! Bienvenido a tu camino como desarrollador.”

---

#### ✅ Casos de prueba

```js
// ✅ Happy paths
const name = "Elliot";
// expected output: "¡Hola, Elliot! Bienvenido a tu camino como desarrollador."

const name = "Fe";
// expected output: "¡Hola, Fe! Bienvenido a tu camino como desarrollador."

const name = "Fernanda";
// expected output: "¡Hola, Fernanda! Bienvenido a tu camino como desarrollador."

// ❌ Validación básica: cadena vacía
const name = "";
// expected output: "¡Hola! Bienvenido a tu camino como desarrollador."
// El software debe omitir el nombre si está vacío y mostrar solo el saludo general.

// ❌ Validación de tipo: debe retornar string
const name = 21;
const message = `¡Hola, ${name}! Bienvenido a tu camino como desarrollador.`;
// expected typeof message: "string"
```

---

#### 💻 Código base

```js
// Declara una variable llamada 'name'
// Usa console.log para mostrar un mensaje de saludo personalizado
```

---

#### 💡 Tips

✨ Usa `const` si el valor no cambia
✨ Usa `` `template strings` `` para insertar variables fácilmente
✨ Si el nombre está vacío, evita agregarlo al saludo
✨ Asegúrate de que el mensaje sea siempre una cadena (`typeof === "string"`)

---

#### 🚀 Motivación

¡Este es tu **primer programa funcional en JavaScript**! 🚀
Aprendes a declarar una variable, a **mostrar texto dinámico** y a **controlar el resultado** dependiendo del valor ingresado.
Además, ¡te da la bienvenida con estilo a tu viaje como desarrollador frontend! 👨‍💻✨

---

### 🧮 o2 Calculadora de Edad

Haz un programa que calcule la edad de una persona usando su año de nacimiento 🕰️

**🧠 Fundamentos:** `console.log`, variables, operaciones matemáticas, validación de datos

---

#### 🎯 Problemática

El programa debe guardar el año de nacimiento de una persona (como Fernanda, Elliot, Mijael o Fe) en una variable llamada `birthYear`, calcular su edad actual y mostrarla en consola en el formato:

> “Tienes 25 años.”

---

#### ✅ Casos de prueba

```js
// ✅ Happy paths
const birthYear = 1996;
// expected output (en 2025): "Tienes 29 años."

const birthYear = 1999;
// expected output: "Tienes 26 años."

const birthYear = 2023;
// expected output: "Tienes 02 años."

// ❌ Validación básica (vacío)
const birthYear = "";
// expected output: "Por favor, ingresa un año válido."
// El software debe detectar que el campo está vacío y evitar hacer el cálculo

// ❌ Validación de tipo del resultado
const birthYear = 2004;
const result = `Tienes ${new Date().getFullYear() - birthYear} años.`;
// expected typeof result: "string"
```

---

#### 💻 Código base

```js
// Declara una variable llamada 'birthYear'
// Calcula la edad usando el año actual
// Muestra el mensaje en consola: "Tienes X años."
```

---

#### 💡 Tips

🧠 Usa `new Date().getFullYear()` para obtener el año actual
🛑 Si `birthYear` está vacío, no calcules la edad
📦 Usa template strings (`` ` ``) para mostrar el mensaje
✅ El mensaje final siempre debe ser una cadena de texto (`typeof === "string"`)

---

#### 🚀 Motivación

¡Este reto te conecta con la realidad! 🎂
Aprendes a validar datos, hacer operaciones y mostrar resultados dinámicos.
Ideal para calcular la edad de **Fernanda, Elliot, Fe, Amorosa o incluso chanchitos** 🐷🧮✨

---

### 📝 o3 Generador de Historias Aleatorias

Crea una historia graciosa y aleatoria combinando palabras de diferentes listas 🎲📚

**🧠 Fundamentos:** arrays, variables, `Math.random`, concatenación, funciones

---

#### 🎯 Problemática

El programa debe generar una historia cada vez que se ejecute, eligiendo aleatoriamente un nombre, una acción, un lugar y un objeto.

Ejemplo:

> "Fe navegó en una ratita gigante hacia el planeta 21."

---

#### ✅ Casos de prueba

```js
// ✅ Happy paths
// expected: "Fernanda voló sobre los chanchitos con una escoba mágica."
// expected: "Amorosa bailó en la colina de las ratitas con una bufanda rosa."
// expected: "Mijael saltó entre las estrellas con un dragón de peluche."

// ❌ Validación básica (lista vacía)
const names = [];
// expected output: "No hay suficientes datos para crear una historia."

// ❌ Validación de tipo del resultado
const message = generarHistoria();
typeof message === 'string';
// expected: true ✅
```

---

#### 💻 Código base

```js
// Declara arrays de nombres, acciones, lugares y objetos
// Crea una función llamada generarHistoria()
// Dentro de la función:
// - Valida que todos los arrays tengan elementos
// - Elige un elemento aleatorio de cada array
// - Devuelve la historia como un string
```

---

#### 💡 Tips

🔁 Usa `Math.floor(Math.random() * array.length)`
🧩 Verifica `.length` en cada array para saber si están vacíos
🧪 Asegúrate de que `generarHistoria()` siempre devuelva un string con `typeof`

---

#### 🚀 Motivación

Este reto te permite crear un pequeño mundo de magia, ternura y humor 🤩
Practicas arrays, funciones y aleatoriedad… ¡y a la vez haces sonreír a Fernanda, Mijael, Doky, Amorosa y Fe con historias únicas! 🐶🐷🧸👧

---

### ✨ o4 Test de Personalidad Mágico (con `prompt()` y `alert()`)

Descubre qué tipo de mago eres según tus elecciones mágicas... ¡respondiendo preguntas en pantalla! 🧙‍♀️✨

**🧠 Fundamentos:** `prompt()`, `alert()`, condicionales (`if/else`), validación

---

#### 🎯 Problemática 🔮

El programa debe hacer 3 preguntas mágicas al usuario (usando `prompt()`):

1. 🌞 ¿Prefieres el **día** o la **noche**?
2. 🌡️ ¿Te gusta más el **frío** o el **calor**?
3. 🕊️ ¿Preferirías **volar** o **teletransportarte**?

Según las combinaciones, mostrará un tipo de mago:

| Combinación                       | Resultado                                 |
| --------------------------------- | ----------------------------------------- |
| día + frío + volar                | 🧊 Eres un Mago del Hielo ❄️                |
| noche + calor + teletransportarse | 🔥 Eres un Mago del Fuego 🔥                |
| día + calor + teletransportarse   | 🌞 Eres un Mago del Sol ☀️                  |
| cualquier otra combinación válida | 🌌 Eres un Mago Misterioso ✨               |
| cualquier respuesta vacía         | ⚠️ Por favor, responde todas las preguntas |

---

#### ✅ Casos de prueba 🧪

```js
// ✅ Happy paths (usando prompt o con valores manuales)
tiempo = "día", clima = "frío", poder = "volar"
// expected: "Eres un Mago del Hielo ❄️"

tiempo = "noche", clima = "calor", poder = "teletransportarse"
// expected: "Eres un Mago del Fuego 🔥"

tiempo = "día", clima = "calor", poder = "teletransportarse"
// expected: "Eres un Mago del Sol ☀️"

// ❌ Validación básica
tiempo = "día", clima = "", poder = "volar"
// expected: "Por favor, responde todas las preguntas."

// ❌ Validación de tipo del resultado
const result = "Eres un Mago del Hielo ❄️";
typeof result === 'string'; // expected: true ✅
```

---

#### 💻 Código base ⚙️

```js
// Usa alert() para dar la bienvenida al test
// Usa prompt() para obtener las 3 respuestas mágicas: time, weather y power
// Valida que ninguna esté vacía
// Usa condicionales para evaluar combinaciones exactas
// Muestra el resultado final con alert()
```

---

#### 💡 Tips ✏️

💬 Usa `.toLowerCase()` para evitar errores con mayúsculas
🧼 Usa `!variable` para validar si está vacía
🌈 Muestra siempre un resultado con `alert()`
🎨 Usa emojis para darle personalidad al test
🪄 Usa `else` final para el caso de Mago Misterioso

---

#### 🚀 Motivación ✨

Este reto es tu primer acercamiento real a la **interactividad con el usuario** 🧑‍💻
Aprendes a **recibir datos**, **validarlos** y **tomar decisiones lógicas**.
¡Además, es mágico, divertido y 100% personalizado para Fernanda, Fe, Mijael y hasta Amorosa! 🐶💫

---

### 🐲 o5 Simulador de Batalla Épica

Simula una batalla mágica entre un guerrero y un dragón… ¡con decisiones del usuario! ⚔️🔥
Crea una historia de combate por turnos, donde cada personaje ataca hasta que uno gane.

**🧠 Fundamentos:** `prompt()`, `alert()`, objetos, bucles `while`, operadores, validación de datos

---

#### 🎯 Problemática ⚔️

Debes pedir al usuario que defina:

* 🧑‍🚀 El **nombre**, **vida** y **ataque** de un guerrero
* 🐉 El **nombre**, **vida** y **ataque** de un dragón

Ambos se turnarán atacándose.
En cada turno:

* El guerrero ataca primero y reduce la vida del dragón
* Luego el dragón responde y reduce la vida del guerrero

La batalla termina cuando uno de los dos llegue a **vida 0 o menos**.
El programa debe mostrar quién ganó y narrar el combate con `alert()`.

---

#### ✅ Casos de prueba 🧪

```js
// ✅ Happy paths
// Guerrero: Doky (vida: 100, ataque: 15)
// Dragón: Chocolate (vida: 80, ataque: 12)
// expected: "👨‍🚀 El guerrero ganó el duelo 💥💥💥"

const warrior = { name: "Fe", health: 80, attack: 10 };
const dragon = { name: "Chanchitos", health: 100, attack: 16 };
// expected: "🐉 El dragón ganó el duelo 💥💥💥"

const warrior = { name: "Fernanda", health: 100, attack: 13 };
const dragon = { name: "Ratitas", health: 100, attack: 13 };
// expected: Uno gana después de varios turnos

// ❌ Validación básica
const warrior = { name: "Mijael", health: 100, attack: 0 };
// expected: "⚠️ Los valores de ataque y vida deben ser positivos."

// ❌ Validación de tipo del resultado
let message = "👨‍🚀 El guerrero ganó el duelo 💥💥💥";
typeof message === "string";
// expected: true ✅
```

---

#### 💻 Código base ⚙️

```js
// Da la bienvenida al usuario con alert()
// Pide nombre, vida y ataque del guerrero (prompt)
// Pide nombre, vida y ataque del dragón (prompt)
// Valida que todos los datos estén completos y sean números positivos
// Simula la batalla con un bucle while
// Alterna los ataques entre guerrero y dragón
// Muestra los resultados con alert()
// Al final, muestra un mensaje diciendo quién ganó
// Usa typeof message === "string" para validar el tipo del resultado (opcional)
```

---

#### 💡 Tips 💬

🧠 Usa `parseInt()` para convertir los valores a número
🧼 Usa `isNaN()` para validar que los números sean válidos
🔁 Usa `while (warriorHealth > 0 && dragonHealth > 0)` para el combate
📢 Usa `alert()` en cada turno para narrar el duelo
🔎 Usa `typeof` para validar que el resultado final sea una cadena
🏷️ No olvides nombrar a tus guerreros como **Doky**, **Fe**, **Fernanda**, **Mijael**... ¡hazlo tuyo!

---

#### 🚀 Motivación 🎮

Este reto cierra el Nivel 1 con todo lo aprendido:
**input de usuario, validación, bucles, decisiones, narrativa e interactividad**.
¡Una pequeña app sin HTML, pero con mucha lógica! 🎯🔥
¡Ideal para jugar con tu hijo Mijael, dedicarle la victoria a Fernanda o enfrentar a Amorosa contra un dragón! 🐶💖🐲

---

## 🚀🎯 Siguientes Pasos

Una vez que completes este nivel, estarás listo para avanzar en el [JavaScript Roadmap](https://roadmap.sh/javascript) 🗺️✨:

### 📈🚀 Nivel 2: Estructuras de Datos Avanzadas
- 🎨 **Arrays avanzados** - métodos como map(), filter(), reduce() 🔄✨
- 🏗️ **Objetos complejos** - propiedades, métodos, destructuring 📦🔧
- ⚡ **Funciones profundas** - parámetros, return, scope, arrow functions 🏹💫

### 🔮🌟 Nivel 3: Programación Moderna
- ✨ **ES6+ Features** - destructuring, spread operator, modules 📚🎯
- ⏰ **Asynchronous JavaScript** - callbacks, promises, async/await 🔄⚡
- 🎨 **DOM Manipulation** - seleccionar elementos, eventos, HTML dinámico 🖱️🎭

### 🎨🚀 Nivel 4: Aplicaciones Web
- ⚛️ **Frontend Frameworks** - React, Vue o Angular 🎪🔥
- 🌐 **APIs y HTTP** - fetch, REST, JSON 📡💎
- 🛠️ **Build Tools** - npm, webpack, vite ⚙️🎯

---

🎉✨ **¡Felicidades por comenzar tu viaje épico como desarrollador!** 🚀💻 Cada línea de código que escribas te acerca más a crear aplicaciones increíbles y mágicas. ¡Fernanda 👧, Mijael 👦, Fe 🌟, Elliot 🤓, Doky 🐕, Amorosa 💖 y todos tus amigos estarán súper orgullosos de tu progreso! 💪✨🎯🏆