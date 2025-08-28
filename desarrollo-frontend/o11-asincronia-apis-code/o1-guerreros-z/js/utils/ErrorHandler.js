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