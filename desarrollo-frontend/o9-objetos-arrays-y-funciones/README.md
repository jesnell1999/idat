# 🎯 JavaScript Nivel 2: Objetos, Arrays y Funciones 

¡Ahora que dominas los fundamentos, vamos a aprender paso a paso los conceptos más importantes! 🚀 Cada reto se enfoca en UNA cosa nueva para que no te abrumes. ¡Fernanda, Mijael, Fe, Elliot, Doky y Amorosa te acompañarán en este viaje gradual! 🌟

---

## 👤 o2.1 Mi Primer Objeto Mágico

Crea tu primer objeto para representar a un personaje con propiedades básicas 🧙‍♂️

**🧠 Fundamentos:** object literals, properties, dot notation, property manipulation

---

#### 🎯 Problema 

Necesitas crear un objeto que represente a tu personaje favorito (Mijael, Fernanda, Fe, etc.) con información básica y poder acceder a sus propiedades de forma sencilla.

---

#### 📝 Descripción

* Crear un objeto `character` con propiedades: `name` (string), `age` (number), `favoriteColor` (string), `isHappy` (boolean)
* El personaje debe tener nombre "Mijael", edad 8, color favorito "azul", y estar feliz (true)
* Acceder a las propiedades usando dot notation
* Modificar propiedades existentes
* Agregar nuevas propiedades dinámicamente

---

#### ✅ Casos de prueba

**Caso 1:** Crear personaje con valores específicos: nombre "Mijael", edad 8, color "azul", feliz true  
**Caso 2:** Verificar que se puede acceder a name y retorna "Mijael"  
**Caso 3:** Verificar que age retorna 8 y favoriteColor retorna "azul"  
**Caso 4:** Verificar que el objeto tiene las 4 propiedades requeridas  
**Caso 5:** Verificar que los tipos de datos son correctos  

---

#### 💻 Código base

```js
// Test system setup
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Create your first character object here 🛠️
const character = {
    // Your code here
};

// Automated test function
const testCharacterObject = () => {
    // Test 1: Happy path - name is "Mijael"
    recordTest("o2.1.1 name is Mijael", character.name === "Mijael");
    
    // Test 2: Happy path - age is 8 and favoriteColor is "azul"  
    recordTest("o2.1.2 age and color correct", 
        character.age === 8 && character.favoriteColor === "azul");
    
    // Test 3: Happy path - isHappy is true initially
    recordTest("o2.1.3 isHappy is true", character.isHappy === true);
    
    // Test 4: Object has all required properties
    const requiredProps = ['name', 'age', 'favoriteColor', 'isHappy'];
    const hasAllProps = requiredProps.every(prop => character.hasOwnProperty(prop));
    recordTest("o2.1.4 has all required properties", hasAllProps);
    
    // Test 5: Properties have correct data types
    recordTest("o2.1.5 correct data types", 
        typeof character.name === "string" && 
        typeof character.age === "number" && 
        typeof character.favoriteColor === "string" && 
        typeof character.isHappy === "boolean");
};

// Run tests
testCharacterObject();

// Show results
console.log('=== 🧪 Resultados de las Pruebas ===');
testResults.forEach(result => console.log(result));

// Show character info
console.log('\n=== 👤 Información del Personaje ===');
console.log(`Nombre: ${character.name}`);
console.log(`Edad: ${character.age}`);
console.log(`Color favorito: ${character.favoriteColor}`);
console.log(`¿Está feliz?: ${character.isHappy}`);

// Demo: Modify property and add new one
character.isHappy = false;
character.hobby = "programar";
console.log(`\n🔄 Después de modificar:`);
console.log(`¿Está feliz?: ${character.isHappy}`);
console.log(`Nuevo hobby: ${character.hobby}`);
```

---

#### 💡 Tips

📦 Los objetos se crean con llaves `{}`  
🎯 Usa dot notation para acceder: `objeto.propiedad`  
⚡ Puedes agregar propiedades después: `objeto.nuevaPropiedad = valor`  
🔍 `Object.keys()` te muestra todas las propiedades  

---

#### 🌟 Motivación

¡Tu primer paso hacia la programación orientada a objetos! Los objetos son la base de todo en JavaScript. ¡Mijael estaría orgulloso de ver su versión digital! 👦

---

## 📝 o2.2 Lista de Aventureros

Maneja tu primer array de personajes y aprende operaciones básicas 🗡️

**🧠 Fundamentos:** arrays, push, pop, length, bracket notation, basic iteration

---

#### 🎯 Problema 

Tienes que gestionar una lista de aventureros (nombres) y realizar operaciones básicas como agregar, quitar y contar miembros del equipo.

---

#### 📝 Descripción

* Crear array `adventurers` con nombres iniciales: ["Fernanda", "Mijael", "Fe"]
* Agregar nuevos aventureros con `push()`
* Quitar el último aventurero con `pop()`  
* Acceder a aventureros por índice
* Contar total de miembros con `length`

---

#### 💻 Código base

```js
// Test system setup
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Create your adventurers array here 🛠️
const adventurers = [
    // Add initial adventurers
];

// Automated test function
const testAdventurersArray = () => {
    // Test 1: Check initial length and first element
    recordTest("o2.2.1 initial setup correct", 
        adventurers.length === 3 && adventurers[0] === "Fernanda");
    
    // Test 2: Add new member and verify
    adventurers.push("Elliot");
    recordTest("o2.2.2 can add new member", 
        adventurers.length === 4 && adventurers[3] === "Elliot");
    
    // Test 3: Remove last element and verify
    const removed = adventurers.pop();
    recordTest("o2.2.3 can remove last element", 
        removed === "Elliot" && adventurers.length === 3);
    
    // Test 4: Verify array type and access by index
    recordTest("o2.2.4 proper array operations", 
        Array.isArray(adventurers) && adventurers[1] === "Mijael");
    
    // Test 5: Add multiple elements
    adventurers.push("Doky", "Amorosa");
    recordTest("o2.2.5 can add multiple elements", 
        adventurers.length === 5 && adventurers.includes("Amorosa"));
};

// Run tests
testAdventurersArray();

// Show results
console.log('=== 🧪 Resultados de las Pruebas ===');
testResults.forEach(result => console.log(result));

// Show team info
console.log('\n=== 👥 Lista de Aventureros ===');
adventurers.forEach((adventurer, index) => {
    console.log(`${index + 1}. ${adventurer} ⚔️`);
});

console.log(`\n📊 Total de aventureros: ${adventurers.length}`);
```

---

#### 💡 Tips

📝 Los arrays se crean con corchetes `[]`  
➕ `push()` agrega al final, `pop()` quita del final  
🔢 Los índices empiezan en 0  
📏 `array.length` te da el número total de elementos  
🔄 Usa `forEach` para recorrer todos los elementos  

---

#### 🌟 Motivación

¡Ahora puedes manejar listas de datos! Los arrays son fundamentales para gestionar múltiples elementos. ¡Perfecto para formar el equipo épico de Fernanda y amigos! 🎉

---

## ⚡ o2.3 La Máquina de Funciones Épicas

Crea funciones útiles para resolver problemas del día a día como un verdadero programador 🚀

**🧠 Fundamentos:** arrow functions, parameters, return values, function composition

---

#### 🎯 Problema 

El reino digital necesita funciones útiles para tareas cotidianas: saludar a visitantes, calcular presupuestos, verificar permisos y resolver problemas matemáticos. ¡Sé el héroe que cree estas herramientas mágicas!

---

#### 📝 Descripción

* Crear función `greet(name)` que retorne: "¡Hola, [name]! Bienvenido al reino digital 👋"
* Crear función `calculateCircleArea(radius)` que calcule el área de un círculo
* Crear función `isEven(number)` que verifique si un número es par (retorna boolean)
* Crear función `findMax(a, b, c)` que encuentre el mayor de tres números
* Crear función `celsiusToFahrenheit(celsius)` que convierta temperatura (F = C * 9/5 + 32)

---

#### 💻 Código base

```js
// Test system setup
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Create your magical functions here 🛠️

const greet = (name) => {
    // Your code here
};

const calculateCircleArea = (radius) => {
    // Your code here - use Math.PI and ** for power
};

const isEven = (number) => {
    // Your code here
};

const findMax = (a, b, c) => {
    // Your code here
};

const celsiusToFahrenheit = (celsius) => {
    // Your code here
};

// Automated test function
const testFunctionsAutomated = () => {
    // Test 1: Greeting function works correctly
    recordTest("o2.3.1 greet function works correctly", 
        greet("Doky") === "¡Hola, Doky! Bienvenido al reino digital 👋");
    
    // Test 2: Circle area calculation (radius = 5, area ≈ 78.54)
    const area = calculateCircleArea(5);
    recordTest("o2.3.2 circle area calculation", 
        Math.abs(area - 78.54) < 0.01);
    
    // Test 3: Even/odd verification and max finding
    recordTest("o2.3.3 even/odd and max functions", 
        isEven(4) === true && isEven(7) === false && findMax(10, 25, 15) === 25);
    
    // Test 4: Temperature conversion validation
    recordTest("o2.3.4 temperature conversion", 
        celsiusToFahrenheit(0) === 32 && celsiusToFahrenheit(100) === 212);
    
    // Test 5: Function types and invalid input handling
    recordTest("o2.3.5 function types and validation", 
        typeof greet === "function" && 
        typeof calculateCircleArea === "function" && 
        isEven("not a number") === false);
};

// Run automated tests
testFunctionsAutomated();

// Show results
console.log('=== 🧪 Resultados de las Pruebas Automatizadas ===');
testResults.forEach(result => console.log(result));

// Practical demonstration
console.log('\n=== 🎯 Demostración Práctica ===');
console.log(greet("Amorosa"));
console.log(`Área de círculo radio 3: ${calculateCircleArea(3).toFixed(2)} unidades²`);
console.log(`¿12 es par? ${isEven(12)}`);
console.log(`Mayor entre 8, 15, 12: ${findMax(8, 15, 12)}`);
console.log(`25°C = ${celsiusToFahrenheit(25)}°F`);
```

---

#### 💡 Tips

➡️ Sintaxis: `const nombre = (parámetros) => { código }`  
🎯 Si es una línea: `const suma = (a, b) => a + b`  
📤 Usa `return` para devolver valores  
🧠 `Math.PI` te da el valor de π, `**` es potencia  
🔍 Siempre valida entradas para evitar errores  

---

#### 🌟 Motivación

¡Chévere! Ahora dominas las funciones en JavaScript. ¡Doky y Amorosa van a alucinar con estas funciones tan bacanes! 💫

---

## 🏰 o2.4 El Gran Libro de Aventureros

Combina objetos, arrays y funciones para gestionar tu propia academia de héroes 🎓

**🧠 Fundamentos:** objects + arrays integration, data management, search functions, iteration

---

#### 🎯 Problema 

La Academia de Héroes Digitales necesita un sistema para registrar estudiantes, buscarlos rápidamente, calcular estadísticas y generar reportes. ¡Crea el sistema que revolucione la educación mágica!

---

#### 📝 Descripción

* Función `enrollStudent(name, age, magicLevel, speciality)` que agregue estudiante al array
* Función `findStudentByName(name)` que retorne el objeto estudiante o null si no existe  
* Función `getAcademyStats()` que retorne objeto con: `{totalStudents, averageAge, averageMagicLevel}`
* Función `getTopStudent()` que retorne el estudiante con mayor magicLevel
* Función `generateReport()` que muestre información formateada de todos los estudiantes

---

#### 💻 Código base

```js
// Test system setup
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Academy students registry
const students = [
    {
        name: "Fernanda",
        age: 25,
        magicLevel: 85,
        speciality: "Programación Encantada"
    },
    {
        name: "Mijael", 
        age: 8,
        magicLevel: 95,
        speciality: "Lógica Mística"
    }
];

// Create your academy functions here 🛠️

const enrollStudent = (name, age, magicLevel, speciality) => {
    // Your code here
};

const findStudentByName = (name) => {
    // Your code here
};

const getAcademyStats = () => {
    // Your code here
};

const getTopStudent = () => {
    // Your code here
};

const generateReport = () => {
    // Your code here
};

// Automated test function
const testAcademySystemAutomated = () => {
    const initialCount = students.length;
    
    // Test 1: Enroll student and verify
    enrollStudent("Fe", 22, 88, "Magia de Datos");
    recordTest("o2.4.1 can enroll new student", 
        students.length === initialCount + 1 && 
        students[students.length - 1].name === "Fe");
    
    // Test 2: Find existing student and non-existing
    const foundStudent = findStudentByName("Mijael");
    recordTest("o2.4.2 find student functionality", 
        foundStudent !== null && foundStudent.age === 8 && 
        findStudentByName("Inexistente") === null);
    
    // Test 3: Calculate stats correctly
    const stats = getAcademyStats();
    recordTest("o2.4.3 calculates stats correctly", 
        typeof stats.totalStudents === "number" && 
        typeof stats.averageAge === "number" && 
        stats.totalStudents > 0);
    
    // Test 4: Find most powerful student
    const topStudent = getTopStudent();
    recordTest("o2.4.4 finds most powerful student", 
        topStudent !== null && topStudent.magicLevel >= 88);
    
    // Test 5: Function types validation
    recordTest("o2.4.5 function types validation", 
        typeof enrollStudent === "function" && 
        typeof findStudentByName === "function" && 
        typeof generateReport === "function");
};

// Run automated tests
testAcademySystemAutomated();

// Show test results
console.log('=== 🧪 Resultados de Tests Automatizados ===');
testResults.forEach(result => console.log(result));

// Practical system demonstration
console.log('\n=== 🏰 Sistema de Academia en Acción ===');

// Add more students for demonstration
enrollStudent("Elliot", 30, 82, "Arquitectura Mágica");
enrollStudent("Doky", 5, 100, "Prodigio Digital");

// Show statistics
const stats = getAcademyStats();
console.log(`📊 Total estudiantes: ${stats.totalStudents}`);
console.log(`📊 Edad promedio: ${stats.averageAge.toFixed(1)} años`);
console.log(`📊 Nivel mágico promedio: ${stats.averageMagicLevel.toFixed(1)}`);

// Show top student
const topStudent = getTopStudent();
console.log(`👑 Estudiante más poderoso: ${topStudent.name} (Nivel ${topStudent.magicLevel})`);

// Generate complete report
console.log('\n=== 📝 Reporte de la Academia ===');
generateReport();
```

---

#### 💡 Tips

📝 Para inscribir: crear objeto `{name, age, magicLevel, speciality}` y usar `push()`  
🔍 Para buscar: usar `find()` método o loop tradicional  
📊 Para promedios: sumar valores y dividir entre cantidad total  
🏆 Para máximo: usar `Math.max()` con map o comparar en loop  
📄 Para reporte: usar `forEach()` y `console.log()` con formato  

---

#### 🌟 Motivación

¡Ahora manejas sistemas reales! Esta es la base de aplicaciones del mundo real: datos estructurados, búsquedas, estadísticas. ¡La Academia de Héroes Digitales está en buenas manos! 🎓

---

## 🎮 o2.5 El Reino de los Héroes Programadores

Crea tu épico sistema de RPG donde la programación es magia y los bugs son dragones 🐉

**🧠 Fundamentos:** complete system integration, game mechanics, data processing, application flow

---

#### 🎯 Problema 

El Reino Digital está bajo amenaza de los Bugs Malignos. Necesitas crear un sistema completo de RPG donde los programadores son héroes con diferentes especialidades, pueden formar equipos épicos, entrenar habilidades y enfrentar desafíos de código.

---

#### 📝 Descripción

* Función `createHero(name, heroClass)` que retorne objeto héroe con stats copiados de `heroClasses` más: `{level: 1, experience: 0, victories: 0}`
* Función `recruitHero(hero)` que agregue héroe al array `heroesLeague`
* Función `trainHero(heroName)` que aumente stats aleatoriamente (1-5) y experience +10
* Función `fightBug(heroName, bugDifficulty)` que simule batalla. Héroe gana si `(coding + debugging)/2 > bugDifficulty * 10`
* Función `getLeagueStats()` que retorne: `{totalHeroes, averageLevel, totalVictories, topHero}`
* Función `getHeroRanking()` que retorne top 3 héroes ordenados por victorias
* Función `generateEpicReport()` que muestre info detallada de todos los héroes

---

#### 💻 Código base

```js
// Test system setup
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Hero classes configuration
const heroClasses = {
    frontend: { 
        health: 100, 
        coding: 90, 
        creativity: 95, 
        debugging: 70,
        specialty: "Interfaces Mágicas" 
    },
    backend: { 
        health: 120, 
        coding: 95, 
        creativity: 70, 
        debugging: 90,
        specialty: "Lógica del Servidor" 
    },
    fullstack: { 
        health: 110, 
        coding: 85, 
        creativity: 85, 
        debugging: 85,
        specialty: "Maestro Universal" 
    },
    devops: { 
        health: 115, 
        coding: 80, 
        creativity: 75, 
        debugging: 100,
        specialty: "Automatización Épica" 
    }
};

// Heroes league array
const heroesLeague = [];

// Create your epic RPG system functions here 🛠️

const createHero = (name, heroClass) => {
    // Your code here
};

const recruitHero = (hero) => {
    // Your code here
};

const trainHero = (heroName) => {
    // Your code here
};

const fightBug = (heroName, bugDifficulty) => {
    // Your code here
};

const getLeagueStats = () => {
    // Your code here
};

const getHeroRanking = () => {
    // Your code here
};

const generateEpicReport = () => {
    // Your code here
};

// Automated test function
const testRPGSystemAutomated = () => {
    // Test 1: Create hero with correct stats and structure
    const fernanda = createHero("Fernanda", "frontend");
    recordTest("o2.5.1 creates hero with correct structure", 
        fernanda.name === "Fernanda" && 
        fernanda.coding === 90 && 
        fernanda.level === 1 && 
        fernanda.experience === 0);
    
    // Test 2: Recruit heroes and league management
    recruitHero(fernanda);
    const mijael = createHero("Mijael", "backend");
    recruitHero(mijael);
    recordTest("o2.5.2 recruitment and league management", 
        heroesLeague.length === 2 && heroesLeague[0].name === "Fernanda");
    
    // Test 3: Training improves stats and experience
    const initialCoding = mijael.coding;
    trainHero("Mijael");
    recordTest("o2.5.3 training system works", 
        mijael.coding > initialCoding && mijael.experience === 10);
    
    // Test 4: Battle system and league stats
    fightBug("Fernanda", 5);
    const stats = getLeagueStats();
    recordTest("o2.5.4 battle and stats systems", 
        stats.totalHeroes === 2 && typeof stats.averageLevel === "number");
    
    // Test 5: Function types and ranking system
    const ranking = getHeroRanking();
    recordTest("o2.5.5 complete system validation", 
        typeof createHero === "function" && 
        Array.isArray(ranking) && 
        typeof generateEpicReport === "function");
};

// Epic demonstration system
console.log('=== 🎮 ¡BIENVENIDO AL REINO DE LOS HÉROES PROGRAMADORES! ===\n');

// Create epic team
const fernanda = createHero("Fernanda", "frontend");
const mijael = createHero("Mijael", "backend");
const fe = createHero("Fe", "fullstack");
const elliot = createHero("Elliot", "devops");

// Recruit heroes
[fernanda, mijael, fe, elliot].forEach(hero => recruitHero(hero));

console.log('🏰 Héroes reclutados para salvar el Reino Digital...\n');

// Epic training session
console.log('💪 ¡SESIÓN DE ENTRENAMIENTO ÉPICA!');
["Fernanda", "Mijael", "Fe", "Elliot"].forEach(name => {
    console.log(`⚡ ${name} entra en entrenamiento intensivo...`);
    trainHero(name);
});

console.log('\n⚔️ ¡HORA DE LA BATALLA CONTRA LOS BUGS!');
// Epic battles
fightBug("Fernanda", 6);
fightBug("Mijael", 8);
fightBug("Fe", 7);
fightBug("Elliot", 9);

// Run tests
testRPGSystemAutomated();

// Show results
console.log('\n=== 🧪 Resultados de Tests del Reino ===');
testResults.forEach(result => console.log(result));

// Final statistics
console.log('\n=== 📊 ESTADÍSTICAS DEL REINO ===');
const stats = getLeagueStats();
console.log(`👥 Héroes totales: ${stats.totalHeroes}`);
console.log(`📈 Nivel promedio: ${stats.averageLevel.toFixed(1)}`);
console.log(`🏆 Victorias totales: ${stats.totalVictories}`);

// Epic ranking
console.log('\n=== 🏆 RANKING DE HÉROES LEGENDARIOS ===');
const ranking = getHeroRanking();
ranking.forEach((hero, index) => {
    const medals = ['🥇', '🥈', '🥉'];
    console.log(`${medals[index]} ${hero.name} - ${hero.victories} victorias (${hero.specialty})`);
});

// Final epic report
console.log('\n=== 📜 CRÓNICAS DEL REINO DIGITAL ===');
generateEpicReport();

console.log('\n🎉 ¡El Reino Digital está a salvo gracias a los Héroes Programadores!');
```

---

#### 💡 Tips

🏭 Usa `Object.assign({}, heroClasses[clase])` para copiar stats  
🎲 `Math.floor(Math.random() * 5) + 1` para números aleatorios 1-5  
⚔️ Compara `(coding + debugging) / 2` vs `bugDifficulty * 10` para batalla  
📊 Usa `reduce()` para calcular totales y promedios  
🏆 Usa `sort()` con `slice(0, 3)` para top 3  

---

#### 🌟 Motivación

¡Felicidades, crack! 🎓 Has creado un sistema RPG completo que integra todo lo aprendido. Los objetos, arrays y funciones ahora trabajan en perfecta armonía. ¡Fernanda, Mijael, Fe, Elliot, Doky y Amorosa están listos para conquistar cualquier reino digital! 

¡Eres oficialmente un Héroe Programador de Nivel 2! 🚀👑