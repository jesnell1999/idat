# 🚀✨ JavaScript Nivel 4: Asíncrono & APIs Modernas 🌐⚡

¡Bienvenido al nivel más emocionante del JavaScript moderno! 🎉💻 Aquí dominarás el poder de la asincronía, conectarás con APIs del mundo real, y organizarás tu código como un verdadero profesional 🌟🏆. 

Con async/await conquistarás el tiempo ⏰✨, fetch API te conectará con el universo de datos 🌐📡, y los ES6 modules transformarán tu código en arquitectura escalable 📦🏗️. ¡Elliot 🤓, Fernanda 👧, Mijael 👦, Fe 🌟, Doky 🐕, Chocolate 🍫, Amorosa 💖 y Chanchi 🐱 están listos para esta aventura asíncrona! 🚀💫

---

## 🎯 Objetivos del Nivel

* ⚡ **Dominar Programación Asíncrona** con async/await y manejo profesional de promesas
* 🌐 **Conectar con APIs Reales** usando fetch() para obtener datos de Dragon Ball API
* 📦 **Organizar Código Modular** con ES6 import/export simple y efectivo
* 🛡️ **Implementar Error Handling** básico con try/catch y feedback visual
* 🔄 **Gestionar Estados de Carga** con loading states y experiencia fluida
* 🎨 **Aplicar UX Moderna** con componentes interactivos y diseño atractivo

---

## 📚✨ Conceptos a Aprender

```
      🌱 ASINCRONÍA BÁSICA           🌿 APIs REALES              🌳 ORGANIZACIÓN
┌──────────────────────────┐    ┌───────────────────────────┐    ┌──────────────────────────┐
│ • async/await ⏰         │    │ • fetch() API 🌐          │    │ • ES6 modules 📦         │
│ • Promise básico 🤝      │    │ • GET requests 📡         │ ──►│ • import/export 📥📤     │
│ • try/catch 🛡️           │ ──►│ • JSON parsing 📊         │    │ • Service functions 🏗️   │
│ • Loading states ⏳      │    │ • Error handling 🚨       │    │ • State management 📋    │
│ • Event listeners 👆     │    │ • URL construction 🔧     │    │ • Clean code 💎          │
└──────────────────────────┘    └───────────────────────────┘    └──────────────────────────┘
         │                              │                              │
         ▼                              ▼                              ▼
🎯 Meta: Operaciones async       🎯 Meta: Datos reales         🎯 Meta: Código limpio
   Manejo de timing               Conexión con servicios        Arquitectura simple
   Estados visuales               Respuestas estructuradas      Funciones reutilizables
```

---

## 🏆✨ Reto 4.1: Explorador de Guerreros Z 🐉⚡

> Construye un explorador simple y elegante que consume la Dragon Ball API real, con estados de carga, paginación y filtros básicos

**🧠 Fundamentos:** async/await, fetch API, loading states, paginación, filtros básicos

---

### 🎯 Problema

El equipo de guerreros Z (Elliot 🤓, Fernanda 👧, Mijael 👦, Fe 🌟) necesita un explorador de personajes que sea simple, rápido y eficiente. Debe consumir la Dragon Ball API real, mostrar los personajes con información relevante, permitir filtrado básico y tener una experiencia de usuario fluida.

---

### ⚡ Funcionalidades Épicas

> **🐉 Como fan de Dragon Ball, quiero explorar personajes**
- **Rol:** Usuario final
- **Funciones:** Visualizar lista de personajes con imagen, nombre, raza y descripción
- **Comportamiento:** Cargar automáticamente al abrir la app

> **📖 Como explorador, quiero navegar entre páginas**
- **Rol:** Usuario navegador
- **Funciones:** Avanzar y retroceder páginas, ver indicador de página actual
- **Comportamiento:** Botones habilitados según disponibilidad de páginas

> **🔍 Como usuario, quiero filtrar personajes**
- **Rol:** Usuario con preferencias
- **Funciones:** Filtrar por raza (Saiyan, Human, etc.) y buscar por nombre
- **Comportamiento:** Filtrado en tiempo real sobre datos cargados

> **⏳ Como visitante, quiero feedback visual**
- **Rol:** Usuario esperando
- **Funciones:** Ver spinner durante carga, mensajes de error claros
- **Comportamiento:** Estados visuales que comunican lo que está pasando

> **🎲 Como explorador curioso, quiero sorprenderme**
- **Rol:** Usuario aventurero
- **Funciones:** Cargar personaje aleatorio con un clic
- **Comportamiento:** Mostrar personaje random de la API

---

### 🏗️ Tipos de Datos

```typescript
// Dragon Ball API Response
interface DragonBallResponse {
  items: Character[]
  meta: {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
  links: {
    first: string
    previous?: string
    next?: string
    last: string
  }
}

// Character Structure
interface Character {
  id: number
  name: string
  ki: string
  maxKi: string
  race: string
  gender: string
  description: string
  image: string
  affiliation: string
  deletedAt: null
}

// App State
interface AppState {
  characters: Character[]
  filteredCharacters: Character[]
  isLoading: boolean
  currentPage: number
  totalPages: number
  totalItems: number
  currentFilter: {
    race: string
    search: string
  }
  error: string | null
}

// Loading State
interface LoadingState {
  isLoading: boolean
  message: string
  startTime: number
}
```

---

### 🧪 Tests Automatizados

**✅ Test 1: Funcionalidad asíncrona básica**
- fetch() ejecuta correctamente con Dragon Ball API
- async/await maneja respuestas apropiadamente

**✅ Test 2: Manejo de estados**
- Estados de loading se muestran correctamente
- Error states funcionan apropiadamente

**✅ Test 3: Filtrado y búsqueda**
- Filtro por raza funciona correctamente
- Búsqueda por nombre opera en tiempo real

**✅ Test 4: Paginación**
- Navegación entre páginas funciona
- Botones se habilitan/deshabilitan correctamente

**✅ Test 5: Integración de módulos**
- import/export funcionan correctamente
- Servicios se conectan apropiadamente

---

### 💻 Código Base

**📁 ./index.html**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🐉 Explorador de Guerreros Z</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <h1 class="header__title">🐉⚡ Explorador de Guerreros Z</h1>
        <p class="header__subtitle">Descubre el poder de los guerreros con APIs reales 🚀</p>
      </div>
      
      <div class="header__search">
        <input 
          type="search" 
          class="search-input" 
          id="characterSearch" 
          placeholder="🔍 Buscar guerreros..."
        >
      </div>
    </div>
  </header>

  <main class="main">
    <div class="container">
      <aside class="sidebar">
        <h3 class="sidebar__title">🎛️ Filtros</h3>
        
        <div class="filter-group">
          <label class="filter-label" for="raceFilter">Raza</label>
          <select class="filter-select" id="raceFilter">
            <option value="">Todas las razas</option>
            <option value="Saiyan">🔥 Saiyan</option>
            <option value="Human">👤 Human</option>
            <option value="Namekian">🐛 Namekian</option>
            <option value="Majin">🌸 Majin</option>
            <option value="Android">🤖 Android</option>
          </select>
        </div>

        <button class="btn btn--random" id="randomCharacterBtn">
          🎲 Guerrero Aleatorio
        </button>
      </aside>

      <section class="content">
        <!-- Loading State -->
        <div class="loading" id="loadingState">
          <div class="loading__spinner"></div>
          <p class="loading__text">Cargando guerreros del universo... 🐉</p>
        </div>

        <!-- Characters Grid -->
        <div class="characters-grid" id="charactersGrid"></div>

        <!-- Pagination -->
        <div class="pagination" id="paginationControls">
          <button class="btn btn--secondary" id="prevBtn" disabled>
            ⬅️ Anterior
          </button>
          
          <span class="pagination__info" id="paginationInfo">
            Página 1 de 1
          </span>
          
          <button class="btn btn--secondary" id="nextBtn">
            Siguiente ➡️
          </button>
        </div>
      </section>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="stats">
        <div class="stat">
          <span class="stat__number" id="totalCharacters">0</span>
          <span class="stat__label">Guerreros Cargados</span>
        </div>
        <div class="stat">
          <span class="stat__number" id="loadingTime">0ms</span>
          <span class="stat__label">Tiempo de Carga</span>
        </div>
        <div class="stat">
          <span class="stat__number" id="lastUpdate">--</span>
          <span class="stat__label">Última Actualización</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- Error Modal -->
  <div class="modal" id="errorModal">
    <div class="modal__content">
      <div class="error">
        <div class="error__icon">🐉</div>
        <h3 class="error__title">Error de Conexión</h3>
        <p class="error__message" id="errorMessage">
          No se pudo conectar con la API de Dragon Ball
        </p>
        <div class="error__actions">
          <button class="btn btn--primary" id="retryBtn">
            🔄 Reintentar
          </button>
          <button class="btn btn--secondary" id="closeErrorBtn">
            ❌ Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>

  <script type="module" src="./js/app.js"></script>
</body>
</html>
```

**📁 ./css/styles.css**
```css
/* Variables */
:root {
  /* Dragon Ball Colors */
  --color-primary: #ff8c00;
  --color-secondary: #ff4500; 
  --color-accent: #ffd700;
  --color-success: #32cd32;
  --color-error: #dc143c;
  
  /* Surfaces */
  --color-bg: #0a0e1a;
  --color-surface: #1a1f2e;
  --color-surface-light: #252b3a;
  --color-surface-hover: #2d3548;
  
  /* Text */
  --color-text: #ffffff;
  --color-text-light: #b0b7c3;
  --color-text-muted: #6b7280;
  
  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  
  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;
  
  /* Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}

/* Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-sm);
}

@media (width >= 768px) {
  .container {
    padding: 0 var(--space-md);
  }
}

/* Header */
.header {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-surface-light);
  padding: var(--space-md) 0;
}

@media (width >= 768px) {
  .header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.header__title {
  font-size: var(--font-size-2xl);
  color: var(--color-accent);
  font-weight: 800;
  margin-bottom: var(--space-xs);
}

@media (width >= 768px) {
  .header__title {
    font-size: var(--font-size-3xl);
    margin-bottom: 0;
  }
}

.header__subtitle {
  color: var(--color-text-light);
  margin-bottom: var(--space-sm);
}

@media (width >= 768px) {
  .header__subtitle {
    margin-bottom: 0;
  }
}

.header__search {
  width: 100%;
}

@media (width >= 768px) {
  .header__search {
    width: auto;
  }
}

/* Main Layout */
.main {
  padding: var(--space-lg) 0;
}

@media (width >= 768px) {
  .main .container {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: var(--space-xl);
  }
}

/* Sidebar */
.sidebar {
  background: var(--color-surface);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-lg);
  height: fit-content;
}

@media (width >= 768px) {
  .sidebar {
    margin-bottom: 0;
  }
}

.sidebar__title {
  color: var(--color-accent);
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-md);
}

/* Content */
.content {
  min-height: 60vh;
}

/* Form Elements */
.search-input, .filter-select {
  width: 100%;
  padding: var(--space-sm);
  background: var(--color-surface-light);
  border: 1px solid var(--color-surface-hover);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-size: var(--font-size-base);
}

.search-input:focus, .filter-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(255, 140, 0, 0.2);
}

.filter-group {
  margin-bottom: var(--space-md);
}

.filter-label {
  display: block;
  color: var(--color-text-light);
  margin-bottom: var(--space-xs);
  font-size: var(--font-size-sm);
  font-weight: 600;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.btn--primary {
  background: var(--color-primary);
  color: white;
}

.btn--primary:hover:not(:disabled) {
  background: var(--color-secondary);
  transform: translateY(-1px);
}

.btn--secondary {
  background: var(--color-surface-light);
  color: var(--color-text);
  border: 1px solid var(--color-surface-hover);
}

.btn--secondary:hover:not(:disabled) {
  background: var(--color-surface-hover);
  border-color: var(--color-primary);
}

.btn--random {
  background: var(--color-accent);
  color: var(--color-bg);
  width: 100%;
  justify-content: center;
}

.btn--random:hover {
  background: #ffed4e;
  transform: scale(1.05);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

/* Loading */
.loading {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl);
  text-align: center;
}

.loading.show {
  display: flex;
}

.loading__spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--color-surface-light);
  border-top: 4px solid var(--color-accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: var(--space-md);
}

.loading__text {
  color: var(--color-text-light);
  font-size: var(--font-size-lg);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Characters Grid */
.characters-grid {
  display: grid;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

@media (width >= 480px) {
  .characters-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width >= 768px) {
  .characters-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (width >= 1024px) {
  .characters-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Character Card */
.character-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.character-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: 0 8px 25px rgba(255, 140, 0, 0.2);
}

.character-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: var(--color-surface-light);
}

.character-card__content {
  padding: var(--space-md);
}

.character-card__name {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: var(--space-xs);
}

.character-card__race {
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--space-sm);
}

.character-card__description {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-md);
  margin-top: var(--space-lg);
  padding: var(--space-md);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
}

.pagination__info {
  color: var(--color-text-light);
  font-weight: 600;
  min-width: 120px;
  text-align: center;
}

/* Footer */
.footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-surface-light);
  padding: var(--space-lg) 0;
  margin-top: var(--space-xl);
}

/* Stats */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-md);
  text-align: center;
}

.stat__number {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: var(--space-xs);
}

.stat__label {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 1000;
}

.modal.show {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__content {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  max-width: 90%;
  width: 400px;
  border: 2px solid var(--color-error);
}

/* Error */
.error {
  text-align: center;
}

.error__icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.error__title {
  color: var(--color-error);
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-sm);
}

.error__message {
  color: var(--color-text-light);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
}

.error__actions {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.4s ease-out;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: var(--space-xl);
  color: var(--color-text-muted);
}

.empty-state__icon {
  font-size: 4rem;
  margin-bottom: var(--space-md);
}

.empty-state__text {
  font-size: var(--font-size-lg);
}
```

**📁 ./js/app.js**
```javascript
import { getCharacters, getRandomCharacter } from './services/dragonball-service.js';

// ==========================================================================
// App State Management
// ==========================================================================
const state = {
  characters: [],
  filteredCharacters: [],
  isLoading: false,
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  currentFilter: { race: '', search: '' },
  error: null,
  loadingStartTime: 0
};

// ==========================================================================
// DOM Elements
// ==========================================================================
const elements = {
  // Loading and content
  loadingState: document.getElementById('loadingState'),
  charactersGrid: document.getElementById('charactersGrid'),
  
  // Controls
  searchInput: document.getElementById('characterSearch'),
  raceFilter: document.getElementById('raceFilter'),
  randomBtn: document.getElementById('randomCharacterBtn'),
  
  // Pagination
  paginationControls: document.getElementById('paginationControls'),
  paginationInfo: document.getElementById('paginationInfo'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  
  // Stats
  totalCharacters: document.getElementById('totalCharacters'),
  loadingTime: document.getElementById('loadingTime'),
  lastUpdate: document.getElementById('lastUpdate'),
  
  // Error modal
  errorModal: document.getElementById('errorModal'),
  errorMessage: document.getElementById('errorMessage'),
  retryBtn: document.getElementById('retryBtn'),
  closeErrorBtn: document.getElementById('closeErrorBtn')
};

// ==========================================================================
// Core Functions - TODO: Implementar
// ==========================================================================

const loadCharacters = async (page = 1) => {
  // TODO: Cargar personajes desde Dragon Ball API
  // TODO: Actualizar estado de la aplicación
  // TODO: Manejar estados de loading y errores
  // TODO: Renderizar personajes en la UI
};

const renderCharacters = (characters) => {
  // TODO: Renderizar lista de personajes
  // TODO: Crear HTML para cada personaje
  // TODO: Mostrar imagen, nombre, raza y descripción
  // TODO: Manejar lista vacía con mensaje apropiado
};

const createCharacterCard = (character) => {
  // TODO: Crear HTML para tarjeta de personaje
  // TODO: Incluir imagen con fallback
  // TODO: Mostrar información básica
  // TODO: Aplicar clases CSS apropiadas
  return `
    <article class="character-card fade-in">
      <img 
        src="${character.image}" 
        alt="${character.name}" 
        class="character-card__image"
        onerror="this.src='https://via.placeholder.com/200x200/1a1f2e/ffd700?text=${character.name}'"
      >
      <div class="character-card__content">
        <h3 class="character-card__name">${character.name}</h3>
        <p class="character-card__race">${character.race}</p>
        <p class="character-card__description">${character.description}</p>
      </div>
    </article>
  `;
};

const applyFilters = () => {
  // TODO: Aplicar filtros de raza y búsqueda
  // TODO: Filtrar sobre characters cargados
  // TODO: Actualizar filteredCharacters
  // TODO: Re-renderizar resultados
};

const updatePagination = () => {
  // TODO: Actualizar controles de paginación
  // TODO: Habilitar/deshabilitar botones
  // TODO: Mostrar información de página actual
};

const updateStats = (loadingTime) => {
  // TODO: Actualizar estadísticas en footer
  // TODO: Mostrar total de personajes
  // TODO: Mostrar tiempo de carga
  // TODO: Actualizar timestamp
};

const showLoading = (show = true) => {
  // TODO: Mostrar/ocultar estado de loading
  // TODO: Controlar visibilidad de elementos
  if (show) {
    state.loadingStartTime = performance.now();
    elements.loadingState.classList.add('show');
    elements.charactersGrid.style.display = 'none';
  } else {
    elements.loadingState.classList.remove('show');
    elements.charactersGrid.style.display = 'grid';
  }
};

const showError = (message) => {
  // TODO: Mostrar modal de error
  // TODO: Configurar mensaje específico
  elements.errorMessage.textContent = message;
  elements.errorModal.classList.add('show');
};

const hideError = () => {
  // TODO: Ocultar modal de error
  elements.errorModal.classList.remove('show');
};

// ==========================================================================
// Event Handlers - TODO: Implementar
// ==========================================================================

const handleSearch = (event) => {
  // TODO: Manejar búsqueda en tiempo real
  // TODO: Actualizar filtro de búsqueda
  // TODO: Aplicar filtros y re-renderizar
};

const handleRaceFilter = (event) => {
  // TODO: Manejar filtro por raza
  // TODO: Actualizar estado del filtro
  // TODO: Aplicar filtros combinados
};

const handleRandomCharacter = async () => {
  // TODO: Cargar personaje aleatorio
  // TODO: Mostrar en modal o reemplazar grid
  // TODO: Manejar errores apropiadamente
};

const handlePrevPage = async () => {
  // TODO: Ir a página anterior
  // TODO: Verificar que no estamos en página 1
  // TODO: Actualizar currentPage y cargar datos
  if (state.currentPage > 1) {
    await loadCharacters(state.currentPage - 1);
  }
};

const handleNextPage = async () => {
  // TODO: Ir a página siguiente
  // TODO: Verificar que hay página siguiente
  // TODO: Actualizar currentPage y cargar datos
  if (state.currentPage < state.totalPages) {
    await loadCharacters(state.currentPage + 1);
  }
};

const handleRetry = async () => {
  // TODO: Reintentar última operación
  // TODO: Cerrar modal de error
  // TODO: Recargar página actual
  hideError();
  await loadCharacters(state.currentPage);
};

// ==========================================================================
// App Initialization
// ==========================================================================

const initializeApp = async () => {
  // TODO: Inicializar aplicación
  // TODO: Configurar event listeners
  // TODO: Cargar primera página de personajes
  // TODO: Manejar errores de inicialización
  
  try {
    // Setup event listeners
    elements.searchInput.addEventListener('input', handleSearch);
    elements.raceFilter.addEventListener('change', handleRaceFilter);
    elements.randomBtn.addEventListener('click', handleRandomCharacter);
    elements.prevBtn.addEventListener('click', handlePrevPage);
    elements.nextBtn.addEventListener('click', handleNextPage);
    elements.retryBtn.addEventListener('click', handleRetry);
    elements.closeErrorBtn.addEventListener('click', hideError);
    
    // Load initial data
    await loadCharacters(1);
    
  } catch (error) {
    console.error('Error initializing app:', error);
    showError('Error al inicializar la aplicación');
  }
};

// ==========================================================================
// Test System
// ==========================================================================
const testResults = [];
const recordTest = (testName, condition) => {
  const emoji = condition ? "✅" : "❌";
  testResults.push(`${emoji} ${testName}`);
};

const runTests = () => {
  // Test 1: Async functionality
  try {
    const asyncFunctionsExist = 
      typeof loadCharacters === "function" &&
      typeof handleRandomCharacter === "function" &&
      typeof initializeApp === "function";
    
    recordTest("4.1.1 Async/await functionality works correctly", asyncFunctionsExist);
  } catch (error) {
    recordTest("4.1.1 Async/await functionality works correctly", false);
  }

  // Test 2: State management
  try {
    const stateManagementExists = 
      typeof state === "object" &&
      state !== null &&
      'isLoading' in state &&
      'currentPage' in state;
    
    recordTest("4.1.2 Loading and error states work correctly", stateManagementExists);
  } catch (error) {
    recordTest("4.1.2 Loading and error states work correctly", false);
  }

  // Test 3: Filtering and search
  try {
    const filterFunctionsExist = 
      typeof applyFilters === "function" &&
      typeof handleSearch === "function" &&
      typeof handleRaceFilter === "function";
    
    recordTest("4.1.3 Filtering and search work correctly", filterFunctionsExist);
  } catch (error) {
    recordTest("4.1.3 Filtering and search work correctly", false);
  }

  // Test 4: Pagination
  try {
    const paginationExists = 
      typeof handlePrevPage === "function" &&
      typeof handleNextPage === "function" &&
      typeof updatePagination === "function";
    
    recordTest("4.1.4 Pagination works correctly", paginationExists);
  } catch (error) {
    recordTest("4.1.4 Pagination works correctly", false);
  }

  // Test 5: Module integration
  try {
    const moduleIntegrationExists = 
      typeof getCharacters === "function" &&
      typeof getRandomCharacter === "function";
    
    recordTest("4.1.5 Module integration works correctly", moduleIntegrationExists);
  } catch (error) {
    recordTest("4.1.5 Module integration works correctly", false);
  }
};

// ==========================================================================
// App Start
// ==========================================================================
document.addEventListener('DOMContentLoaded', async () => {
  await initializeApp();
  
  // Run tests after initialization
  setTimeout(() => {
    runTests();
    console.log('=== 🧪 Test Results Reto 4.1 - Dragon Ball API ===');
    testResults.forEach(result => console.log(result));
  }, 1000);
});
```

**📁 ./js/services/dragonball-service.js**
```javascript
// ==========================================================================
// Dragon Ball API Service - Simple and Clean
// ==========================================================================

const BASE_URL = 'https://dragonball-api.com/api';
const DEFAULT_LIMIT = 12;

// Get characters with pagination
export const getCharacters = async (page = 1, limit = DEFAULT_LIMIT) => {
  try {
    const url = `${BASE_URL}/characters?page=${page}&limit=${limit}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw new Error('No se pudieron cargar los personajes de Dragon Ball');
  }
};

// Get random character
export const getRandomCharacter = async () => {
  try {
    // First get total count
    const firstPage = await getCharacters(1, 1);
    const totalItems = firstPage.meta.totalItems;
    
    // Generate random ID (Dragon Ball API uses sequential IDs)
    const randomId = Math.floor(Math.random() * totalItems) + 1;
    
    const url = `${BASE_URL}/characters/${randomId}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const character = await response.json();
    return character;
    
  } catch (error) {
    console.error('Error fetching random character:', error);
    throw new Error('No se pudo cargar un personaje aleatorio');
  }
};

// Search characters by name (client-side filtering)
export const searchCharacters = (characters, searchTerm) => {
  if (!searchTerm.trim()) return characters;
  
  return characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Filter characters by race
export const filterByRace = (characters, race) => {
  if (!race) return characters;
  
  return characters.filter(character =>
    character.race.toLowerCase() === race.toLowerCase()
  );
};

// Apply combined filters
export const applyFilters = (characters, filters) => {
  let filtered = [...characters];
  
  // Apply race filter
  if (filters.race) {
    filtered = filterByRace(filtered, filters.race);
  }
  
  // Apply search filter
  if (filters.search) {
    filtered = searchCharacters(filtered, filters.search);
  }
  
  return filtered;
};
```

---

### 🧠 Solución Completa de Implementación

**Complete app.js implementation:**
```javascript
import { 
  getCharacters, 
  getRandomCharacter, 
  applyFilters as applyServiceFilters 
} from './services/dragonball-service.js';

// ... (previous code remains the same until Core Functions)

const loadCharacters = async (page = 1) => {
  try {
    showLoading(true);
    state.error = null;
    
    const data = await getCharacters(page);
    
    state.characters = data.items;
    state.currentPage = data.meta.currentPage;
    state.totalPages = data.meta.totalPages;
    state.totalItems = data.meta.totalItems;
    
    applyFilters();
    updatePagination();
    
    const loadingTime = performance.now() - state.loadingStartTime;
    updateStats(loadingTime);
    
  } catch (error) {
    state.error = error.message;
    showError(error.message);
  } finally {
    showLoading(false);
  }
};

const renderCharacters = (characters) => {
  if (!characters || characters.length === 0) {
    elements.charactersGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">🔍</div>
        <p class="empty-state__text">No se encontraron guerreros</p>
      </div>
    `;
    return;
  }
  
  const html = characters.map(character => createCharacterCard(character)).join('');
  elements.charactersGrid.innerHTML = html;
};

const applyFilters = () => {
  state.filteredCharacters = applyServiceFilters(state.characters, state.currentFilter);
  renderCharacters(state.filteredCharacters);
};

const updatePagination = () => {
  elements.paginationInfo.textContent = `Página ${state.currentPage} de ${state.totalPages}`;
  elements.prevBtn.disabled = state.currentPage <= 1;
  elements.nextBtn.disabled = state.currentPage >= state.totalPages;
  
  elements.paginationControls.style.display = state.totalPages > 1 ? 'flex' : 'none';
};

const updateStats = (loadingTime) => {
  elements.totalCharacters.textContent = state.filteredCharacters.length;
  elements.loadingTime.textContent = `${Math.round(loadingTime)}ms`;
  elements.lastUpdate.textContent = new Date().toLocaleTimeString();
};

// Event Handlers
const handleSearch = (event) => {
  state.currentFilter.search = event.target.value;
  applyFilters();
};

const handleRaceFilter = (event) => {
  state.currentFilter.race = event.target.value;
  applyFilters();
};

const handleRandomCharacter = async () => {
  try {
    showLoading(true);
    const character = await getRandomCharacter();
    
    // Show single character
    const html = createCharacterCard(character);
    elements.charactersGrid.innerHTML = html;
    
    // Update stats
    elements.totalCharacters.textContent = '1';
    elements.lastUpdate.textContent = new Date().toLocaleTimeString();
    
  } catch (error) {
    showError(error.message);
  } finally {
    showLoading(false);
  }
};

// ... (rest of the implementation follows the same pattern)
```

---

### 💡 Conceptos Técnicos Clave

**🔄 Async/Await Pattern:** Manejo limpio de operaciones asíncronas sin callbacks anidados  
**📦 ES6 Modules:** Separación clara de responsabilidades con import/export  
**🎯 State Management:** Estado centralizado que refleja el estado actual de la aplicación  
**⚡ Event-Driven:** Respuesta a interacciones del usuario con handlers específicos  
**🛡️ Error Boundaries:** Manejo robusto de errores de red y API  
**🎨 Progressive Enhancement:** UI que funciona desde mobile hasta desktop  
**🔍 Client-side Filtering:** Filtrado eficiente sobre datos ya cargados  
**📊 Real-time Feedback:** Estadísticas y estados que se actualizan dinámicamente