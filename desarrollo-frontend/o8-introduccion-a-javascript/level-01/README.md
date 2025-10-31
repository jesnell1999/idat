# 🌱 Nivel 1: Primeros Pasos en JavaScript ✨

```
   _____ _             _   
  / ____| |           | |  
 | (___ | |_ __ _ _ __| |_ 
  \___ \| __/ _` | '__| __|
  ____) | || (_| | |  | |_ 
 |_____/ \__\__,_|_|   \__|
                            
```

> **🎯 Objetivo:** Familiarizarte con console, variables, tipos de datos y entrada/salida básica 💻✨

---

## 🎮 Reto 1: Tu primer mensaje ✨

**📝 Descripción:** Muestra un mensaje de bienvenida en la consola 💬

**⚡ Funcionalidad:** Imprimir `"¡Hola, mundo! Estoy aprendiendo JavaScript 🚀"`

**✅ Casos de prueba:**
- ✅ Debe aparecer el mensaje completo en consola 💻
- ✅ El mensaje debe incluir el emoji 🚀
- 📦 Retorna `undefined`

**🏗️ Código base:**
```javascript
// 🎯 Escribe tu código aquí 👇

```

**💡 Tips:**
- 🔹 Usa `console.log()` para mostrar mensajes
- 🔹 Los strings van entre comillas `"texto"`

**🚀 Motivación:** ¡Tu primer paso en JavaScript! Cada gran programador empezó exactamente aquí 🌟✨

---

## 🎮 Reto 2: Mensajes de colores 🎨

**📝 Descripción:** Usa diferentes tipos de console para mostrar mensajes 🌈

**⚡ Funcionalidad:** Mostrar un mensaje normal 💬, una advertencia ⚠️ y un error ❌

**✅ Casos de prueba:**
- ✅ `console.log()` muestra mensaje normal 💬
- ✅ `console.warn()` muestra advertencia en amarillo ⚠️
- ✅ `console.error()` muestra error en rojo ❌
- 📦 Los tres retornan `undefined`

**🏗️ Código base:**
```javascript
// 💬 Mensaje normal


// ⚠️ Advertencia


// ❌ Error

```

**💡 Tips:**
- 🔹 Usa `console.log()`, `console.warn()` y `console.error()`
- 🔹 Observa los colores diferentes en la consola 🎨

**🚀 Motivación:** Cada tipo de mensaje tiene su propósito. ¡Aprende a comunicarte bien! 💬✨

---

## 🎮 Reto 3: Mi primera variable 📦

**📝 Descripción:** Crea una variable con tu nombre y muéstrala en consola ✍️

**⚡ Funcionalidad:** Usar `const` para almacenar tu nombre 🏷️

**✅ Casos de prueba:**
- ✅ La variable debe tener tu nombre 👤
- ✅ Debe mostrarse en consola correctamente 💻
- ⚠️ Debe usar `const` (no `let` ni `var`) 🔒
- 📦 La variable es de tipo `string`

**🏗️ Código base:**
```javascript
// 📦 Crea una variable con tu nombre 👇


// 💬 Muestra tu nombre en consola 👇

```

**💡 Tips:**
- 🔹 `const nombre = "Tu Nombre";` 📝
- 🔹 Usa `console.log()` para mostrar 💬

**🚀 Motivación:** ¡Las variables son como cajitas mágicas que guardan información! 📦✨

---

## 🎮 Reto 4: Constantes vs variables 🔄

**📝 Descripción:** Crea variables con `const` y `let` para entender la diferencia 🤔

**⚡ Funcionalidad:** Una variable que no cambia 🔒 y otra que sí 🔄

**✅ Casos de prueba:**
- ✅ Año de nacimiento con `const` (no cambia) 🎂
- ✅ Edad actual con `let` (puede cambiar cada año) 📆
- ✅ Ambas deben mostrarse en consola 💻
- 📦 Ambas son tipo `number`

**🏗️ Código base:**
```javascript
// 🎂 Tu año de nacimiento (no cambia) 👇


// 📆 Tu edad actual (cambia cada año) 👇


// 💬 Muestra ambas en consola 👇


```

**💡 Tips:**
- 🔹 Usa `const` para valores fijos 🔒
- 🔹 Usa `let` para valores que cambiarán 🔄
- 🔹 El año de nacimiento NUNCA cambia, la edad SÍ 🎯

**🚀 Motivación:** Elegir el tipo correcto hace tu código más claro 🎯✨

---

## 🎮 Reto 5: Tipos de datos básicos 🎨

**📝 Descripción:** Crea variables de diferentes tipos 🌈

**⚡ Funcionalidad:** Crear un string 📝, number 🔢, boolean ✅, undefined ❓ y null ⭕

**✅ Casos de prueba:**
- ✅ Un texto (string) 📝
- ✅ Un número (number) 🔢
- ✅ Un verdadero/falso (boolean) ✅❌
- ✅ Una variable sin valor (undefined) ❓
- ✅ Un valor vacío intencional (null) ⭕
- 📦 Cada uno debe ser del tipo correcto

**🏗️ Código base:**
```javascript
// 📝 String (texto) 👇


// 🔢 Number (número) 👇


// ✅ Boolean (verdadero/falso) 👇


// ❓ Undefined (sin valor) 👇


// ⭕ Null (vacío intencional) 👇


// 💬 Muestra todos en consola 👇





```

**💡 Tips:**
- 🔹 Los strings van entre comillas 📝
- 🔹 Los numbers son números sin comillas 🔢
- 🔹 Los booleans son `true` o `false` ✅❌
- 🔹 `undefined` se asigna automáticamente si no das valor

**🚀 Motivación:** JavaScript tiene diferentes tipos de datos. ¡Conócelos todos! 🎨✨

---

## 🎮 Reto 6: Detective de tipos 🔍

**📝 Descripción:** Usa `typeof` para descubrir el tipo de cada variable 🕵️‍♂️

**⚡ Funcionalidad:** Identificar el tipo de dato con el operador `typeof` 🎯

**✅ Casos de prueba:**
- ✅ `typeof "Hola"` → "string" 📝
- ✅ `typeof 42` → "number" 🔢
- ✅ `typeof true` → "boolean" ✅
- ✅ `typeof undefined` → "undefined" ❓
- 📦 `typeof` siempre retorna un `string`

**🏗️ Código base:**
```javascript
const texto = "JavaScript";
const numero = 100;
const activo = true;
const vacio = undefined;

// 🔍 Muestra el tipo de cada variable usando typeof 👇




```

**💡 Tips:**
- 🔹 `typeof variable` te dice el tipo 🔍
- 🔹 El resultado siempre es un string 📝
- 🔹 Prueba también con `null` y observa algo curioso 👀

**🚀 Motivación:** ¡Ser detective de tipos te evitará muchos errores! 🔍✨

---

## 🎮 Reto 7: Presentación con template strings 🎤

**📝 Descripción:** Crea una presentación usando template strings ✨

**⚡ Funcionalidad:** Combinar texto y variables con backticks 🔗

**✅ Casos de prueba:**
- ✅ Debe incluir nombre y edad en el mensaje 👤
- ✅ Debe usar template strings (backticks) \`\` 📝
- ✅ Mensaje: `"Hola, soy [nombre] y tengo [edad] años"` 💬
- 📦 El resultado es un `string`

**🏗️ Código base:**
```javascript
const miNombre = "Fernanda";
const miEdad = 15;

// ✨ Crea el mensaje usando template strings (backticks) 👇


// 💬 Muestra el mensaje 👇

```

**💡 Tips:**
- 🔹 Usa backticks: \`texto ${variable}\` 📝
- 🔹 `${}` dentro del string inserta la variable 🔗
- 🔹 Los backticks están al lado izquierdo del 1 en el teclado ⌨️

**🚀 Motivación:** ¡Template strings hacen que combinar texto sea súper fácil! ✨💫

---

## 🎮 Reto 8: Operaciones matemáticas básicas ➕➖✖️➗

**📝 Descripción:** Realiza operaciones con números 🔢

**⚡ Funcionalidad:** Suma ➕, resta ➖, multiplicación ✖️ y división ➗

**✅ Casos de prueba:**
- ✅ 10 + 5 → 15 ➕
- ✅ 20 - 8 → 12 ➖
- ✅ 6 * 7 → 42 ✖️
- ✅ 100 / 4 → 25 ➗
- 📦 Todos retornan `number`

**🏗️ Código base:**
```javascript
const num1 = 10;
const num2 = 5;

// ➕ Suma 👇


// ➖ Resta 👇


// ✖️ Multiplicación 👇


// ➗ División 👇


// 💬 Muestra todos los resultados 👇




```

**💡 Tips:**
- 🔹 Usa `+`, `-`, `*`, `/` para operaciones ➕➖✖️➗
- 🔹 Guarda cada resultado en una variable 📦
- 🔹 Usa template strings para mostrar los resultados 💬

**🚀 Motivación:** ¡JavaScript es una calculadora súper poderosa! 🔢✨

---

## 🎮 Reto 9: Mi primer alert 🔔

**📝 Descripción:** Muestra un mensaje emergente al usuario 📢

**⚡ Funcionalidad:** Usar `alert()` para mostrar un saludo 👋

**✅ Casos de prueba:**
- ✅ Debe aparecer una ventana emergente 🪟
- ✅ El mensaje debe ser: "¡Bienvenido a JavaScript! 🎉" 
- 📦 `alert()` retorna `undefined`

**🏗️ Código base:**
```javascript
// 🔔 Muestra un alert con el saludo 👇

```

**💡 Tips:**
- 🔹 `alert("tu mensaje")` 🔔
- 🔹 El mensaje aparece en una ventana emergente 🪟
- 🔹 Este código solo funciona en navegadores 🌐

**🚀 Motivación:** ¡Ahora puedes hablar directamente con el usuario! 💬✨

---

## 🎮 Reto 10: Capturando información ⌨️

**📝 Descripción:** Pide el nombre al usuario con `prompt()` 📥

**⚡ Funcionalidad:** Capturar entrada del usuario y mostrarla 💬

**✅ Casos de prueba:**
- ✅ Debe aparecer una ventana pidiendo el nombre 🪟
- ✅ Debe guardar lo que el usuario escriba 💾
- ✅ Debe mostrar el nombre en consola 💻
- 📦 `prompt()` retorna un `string` o `null`

**🏗️ Código base:**
```javascript
// ⌨️ Pide el nombre al usuario 👇


// 💬 Muestra el nombre en consola 👇

```

**💡 Tips:**
- 🔹 `prompt("¿Cuál es tu nombre?")` ⌨️
- 🔹 Guarda el resultado en una variable 📦
- 🔹 Este código solo funciona en navegadores 🌐

**🚀 Motivación:** ¡Tu programa ya puede interactuar con personas reales! 🎮✨

---

## 🎮 Reto 11: Saludo personalizado 👋

**📝 Descripción:** Pide el nombre y muestra un saludo personalizado con `alert()` 🎉

**⚡ Funcionalidad:** Combinar `prompt()` ⌨️, template strings ✨ y `alert()` 🔔

**✅ Casos de prueba:**
- ✅ Pide el nombre con `prompt()` ⌨️
- ✅ Crea mensaje: `"¡Hola, [nombre]! 👋"` 📝
- ✅ Muestra el mensaje con `alert()` 🔔
- 📦 El mensaje final es un `string`

**🏗️ Código base:**
```javascript
// ⌨️ Pide el nombre 👇


// ✨ Crea el saludo personalizado 👇


// 🔔 Muestra el saludo con alert 👇

```

**💡 Tips:**
- 🔹 Usa `prompt()` para capturar ⌨️
- 🔹 Usa template strings para el mensaje 📝
- 🔹 Usa `alert()` para mostrar 🔔
- 🔹 ¡Estás combinando 3 conceptos! 🎯

**🚀 Motivación:** ¡Estás combinando varios conceptos! Eso es programar de verdad 🚀✨

---

## 🎮 Reto 12: Mini perfil 👤

**📝 Descripción:** Pide nombre y edad, luego muestra un perfil completo 📋

**⚡ Funcionalidad:** Capturar dos datos y combinarlos en un mensaje 🔗

**✅ Casos de prueba:**
- ✅ Pide nombre con `prompt()` 👤
- ✅ Pide edad con `prompt()` 🔢
- ✅ Mensaje: `"Hola [nombre], tienes [edad] años ✨"` 💬
- ✅ Muestra con `alert()` 🔔
- 📦 El perfil es un `string`

**🏗️ Código base:**
```javascript
// 👤 Pide el nombre 👇


// 🔢 Pide la edad 👇


// ✨ Crea el mensaje del perfil 👇


// 🔔 Muestra el perfil 👇

```

**💡 Tips:**
- 🔹 Dos `prompt()` separados ⌨️
- 🔹 Template strings con ambas variables 🔗
- 🔹 Un solo `alert()` al final 🔔
- 🔹 ¡Este es tu proyecto final del nivel! 🎯

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL DEL NIVEL 1! Has dominado los fundamentos. ¡Eres increíble! 💪✨

---

## 📊 Resumen del Nivel 1 🎯

**🎉 Has completado:**
- ✅ Console: log, warn, error 💬
- ✅ Variables: let y const 📦
- ✅ Tipos de datos: string, number, boolean, undefined, null 🎨
- ✅ Operador typeof 🔍
- ✅ Template strings ✨
- ✅ Operaciones matemáticas básicas ➕➖✖️➗
- ✅ Alert y prompt 🔔⌨️

**⏰ Tiempo estimado:** 2-3 horas 

**🔜 Próximo nivel:** 🔧 Nivel 2 - Transformaciones y Lógica

---

💪 **¡Felicidades!** Has dado tus primeros pasos en JavaScript. Cada reto completado es una victoria. ¡Sigue así, campeón! 🏆✨🚀
