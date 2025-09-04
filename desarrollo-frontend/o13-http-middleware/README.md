# 🚀 Node.js API Nivel 2 - CRUD Completo & Middleware

¡Construye APIs REST completas con operaciones CRUD y middleware profesional! 🎯

---

## 🎓 ¿Qué aprenderás en Nivel 2?

Ahora que dominas los **GET endpoints**, vamos a crear una **API REST completa** con:

- ✏️ **CRUD completo**: POST, PUT, DELETE (Crear, Actualizar, Eliminar)
- 🛡️ **Middleware personalizado**: Validaciones, logging, seguridad
- 📝 **Persistencia real**: Guardar cambios en archivos JSON
- 🔐 **Seguridad básica**: Rate limiting y validaciones robustas
- 🎯 **API REST profesional**: Estándares HTTP y mejores prácticas

> 💡 **Analogía:** Si en Nivel 1 creaste una "biblioteca de lectura", ahora crearás una "biblioteca completa" donde puedes agregar libros, editarlos y eliminarlos!

---

## 1. 🏗️ Preparando el proyecto para CRUD

### 📦 Nuevas dependencias necesarias

```bash
# 🔒 Dependencias para producción (seguridad y utilidades)
npm install express-rate-limit helmet joi
```

> 💡 **¿Qué hace cada dependencia nueva?**
> - 🛡️ **express-rate-limit**: Limita requests por IP (previene ataques)
> - 🔒 **helmet**: Headers de seguridad automáticos
> - ✅ **joi**: Validación de datos súper fácil y potente

### 📝 Actualizar package.json

Tu `package.json` ahora se verá así:

```json
{
  "name": "peruvian-food-api",
  "version": "2.0.0",
  "type": "module",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "express-rate-limit": "^7.1.5",
    "helmet": "^7.1.0",
    "joi": "^17.11.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### 📂 Nueva estructura de carpetas

```bash
# 📁 Crear nuevas carpetas para funcionalidades avanzadas
mkdir -p src/middleware src/utils src/validators

# 🔍 Verificar la estructura completa
ls -la src/
```

Tu estructura ahora será:
```
peruvian-food-api/
├── src/
│   ├── data/           # 📊 Datos (foods.js + foodsDatabase.json)
│   ├── routes/         # 🛣️ Rutas/endpoints (foodRoutes.js)
│   ├── middleware/     # 🛡️ Middleware personalizado
│   ├── validators/     # ✅ Validaciones de datos
│   ├── utils/          # 🔧 Utilidades (manejo de archivos)
│   └── index.js        # 🚀 Servidor principal
├── .gitignore
└── package.json
```

---

## 2. 🔧 Utilidades para persistencia

Crea `src/utils/fileManager.js` para manejar archivos JSON:

```javascript
// 🗃️ File Manager - Handles JSON file operations safely
import fs from 'fs/promises';

class FileManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  // 📖 Read data from JSON file
  async readData() {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      // 🔍 If file doesn't exist, return empty array
      if (error.code === 'ENOENT') {
        return [];
      }
      throw new Error(`Error reading file: ${error.message}`);
    }
  }

  // 💾 Write data to JSON file with pretty formatting
  async writeData(data) {
    try {
      const jsonData = JSON.stringify(data, null, 2);
      await fs.writeFile(this.filePath, jsonData, 'utf8');
      return true;
    } catch (error) {
      throw new Error(`Error writing file: ${error.message}`);
    }
  }

  // ✨ Initialize file with default data if it doesn't exist
  async initializeFile(defaultData) {
    try {
      await fs.access(this.filePath);
      // File exists, do nothing
    } catch (error) {
      // File doesn't exist, create it with default data
      await this.writeData(defaultData);
    }
  }
}

export default FileManager;
```

> 🎯 **¿Por qué esta clase?** Encapsula toda la lógica de archivos. Si después cambias a base de datos, solo cambias esta clase!

---

## 3. ✅ Validadores con Joi

Crea `src/validators/foodValidator.js` para validar datos:

```javascript
// ✅ Food Validator - Validates food data using Joi
import Joi from 'joi';

// 🍽️ Schema for creating new food (all fields required)
const createFoodSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name cannot exceed 50 characters',
      'any.required': 'Name is required'
    }),
  
  category: Joi.string()
    .valid('main', 'appetizer', 'dessert', 'drink')
    .required()
    .messages({
      'any.only': 'Category must be one of: main, appetizer, dessert, drink',
      'any.required': 'Category is required'
    }),
  
  description: Joi.string()
    .min(10)
    .max(200)
    .required()
    .messages({
      'string.min': 'Description must be at least 10 characters long',
      'string.max': 'Description cannot exceed 200 characters',
      'any.required': 'Description is required'
    }),
  
  ingredients: Joi.array()
    .items(Joi.string().min(1))
    .min(1)
    .max(15)
    .required()
    .messages({
      'array.min': 'At least 1 ingredient is required',
      'array.max': 'Cannot have more than 15 ingredients',
      'any.required': 'Ingredients are required'
    }),
  
  isSpicy: Joi.boolean()
    .required()
    .messages({
      'any.required': 'Spicy status is required'
    }),
  
  price: Joi.number()
    .positive()
    .max(999.99)
    .required()
    .messages({
      'number.positive': 'Price must be a positive number',
      'number.max': 'Price cannot exceed $999.99',
      'any.required': 'Price is required'
    }),
  
  imageUrl: Joi.string()
    .uri()
    .required()
    .messages({
      'string.uri': 'Image URL must be a valid URL',
      'any.required': 'Image URL is required'
    })
});

// 🔄 Schema for updating food (all fields optional)
const updateFoodSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  category: Joi.string().valid('main', 'appetizer', 'dessert', 'drink'),
  description: Joi.string().min(10).max(200),
  ingredients: Joi.array().items(Joi.string().min(1)).min(1).max(15),
  isSpicy: Joi.boolean(),
  price: Joi.number().positive().max(999.99),
  imageUrl: Joi.string().uri()
}).min(1); // At least 1 field must be provided

// 🔍 Validation functions
export const validateCreateFood = (data) => {
  return createFoodSchema.validate(data, { abortEarly: false });
};

export const validateUpdateFood = (data) => {
  return updateFoodSchema.validate(data, { abortEarly: false });
};
```

> 💡 **Joi es genial porque:** Valida tipos, rangos, formatos y da mensajes de error súper claros. ¡Como TypeScript pero para datos!

---

## 4. 🛡️ Middleware personalizado

Crea `src/middleware/security.js` para seguridad básica:

```javascript
// 🛡️ Security Middleware - Basic security measures
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

// 🚦 Rate limiting configuration (prevents abuse)
export const createRateLimit = (windowMs = 15 * 60 * 1000, max = 100) => {
  return rateLimit({
    windowMs, // Time window in milliseconds
    max, // Max requests per windowMs
    message: {
      error: "Too many requests! 🚫",
      message: `You've exceeded the limit of ${max} requests per ${windowMs / 60000} minutes`,
      retryAfter: Math.ceil(windowMs / 60000),
      tip: "Please wait before making more requests"
    },
    standardHeaders: true, // Return rate limit info in headers
    legacyHeaders: false
  });
};

// 🔒 Basic helmet configuration (security headers)
export const securityHeaders = helmet({
  contentSecurityPolicy: false, // Disable CSP for API
  crossOriginEmbedderPolicy: false // Allow embedding
});

// 📝 Request logging middleware (simple but effective)
export const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip || req.connection.remoteAddress;
  
  console.log(`🌐 [${timestamp}] ${method} ${url} - IP: ${ip}`);
  
  // Log response time
  const startTime = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    const status = res.statusCode;
    const statusEmoji = status >= 400 ? '❌' : status >= 300 ? '🔄' : '✅';
    
    console.log(`${statusEmoji} [${timestamp}] ${method} ${url} - ${status} - ${duration}ms`);
  });
  
  next();
};

// ✅ Validation middleware wrapper
export const validateData = (validationFunction) => {
  return (req, res, next) => {
    const { error, value } = validationFunction(req.body);
    
    if (error) {
      return res.status(400).json({
        error: "Validation failed! 📝",
        message: "Please check your data and try again",
        details: error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message,
          value: detail.context.value
        }))
      });
    }
    
    // Replace req.body with validated data
    req.body = value;
    next();
  };
};
```

> 🎯 **Middleware = Filtros:** Como filtros de Instagram, procesan la request antes de llegar a tu ruta!

---

## 5. 📊 Actualizando el modelo de datos

Actualiza `src/data/foods.js` para funcionar con persistencia:

```javascript
// 🍽️ Foods Data Manager - Handles CRUD operations with file persistence
import FileManager from '../utils/fileManager.js';
import path from 'path';

// 📁 Database file path
const DB_PATH = path.join(process.cwd(), 'src', 'data', 'foodsDatabase.json');
const fileManager = new FileManager(DB_PATH);

// 🌟 Initial seed data (used only for initialization)
const initialFoods = [
  {
    id: 1,
    name: "Ceviche",
    category: "main",
    description: "Fresh raw fish cured in citrus juices with onions and chili peppers",
    ingredients: ["fish", "lime juice", "red onions", "chili peppers", "sweet potato"],
    isSpicy: true,
    price: 25,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Cebiche_de_corvina.JPG",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    name: "Lomo Saltado",
    category: "main", 
    description: "Stir-fried beef with vegetables and french fries served with rice",
    ingredients: ["beef", "tomatoes", "onions", "soy sauce", "potatoes", "rice"],
    isSpicy: false,
    price: 22,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Lomo-saltado-perudelights.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    name: "Ají de Gallina",
    category: "main",
    description: "Creamy chicken stew with yellow chili pepper sauce", 
    ingredients: ["chicken", "yellow chili pepper", "bread", "milk", "cheese", "walnuts"],
    isSpicy: true,
    price: 20,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Aj%C3%AD_de_gallina.jpg/800px-Aj%C3%AD_de_gallina.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  // 🔄 Reduced to 3 foods for simpler demo - you can add more!
];

// 🎯 Foods Database Class
class FoodsDatabase {
  constructor() {
    this.init();
  }

  // 🚀 Initialize database file
  async init() {
    await fileManager.initializeFile(initialFoods);
  }

  // 📖 Get all foods
  async getAllFoods() {
    return await fileManager.readData();
  }

  // 🔍 Get food by ID
  async getFoodById(id) {
    const foods = await this.getAllFoods();
    return foods.find(food => food.id === id);
  }

  // ➕ Create new food
  async createFood(foodData) {
    const foods = await this.getAllFoods();
    
    // 🆔 Generate new ID (max + 1)
    const newId = foods.length > 0 ? Math.max(...foods.map(f => f.id)) + 1 : 1;
    
    const newFood = {
      id: newId,
      ...foodData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    foods.push(newFood);
    await fileManager.writeData(foods);
    
    return newFood;
  }

  // ✏️ Update existing food
  async updateFood(id, updateData) {
    const foods = await this.getAllFoods();
    const foodIndex = foods.findIndex(food => food.id === id);
    
    if (foodIndex === -1) {
      return null;
    }
    
    // 🔄 Merge existing data with updates
    foods[foodIndex] = {
      ...foods[foodIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    
    await fileManager.writeData(foods);
    return foods[foodIndex];
  }

  // ❌ Delete food
  async deleteFood(id) {
    const foods = await this.getAllFoods();
    const foodIndex = foods.findIndex(food => food.id === id);
    
    if (foodIndex === -1) {
      return null;
    }
    
    const deletedFood = foods[foodIndex];
    foods.splice(foodIndex, 1);
    await fileManager.writeData(foods);
    
    return deletedFood;
  }

  // 📊 Get statistics
  async getStats() {
    const foods = await this.getAllFoods();
    
    const categories = foods.reduce((acc, food) => {
      acc[food.category] = (acc[food.category] || 0) + 1;
      return acc;
    }, {});
    
    const prices = foods.map(f => f.price);
    const averagePrice = prices.length > 0 
      ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length * 100) / 100
      : 0;
    
    return {
      totalFoods: foods.length,
      categories,
      averagePrice,
      spicyFoods: foods.filter(f => f.isSpicy).length,
      nonSpicyFoods: foods.filter(f => !f.isSpicy).length,
      priceRange: {
        min: Math.min(...prices),
        max: Math.max(...prices)
      }
    };
  }
}

// 📤 Export singleton instance
export default new FoodsDatabase();
```

> 💡 **Timestamps incluidos:** Ahora cada comida tiene `createdAt` y `updatedAt` para auditoría!

---

## 6. 🛣️ Rutas CRUD completas

Actualiza `src/routes/foodRoutes.js` con operaciones CRUD completas:

```javascript
// 🛣️ Food Routes - Complete CRUD operations
import express from 'express';
import foodsDB from '../data/foods.js';
import { validateData } from '../middleware/security.js';
import { validateCreateFood, validateUpdateFood } from '../validators/foodValidator.js';

const foodRouter = express.Router();

// 📋 GET all foods with filtering (same as Level 1 but with database)
foodRouter.get('/', async (req, res) => {
  try {
    let allFoods = await foodsDB.getAllFoods();
    let filteredFoods = allFoods;
    
    // 🌶️ Filter by spiciness
    if (req.query.spicy !== undefined) {
      const isSpicy = req.query.spicy === 'true';
      filteredFoods = filteredFoods.filter(food => food.isSpicy === isSpicy);
    }
    
    // 🏷️ Filter by category
    if (req.query.category) {
      filteredFoods = filteredFoods.filter(food => 
        food.category.toLowerCase() === req.query.category.toLowerCase()
      );
    }
    
    // 💰 Filter by maximum price
    if (req.query.maxPrice) {
      const maxPrice = parseInt(req.query.maxPrice);
      if (!isNaN(maxPrice)) {
        filteredFoods = filteredFoods.filter(food => food.price <= maxPrice);
      }
    }
    
    // 🔍 Search by name or description
    if (req.query.search) {
      const searchTerm = req.query.search.toLowerCase();
      filteredFoods = filteredFoods.filter(food =>
        food.name.toLowerCase().includes(searchTerm) ||
        food.description.toLowerCase().includes(searchTerm)
      );
    }
    
    res.json({
      total: filteredFoods.length,
      totalAvailable: allFoods.length,
      filters: req.query,
      foods: filteredFoods
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error! 🚨",
      message: "Failed to retrieve foods",
      details: error.message
    });
  }
});

// 🔍 GET food by ID
foodRouter.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        error: "Invalid ID format! 📝",
        message: "ID must be a number",
        example: "/api/foods/1"
      });
    }
    
    const food = await foodsDB.getFoodById(id);
    
    if (!food) {
      return res.status(404).json({
        error: "Food not found! 🔍",
        message: `No food found with ID: ${id}`,
        suggestion: "Check available foods at /api/foods"
      });
    }
    
    // 👥 Get related foods
    const allFoods = await foodsDB.getAllFoods();
    const relatedFoods = allFoods
      .filter(f => f.id !== id && f.category === food.category)
      .slice(0, 3)
      .map(f => ({ id: f.id, name: f.name }));
    
    res.json({
      ...food,
      relatedFoods: relatedFoods.length > 0 ? relatedFoods : null
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error! 🚨", 
      message: "Failed to retrieve food",
      details: error.message
    });
  }
});

// ➕ POST - Create new food
foodRouter.post('/', validateData(validateCreateFood), async (req, res) => {
  try {
    const newFood = await foodsDB.createFood(req.body);
    
    res.status(201).json({
      message: "Food created successfully! 🎉",
      food: newFood,
      links: {
        self: `/api/foods/${newFood.id}`,
        all: "/api/foods"
      }
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to create food! 🚨",
      message: "Something went wrong while saving",
      details: error.message
    });
  }
});

// ✏️ PUT - Update existing food
foodRouter.put('/:id', validateData(validateUpdateFood), async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        error: "Invalid ID format! 📝",
        message: "ID must be a number"
      });
    }
    
    const updatedFood = await foodsDB.updateFood(id, req.body);
    
    if (!updatedFood) {
      return res.status(404).json({
        error: "Food not found! 🔍",
        message: `No food found with ID: ${id}`
      });
    }
    
    res.json({
      message: "Food updated successfully! ✨",
      food: updatedFood,
      changes: Object.keys(req.body),
      links: {
        self: `/api/foods/${updatedFood.id}`,
        all: "/api/foods"
      }
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to update food! 🚨",
      message: "Something went wrong while updating",
      details: error.message
    });
  }
});

// ❌ DELETE - Remove food
foodRouter.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        error: "Invalid ID format! 📝",
        message: "ID must be a number"
      });
    }
    
    const deletedFood = await foodsDB.deleteFood(id);
    
    if (!deletedFood) {
      return res.status(404).json({
        error: "Food not found! 🔍",
        message: `No food found with ID: ${id}`
      });
    }
    
    res.json({
      message: "Food deleted successfully! 🗑️",
      deletedFood: {
        id: deletedFood.id,
        name: deletedFood.name
      },
      links: {
        all: "/api/foods",
        create: "POST /api/foods"
      }
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete food! 🚨",
      message: "Something went wrong while deleting", 
      details: error.message
    });
  }
});

export default foodRouter;
```

> 🎯 **CRUD completo:** Create (POST), Read (GET), Update (PUT), Delete (DELETE) - ¡Tu API puede hacer todo!

---

## 7. 🚀 Servidor con middleware y seguridad

Actualiza `src/index.js` con todas las mejoras:

```javascript
// 🚀 Peruvian Food API v2.0 - Complete CRUD with Security
import express from 'express';
import foodRouter from './routes/foodRoutes.js';
import foodsDB from './data/foods.js';
import { createRateLimit, securityHeaders, requestLogger } from './middleware/security.js';

const app = express();
const PORT = process.env.PORT || 3000;

// 🔒 Security middleware (apply first)
app.use(securityHeaders);
app.use(requestLogger);

// 📝 Parse JSON requests (needed for POST/PUT)
app.use(express.json({ limit: '10mb' }));

// 🚦 Rate limiting - different limits for different endpoints
app.use('/api/foods', createRateLimit(15 * 60 * 1000, 100)); // 100 requests per 15 minutes
app.use('/', createRateLimit(5 * 60 * 1000, 20)); // 20 requests per 5 minutes for docs

// 🏠 API Documentation
app.get('/', (req, res) => {
  res.json({
    message: "🇵🇪 Welcome to Peruvian Food API v2.0",
    version: "2.0.0",
    description: "Complete CRUD API for Peruvian cuisine! 🍽️",
    features: [
      "✅ Full CRUD operations (Create, Read, Update, Delete)",
      "🔍 Advanced filtering and search",
      "🛡️ Security middleware and rate limiting",
      "📝 Data validation with detailed error messages",
      "💾 Persistent storage with JSON database",
      "📊 Real-time statistics",
      "🏥 Health monitoring"
    ],
    endpoints: {
      "📋 All foods": "GET /api/foods",
      "🔍 Food by ID": "GET /api/foods/{id}",
      "➕ Create food": "POST /api/foods",
      "✏️ Update food": "PUT /api/foods/{id}",
      "❌ Delete food": "DELETE /api/foods/{id}",
      "📊 Statistics": "GET /api/stats",
      "🏥 Health check": "GET /health"
    },
    examples: {
      "Get spicy foods": "GET /api/foods?spicy=true",
      "Create new food": "POST /api/foods + JSON body",
      "Update food": "PUT /api/foods/1 + JSON body",
      "Delete food": "DELETE /api/foods/1"
    },
    security: {
      "Rate limiting": "100 requests per 15 minutes",
      "Request logging": "All requests logged with timestamp",
      "Data validation": "Joi schema validation",
      "Security headers": "Helmet protection"
    }
  });
});

// 📊 Dynamic API Stats
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await foodsDB.getStats();
    res.json({
      ...stats,
      lastUpdated: new Date().toISOString(),
      apiVersion: "2.0.0"
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to get stats! 📊",
      message: error.message
    });
  }
});

// 🛣️ Food routes
app.use('/api/foods', foodRouter);

// 🏥 Health check with database status
app.get('/health', async (req, res) => {
  try {
    // Test database connection
    const foods = await foodsDB.getAllFoods();
    
    res.json({
      status: "healthy! 💚",
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      database: {
        status: "connected",
        totalRecords: foods.length
      },
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + " MB",
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + " MB"
      }
    });
  } catch (error) {
    res.status(503).json({
      status: "unhealthy! ❌",
      timestamp: new Date().toISOString(),
      error: error.message
    });
  }
});

// ❌ 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found! 🔍",
    message: `Cannot ${req.method} ${req.originalUrl}`,
    suggestion: "Visit / for API documentation",
    availableRoutes: [
      "GET /",
      "GET /api/foods",
      "POST /api/foods",
      "GET /api/foods/:id",
      "PUT /api/foods/:id",
      "DELETE /api/foods/:id"
    ]
  });
});

// 🚨 Global error handler
app.use((error, req, res, next) => {
  console.error('🚨 Global Error:', error);
  res.status(500).json({
    error: "Internal server error! 🚨",
    message: "Something went wrong on our end",
    timestamp: new Date().toISOString()
  });
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Peruvian Food API v2.0 running on http://localhost:${PORT}`);
  console.log(`📋 Documentation: http://localhost:${PORT}/`);
  console.log(`🍽️ CRUD endpoints: http://localhost:${PORT}/api/foods`);
  console.log(`📊 Statistics: http://localhost:${PORT}/api/stats`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`🛡️ Security: Rate limiting & validation enabled`);
  console.log(`💾 Database: JSON file persistence active`);
  console.log(`🛠️ Development mode: npm run dev`);
  console.log(`🎉 Ready for full CRUD operations!`);
});
```

---

## 8. 🧪 Probando tu API CRUD

### ▶️ Iniciar tu API mejorada

```bash
# 🛠️ Modo desarrollo (recomendado)
npm run dev
```

Deberías ver estos mensajes:
```
🚀 Peruvian Food API v2.0 running on http://localhost:3000
📋 Documentation: http://localhost:3000/
🍽️ CRUD endpoints: http://localhost:3000/api/foods
📊 Statistics: http://localhost:3000/api/stats
🏥 Health check: http://localhost:3000/health
🛡️ Security: Rate limiting & validation enabled
💾 Database: JSON file persistence active
🛠️ Development mode: npm run dev
🎉 Ready for full CRUD operations!
```

### 🌐 Endpoints CRUD para probar

| 🎯 **Método** | 📍 **Endpoint** | 📝 **Descripción**          | 📊 **Body requerido** |
| ------------ | -------------- | -------------------------- | -------------------- |
| GET          | `/api/foods`   | Lista todas las comidas    | ❌ No                 |
| GET          | `/api/foods/1` | Obtiene comida específica  | ❌ No                 |
| POST         | `/api/foods`   | Crea nueva comida          | ✅ Sí                 |
| PUT          | `/api/foods/1` | Actualiza comida existente | ✅ Sí                 |
| DELETE       | `/api/foods/1` | Elimina comida             | ❌ No                 |

### 📝 Ejemplo de JSON para POST (crear comida)

```json
{
  "name": "Causa Limeña",
  "category": "appetizer",
  "description": "Layered potato dish with chicken or tuna salad filling",
  "ingredients": ["potatoes", "lime juice", "aji amarillo", "chicken", "mayonnaise"],
  "isSpicy": true,
  "price": 14,
  "imageUrl": "https://example.com/causa-limena.jpg"
}
```

### 🔄 Ejemplo de JSON para PUT (actualizar comida)

```json
{
  "price": 16,
  "description": "Updated: Layered potato dish with premium chicken filling"
}
```

### 🛠️ Herramientas para probar CRUD

**📞 REST Client (VS Code Extension) - Recomendado:**

Crea un archivo `test-api.http`:

```http
### Get all foods
GET http://localhost:3000/api/foods

### Get food by ID  
GET http://localhost:3000/api/foods/1

### Create new food
POST http://localhost:3000/api/foods
Content-Type: application/json

{
  "name": "Causa Limeña",
  "category": "appetizer", 
  "description": "Layered potato dish with chicken filling",
  "ingredients": ["potatoes", "lime juice", "aji amarillo", "chicken"],
  "isSpicy": true,
  "price": 14,
  "imageUrl": "https://example.com/causa.jpg"
}

### Update food
PUT http://localhost:3000/api/foods/1
Content-Type: application/json

{
  "price": 28,
  "description": "Updated: Premium ceviche with fresh catch of the day"
}

### Delete food
DELETE http://localhost:3000/api/foods/1
```

---

## 9. 🔍 Validaciones en acción

### ✅ Ejemplos de validaciones exitosas

**POST válido:**
```json
{
  "name": "Tacu Tacu",
  "category": "main",
  "description": "Rice and beans mixed together with steak or fried egg",
  "ingredients": ["rice", "beans", "beef", "eggs", "onions"],
  "isSpicy": false,
  "price": 18,
  "imageUrl": "https://example.com/tacu-tacu.jpg"
}
```

### ❌ Ejemplos de errores de validación

**POST inválido:**
```json
{
  "name": "X",
  "category": "invalid",
  "price": -5,
  "imageUrl": "not-a-url"
}
```

**Respuesta de error:**
```json
{
  "error": "Validation failed! 📝",
  "message": "Please check your data and try again",
  "details": [
    {
      "field": "name",
      "message": "Name must be at least 2 characters long",
      "value": "X"
    },
    {
      "field": "category", 
      "message": "Category must be one of: main, appetizer, dessert, drink",
      "value": "invalid"
    },
    {
      "field": "description",
      "message": "Description is required"
    },
    {
      "field": "price",
      "message": "Price must be a positive number",
      "value": -5
    }
  ]
}
```

---

## 10. 🛡️ Seguridad implementada

### 🚦 Rate Limiting en acción

Si haces demasiadas requests muy rápido:

```json
{
  "error": "Too many requests! 🚫",
  "message": "You've exceeded the limit of 100 requests per 15 minutes", 
  "retryAfter": 15,
  "tip": "Please wait before making more requests"
}
```

### 📝 Request Logging

En tu consola verás:
```
🌐 [2024-01-15T10:30:25.123Z] GET /api/foods - IP: ::1
✅ [2024-01-15T10:30:25.123Z] GET /api/foods - 200 - 45ms
🌐 [2024-01-15T10:30:30.456Z] POST /api/foods - IP: ::1  
✅ [2024-01-15T10:30:30.456Z] POST /api/foods - 201 - 78ms
```

### 🔒 Headers de seguridad

Helmet agrega automáticamente headers como:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

---

## 11. 💾 Base de datos JSON

### 📁 Archivo generado automáticamente

Tu API creará automáticamente `src/data/foodsDatabase.json`:

```json
[
  {
    "id": 1,
    "name": "Ceviche",
    "category": "main",
    "description": "Fresh raw fish cured in citrus juices with onions and chili peppers",
    "ingredients": ["fish", "lime juice", "red onions", "chili peppers", "sweet potato"],
    "isSpicy": true,
    "price": 25,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/78/Cebiche_de_corvina.JPG",
    "createdAt": "2024-01-15T10:15:30.123Z",
    "updatedAt": "2024-01-15T10:15:30.123Z"
  }
]
```

### 🔄 Persistencia real

- ✅ **Crear comida:** Se guarda en el archivo JSON
- ✅ **Actualizar comida:** El archivo se actualiza  
- ✅ **Eliminar comida:** Se remueve del archivo
- ✅ **Reiniciar servidor:** Los datos persisten

> 💡 **¡Importante!** Agrega `src/data/foodsDatabase.json` a tu `.gitignore` si no quieres versionarlo

---

## 12. 📊 Monitoreo y estadísticas

### 📈 Endpoint de estadísticas dinámicas

`GET /api/stats` ahora muestra datos reales:

```json
{
  "totalFoods": 5,
  "categories": {
    "main": 3,
    "appetizer": 1, 
    "dessert": 1
  },
  "averagePrice": 19.6,
  "spicyFoods": 3,
  "nonSpicyFoods": 2,
  "priceRange": {
    "min": 12,
    "max": 28
  },
  "lastUpdated": "2024-01-15T10:45:12.456Z",
  "apiVersion": "2.0.0"
}
```

### 🏥 Health check avanzado

`GET /health` incluye info del sistema:

```json
{
  "status": "healthy! 💚",
  "timestamp": "2024-01-15T10:45:12.456Z",
  "uptime": 3600,
  "database": {
    "status": "connected",
    "totalRecords": 5
  },
  "memory": {
    "used": "25 MB",
    "total": "50 MB"
  }
}
```

---

## 🎉 ¡Felicidades! Has completado el Nivel 2

### ✅ **Dominas ahora:**

- 🏗️ **CRUD completo**: Create, Read, Update, Delete operations
- 📝 **Validaciones robustas**: Joi schemas con mensajes descriptivos
- 🛡️ **Middleware personalizado**: Rate limiting, logging, seguridad
- 💾 **Persistencia real**: Datos se guardan en archivos JSON
- 🔒 **Seguridad básica**: Headers, rate limiting, validación de entrada
- 📊 **Monitoreo**: Logs, estadísticas, health checks
- 🎯 **API REST profesional**: Estándares HTTP, códigos de estado correctos
- ⚡ **Async/await**: Manejo asíncrono correcto
- 🏗️ **Arquitectura escalable**: Separación de responsabilidades

### 🏆 **Tu arquitectura profesional:**

```
📁 peruvian-food-api/
├── 📊 src/data/
│   ├── foods.js                ➜ Database class con CRUD operations
│   └── foodsDatabase.json      ➜ Archivo JSON persistente (auto-generado)
├── 🛣️ src/routes/
│   └── foodRoutes.js          ➜ Endpoints CRUD completos
├── 🛡️ src/middleware/
│   └── security.js            ➜ Rate limiting, logging, validation
├── ✅ src/validators/
│   └── foodValidator.js       ➜ Joi schemas para validación
├── 🔧 src/utils/
│   └── fileManager.js         ➜ Manejo de archivos JSON
├── 🚀 src/index.js            ➜ Servidor con middleware y seguridad
├── 🚫 .gitignore
└── 📦 package.json            ➜ Dependencies profesionales
```

### 🌟 **Comandos que dominas:**

```bash
npm run dev         # 🛠️ Desarrollo con auto-reload
npm start          # 🚀 Producción
npm install        # 📦 Instalar dependencias
```

### 🚀 **¿Qué sigue en Nivel 3?**

- 🗄️ **Bases de datos reales**: MongoDB, PostgreSQL
- 🔐 **Autenticación JWT**: Login, register, protected routes
- 📤 **File uploads**: Subida de imágenes
- 🧪 **Testing automatizado**: Unit tests, integration tests
- 🐳 **Deployment**: Docker, cloud deployment
- 📡 **WebSockets**: Real-time updates
- 🎯 **Advanced middleware**: Custom auth, caching

**¡Tu API está lista para producción! 🌍** Puedes consumirla desde cualquier frontend (React, Vue, Angular) y tiene todas las características de una API profesional. ¡Excelente trabajo! 🌟✨