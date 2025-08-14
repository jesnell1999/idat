# 🎯 JavaScript Nivel 2: Objetos, Arrays y Funciones 

¡Ahora que dominas los fundamentos, vamos a aprender paso a paso los conceptos más importantes! 🚀 Cada reto se enfoca en UNA cosa nueva para que no te abrumes. ¡Fernanda, Mijael, Fe, Elliot, Doky y Amorosa te acompañarán en este viaje gradual! 🌟

---

## 🏆✨ Retos

### 👤 o2.1 Mi Primer Objeto Mágico

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
// Test system setup 🧪✨
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Create your first character object here 🛠️💫
const character = {
    // ✨ Your magical code here ✨
};

// Automated test function 🤖
const testCharacterObject = () => {
    // Test 1: Happy path - name is "Mijael" 👦
    recordTest("o2.1.1 name is Mijael", character.name === "Mijael");
    
    // Test 2: Happy path - age is 8 and favoriteColor is "azul" 🎨
    recordTest("o2.1.2 age and color correct", 
        character.age === 8 && character.favoriteColor === "azul");
    
    // Test 3: Happy path - isHappy is true initially 😊
    recordTest("o2.1.3 isHappy is true", character.isHappy === true);
    
    // Test 4: Object has all required properties 📋
    const requiredProps = ['name', 'age', 'favoriteColor', 'isHappy'];
    const hasAllProps = requiredProps.every(prop => character.hasOwnProperty(prop));
    recordTest("o2.1.4 has all required properties", hasAllProps);
    
    // Test 5: Properties have correct data types ⚡
    recordTest("o2.1.5 correct data types", 
        typeof character.name === "string" && 
        typeof character.age === "number" && 
        typeof character.favoriteColor === "string" && 
        typeof character.isHappy === "boolean");
};

// Run tests 🏃‍♂️💨
testCharacterObject();

// Show results 📊
console.log('=== 🧪 Resultados de las Pruebas ===');
testResults.forEach(result => console.log(result));

// Show character info 👤✨
console.log('\n=== 👤 Información del Personaje ===');
console.log(`Nombre: ${character.name} 🌟`);
console.log(`Edad: ${character.age} 🎂`);
console.log(`Color favorito: ${character.favoriteColor} 🎨`);
console.log(`¿Está feliz?: ${character.isHappy} 😊`);

// Demo: Modify property and add new one 🔄
character.isHappy = false;
character.hobby = "programar";
console.log(`\n🔄 Después de modificar:`);
console.log(`¿Está feliz?: ${character.isHappy} 😢`);
console.log(`Nuevo hobby: ${character.hobby} 💻`);
```

---

#### 💡 Tips

📦 Los objetos se crean con llaves `{}`  
🎯 Usa dot notation para acceder: `objeto.propiedad`  
⚡ Puedes agregar propiedades después: `objeto.nuevaPropiedad = valor`  
🔍 `Object.keys()` te muestra todas las propiedades  

---

#### 🌟 Motivación

¡Tu primer paso hacia la programación orientada a objetos! Los objetos son la base de todo en JavaScript. ¡Mijael estaría orgulloso de ver su versión digital! 👦✨

---

### 📝 o2.2 Lista de Aventureros

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
// Test system setup 🧪⚡
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Create your adventurers array here 🛠️⚔️
const adventurers = [
    // ✨ Add initial adventurers here 🌟
];

// Automated test function 🤖🧪
const testAdventurersArray = () => {
    // Test 1: Happy path - initial array setup 🚀
    recordTest("o2.2.1 initial array has correct values", 
        adventurers.length === 3 && adventurers[0] === "Fernanda" && adventurers[2] === "Fe");
    
    // Test 2: Happy path - add and remove operations ➕➖
    adventurers.push("Elliot");
    const removed = adventurers.pop();
    recordTest("o2.2.2 push and pop operations work", 
        removed === "Elliot" && adventurers.length === 3);
    
    // Test 3: Happy path - array access and modification 🔍📝
    adventurers.push("Doky", "Amorosa");
    recordTest("o2.2.3 array access and multiple additions", 
        adventurers[1] === "Mijael" && adventurers.includes("Amorosa"));
    
    // Test 4: Input validation - array handles different operations 🛡️
    const lengthBeforeEmpty = adventurers.length;
    adventurers.push(); // Push nothing
    recordTest("o2.2.4 handles edge cases properly", 
        adventurers.length === lengthBeforeEmpty && adventurers[0] !== undefined);
    
    // Test 5: Data type validation - is proper array 📊
    recordTest("o2.2.5 maintains array data type", 
        Array.isArray(adventurers) && typeof adventurers.length === "number");
};

// Run tests 🏃‍♂️💨
testAdventurersArray();

// Show results 📊✨
console.log('=== 🧪 Resultados de las Pruebas ===');
testResults.forEach(result => console.log(result));

// Show team info 👥🗡️
console.log('\n=== 👥 Lista de Aventureros ===');
adventurers.forEach((adventurer, index) => {
    console.log(`${index + 1}. ${adventurer} ⚔️✨`);
});

console.log(`\n📊 Total de aventureros: ${adventurers.length} 🌟`);
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

¡Ahora puedes manejar listas de datos! Los arrays son fundamentales para gestionar múltiples elementos. ¡Perfecto para formar el equipo épico de Fernanda y amigos! 🎉⚔️

---

### ⚡ o2.3 La Máquina de Funciones Épicas

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
// Test system setup 🧪⚡
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Create your magical functions here 🛠️✨

const greet = (name) => {
    // 🌟 Your greeting magic here 👋
};

const calculateCircleArea = (radius) => {
    // 📐 Your mathematical magic here - use Math.PI and ** for power ⚡
};

const isEven = (number) => {
    // 🔢 Your number checking magic here ✨
};

const findMax = (a, b, c) => {
    // 🏆 Your maximum finding magic here 🎯
};

const celsiusToFahrenheit = (celsius) => {
    // 🌡️ Your temperature conversion magic here 🔥
};

// Automated test function 🤖🧪
const testFunctionsAutomated = () => {
    // Test 1: Happy path - greeting function works correctly 👋
    recordTest("o2.3.1 greet function works correctly", 
        greet("Doky") === "¡Hola, Doky! Bienvenido al reino digital 👋");
    
    // Test 2: Happy path - mathematical functions work 📐
    const area = calculateCircleArea(5);
    recordTest("o2.3.2 math functions work correctly", 
        Math.abs(area - 78.54) < 0.01 && findMax(10, 25, 15) === 25);
    
    // Test 3: Happy path - boolean and conversion functions 🔢🌡️
    recordTest("o2.3.3 boolean and conversion functions", 
        isEven(4) === true && isEven(7) === false && celsiusToFahrenheit(100) === 212);
    
    // Test 4: Input validation - functions handle invalid inputs 🛡️
    recordTest("o2.3.4 input validation works", 
        isEven("not a number") === false && 
        calculateCircleArea(-5) >= 0 && 
        typeof greet() === "string");
    
    // Test 5: Return type validation - functions return correct types ⚡
    recordTest("o2.3.5 return type validation", 
        typeof greet("test") === "string" && 
        typeof calculateCircleArea(3) === "number" && 
        typeof isEven(6) === "boolean");
};

// Run automated tests 🏃‍♂️💨
testFunctionsAutomated();

// Show results 📊✨
console.log('=== 🧪 Resultados de las Pruebas Automatizadas ===');
testResults.forEach(result => console.log(result));

// Practical demonstration 🎯✨
console.log('\n=== 🎯 Demostración Práctica ===');
console.log(greet("Amorosa") + " 💖");
console.log(`Área de círculo radio 3: ${calculateCircleArea(3).toFixed(2)} unidades² 📐✨`);
console.log(`¿12 es par? ${isEven(12)} 🔢`);
console.log(`Mayor entre 8, 15, 12: ${findMax(8, 15, 12)} 🏆`);
console.log(`25°C = ${celsiusToFahrenheit(25)}°F 🌡️`);
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

¡Chévere! Ahora dominas las funciones en JavaScript. ¡Doky y Amorosa van a alucinar con estas funciones tan bacanes! 💫⚡

---

### 🏰 o2.4 El Gran Libro de Aventureros

Combina objetos, arrays y funciones para gestionar tu propia academia de héroes 🎓

**🧠 Fundamentos:** objects + arrays integration, data management, search functions, iteration

---

#### 🎯 Problema 

La Academia de Héroes Digitales necesita un sistema para registrar estudiantes, buscarlos rápidamente, calcular estadísticas y generar reportes. ¡Crea el sistema que revolucione la educación mágica!

---

#### 📝 Descripción

* `enrollStudent = (name: string, age: number, magicLevel: number, speciality: string): void` - Agregar estudiante al array
* `findStudentByName = (name: string): object | null` - Retornar el objeto estudiante o null si no existe  
* `getAcademyStats = (): object` - Retornar objeto con: `{totalStudents, averageAge, averageMagicLevel}`
* `getTopStudent = (): object` - Retornar el estudiante con mayor magicLevel
* `generateReport = (): void` - Mostrar información formateada de todos los estudiantes con `alert()`

---

#### 💻 Código base

```js
// Test system setup 🧪✨
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Academy students registry 🏰📚
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

// Create your academy functions here 🛠️🎓

const enrollStudent = (name, age, magicLevel, speciality) => {
    // 🌟 Your student enrollment magic here ✨
    // Validate inputs: name must be non-empty string, age > 0, magicLevel 0-100, speciality non-empty
};

const findStudentByName = (name) => {
    // 🔍 Your student search magic here 🎯
};

const getAcademyStats = () => {
    // 📊 Your statistics calculation magic here ⚡
};

const getTopStudent = () => {
    // 🏆 Your top student finding magic here 👑
};

const generateReport = () => {
    // 📝 Your epic report generation magic here using alert() 🚀
    // Format: "🏰 Academia Report 🎓\n👤 Name: X\n📊 Stats: age Y, magic Z\n🌟 Specialty: W\n\n..."
};

// Automated test function 🤖🧪
const testAcademySystemAutomated = () => {
    const initialCount = students.length;
    
    // Test 1: Happy path - enroll student works correctly ✨
    enrollStudent("Fe", 22, 88, "Magia de Datos");
    recordTest("o2.4.1 enrollment works correctly", 
        students.length === initialCount + 1 && 
        students[students.length - 1]?.name === "Fe");
    
    // Test 2: Happy path - search functionality works 🔍
    const foundStudent = findStudentByName("Mijael");
    recordTest("o2.4.2 search functionality works", 
        foundStudent !== null && foundStudent?.age === 8 && 
        foundStudent?.magicLevel === 95);
    
    // Test 3: Happy path - statistics and top student calculation 📊🏆
    const stats = getAcademyStats();
    const topStudent = getTopStudent();
    recordTest("o2.4.3 stats and top student work", 
        stats?.totalStudents === 3 && topStudent?.name === "Mijael");
    
    // Test 4: Input validation - handles invalid searches and enrollment 🛡️
    const notFound = findStudentByName("Inexistente");
    const beforeInvalid = students.length;
    enrollStudent("", -1, 150, 123); // Invalid data
    recordTest("o2.4.4 input validation works", 
        notFound === null && students.length === beforeInvalid);
    
    // Test 5: Return type validation - functions return correct types ⚡
    recordTest("o2.4.5 return types are correct", 
        typeof stats === "object" && stats?.hasOwnProperty("totalStudents") && 
        typeof topStudent === "object" && topStudent?.hasOwnProperty("magicLevel"));
};

// Run automated tests 🏃‍♂️💨
testAcademySystemAutomated();

// Show test results
console.log('=== 🧪 Resultados de Tests Automatizados ===');
testResults.forEach(result => console.log(result));

// Practical system demonstration 🏰⚡
alert('🏰 ¡Sistema de Academia Activado! ✨\n\n🎯 Vamos a probar todas las funciones mágicas...');

// Add more students for demonstration 🌟
enrollStudent("Elliot", 30, 82, "Arquitectura Mágica");
enrollStudent("Doky", 5, 100, "Prodigio Digital");

// Show statistics 📊
const stats = getAcademyStats();
alert(`📊 Estadísticas de la Academia 🏰\n\n` +
      `👥 Total estudiantes: ${stats?.totalStudents || 0} 🌟\n` +
      `📈 Edad promedio: ${stats?.averageAge?.toFixed(1) || 0} años 🎂\n` +
      `⚡ Nivel mágico promedio: ${stats?.averageMagicLevel?.toFixed(1) || 0} ✨`);

// Show top student 🏆
const topStudent = getTopStudent();
alert(`👑 Estudiante Más Poderoso 🏆\n\n` +
      `🌟 ${topStudent?.name || 'N/A'}\n` +
      `⚡ Nivel Mágico: ${topStudent?.magicLevel || 0}\n` +
      `🎯 Especialidad: ${topStudent?.speciality || 'N/A'}`);

// Generate complete report 📝
alert('📝 Generando Reporte Completo... ✨');
generateReport();

alert('🎉 ¡Academia de Héroes completamente funcional! 🏰✨');
```

---

#### 💡 Tips

📝 Para inscribir: crear objeto `{name, age, magicLevel, speciality}` y usar `push()` 🌟  
🔍 Para buscar: usar `find()` método o loop tradicional 🎯  
📊 Para promedios: sumar valores y dividir entre cantidad total ⚡  
🏆 Para máximo: usar `Math.max()` con map o comparar en loop 👑  
📄 Para reporte: usar `forEach()` y `alert()` con formato épico ✨  

---

#### 🌟 Motivación

¡Ahora manejas sistemas reales! Esta es la base de aplicaciones del mundo real: datos estructurados, búsquedas, estadísticas. ¡La Academia de Héroes Digitales está en buenas manos! 🎓✨

---

### 🎮 o2.5 El Reino de los Héroes Programadores

Crea tu épico sistema de RPG donde la programación es magia y los bugs son dragones 🐉

**🧠 Fundamentos:** complete system integration, game mechanics, data processing, application flow

---

#### 🎯 Problema 

El Reino Digital está bajo amenaza de los Bugs Malignos 🐛👹. Necesitas crear un sistema completo de RPG donde los programadores son héroes con diferentes especialidades, pueden formar equipos épicos, entrenar habilidades y enfrentar desafíos de código.

---

#### 📝 Descripción

* `createHero = (name: string, heroClass: string): object | null` - Retornar objeto héroe con stats de `heroClasses` más: `{level: 1, experience: 0, victories: 0}`
* `recruitHero = (hero: object): void` - Agregar héroe al array `heroesLeague` si es válido
* `trainHero = (heroName: string): boolean` - Aumentar stats aleatoriamente (1-5) y experience +10, retornar success (puede fallar)
* `fightBug = (heroName: string, bugDifficulty: number): object` - Simular batalla, retornar resultado con detalles
* `getLeagueStats = (): object` - Retornar: `{totalHeroes, averageLevel, totalVictories, topHero}`
* `getHeroRanking = (): array` - Retornar top 3 héroes ordenados por victorias
* `generateEpicReport = (): void` - Mostrar info detallada de todos los héroes con `alert()`
* `runEpicDemo = (): void` - Ejecutar demostración completa del sistema con alerts épicos

**⚔️ Lógica de Batalla:** Héroe gana si `(coding + debugging) / 2 > bugDifficulty * 10`

---

#### 💻 Código base

```js
// Test system setup 🧪⚡
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Hero classes configuration 🏰⚔️
const heroClasses = {
    frontend: { 
        health: 120, 
        coding: 90, 
        creativity: 95, 
        debugging: 70,
        specialty: "Interfaces Mágicas 🎨" 
    },
    backend: { 
        health: 120, 
        coding: 95, 
        creativity: 70, 
        debugging: 90,
        specialty: "Lógica del Servidor 🔧" 
    },
    fullstack: { 
        health: 110, 
        coding: 85, 
        creativity: 85, 
        debugging: 85,
        specialty: "Maestro Universal ⚡" 
    },
    devops: { 
        health: 115, 
        coding: 80, 
        creativity: 75, 
        debugging: 100,
        specialty: "Automatización Épica 🚀" 
    }
};

// Heroes league array 👥🏆
const heroesLeague = [];

// Create your epic RPG system functions 🛠️🎮

const createHero = (name, heroClass) => {
    // 🌟 Your hero creation magic ⚡
};

const recruitHero = (hero) => {
    // 🏰 Your hero recruitment magic 👥
};

const trainHero = (heroName) => {
    // 💪 Your training magic ⚡
};

const fightBug = (heroName, bugDifficulty) => {
    // ⚔️ Your epic battle magic 🐛
};

const getLeagueStats = () => {
    // 📊 Your league statistics magic 🏆
};

const getHeroRanking = () => {
    // 🥇 Your ranking magic 👑
};

const generateEpicReport = () => {
    // 📜 Your epic report magic using alert() 🌟
};

const runEpicDemo = () => {
    // 🎮 Your epic demonstration magic ✨
    // Create heroes, recruit them, train, fight bugs, show final epic report
};

// Automated test function 🤖🧪
const testRPGSystemAutomated = () => {
    // Test 1: Happy path - hero creation works correctly 🌟
    const fernanda = createHero("Fernanda", "frontend");
    recordTest("o2.5.1 hero creation works correctly", 
        fernanda?.name === "Fernanda" && fernanda?.coding === 90 && 
        fernanda?.level === 1 && fernanda?.experience === 0);
    
    // Test 2: Happy path - recruitment and training systems 🏰💪
    if (fernanda) recruitHero(fernanda);
    const mijael = createHero("Mijael", "backend");
    if (mijael) {
        recruitHero(mijael);
        const trainSuccess = trainHero("Mijael");
        recordTest("o2.5.2 recruitment and training work", 
            heroesLeague.length === 2 && mijael?.experience === 10 && trainSuccess === true);
    }
    
    // Test 3: Happy path - battle and stats systems ⚔️📊
    const battleResult = fightBug("Fernanda", 5);
    const stats = getLeagueStats();
    recordTest("o2.5.3 battle and stats systems work", 
        battleResult?.hasOwnProperty("victory") && 
        stats?.totalHeroes === 2 && 
        typeof stats?.averageLevel === "number");
    
    // Test 4: Input validation - handles invalid inputs 🛡️
    const invalidHero = createHero("", "invalidClass");
    const invalidTrain = trainHero("NonExistent");
    const invalidBattle = fightBug("NonExistent", -1);
    recordTest("o2.5.4 input validation works", 
        invalidHero === null && 
        invalidTrain === false && 
        invalidBattle?.victory === false);
    
    // Test 5: Return type validation - functions return correct types ⚡
    const ranking = getHeroRanking();
    recordTest("o2.5.5 return types are correct", 
        typeof stats === "object" && 
        Array.isArray(ranking) && 
        ranking.length <= 3);
};

// Run automated tests 🏃‍♂️💨
testRPGSystemAutomated();

// Show test results 📊✨
console.log('=== 🧪 Resultados de Tests del Reino ===');
testResults.forEach(result => console.log(result));

// Demo functions for admin/debugging 🔧
const showLeagueStats = () => {
    const stats = getLeagueStats();
    console.log('📊 Estadísticas de la Liga:');
    console.log(`👥 Total Héroes: ${stats?.totalHeroes || 0}`);
    console.log(`📈 Nivel Promedio: ${stats?.averageLevel?.toFixed(1) || 0}`);
    console.log(`🏆 Victorias Totales: ${stats?.totalVictories || 0}`);
    console.log(`👑 Héroe Top: ${stats?.topHero?.name || 'N/A'}`);
};

const showHeroRanking = () => {
    const ranking = getHeroRanking();
    console.log('🏆 Ranking de Héroes:');
    ranking.forEach((hero, index) => {
        console.log(`${index + 1}. ${hero?.name} - ${hero?.victories} victorias`);
    });
};

// User experience function - uncomment to run epic adventure! 🎮
// runEpicDemo();

console.log('\n🎮 Para iniciar la aventura épica, ejecuta: runEpicDemo() 🚀');
console.log('📊 Para ver estadísticas, ejecuta: showLeagueStats() 📈');
console.log('🏆 Para ver ranking, ejecuta: showHeroRanking() 👑');
```

---

#### 💡 Tips

🏭 Usa `Object.assign({}, heroClasses[clase])` para copiar stats sin referencia ✨  
🎲 `Math.floor(Math.random() * 5) + 1` para números aleatorios 1-5 🎯  
⚔️ Compara `(coding + debugging) / 2` vs `bugDifficulty * 10` para batalla épica 🐛  
📊 Usa `reduce()` para calcular totales y promedios como un pro 🏆  
🏆 Usa `sort()` con `slice(0, 3)` para top 3 ranking 👑  
🔍 Usa optional chaining `?.` en todas las validaciones 🛡️  
📱 `alert()` con formato épico para mostrar todo al usuario ✨  

---

#### 🌟 Motivación

¡Felicidades, crack! 🎓✨ Has creado un sistema RPG completo que integra TODO lo aprendido de forma magistral. Los objetos, arrays y funciones ahora trabajan en perfecta armonía como una sinfonía de código épico. 

🏰 Tu Reino Digital está protegido por el mejor sistema de gestión de héroes  
⚔️ Los Bugs Malignos tiemblan ante tu código poderoso  
🌟 Fernanda, Mijael, Fe, Elliot, Doky y Amorosa están orgullosos de su creador  

¡Eres oficialmente un Héroe Programador de Nivel 2! 🚀👑🎮

**🎯 Logros Desbloqueados:**
- 🏆 Maestro de Objetos Mágicos
- 📝 Señor de los Arrays Épicos  
- ⚡ Rey de las Funciones Legendarias
- 🎮 Creador de Sistemas RPG
- 🌟 Héroe del Reino Digital

¡Prepárate para el Nivel 3: Aventuras Asíncronas y APIs Mágicas! 🚀🌟

---

## 🎉 ¡Fin del Nivel 2!

¡Increíble! Has completado todos los desafíos de JavaScript Nivel 2 🚀✨ Ahora dominas:

🎯 **Objetos Mágicos** - Creación, propiedades y manipulación  
📝 **Arrays Épicos** - Gestión de listas y operaciones  
⚡ **Funciones Legendarias** - Arrow functions y lógica avanzada  
🏰 **Sistemas Integrados** - Academia de héroes y RPG completo  
🎮 **Aplicaciones Reales** - Manejo de datos y experiencia de usuario  

**🌟 Próximos Desafíos:**
- Nivel 3: DOM Manipulation y Eventos 🎯
- Nivel 4: Asincronía y APIs 🌐  
- Nivel 5: Frameworks Modernos ⚡
- Nivel 6: Proyectos Full-Stack 🏗️

¡Sigue programando y conquistando nuevos reinos digitales! 👑💻✨