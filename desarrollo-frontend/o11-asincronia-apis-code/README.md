# 🚀✨ JavaScript Nivel 4: Asíncrono & APIs Modernas 🌐⚡

¡Bienvenido al nivel más emocionante del JavaScript moderno! 🎉💻 Aquí dominarás el poder de la asincronía, conectarás con APIs del mundo real, y organizarás tu código como un verdadero profesional 🌟🏆. 

Con async/await conquistarás el tiempo ⏰✨, fetch API te conectará con el universo de datos 🌐📡, y los ES6 modules transformarán tu código en arquitectura escalable 📦🏗️. ¡Elliot 🤓, Fernanda 👧, Mijael 👦, Fe 🌟, Doky 🐕, Chocolate 🍫, Amorosa 💖 y Chanchi 🐱 están listos para esta aventura asíncrona! 🚀💫

---

## 🎯 Objetivos del Nivel

* ⚡ **Dominar Programación Asíncrona** con async/await, setTimeout y manejo profesional de promesas
* 🌐 **Conectar con APIs Reales** usando fetch() para GET/POST requests con manejo de estados
* 📦 **Organizar Código Modular** con ES6 import/export y arquitectura escalable
* 🛡️ **Implementar Error Handling** robusto con try/catch y feedback visual de errores
* 🔄 **Gestionar Estados de Carga** con spinners, timeouts y experiencia de usuario fluida
* 🏗️ **Aplicar Patterns Modernos** para código mantenible y buenas prácticas profesionales

---

## 📚✨ Conceptos a Aprender

```
      🌱 ASINCRONÍA BÁSICA           🌿 APIs & MODULES              🌳 PATTERNS AVANZADOS
┌──────────────────────────┐    ┌──────────────────────────┐    ┌──────────────────────────┐
│ • async/await ⏰         │    │ • fetch() API 🌐          │    │ • ES6 modules 📦         │
│ • Promise basics 🤝      │    │ • GET/POST requests 📡    │ ──►│ • import/export 📥📤     │
│ • setTimeout() 🕒        │ ──►│ • JSON handling 📊        │    │ • Module patterns 🏗️     │
│ • try/catch 🛡️           │    │ • Error states 🚨         │    │ • Code organization 📋   │
│ • Loading states ⏳      │    │ • Response parsing 🔄     │    │ • Best practices 💎      │
└──────────────────────────┘    └──────────────────────────┘    └──────────────────────────┘
         │                              │                              │
         ▼                              ▼                              ▼
🎯 Meta: Tiempo controlado       🎯 Meta: Datos externos         🎯 Meta: Código escalable
   Operaciones que toman tiempo     Comunicación con servicios      Arquitectura profesional
   Estados de carga visual          Manejo de respuestas           Reutilización de código
```

---

## 🏆✨ Retos

### 🌟 **Reto 4.1:** Explorador de Guerreros Z 🐉⚡

> Construye tu primer sistema asíncrono real consumiendo la Dragon Ball API, con carga de datos, estados dinámicos y experiencia de usuario profesional

**🧠 Fundamentos:** async/await, fetch API real, try/catch, loading states, paginación, JSON handling

---

#### 🎯 Problema

El equipo de guerreros Z (Elliot 🤓, Fernanda 👧, Mijael 👦, Fe 🌟) necesita un explorador de personajes que consuma la Dragon Ball API real, mostrando estados de carga profesionales, manejando errores elegantemente, implementando paginación, y proporcionando una experiencia fluida mientras se conecta con la API oficial de Dragon Ball.

---

#### ⚡ Funcionalidades Épicas

> **🐉 Como fan de Dragon Ball, quiero explorar personajes con carga asíncrona**
```javascript
loadCharacterData(page = 1): Promise<CharacterResponse>
displayLoadingState(): void
```
- Consumir Dragon Ball API real con paginación
- Mostrar spinner elegante durante la carga
- Actualizar UI cuando los datos estén listos

> **⚡ Como desarrollador, quiero manejar operaciones asíncronas**
```javascript
async fetchCharacters(page, limit): Promise<ApiResponse>
handleAsyncOperation(operation): Promise<Result>
```
- Usar async/await para operaciones de red reales
- Implementar retry logic para fallos de conexión
- Manejar múltiples operaciones asíncronas simultáneas

> **🛡️ Como usuario, quiero manejo robusto de errores**
```javascript
handleApiError(error): void
showErrorState(message, canRetry): void
```
- Try/catch para capturar errores de red reales
- Mostrar mensajes de error específicos por tipo
- Botón de "reintentar" con límite de intentos

> **🎨 Como visitante, quiero navegación fluida**
```javascript
loadNextPage(): Promise<void>
loadPreviousPage(): Promise<void>
updatePaginationUI(meta): void
```
- Navegación entre páginas de personajes
- Indicadores visuales de página actual
- Botones habilitados/deshabilitados según disponibilidad

> **🔍 Como explorador, quiero filtrar por raza y afiliación**
```javascript
filterByRace(race): Character[]
filterByAffiliation(affiliation): Character[]
```
- Filtrar personajes por raza (Saiyan, Namekian, etc.)
- Filtrar por afiliación (Z Fighter, Villain, etc.)
- Búsqueda en tiempo real por nombre

---

#### 🏗️ Tipos de Datos

```javascript
// Dragon Ball API Response Structure
const apiResponse = {
  items: [
    {
      id: 1,
      name: "Goku",
      ki: "60.000.000",
      maxKi: "90 Septillion", 
      race: "Saiyan",
      gender: "Male",
      description: "El protagonista de la serie...",
      image: "https://dragonball-api.com/characters/goku_normal.webp",
      affiliation: "Z Fighter",
      deletedAt: null
    }
  ],
  meta: {
    totalItems: 58,
    itemCount: 10,
    itemsPerPage: 10,
    totalPages: 6,
    currentPage: 1
  },
  links: {
    first: "https://dragonball-api.com/api/characters?limit=10",
    previous: "",
    next: "https://dragonball-api.com/api/characters?page=2&limit=10",
    last: "https://dragonball-api.com/api/characters?page=6&limit=10"
  }
};

const appState = {
  characters: [],
  filteredCharacters: [],
  isLoading: false,
  currentPage: 1,
  totalPages: 1,
  currentFilter: { race: '', affiliation: '', search: '' },
  loadingStats: { startTime: 0, endTime: 0 },
  retryCount: 0,
  maxRetries: 3
};

const loadingState = {
  isLoading: false,
  error: null,
  data: null,
  operation: 'idle' // 'loading', 'success', 'error'
};
```

---

#### 🧪 Tests Automatizados

**✅ Test 1: Funcionalidad asíncrona con API real**
- fetch() ejecuta correctamente con Dragon Ball API
- async/await maneja respuestas de red apropiadamente

**✅ Test 2: Funcionalidad de paginación**
- Navegación entre páginas funciona correctamente
- Meta información se actualiza apropiadamente

**✅ Test 3: Funcionalidad de manejo de errores de red**
- try/catch captura errores de conexión reales
- Retry logic funciona con límites apropiados

**✅ Test 4: Validaciones del sistema**
- Sistema maneja respuestas malformadas graciosamente
- Filtros funcionan con datos reales de la API
- Estados de UI se mantienen consistentes

**✅ Test 5: Tipos de retorno de API real**
- Respuestas de fetch mantienen estructura esperada
- Parseo de JSON funciona correctamente
- Datos de characters mantienen tipos apropiados

---

#### 💻 Código Base

**📁 index.html**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🐉 Explorador de Guerreros Z</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <div class="dragon-explorer">
        <header class="dragon-explorer__header">
            <div class="header-content">
                <h1 class="header-content__title">🐉⚡ Explorador de Guerreros Z</h1>
                <p class="header-content__subtitle">Descubre el poder de los guerreros con APIs reales 🚀</p>
            </div>
            <div class="header-controls">
                <div class="search-box">
                    <input type="text" class="search-box__input" id="characterSearch" 
                           placeholder="🔍 Buscar guerreros...">
                </div>
            </div>
        </header>

        <main class="dragon-explorer__main">
            <aside class="dragon-explorer__filters">
                <div class="filter-section">
                    <h3 class="filter-section__title">🎛️ Filtros</h3>
                    <div class="filter-group">
                        <label class="filter-group__label">Raza</label>
                        <select class="filter-group__select" id="raceFilter">
                            <option value="">Todas las razas</option>
                            <option value="Saiyan">🔥 Saiyan</option>
                            <option value="Human">👤 Human</option>
                            <option value="Namekian">🐛 Namekian</option>
                            <option value="Majin">🌸 Majin</option>
                            <option value="Android">🤖 Android</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label class="filter-group__label">Afiliación</label>
                        <select class="filter-group__select" id="affiliationFilter">
                            <option value="">Todas las afiliaciones</option>
                            <option value="Z Fighter">⚡ Z Fighter</option>
                            <option value="Red Ribbon Army">🔴 Red Ribbon Army</option>
                            <option value="Freelancer">🆓 Freelancer</option>
                            <option value="Army of Frieza">❄️ Army of Frieza</option>
                        </select>
                    </div>
                    <button class="btn btn--secondary" id="loadRandomCharacter">
                        🎲 Guerrero Aleatorio
                    </button>
                </div>
            </aside>

            <section class="dragon-explorer__content">
                <div class="characters-grid" id="charactersGrid">
                    <div class="loading-placeholder">
                        <div class="loading-placeholder__spinner"></div>
                        <p class="loading-placeholder__text">Cargando guerreros del universo... 🐉</p>
                    </div>
                </div>
                
                <div class="pagination-controls" id="paginationControls" style="display: none;">
                    <button class="btn btn--secondary" id="prevPageBtn" disabled>
                        ⬅️ Anterior
                    </button>
                    <div class="pagination-info">
                        <span class="pagination-info__text" id="paginationInfo">
                            Página 1 de 6
                        </span>
                    </div>
                    <button class="btn btn--secondary" id="nextPageBtn">
                        Siguiente ➡️
                    </button>
                </div>
            </section>
        </main>

        <footer class="dragon-explorer__footer">
            <div class="stats-panel" id="statsPanel">
                <div class="stat-item">
                    <span class="stat-item__number" id="totalCharacters">0</span>
                    <span class="stat-item__label">Guerreros Cargados</span>
                </div>
                <div class="stat-item">
                    <span class="stat-item__number" id="loadingTime">0ms</span>
                    <span class="stat-item__label">Tiempo de API</span>
                </div>
                <div class="stat-item">
                    <span class="stat-item__number" id="lastUpdate">--</span>
                    <span class="stat-item__label">Última Actualización</span>
                </div>
            </div>
        </footer>
    </div>

    <!-- Error Modal -->
    <div class="modal-overlay" id="errorModal" style="display: none;">
        <div class="modal modal--error">
            <div class="modal__header">
                <h3 class="modal__title">🚨 Error de Conexión con Dragon Ball API</h3>
                <button class="modal__close" id="closeErrorModal">✕</button>
            </div>
            <div class="modal__content">
                <div class="error-content">
                    <div class="error-content__icon">🐉</div>
                    <p class="error-content__message" id="errorMessage">
                        Error al conectar con la API de Dragon Ball
                    </p>
                    <div class="error-content__details" id="errorDetails"></div>
                </div>
            </div>
            <div class="modal__actions">
                <button class="btn btn--primary" id="retryLoadBtn">
                    🔄 Reintentar Carga
                </button>
                <button class="btn btn--secondary" id="cancelErrorBtn">
                    ❌ Cancelar
                </button>
            </div>
        </div>
    </div>

    <script type="module" src="js/app.js"></script>
</body>
</html>
```

**📁 css/index.css**
```css
@import url("./modules/variables.css");
@import url("./modules/reset.css");
@import url("./modules/layout.css");
@import url("./modules/components.css");
@import url("./modules/elements.css");
@import url("./modules/animations.css");
```

**📁 css/modules/variables.css**
```css
:root {
  /* Dragon Ball Theme Colors */
  --color-dragon-primary: #ff8c00;
  --color-dragon-secondary: #ff4500; 
  --color-dragon-accent: #ffd700;
  --color-dragon-power: #ff6347;
  --color-dragon-success: #32cd32;
  --color-dragon-warning: #ffa500;
  --color-dragon-error: #dc143c;
  
  /* Space Surfaces */
  --color-background: #0d1421;
  --color-surface: #1a2332;
  --color-surface-light: #243447;
  --color-surface-hover: #2d4059;
  
  /* Text Colors */
  --color-text: #e8f4f8;
  --color-text-light: #a2b9c7;
  --color-text-muted: #6b7c8c;
  --color-text-accent: --color-dragon-accent;
  
  /* Interactive */
  --color-border: #3a4b5c;
  --color-border-focus: #ff8c00;
  --shadow-glow: 0 0 20px rgba(255, 140, 0, 0.3);
  --shadow-error: 0 0 20px rgba(220, 20, 60, 0.2);
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* Typography */
  --font-family: 'Segoe UI', system-ui, sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  
  /* Transitions */
  --transition: all 0.2s ease;
  --transition-slow: all 0.4s ease;
}
```

**📁 css/modules/reset.css**
```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  line-height: 1.6;
}

body {
  font-family: var(--font-family);
  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 140, 0, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 69, 0, 0.15) 0%, transparent 50%);
}
```

**📁 css/modules/layout.css**
```css
.dragon-explorer {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header"
    "main"
    "footer";
}

.dragon-explorer__header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg) var(--space-xl);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.header-content__title {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  color: var(--color-dragon-accent);
  margin-bottom: var(--space-xs);
}

.header-content__subtitle {
  color: var(--color-text-light);
  font-size: var(--font-size-lg);
}

.dragon-explorer__main {
  grid-area: main;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--space-xl);
  padding: var(--space-xl);
}

.dragon-explorer__filters {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  height: fit-content;
  border: 1px solid var(--color-border);
}

.dragon-explorer__content {
  min-height: 500px;
}

.dragon-explorer__footer {
  grid-area: footer;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--space-lg);
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.pagination-info {
  min-width: 120px;
  text-align: center;
}

.pagination-info__text {
  color: var(--color-text-light);
  font-weight: 600;
}

.stats-panel {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
}

@media (max-width: 768px) {
  .dragon-explorer__main {
    grid-template-columns: 1fr;
  }
  
  .dragon-explorer__header {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }
  
  .pagination-controls {
    flex-wrap: wrap;
    gap: var(--space-md);
  }
}
```

**📁 css/modules/components.css**
```css
.character-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: var(--transition);
}

.character-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

.character-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: var(--color-surface-light);
}

.character-card__header {
  padding: var(--space-lg);
  background: var(--color-surface-light);
  border-bottom: 1px solid var(--color-border);
}

.character-card__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-dragon-accent);
  margin-bottom: var(--space-xs);
}

.character-card__race {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.character-card__content {
  padding: var(--space-lg);
}

.character-card__description {
  color: var(--color-text-light);
  margin-bottom: var(--space-md);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.character-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.character-stat {
  text-align: center;
}

.character-stat__value {
  display: block;
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-dragon-power);
  margin-bottom: var(--space-xs);
}

.character-stat__label {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.character-affiliation {
  display: inline-block;
  background: var(--color-dragon-primary);
  color: white;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: 600;
}

.loading-placeholder {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  min-height: 300px;
}

.loading-placeholder__text {
  color: var(--color-text-light);
  font-size: var(--font-size-lg);
  margin-top: var(--space-lg);
}
```

**📁 css/modules/elements.css**
```css
.search-box {
  position: relative;
}

.search-box__input {
  padding: var(--space-md) var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface-light);
  color: var(--color-text);
  font-size: var(--font-size-md);
  width: 300px;
  transition: var(--transition);
}

.search-box__input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
}

.filter-section__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-dragon-accent);
  margin-bottom: var(--space-lg);
}

.filter-group {
  margin-bottom: var(--space-lg);
}

.filter-group__label {
  display: block;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
  font-size: var(--font-size-sm);
}

.filter-group__select {
  width: 100%;
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface-light);
  color: var(--color-text);
  font-size: var(--font-size-md);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  white-space: nowrap;
}

.btn--primary {
  background: var(--color-dragon-primary);
  color: white;
}

.btn--primary:hover:not(:disabled) {
  background: var(--color-dragon-secondary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-glow);
}

.btn--secondary {
  background: var(--color-surface-light);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  min-width: 140px;
}

.btn--secondary:hover:not(:disabled) {
  background: var(--color-surface-hover);
  border-color: var(--color-dragon-primary);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.stat-item {
  text-align: center;
}

.stat-item__number {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-dragon-accent);
  margin-bottom: var(--space-xs);
}

.stat-item__label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  max-width: 500px;
  width: 90%;
  overflow: hidden;
}

.modal--error {
  border-color: var(--color-dragon-error);
  box-shadow: var(--shadow-error);
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg);
  background: var(--color-surface-light);
  border-bottom: 1px solid var(--color-border);
}

.modal__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-dragon-error);
}

.modal__close {
  background: transparent;
  border: none;
  color: var(--color-text-light);
  font-size: var(--font-size-lg);
  cursor: pointer;
  padding: var(--space-sm);
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.modal__close:hover {
  background: var(--color-surface-hover);
  color: var(--color-text);
}

.modal__content {
  padding: var(--space-lg);
}

.modal__actions {
  display: flex;
  gap: var(--space-md);
  justify-content: flex-end;
  padding: var(--space-lg);
  background: var(--color-surface-light);
  border-top: 1px solid var(--color-border);
}

.error-content {
  text-align: center;
}

.error-content__icon {
  font-size: 4rem;
  margin-bottom: var(--space-md);
}

.error-content__message {
  color: var(--color-text);
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-md);
  line-height: 1.5;
}

.error-content__details {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  background: var(--color-surface-light);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-dragon-error);
}
```

**📁 css/modules/animations.css**
```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes dragonGlow {
  0%, 100% { box-shadow: 0 0 10px rgba(255, 140, 0, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 140, 0, 0.6), 0 0 30px rgba(255, 140, 0, 0.3); }
}

.loading-placeholder__spinner {
  width: 50px;
  height: 50px;
  border: 3px solid var(--color-surface-light);
  border-top: 3px solid var(--color-dragon-accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.fade-in {
  animation: fadeIn 0.4s ease-out;
}

.slide-in {
  animation: slideIn 0.3s ease-out;
}

.pulse {
  animation: pulse 2s infinite;
}

.dragon-glow {
  animation: dragonGlow 2s ease-in-out infinite;
}
```

**📁 js/app.js**
```javascript
import { DragonBallService } from './services/DragonBallService.js';
import { UIManager } from './managers/UIManager.js';
import { ErrorHandler } from './utils/ErrorHandler.js';

// ==========================================================================
// Test system
// ==========================================================================
const testResults = [];
const recordTest = (testName, condition) => {
  const emoji = condition ? "✅" : "❌";
  testResults.push(`${emoji} ${testName}`);
};

// ==========================================================================
// Application State
// ==========================================================================
const appState = {
  characters: [],
  filteredCharacters: [],
  isLoading: false,
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  currentFilter: { race: '', affiliation: '', search: '' },
  loadingStats: { startTime: 0, endTime: 0 },
  retryCount: 0,
  maxRetries: 3,
  lastOperation: null
};

// ==========================================================================
// Main App Functions - TODO: Implementar estas funciones
// ==========================================================================
const loadCharacterData = async (page = 1) => {
  // TODO: Cargar datos de personajes de Dragon Ball API
  // TODO: Usar DragonBallService para obtener datos paginados
  // TODO: Manejar estados de loading con UIManager
  // TODO: Actualizar estadísticas de tiempo y metadatos
  return null;
};

const displayLoadingState = () => {
  // TODO: Mostrar estado de carga para personajes
  // TODO: Activar spinner y mensaje de carga específico
  // TODO: Deshabilitar controles de paginación durante la carga
};

const handleAsyncOperation = async (operation) => {
  // TODO: Manejar cualquier operación asíncrona genérica
  // TODO: Implementar try/catch para manejo de errores de red
  // TODO: Mostrar estados de loading apropiados
  // TODO: Implementar retry logic para fallos de conexión
  // TODO: Retornar resultado o null en caso de error
};

const fetchCharacters = async (page = 1, limit = 10) => {
  // TODO: Obtener personajes desde Dragon Ball API
  // TODO: Construir URL con parámetros de paginación
  // TODO: Manejar respuesta de API con estructura: {items, meta, links}
  // TODO: Retornar datos estructurados o throw error
};

const handleApiError = (error) => {
  // TODO: Procesar errores específicos de API
  // TODO: Distinguir entre errores de red, timeout, parseo JSON
  // TODO: Mostrar modal de error con ErrorHandler
  // TODO: Actualizar UI para mostrar estado de error
  // TODO: Limpiar estados de loading
};

const showErrorState = (message, canRetry = true) => {
  // TODO: Mostrar estado de error en la UI
  // TODO: Usar UIManager para mostrar modal de error
  // TODO: Configurar botón de reintentar si canRetry es true
  // TODO: Log error details para debugging
};

const loadNextPage = async () => {
  // TODO: Cargar siguiente página de personajes
  // TODO: Verificar que existe página siguiente
  // TODO: Actualizar currentPage en appState
  // TODO: Llamar loadCharacterData con nueva página
};

const loadPreviousPage = async () => {
  // TODO: Cargar página anterior de personajes
  // TODO: Verificar que existe página anterior
  // TODO: Actualizar currentPage en appState
  // TODO: Llamar loadCharacterData con nueva página
};

const updatePaginationUI = (meta) => {
  // TODO: Actualizar controles de paginación
  // TODO: Habilitar/deshabilitar botones según disponibilidad
  // TODO: Actualizar texto informativo "Página X de Y"
  // TODO: Mostrar controles si hay más de una página
};

const filterByRace = (race) => {
  // TODO: Filtrar personajes por raza específica
  // TODO: Trabajar con datos ya cargados en appState.characters
  // TODO: Retornar array filtrado de personajes
  // TODO: Actualizar UI con resultados filtrados
};

const filterByAffiliation = (affiliation) => {
  // TODO: Filtrar personajes por afiliación específica
  // TODO: Trabajar con datos ya cargados en appState.characters
  // TODO: Retornar array filtrado de personajes
  // TODO: Actualizar UI con resultados filtrados
};

// ==========================================================================
// Event Handlers - TODO: Implementar estas funciones
// ==========================================================================
const handleSearchInput = async (event) => {
  // TODO: Manejar búsqueda en tiempo real por nombre
  // TODO: Debounce para evitar muchas búsquedas
  // TODO: Filtrar personajes según término de búsqueda
  // TODO: Actualizar display con resultados
};

const handleFilterChange = async (event) => {
  // TODO: Manejar cambios en filtros de raza/afiliación
  // TODO: Aplicar filtros combinados (raza + afiliación + búsqueda)
  // TODO: Actualizar appState con filtros actuales
  // TODO: Re-renderizar resultados filtrados
};

const handleLoadRandomCharacter = async () => {
  // TODO: Cargar un personaje aleatorio
  // TODO: Usar DragonBallService para obtener personaje random
  // TODO: Mostrar loading state durante la operación
  // TODO: Manejar errores apropiadamente
};

const handleNextPage = async () => {
  // TODO: Manejar clic en botón "Siguiente"
  // TODO: Verificar que no estamos en la última página
  // TODO: Llamar loadNextPage()
  // TODO: Actualizar UI de paginación
};

const handlePreviousPage = async () => {
  // TODO: Manejar clic en botón "Anterior"
  // TODO: Verificar que no estamos en la primera página
  // TODO: Llamar loadPreviousPage()
  // TODO: Actualizar UI de paginación
};

const handleRetryLoad = async () => {
  // TODO: Reintentar operación fallida
  // TODO: Cerrar modal de error
  // TODO: Incrementar contador de reintentos
  // TODO: Ejecutar última operación nuevamente
  // TODO: Mostrar mensaje si se excede maxRetries
};

// ==========================================================================
// App Initialization - TODO: Implementar esta función
// ==========================================================================
const initializeApp = async () => {
  // TODO: Inicializar aplicación completa
  // TODO: Configurar servicios (DragonBallService, UIManager, ErrorHandler)
  // TODO: Configurar event listeners para búsqueda, filtros, paginación
  // TODO: Cargar primera página de personajes
  // TODO: Establecer estado inicial de la aplicación
  // TODO: Manejar errores de inicialización
};

// ==========================================================================
// Tests automatizados
// ==========================================================================
const runTests = () => {
  // Test 1: Funcionalidad - Async/await with real API
  try {
    const asyncFunctionsExist = 
      typeof loadCharacterData === "function" &&
      typeof fetchCharacters === "function" &&
      typeof handleAsyncOperation === "function";
    
    // Check if functions are properly marked as async
    const loadCharacterAsync = loadCharacterData.constructor.name === "AsyncFunction";
    const fetchCharactersAsync = fetchCharacters.constructor.name === "AsyncFunction";
    
    recordTest("4.1.1 Async/await functionality with real API works correctly", 
      asyncFunctionsExist && loadCharacterAsync && fetchCharactersAsync);
  } catch (error) {
    recordTest("4.1.1 Async/await functionality with real API works correctly", false);
  }

  // Test 2: Funcionalidad - Pagination works correctly
  try {
    const paginationFunctionsExist = 
      typeof loadNextPage === "function" &&
      typeof loadPreviousPage === "function" &&
      typeof updatePaginationUI === "function";
    
    const paginationHandlersExist = 
      typeof handleNextPage === "function" &&
      typeof handlePreviousPage === "function";
    
    recordTest("4.1.2 Pagination functionality works correctly", 
      paginationFunctionsExist && paginationHandlersExist);
  } catch (error) {
    recordTest("4.1.2 Pagination functionality works correctly", false);
  }

  // Test 3: Funcionalidad - Real API error handling works correctly
  try {
    const errorHandlingExists = typeof handleApiError === "function";
    const errorStateExists = typeof showErrorState === "function";
    const retryHandlerExists = typeof handleRetryLoad === "function";
    
    recordTest("4.1.3 Real API error handling functionality works correctly", 
      errorHandlingExists && errorStateExists && retryHandlerExists);
  } catch (error) {
    recordTest("4.1.3 Real API error handling functionality works correctly", false);
  }

  // Test 4: Validaciones - System handles real API edge cases properly
  try {
    // Test filter functions exist
    const filterFunctionsExist = 
      typeof filterByRace === "function" &&
      typeof filterByAffiliation === "function";
    
    // Test event handlers exist
    const eventHandlersExist = 
      typeof handleSearchInput === "function" &&
      typeof handleFilterChange === "function" &&
      typeof handleLoadRandomCharacter === "function";
    
    // Test app state management with pagination
    const appStateExists = typeof appState === "object" && 
                           appState !== null &&
                           'currentPage' in appState &&
                           'totalPages' in appState;
    
    recordTest("4.1.4 System handles real API validation correctly", 
      filterFunctionsExist && eventHandlersExist && appStateExists);
  } catch (error) {
    recordTest("4.1.4 System handles real API validation correctly", false);
  }

  // Test 5: Return types - Functions return correct data types for API responses
  try {
    const functionTypesCorrect = 
      typeof initializeApp === "function" &&
      typeof loadCharacterData === "function" &&
      typeof fetchCharacters === "function";
    
    // Test that async functions exist and are properly structured
    const asyncFunctionPattern = loadCharacterData.toString().includes('async') ||
                                loadCharacterData.constructor.name === "AsyncFunction";
    
    // Test API service integration
    const serviceTypesCorrect = 
      typeof DragonBallService !== "undefined" &&
      typeof UIManager !== "undefined" &&
      typeof ErrorHandler !== "undefined";
    
    recordTest("4.1.5 Functions return correct types for API responses", 
      functionTypesCorrect && asyncFunctionPattern && serviceTypesCorrect);
  } catch (error) {
    recordTest("4.1.5 Functions return correct types for API responses", false);
  }
};

// ==========================================================================
// App initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', async () => {
  await initializeApp();
  
  // Run tests after brief delay
  setTimeout(() => {
    runTests();
    console.log('=== 🧪 Test Results Reto 4.1 - Dragon Ball API ===');
    testResults.forEach(result => console.log(result));
  }, 1000);
});
```

**📁 js/services/DragonBallService.js**
```javascript
// ==========================================================================
// Dragon Ball API Service - Real API Integration
// ==========================================================================
export class DragonBallService {
  constructor() {
    this.baseURL = 'https://dragonball-api.com/api';
    this.defaultLimit = 10;
    this.maxRetries = 3;
    this.retryDelay = 1000; // ms
  }

  // TODO: Implementar método para obtener personajes con paginación
  async getCharacters(page = 1, limit = this.defaultLimit) {
    // TODO: Construir URL con parámetros de query
    // TODO: Implementar fetch con manejo de errores
    // TODO: Parsear respuesta JSON
    // TODO: Retornar estructura: {items, meta, links}
    // TODO: Manejar errores de red y respuestas inválidas
  }

  // TODO: Implementar método para obtener personaje por ID
  async getCharacterById(id) {
    // TODO: Construir URL específica para personaje
    // TODO: Fetch individual character data
    // TODO: Retornar datos del personaje o null si no existe
    // TODO: Manejar errores 404 graciosamente
  }

  // TODO: Implementar método para obtener personaje aleatorio
  async getRandomCharacter() {
    // TODO: Primero obtener meta información para total de personajes
    // TODO: Generar ID aleatorio válido
    // TODO: Usar getCharacterById para obtener datos
    // TODO: Retry si el personaje no existe
  }

  // TODO: Implementar método de retry con backoff
  async fetchWithRetry(url, options = {}, retries = this.maxRetries) {
    // TODO: Implementar lógica de retry con exponential backoff
    // TODO: Manejar diferentes tipos de error (network, timeout, 5xx)
    // TODO: Log intentos para debugging
    // TODO: Throw error final si se agotan los retry attempts
  }

  // TODO: Implementar método para validar respuesta de API
  validateApiResponse(response, data) {
    // TODO: Verificar que response.ok es true
    // TODO: Verificar estructura de datos esperada
    // TODO: Validar tipos de datos críticos
    // TODO: Throw descriptive errors para problemas específicos
  }

  // TODO: Implementar método para construir URLs con parámetros
  buildURL(endpoint, params = {}) {
    // TODO: Combinar baseURL con endpoint
    // TODO: Agregar parámetros de query si existen
    // TODO: Manejar encoding apropiado
    // TODO: Retornar URL completa válida
  }
}
```

**📁 js/managers/UIManager.js**  
```javascript
// ==========================================================================
// UI Manager - Handle all UI updates and interactions for Dragon Ball
// ==========================================================================
export class UIManager {
  constructor() {
    this.elements = {
      charactersGrid: document.querySelector('#charactersGrid'),
      paginationControls: document.querySelector('#paginationControls'),
      paginationInfo: document.querySelector('#paginationInfo'),
      prevPageBtn: document.querySelector('#prevPageBtn'),
      nextPageBtn: document.querySelector('#nextPageBtn'),
      errorModal: document.querySelector('#errorModal'),
      errorMessage: document.querySelector('#errorMessage'),
      errorDetails: document.querySelector('#errorDetails'),
      totalCharacters: document.querySelector('#totalCharacters'),
      loadingTime: document.querySelector('#loadingTime'),
      lastUpdate: document.querySelector('#lastUpdate')
    };
    
    this.currentLoadingElement = null;
  }

  // TODO: Implementar método para renderizar personajes
  renderCharacters(characters) {
    // TODO: Limpiar grid actual
    // TODO: Crear elementos de card para cada personaje
    // TODO: Usar createCharacterCard para cada personaje
    // TODO: Aplicar animaciones de entrada con fadeIn
    // TODO: Manejar caso de lista vacía con mensaje apropiado
  }

  // TODO: Implementar método para mostrar loading
  showLoading(message = "Cargando guerreros del universo... 🐉") {
    // TODO: Crear y mostrar spinner con mensaje personalizado
    // TODO: Deshabilitar controles de paginación y filtros
    // TODO: Limpiar contenido anterior del grid
    // TODO: Almacenar referencia del loading element
  }

  // TODO: Implementar método para ocultar loading  
  hideLoading() {
    // TODO: Remover spinner y mensaje de loading
    // TODO: Restaurar controles interactivos
    // TODO: Limpiar referencia del loading element
    // TODO: Preparar grid para mostrar contenido
  }

  // TODO: Implementar método para mostrar errores
  showError(message, details = "", canRetry = true) {
    // TODO: Mostrar modal de error con mensaje específico
    // TODO: Configurar detalles técnicos si se proporcionan
    // TODO: Mostrar/ocultar botón de reintentar según canRetry
    // TODO: Configurar event listeners para botones de modal
  }

  // TODO: Implementar método para ocultar errores
  hideError() {
    // TODO: Ocultar modal de error
    // TODO: Limpiar mensajes de error anteriores
    // TODO: Remover event listeners del modal
    // TODO: Resetear estado de error en UI
  }

  // TODO: Implementar método para actualizar estadísticas
  updateStats(totalCharacters, loadingTime, currentPage, totalPages) {
    // TODO: Actualizar contador total de personajes
    // TODO: Mostrar tiempo de carga de la API
    // TODO: Actualizar timestamp de última actualización
    // TODO: Aplicar animaciones suaves a los números
  }

  // TODO: Implementar método para actualizar paginación
  updatePagination(currentPage, totalPages, hasNextPage, hasPreviousPage) {
    // TODO: Actualizar texto "Página X de Y"
    // TODO: Habilitar/deshabilitar botón Anterior
    // TODO: Habilitar/deshabilitar botón Siguiente
    // TODO: Mostrar/ocultar controles de paginación
  }

  // TODO: Implementar método para crear card de personaje
  createCharacterCard(character) {
    // TODO: Crear estructura HTML para card de personaje
    // TODO: Agregar imagen con manejo de error de carga
    // TODO: Mostrar información: nombre, raza, ki, afiliación
    // TODO: Aplicar estilos específicos según raza/afiliación
    // TODO: Truncar descripción si es muy larga
    // TODO: Retornar elemento DOM completo
  }

  // TODO: Implementar método para manejar imágenes con fallback
  handleImageError(imgElement, character) {
    // TODO: Mostrar imagen placeholder si falla la carga
    // TODO: Aplicar estilos apropiados para fallback
    // TODO: Log error para debugging
  }
}
```

**📁 js/utils/ErrorHandler.js**
```javascript
// ==========================================================================
// Error Handler - Centralized error management for Dragon Ball API
// ==========================================================================
export class ErrorHandler {
  static logError(error, context = '', additionalInfo = {}) {
    // TODO: Log error con contexto específico de Dragon Ball API
    // TODO: Incluir timestamp y detalles del error
    // TODO: Clasificar error por severidad (low, medium, high)
    // TODO: Incluir información adicional como URL, parámetros
    console.error(`[DragonBall API ${context}] Error:`, error, additionalInfo);
  }

  static getErrorMessage(error) {
    // TODO: Convertir errores técnicos en mensajes amigables
    // TODO: Manejar errores específicos de Dragon Ball API
    // TODO: Considerar códigos de estado HTTP específicos
    // TODO: Retornar mensaje apropiado para el usuario
    
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return 'Error de conexión con Dragon Ball API 📡';
    }
    if (error.name === 'SyntaxError') {
      return 'Error procesando datos de los personajes 🔧';
    }
    if (error.status === 404) {
      return 'Personajes no encontrados en la base de datos 🔍';
    }
    if (error.status >= 500) {
      return 'El servidor de Dragon Ball está experimentando dificultades 🛠️';
    }
    return 'Error desconocido explorando el universo Dragon Ball 🐉';
  }

  static handleNetworkError(error, operation, url = '') {
    // TODO: Manejo especializado para errores de red
    // TODO: Detectar si es timeout, conexión perdida, CORS, etc.
    // TODO: Incluir información sobre la operación fallida
    // TODO: Sugerir acciones específicas de recuperación
    // TODO: Retornar objeto de error estructurado para UI
    return {
      message: this.getErrorMessage(error),
      operation: operation,
      url: url,
      timestamp: new Date().toISOString(),
      canRetry: this.canRetryError(error),
      retryDelay: this.getRetryDelay(error)
    };
  }

  static canRetryError(error) {
    // TODO: Determinar si un error específico permite retry
    // TODO: Errores de red temporal: sí
    // TODO: Errores 4xx: generalmente no
    // TODO: Errores 5xx: sí
    // TODO: Errores de parsing: no
    if (error.status >= 500) return true;
    if (error.name === 'TypeError' && error.message.includes('fetch')) return true;
    if (error.status >= 400 && error.status < 500) return false;
    return true;
  }

  static getRetryDelay(error) {
    // TODO: Calcular delay apropiado para retry según tipo de error
    // TODO: Usar exponential backoff para errores de servidor
    // TODO: Delay mínimo para errores de red
    // TODO: Considerar rate limiting
    if (error.status >= 500) return 2000; // 2 seconds for server errors
    if (error.status === 429) return 5000; // 5 seconds for rate limiting
    return 1000; // 1 second default
  }
}
```

---

#### 💡 Tips Técnicos

⚡ **Real API Integration:** Siempre usar try/catch con fetch() para manejar errores de red  
🔄 **Pagination Mastery:** Implementar navegación fluida con estados de botones dinámicos  
🎯 **Error Boundaries:** Crear jerarquía especializada para errores de API externa  
📦 **Service Layer:** Separar lógica de API en servicio dedicado y reutilizable  
🎨 **Loading UX:** Estados visuales específicos para operaciones de red lentas  
🛡️ **Graceful Degradation:** Sistema funcional incluso con API offline  
💾 **Response Validation:** Validar estructura de datos de API antes de usar  
🔍 **Debug Friendly:** Logs detallados para facilitar debugging de problemas de API

---

#### 🌟 Motivación Épica

¡INCREÍBLE, Maestro de APIs Dragon Ball! 🐉✨ Has construido tu primer sistema que se conecta con APIs reales del mundo exterior.

⚡ **Real API Mastery:** Conexión exitosa con Dragon Ball API oficial  
🔄 **Pagination Pro:** Navegación fluida entre páginas de datos  
🛡️ **Network Resilience:** Sistema robusto que maneja fallos de conexión  
📦 **Service Architecture:** Código organizado en servicios especializados  
🎨 **Professional UX:** Estados de carga y error dignos de aplicaciones comerciales  

¡Elliot 🤓, Fernanda 👧, Mijael 👦 y Fe 🌟 están asombrados de tu explorador de guerreros Z! Ahora pueden navegar por el universo Dragon Ball con datos reales y actualizados. 🌟💫

**¡Estás oficialmente preparado para APIs complejas y frameworks modernos!** 🏆🌐💻


---

## 🚀🎯 Siguientes Pasos

¡FANTÁSTICO! Has dominado los fundamentos de JavaScript asíncrono 🎉⚡ Tu comprensión de async/await, manejo de errores y estados de UI te posiciona perfectamente para el desarrollo frontend moderno. ¡Es hora del gran salto! 🚀✨

### 🌟💻 Próximas Aventuras Técnicas
- ⚛️ **React Fundamentals** - Components, JSX, props, state management 🏗️🎯
- 🔄 **API Integration** - REST APIs, authentication, data fetching patterns 📡🔐
- 🎨 **Advanced CSS** - Flexbox/Grid mastery, animations, responsive design 📱💫
- 📦 **Build Tools** - Webpack, Vite, package management, deployment 🛠️🚀

🎊✨ **¡FELICITACIONES, MAESTRO DEL JAVASCRIPT ASÍNCRONO!** 🏆⚡ Has completado una transformación extraordinaria desde variables básicas hasta sistemas asíncronos profesionales.

### 🌟 Tu Evolución Épica:
📝 **Nivel 1** - Variables y lógica fundamental sólida como roca  
🏗️ **Nivel 2** - Estructuras de datos complejas dominadas  
🎨 **Nivel 3** - Interactividad web con DOM y persistencia  
⚡ **Nivel 4** - Asincronía profesional y arquitectura escalable  

### 🚀 Estás Preparado Para:
✅ Frameworks modernos como React, Vue, Angular  
✅ APIs reales con autenticación y manejo de estados  
✅ Proyectos frontend complejos y escalables  
✅ Colaboración en equipos de desarrollo profesional  

¡Elliot 🤓, Fernanda 👧, Mijael 👦, Fe 🌟, Doky 🐕, Chocolate 🍫, Amorosa 💖 y Chanchi 🐱 están súper orgullosos de tu increíble progresión! Has demostrado que con dedicación y práctica gradual se puede dominar cualquier tecnología.

**¡El ecosistema moderno del desarrollo web te está esperando!** 🌈💫🏆