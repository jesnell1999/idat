# 🌐 Nivel 11: Fetch API - Conectando con el Mundo ✨

```
  ███████╗███████╗████████╗ ██████╗██╗  ██╗     █████╗ ██████╗ ██╗
  ██╔════╝██╔════╝╚══██╔══╝██╔════╝██║  ██║    ██╔══██╗██╔══██╗██║
  █████╗  █████╗     ██║   ██║     ███████║    ███████║██████╔╝██║
  ██╔══╝  ██╔══╝     ██║   ██║     ██╔══██║    ██╔══██║██╔═══╝ ██║
  ██║     ███████╗   ██║   ╚██████╗██║  ██║    ██║  ██║██║     ██║
  ╚═╝     ╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝     ╚═╝
```

> **🎯 Objetivo:** Dominar Fetch API desde cero: traer datos reales, manejar errores, loading states y crear apps conectadas 🚀

---

## 🐕 Reto 1: Galería de Perritos - GET Request

**📖 Historia:** Doky 🐕 está solo en casa y extraña a sus amigos perrunos. Descubre una API mágica que le muestra fotos aleatorias de perritos de todo el mundo. Cada vez que hace click en "Nuevo Perrito", la API le trae una foto diferente. Ahora tiene compañía virtual infinita. Usa `fetch()` para traer las imágenes, maneja el loading mientras espera, y si falla la conexión, muestra un error amigable. ¡Doky nunca se sentirá solo otra vez! 🐶💖

**📝 Descripción:** Tu programa debe usar `fetch()` con método GET para consumir la API pública Dog CEO (https://dog.ceo/api/breeds/image/random), parsear la respuesta con `.json()`, mostrar un loading spinner mientras carga, renderizar la imagen en el DOM cuando llegue, manejar errores de red con `.catch()`, y validar el status code de la respuesta.

**⚙️ Funcionalidades:**
- Hacer petición GET con `fetch(url)`
- Parsear respuesta JSON con `.json()`
- Mostrar loading state mientras espera
- Renderizar imagen en el DOM
- Manejar errores con `.catch()`
- Botón para cargar nueva foto

**✅ Casos de prueba:**

| Test                                       | Expected Output                     |
| ------------------------------------------ | ----------------------------------- |
| `typeof fetch`                             | `'function'`                        |
| Response después de fetch exitoso          | `response.status === 200`           |
| Datos parseados tienen propiedad `message` | `true`                              |
| URL de imagen es string                    | `typeof imageUrl === 'string'`      |
| Imagen se renderiza en DOM                 | `dogImage.src.includes('https://')` |

**💻 Código base:**

**📁 Estructura:**
```
o1-dog-gallery/
  ├── index.html
  ├── css/
  │   └── styles.css
  └── js/
      └── main.js
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🐕 Galería de Perritos</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">🐕 Galería de Perritos</h1>
      <p class="app__subtitle">Fetch API - GET | Abre la consola para ver resultados</p>
    </header>

    <section class="gallery">
      <div id="imageContainer" class="gallery__container">
        <div id="loading" class="loading" style="display: none;">
          <div class="loading__spinner"></div>
          <p class="loading__text">Cargando perrito...</p>
        </div>
        <img id="dogImage" class="gallery__image" alt="Perrito aleatorio">
        <p id="error" class="gallery__error" style="display: none;"></p>
      </div>
      <button id="newDogBtn" class="btn">🎲 Nuevo Perrito</button>
    </section>
  </main>

  <script src="./js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.app {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 40px;
  max-width: 600px;
  width: 100%;
  margin: 20px;
  box-sizing: border-box;
}

.app__header {
  text-align: center;
  margin-bottom: 30px;
}

.app__title {
  margin: 0 0 10px 0;
  font-size: 2.5rem;
  color: #667eea;
}

.app__subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.gallery {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.gallery__container {
  min-height: 400px;
  background-color: #f8f9fa;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  display: none;
}

.gallery__error {
  margin: 0;
  padding: 20px;
  color: #e74c3c;
  font-size: 1.1rem;
  text-align: center;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.loading__spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading__text {
  margin: 0;
  font-size: 1.1rem;
  color: #666;
}

.btn {
  padding: 15px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .app {
    padding: 30px 20px;
  }
  
  .app__title {
    font-size: 2rem;
  }
  
  .gallery__container {
    min-height: 300px;
  }
}
```

**js/main.js:**
```javascript
const API_URL = 'https://dog.ceo/api/breeds/image/random';

let imageUrl = '';
let response = null;

// your code here 💻
// select elements
// create fetchDog async function
// show loading, hide image and error
// use fetch() to get data
// parse with .json()
// handle success and errors
// render image in DOM

// 🧪 TESTS: Hacer click en "Nuevo Perrito", esperar 2 segundos, pegar esto en consola:
/*
console.log('=== Tests ===');
console.log('Test 1:', typeof fetch === 'function');
console.log('Test 2:', response && response.status === 200);
console.log('Test 3:', imageUrl.includes('https://'));
console.log('Test 4:', typeof imageUrl === 'string');
console.log('Test 5:', dogImage.src.includes('https://'));
*/
```

**💡 Tips:**
- 🔹 `fetch(url)` retorna una Promise
- 🔹 `response.json()` también es Promise
- 🔹 Usa `async/await` para código limpio
- 🔹 Verifica `response.ok` antes de parsear
- 🔹 `try/catch` para manejar errores

**🚀 Motivación:** ¡Doky tiene amigos perritos infinitos! 🐕💖

---

## 🌤️ Reto 2: App del Clima - POST y Error Handling Completo

**📖 Historia:** Fernanda 🧙‍♀️ viaja por todo el mundo lanzando hechizos, pero el clima afecta su magia: con lluvia sus hechizos de fuego fallan, con sol son más poderosos. Necesita una app que le diga el clima de cualquier ciudad. Escribe "Lima" y ¡boom! Temperatura, descripción, humedad. Usa una API real de clima (WeatherAPI), maneja errores si escribe mal la ciudad, muestra loading mientras busca, y guarda el historial de búsquedas en localStorage. ¡Fernanda nunca será sorprendida por la lluvia otra vez! 🌦️✨

**📝 Descripción:** Tu programa debe usar `fetch()` con método GET a WeatherAPI, capturar input del usuario, construir URL dinámica con query params, mostrar loading state, parsear respuesta JSON con datos del clima, manejar múltiples tipos de errores (404 ciudad no encontrada, 500 error servidor, sin internet), renderizar datos en tarjeta visual, guardar historial en localStorage, y mostrar últimas 3 búsquedas.

**⚙️ Funcionalidades:**
- Capturar input de ciudad desde formulario
- Construir URL con query parameters
- Hacer petición GET a WeatherAPI
- Mostrar loading mientras espera
- Parsear y renderizar datos del clima
- Manejar errores 404, 500, network
- Guardar historial en localStorage
- Mostrar últimas búsquedas

**✅ Casos de prueba:**

| Test                           | Expected Output                      |
| ------------------------------ | ------------------------------------ |
| `typeof fetch`                 | `'function'`                         |
| Buscar ciudad válida           | `weatherData.temp !== undefined`     |
| Buscar ciudad inválida         | Muestra error "Ciudad no encontrada" |
| Historial en localStorage      | `Array.isArray(history)`             |
| Historial tiene máximo 3 items | `history.length <= 3`                |

**💻 Código base:**

**📁 Estructura:**
```
o2-weather-app/
  ├── index.html
  ├── css/
  │   └── styles.css
  └── js/
      └── main.js
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🌤️ App del Clima</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">🌤️ App del Clima</h1>
      <p class="app__subtitle">Fetch API - Real | Abre la consola para ver resultados</p>
    </header>

    <form id="searchForm" class="search">
      <input 
        type="text" 
        id="cityInput" 
        name="city"
        class="search__input" 
        placeholder="Escribe una ciudad... 🌍"
        required
      >
      <button type="submit" class="search__btn">🔍 Buscar</button>
    </form>

    <section id="weatherCard" class="weather" style="display: none;">
      <div class="weather__icon">☀️</div>
      <h2 id="cityName" class="weather__city"></h2>
      <div id="temperature" class="weather__temp"></div>
      <p id="description" class="weather__desc"></p>
      <div class="weather__details">
        <div class="weather__detail">
          <span>💧 Humedad:</span>
          <strong id="humidity"></strong>
        </div>
        <div class="weather__detail">
          <span>💨 Viento:</span>
          <strong id="wind"></strong>
        </div>
      </div>
    </section>

    <div id="loading" class="loading" style="display: none;">
      <div class="loading__spinner"></div>
      <p class="loading__text">Buscando clima...</p>
    </div>

    <p id="error" class="error" style="display: none;"></p>

    <aside id="history" class="history" style="display: none;">
      <h3 class="history__title">📜 Últimas búsquedas</h3>
      <ul id="historyList" class="history__list"></ul>
    </aside>
  </main>

  <script src="./js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.app {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 40px;
  max-width: 500px;
  width: 100%;
  margin: 20px;
  box-sizing: border-box;
}

.app__header {
  text-align: center;
  margin-bottom: 30px;
}

.app__title {
  margin: 0 0 10px 0;
  font-size: 2.5rem;
  color: #2ecc71;
}

.app__subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.search {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

.search__input {
  flex: 1;
  padding: 12px 20px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.search__input:focus {
  outline: none;
  border-color: #2ecc71;
}

.search__btn {
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  background-image: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.search__btn:hover {
  transform: translateY(-2px);
}

.weather {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.weather__icon {
  font-size: 4rem;
  margin-bottom: 15px;
}

.weather__city {
  margin: 0 0 15px 0;
  font-size: 2rem;
}

.weather__temp {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.weather__desc {
  margin: 0 0 20px 0;
  font-size: 1.2rem;
  opacity: 0.9;
  text-transform: capitalize;
}

.weather__details {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.weather__detail {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.9rem;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
  box-sizing: border-box;
}

.loading__spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #2ecc71;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading__text {
  margin: 0;
  font-size: 1.1rem;
  color: #666;
}

.error {
  margin: 20px 0;
  padding: 15px;
  background-color: #fee;
  border-left: 4px solid #e74c3c;
  border-radius: 8px;
  color: #c0392b;
  box-sizing: border-box;
}

.history {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #e0e0e0;
  box-sizing: border-box;
}

.history__title {
  margin: 0 0 15px 0;
  font-size: 1.1rem;
  color: #666;
}

.history__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.history__item {
  padding: 10px 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #555;
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-sizing: border-box;
}

.history__item:hover {
  background-color: #e9ecef;
}

@media (max-width: 768px) {
  .app {
    padding: 30px 20px;
  }
  
  .app__title {
    font-size: 2rem;
  }
  
  .weather__temp {
    font-size: 3rem;
  }
}
```

**js/main.js:**
```javascript
// API Key gratuita de WeatherAPI (funciona sin registro)
const API_KEY = '3045dd712a53400ea1c202335241506';
const API_URL = 'https://api.weatherapi.com/v1/current.json';

let weatherData = null;
let history = [];

// your code here 💻
// select elements
// load history from localStorage
// create fetchWeather async function
// construct URL with city param
// show loading, hide others
// fetch weather data
// handle errors (404, 500, network)
// render weather card
// save to history (max 3)
// render history list

// 🧪 TESTS: Buscar "Lima", esperar 2 segundos, pegar esto en consola:
/*
console.log('=== Tests ===');
console.log('Test 1:', typeof fetch === 'function');
console.log('Test 2:', weatherData && weatherData.temp !== undefined);
console.log('Test 3:', Array.isArray(history));
console.log('Test 4:', history.length <= 3);
console.log('Test 5:', cityName.textContent === 'Lima');
*/

// Para probar error 404: buscar "XYZ123" y verificar mensaje de error
```

**💡 Tips:**
- 🔹 URL con params: `${API_URL}?key=${API_KEY}&q=${city}`
- 🔹 Verifica `response.status` para errores
- 🔹 Status 404 = ciudad no encontrada
- 🔹 Usa `try/catch` para network errors
- 🔹 Historia: `[city, ...history].slice(0, 3)`

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Fernanda predice el clima para su magia 🧙‍♀️🌤️✨

---

## 📊 Resumen del Nivel 11 🎯

**🎉 Has completado:**
- ✅ **Fetch API:** `fetch(url)`, `.json()`
- ✅ **GET requests:** Traer datos de APIs públicas
- ✅ **Error handling:** Status codes, network errors
- ✅ **Loading states:** UX mientras espera
- ✅ **Renderizado dinámico:** Mostrar datos en DOM

**⏰ Tiempo estimado:** 2 horas 

**🎓 Conceptos clave:**
- `fetch()` hace peticiones HTTP
- Retorna Promise que se resuelve con Response
- `.json()` parsea el body de la respuesta
- Siempre verificar `response.ok` o `response.status`
- `try/catch` para errores de red
- Loading states mejoran UX
- APIs públicas permiten practicar gratis

**🔜 Próximo nivel:** 📦 Nivel 12 - Módulos ES6

---

💪 **¡Felicidades!** Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y Doky están orgullosos. ¡Eres un maestro de las APIs! 🏆✨🚀
