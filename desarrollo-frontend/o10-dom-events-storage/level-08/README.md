# 👂 Nivel 8: Eventos - La Magia de la Interactividad ✨

```
  ███████╗██╗   ██╗███████╗███╗   ██╗████████╗ ██████╗ ███████╗
  ██╔════╝██║   ██║██╔════╝████╗  ██║╚══██╔══╝██╔═══██╗██╔════╝
  █████╗  ██║   ██║█████╗  ██╔██╗ ██║   ██║   ██║   ██║███████╗
  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║╚██╗██║   ██║   ██║   ██║╚════██║
  ███████╗ ╚████╔╝ ███████╗██║ ╚████║   ██║   ╚██████╔╝███████║
  ╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚══════╝
```

> **🎯 Objetivo:** Dominar eventos desde cero: clicks, formularios, inputs en tiempo real y control total de interacciones 🚀

---

## 🖱️ Reto 1: Botón Contador - Click Event

**📖 Historia:** Fernanda 🧙‍♀️ está aburrida en su torre y decide crear un juego simple: cada vez que presiona un botón mágico, un contador aumenta. ¿Podrá llegar a 100 clicks? Su récord actual es 47. El botón también cambia de color cada 10 clicks para mantenerla motivada 🎮✨

**📝 Descripción:** Tu programa debe capturar el evento `click` de un botón usando `addEventListener()`, incrementar un contador cada vez que se hace click, actualizar el texto de un elemento para mostrar el conteo actual, y validar que el evento se dispara correctamente.

**⚙️ Funcionalidades:**
- Seleccionar botón y elemento contador del DOM
- Agregar event listener con `addEventListener('click', callback)`
- Incrementar variable `count` en cada click
- Actualizar `textContent` del contador en pantalla
- Verificar que el evento `click` funciona correctamente

**✅ Casos de prueba:**

| Input                                          | Expected Output           |
| ---------------------------------------------- | ------------------------- |
| `count` inicial                                | `0`                       |
| `count` después de 5 clicks simulados          | `5`                       |
| `counterDisplay.textContent` después de clicks | `'Clicks: 5'`             |
| `typeof btn.onclick`                           | `'object'` o `'function'` |
| `btn instanceof HTMLElement`                   | `true`                    |

**💻 Código base:**

**📁 Estructura de carpeta:**
```
o1-click-counter/
  ├── index.html
  └── /js/script.js
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🖱️ Botón Contador</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    #counterDisplay {
      font-size: 48px;
      font-weight: bold;
      margin: 20px;
    }
    #clickBtn {
      padding: 20px 40px;
      font-size: 24px;
      cursor: pointer;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 10px;
      transition: transform 0.2s;
    }
    #clickBtn:hover {
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <h1>🖱️ Botón Contador</h1>
  <h5>Click Event | Abre la consola para ver resultados</h5>
  <div id="counterDisplay">Clicks: 0</div>
  <button id="clickBtn">¡Haz Click! 🎯</button>

  <script src="./js/script.js"></script>
</body>
</html>
```

**script.js:**
```javascript
let count = 0; // contador inicial

// your code here 💻
// select btn and counterDisplay
// add click event listener
// increment count and update display

console.log(count === 0);
// simulate 5 clicks for testing
// console.log(count === 5);
// console.log(counterDisplay.textContent === 'Clicks: 5');
console.log(typeof btn === 'object');
console.log(btn instanceof HTMLElement === true);
```

**💡 Tips:**
- 🔹 `element.addEventListener('click', () => { ... })`
- 🔹 Usa arrow function para el callback
- 🔹 Actualiza el DOM dentro del callback
- 🔹 `count++` incrementa el contador

**🚀 Motivación:** ¡Fernanda rompe su récord con tu código! 🖱️✨

**📁 Carpeta:** `o1-click-counter/`

---

## 📝 Reto 2: Formulario Mágico - Submit y preventDefault

**📖 Historia:** Elliot ⚡ quiere registrarse en la Academia de Héroes pero el formulario tiene un problema: cuando presiona "Enviar", ¡la página se recarga y pierde todos sus datos! Necesita capturar el evento `submit`, prevenir el comportamiento default con `preventDefault()`, y mostrar un mensaje de bienvenida con su nombre 🎓

**📝 Descripción:** Tu programa debe capturar el evento `submit` de un formulario usando `addEventListener()`, prevenir el refresco de página con `event.preventDefault()`, obtener el valor del input con `.value`, y mostrar un mensaje personalizado en pantalla.

**⚙️ Funcionalidades:**
- Seleccionar formulario y elementos del DOM
- Agregar event listener para evento `submit`
- Usar `event.preventDefault()` para evitar refresco
- Obtener valor del input con `input.value`
- Mostrar mensaje dinámico con el nombre ingresado

**✅ Casos de prueba:**

| Input                                   | Expected Output                         |
| --------------------------------------- | --------------------------------------- |
| `heroForm.tagName`                      | `'FORM'`                                |
| `nameInput.type`                        | `'text'`                                |
| Después de submit con 'Elliot'          | `message.textContent` contiene 'Elliot' |
| `typeof heroForm.onsubmit`              | `'object'` o `'function'`               |
| `nameInput instanceof HTMLInputElement` | `true`                                  |

**💻 Código base:**

**📁 Estructura de carpeta:**
```
o2-magic-form-submit/
  ├── index.html
  └── script.js
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>📝 Formulario Mágico</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
    }
    form {
      background: rgba(255, 255, 255, 0.2);
      padding: 40px;
      border-radius: 20px;
      backdrop-filter: blur(10px);
    }
    input {
      padding: 15px;
      font-size: 18px;
      border: none;
      border-radius: 10px;
      margin: 10px 0;
      width: 300px;
    }
    button {
      padding: 15px 30px;
      font-size: 18px;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      width: 100%;
    }
    #message {
      font-size: 24px;
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>📝 Formulario Mágico</h1>
  <h5>Submit Event | Abre la consola para ver resultados</h5>
  
  <form id="heroForm">
    <input type="text" id="nameInput" placeholder="Tu nombre de héroe" required>
    <button type="submit">¡Registrarse! ⚡</button>
  </form>
  
  <div id="message"></div>

  <script src="script.js"></script>
</body>
</html>
```

**script.js:**
```javascript
// your code here 💻
// select heroForm, nameInput, message
// add submit event listener
// use event.preventDefault()
// get input value and show welcome message

console.log(heroForm.tagName === 'FORM');
console.log(nameInput.type === 'text');
// after submit test: console.log(message.textContent.includes('Elliot'));
console.log(typeof heroForm.onsubmit === 'object');
console.log(nameInput instanceof HTMLInputElement === true);
```

**💡 Tips:**
- 🔹 `form.addEventListener('submit', (event) => { ... })`
- 🔹 `event.preventDefault()` SIEMPRE primero
- 🔹 `input.value` obtiene el texto
- 🔹 `form.reset()` limpia el formulario (opcional)

**🚀 Motivación:** ¡Elliot se registra sin perder sus datos! ⚡📝

**📁 Carpeta:** `o2-magic-form-submit/`

---

## ⌨️ Reto 3: Buscador en Vivo - Input Event

**📖 Historia:** Doky 🐕 tiene una lista de 100 héroes pero es difícil encontrarlos. Quiere un buscador que filtre la lista EN TIEMPO REAL mientras escribe. Si escribe "Fe", debe mostrar solo "Fe" y "Fernanda". Si escribe "E", debe ver "Elliot", "Fe", "Fernanda". ¡Sin presionar botones, magia instantánea! 🔍✨

**📝 Descripción:** Tu programa debe capturar el evento `input` (tiempo real) de un campo de búsqueda usando `addEventListener()`, filtrar un array de héroes según el texto escrito, y actualizar dinámicamente una lista en el DOM mostrando solo los resultados que coinciden.

**⚙️ Funcionalidades:**
- Seleccionar input de búsqueda y lista de resultados
- Agregar event listener para evento `input` (tiempo real)
- Filtrar array usando `filter()` según texto de búsqueda
- Actualizar lista en DOM con `innerHTML` o `createElement`
- Mostrar todos los héroes cuando búsqueda está vacía

**✅ Casos de prueba:**

| Input                                 | Expected Output           |
| ------------------------------------- | ------------------------- |
| `heroes.length`                       | `7`                       |
| `searchInput.type`                    | `'text'`                  |
| Filtrar con 'Fe' (simulado)           | Array con 2 elementos     |
| `resultsList.children.length` inicial | `7`                       |
| `typeof searchInput.oninput`          | `'object'` o `'function'` |

**💻 Código base:**

**📁 Estructura de carpeta:**
```
o3-live-search-input/
  ├── index.html
  └── script.js
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>⌨️ Buscador en Vivo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
      min-height: 100vh;
      margin: 0;
    }
    #searchInput {
      width: 400px;
      padding: 15px;
      font-size: 18px;
      border: none;
      border-radius: 10px;
      margin: 20px 0;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    #resultsList {
      list-style: none;
      padding: 0;
      width: 400px;
    }
    #resultsList li {
      background: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      color: #333;
    }
  </style>
</head>
<body>
  <h1>⌨️ Buscador en Vivo</h1>
  <h5>Input Event | Abre la consola para ver resultados</h5>
  
  <input type="text" id="searchInput" placeholder="Buscar héroe... 🔍">
  <ul id="resultsList"></ul>

  <script src="script.js"></script>
</body>
</html>
```

**script.js:**
```javascript
const heroes = ['Elliot', 'Fernanda', 'Fe', 'Mijael', 'Doky', 'Amorosa', 'Chocolate'];

// your code here 💻
// select searchInput and resultsList
// display all heroes initially
// add input event listener
// filter heroes based on search term
// update results list dynamically

console.log(heroes.length === 7);
console.log(searchInput.type === 'text');
// simulate filter test: console.log(heroes.filter(h => h.includes('Fe')).length === 2);
console.log(resultsList.children.length === 7);
console.log(typeof searchInput.oninput === 'object');
```

**💡 Tips:**
- 🔹 `input.addEventListener('input', (event) => { ... })`
- 🔹 `event.target.value` obtiene texto actual
- 🔹 `array.filter(item => item.includes(search))`
- 🔹 `.toLowerCase()` para búsqueda case-insensitive

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Doky encuentra héroes al instante 🐕🔍✨

**📁 Carpeta:** `o3-live-search-input/`

---

## 📊 Resumen del Nivel 8 🎯

**🎉 Has completado:**
- ✅ **Click events:** `addEventListener('click', callback)`
- ✅ **Submit events:** `preventDefault()` y formularios
- ✅ **Input events:** Búsqueda en tiempo real

**⏰ Tiempo estimado:** 2 horas 

**🎓 Conceptos clave:**
- `addEventListener()` conecta eventos a funciones
- `event.preventDefault()` previene comportamiento default
- `event.target` es el elemento que disparó el evento
- `'click'` para botones e interacciones
- `'submit'` para formularios
- `'input'` para cambios en tiempo real
- Callback functions ejecutan código al ocurrir evento

**🔜 Próximo nivel:** 💾 Nivel 9 - LocalStorage (Guardar Datos)

---

💪 **¡Felicidades!** Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y Doky están orgullosos. ¡Eres un maestro de eventos! 🏆✨🚀
