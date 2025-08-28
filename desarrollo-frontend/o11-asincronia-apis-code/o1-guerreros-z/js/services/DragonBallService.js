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