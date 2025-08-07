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

* Crear un objeto `character` con propiedades: `name`, `age`, `favoriteColor`, `isHappy`
* Acceder a las propiedades usando dot notation
* Modificar propiedades existentes
* Agregar nuevas propiedades dinámicamente

---

#### ✅ Casos de prueba

**Caso 1:** Crear personaje básico con nombre "Mijael", edad 8, color favorito "azul", feliz = true  
**Caso 2:** Acceder a la propiedad `name` y verificar que retorna "Mijael"  
**Caso 3:** Cambiar `isHappy` a false y verificar el cambio  
**Caso 4:** Agregar propiedad `hobby` con valor "programar"  
**Caso 5:** Verificar que el objeto tiene todas las propiedades esperadas  

---

#### 💻 Código base

```js
// 📋 Sistema de tests automatizados
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// 🧙‍♂️ Crea tu primer objeto representando un personaje
const character = {
    // Agrega las propiedades aquí 🛠️
    name: "",
    age: 0,
    favoriteColor: "",
    isHappy: true
};

// 🧪 Función de tests automatizados
const testCharacterObject = () => {
    // Test 1: Verificar que name no esté vacío
    recordTest("o2.1.1 name property exists", character.name !== "");
    
    // Test 2: Verificar que age sea número
    recordTest("o2.1.2 age is number", typeof character.age === "number");
    
    // Test 3: Verificar que favoriteColor sea string
    recordTest("o2.1.3 favoriteColor is string", typeof character.favoriteColor === "string");
    
    // Test 4: Verificar que isHappy sea boolean
    recordTest("o2.1.4 isHappy is boolean", typeof character.isHappy === "boolean");
    
    // Test 5: Cambiar isHappy y verificar
    character.isHappy = false;
    recordTest("o2.1.5 can modify isHappy", character.isHappy === false);
};

// 🚀 Ejecutar tests
testCharacterObject();

// 📊 Mostrar resultados
console.log('=== 🧪 Resultados de las Pruebas ===');
testResults.forEach(result => console.log(result));

// 🎯 Mostrar información del personaje
console.log('\n=== 👤 Información del Personaje ===');
console.log(`Nombre: ${character.name}`);
console.log(`Edad: ${character.age}`);
console.log(`Color favorito: ${character.favoriteColor}`);
console.log(`¿Está feliz?: ${character.isHappy}`);
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

* Crear array `adventurers` con nombres iniciales
* Agregar nuevos aventureros con `push()`
* Quitar el último aventurero con `pop()`  
* Acceder a aventureros por índice
* Contar total de miembros con `length`

---

#### ✅ Casos de prueba

**Caso 1:** Array inicial tiene 3 miembros: ["Fernanda", "Mijael", "Fe"]  
**Caso 2:** Agregar "Elliot" y verificar que ahora hay 4 miembros  
**Caso 3:** Acceder al primer miembro (índice 0) y verificar que es "Fernanda"  
**Caso 4:** Quitar último miembro y verificar que el array se reduce  
**Caso 5:** Mostrar todos los miembros uno por uno  

---

#### 💻 Código base

```js
// 📋 Sistema de tests automatizados
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// 🗡️ Crea tu array de aventureros
const adventurers = [
    "Fernanda",
    "Mijael", 
    "Fe"
];

// 🧪 Función de tests automatizados
const testAdventurersArray = () => {
    // Test 1: Verificar longitud inicial
    recordTest("o2.2.1 initial length is 3", adventurers.length === 3);
    
    // Test 2: Verificar primer elemento
    recordTest("o2.2.2 first element is Fernanda", adventurers[0] === "Fernanda");
    
    // Test 3: Agregar nuevo miembro
    adventurers.push("Elliot");
    recordTest("o2.2.3 can add new member", adventurers.length === 4);
    
    // Test 4: Verificar último elemento
    const lastIndex = adventurers.length - 1;
    recordTest("o2.2.4 last element is Elliot", adventurers[lastIndex] === "Elliot");
    
    // Test 5: Quitar último elemento
    const removed = adventurers.pop();
    recordTest("o2.2.5 can remove last element", removed === "Elliot" && adventurers.length === 3);
};

// 🚀 Ejecutar tests
testAdventurersArray();

// 📊 Mostrar resultados
console.log('=== 🧪 Resultados de las Pruebas ===');
testResults.forEach(result => console.log(result));

// 🎯 Mostrar información del equipo
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

Crea funciones modernas para resolver problemas del día a día como un verdadero programador 🚀

**🧠 Fundamentos:** arrow functions, parameters, return values, function composition

---

#### 🎯 Problema 

El reino digital necesita funciones útiles para tareas cotidianas: saludar a visitantes, calcular presupuestos, verificar permisos y resolver problemas matemáticos. ¡Sé el héroe que cree estas herramientas mágicas!

---

#### 📝 Descripción

* Crear arrow function que salude por nombre con estilo
* Crear arrow function que calcule operaciones matemáticas
* Crear arrow function que verifique condiciones importantes
* Usar parámetros y valores de retorno como un pro
* Sintaxis moderna con `const` y `=>`

---

#### 💻 Código base

```js
// 📋 Sistema de tests completamente automatizados
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// ⚡ Crea tus funciones mágicas aquí

// Función para saludar con estilo
const greet = (name) => {
    // Tu código aquí 🛠️
    return `¡Hola, ${name}! Bienvenido al reino digital 👋`;
};

// Función para calcular el área de un círculo
const calculateCircleArea = (radius) => {
    // Tu código aquí 🛠️ (usa Math.PI y ** para potencia)
};

// Función para verificar si es un número par
const isEven = (number) => {
    // Tu código aquí 🛠️
};

// Función para encontrar el mayor de tres números
const findMax = (a, b, c) => {
    // Tu código aquí 🛠️
};

// Función para convertir temperatura Celsius a Fahrenheit
const celsiusToFahrenheit = (celsius) => {
    // Tu código aquí 🛠️ (fórmula: F = C * 9/5 + 32)
};

// 🧪 Tests completamente automatizados
const testFunctionsAutomated = () => {
    // Test 1: Función de saludo personalizado
    recordTest("o2.3.1 greet function works correctly", 
        greet("Doky") === "¡Hola, Doky! Bienvenido al reino digital 👋");
    
    // Test 2: Cálculo de área de círculo (radio = 5, área ≈ 78.54)
    const area = calculateCircleArea(5);
    recordTest("o2.3.2 circle area calculation", 
        Math.abs(area - 78.54) < 0.01);
    
    // Test 3: Verificación de números pares e impares
    recordTest("o2.3.3 even/odd verification", 
        isEven(4) === true && isEven(7) === false);
    
    // Test 4: Encontrar el mayor de tres números
    recordTest("o2.3.4 find maximum of three numbers", 
        findMax(10, 25, 15) === 25 && findMax(3, 3, 2) === 3);
    
    // Test 5: Conversión de temperatura
    recordTest("o2.3.5 celsius to fahrenheit conversion", 
        celsiusToFahrenheit(0) === 32 && celsiusToFahrenheit(100) === 212);
};

// 🚀 Ejecutar tests automatizados
testFunctionsAutomated();

// 📊 Mostrar resultados
console.log('=== 🧪 Resultados de las Pruebas Automatizadas ===');
testResults.forEach(result => console.log(result));

// 🎯 Demostración práctica de las funciones
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
🔥 Arrow functions son la forma moderna de escribir funciones  
🧠 `Math.PI` te da el valor de π, `**` es potencia  

---

#### 🌟 Motivación

¡Bienvenido a JavaScript moderno! Las arrow functions son el futuro de la programación. ¡Doky y Amorosa van a flipar con estas funciones tan elegantes! 💫

---

## 🏰 o2.4 El Gran Libro de Aventureros

Combina objetos, arrays y funciones para gestionar tu propia academia de héroes 🎓

**🧠 Fundamentos:** objects + arrays integration, data management, search functions, iteration

---

#### 🎯 Problema 

La Academia de Héroes Digitales necesita un sistema para registrar estudiantes, buscarlos rápidamente, calcular estadísticas y generar reportes. ¡Crea el sistema que revolucione la educación mágica!

---

#### 📝 Descripción

* Array de objetos estudiante con propiedades detalladas
* Función para inscribir nuevo estudiante  
* Función para buscar estudiante por nombre exacto
* Función para calcular estadísticas del grupo
* Sistema integrado y funcional

---

#### 💻 Código base

```js
// 📋 Sistema de tests completamente automatizados
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// 🏰 Registro de estudiantes de la academia
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

// ➕ Función para inscribir nuevo estudiante
const enrollStudent = (name, age, magicLevel, speciality) => {
    // Tu código aquí 🛠️
    // Crear objeto y agregarlo al array students
};

// 🔍 Función para buscar estudiante por nombre exacto
const findStudentByName = (name) => {
    // Tu código aquí 🛠️
    // Retornar el objeto encontrado o null
};

// 📊 Función para calcular estadísticas de la academia
const getAcademyStats = () => {
    // Tu código aquí 🛠️
    // Retornar objeto con: totalStudents, averageAge, averageMagicLevel
};

// 👑 Función para encontrar el estudiante más poderoso
const getTopStudent = () => {
    // Tu código aquí 🛠️
    // Retornar el estudiante con mayor magicLevel
};

// 📝 Función para generar reporte completo
const generateReport = () => {
    // Tu código aquí 🛠️
    // Mostrar información formateada de todos los estudiantes
};

// 🧪 Tests completamente automatizados
const testAcademySystemAutomated = () => {
    const initialCount = students.length;
    
    // Test 1: Inscribir nuevo estudiante y verificar
    enrollStudent("Fe", 22, 88, "Magia de Datos");
    recordTest("o2.4.1 can enroll new student", 
        students.length === initialCount + 1 && 
        students[students.length - 1].name === "Fe");
    
    // Test 2: Buscar estudiante existente
    const foundStudent = findStudentByName("Mijael");
    recordTest("o2.4.2 can find existing student", 
        foundStudent !== null && foundStudent.age === 8);
    
    // Test 3: Buscar estudiante inexistente retorna null
    recordTest("o2.4.3 returns null for non-existing student", 
        findStudentByName("Inexistente") === null);
    
    // Test 4: Calcular estadísticas correctamente
    const stats = getAcademyStats();
    recordTest("o2.4.4 calculates stats correctly", 
        typeof stats.totalStudents === "number" && 
        typeof stats.averageAge === "number" && 
        typeof stats.averageMagicLevel === "number");
    
    // Test 5: Encontrar estudiante más poderoso
    const topStudent = getTopStudent();
    recordTest("o2.4.5 finds most powerful student", 
        topStudent !== null && topStudent.magicLevel >= 88);
};

// 🚀 Ejecutar tests automatizados
testAcademySystemAutomated();

// 📊 Mostrar resultados de tests
console.log('=== 🧪 Resultados de Tests Automatizados ===');
testResults.forEach(result => console.log(result));

// 🎯 Demostración práctica del sistema
console.log('\n=== 🏰 Sistema de Academia en Acción ===');

// Agregar más estudiantes para demostrar
enrollStudent("Elliot", 30, 82, "Arquitectura Mágica");
enrollStudent("Doky", 5, 100, "Prodigio Digital");

// Mostrar estadísticas
const stats = getAcademyStats();
console.log(`📊 Total estudiantes: ${stats.totalStudents}`);
console.log(`📊 Edad promedio: ${stats.averageAge.toFixed(1)} años`);
console.log(`📊 Nivel mágico promedio: ${stats.averageMagicLevel.toFixed(1)}`);

// Mostrar top student
const topStudent = getTopStudent();
console.log(`👑 Estudiante más poderoso: ${topStudent.name} (Nivel ${topStudent.magicLevel})`);

// Generar reporte completo
console.log('\n=== 📝 Reporte de la Academia ===');
generateReport();
```

---

#### 💡 Tips

📝 Array de objetos: `[{prop: valor}, {prop: valor}]`  
➕ Para inscribir: crear objeto y usar `push()`  
🔍 Para buscar: usar `find()` o loop tradicional  
📊 Para promedios: sumar valores y dividir entre cantidad  
🏆 Para máximo: usar `Math.max()` o comparar en loop  

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

* Sistema completo con clases de programador (Frontend, Backend, FullStack, DevOps)
* Gestión avanzada de equipos y estadísticas
* Sistema de entrenamiento y mejora de habilidades
* Simulador de batallas contra bugs
* Reportes detallados y ranking de héroes

---

#### 💻 Código base

```js
// 📋 Sistema de tests completamente automatizados
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// 🎯 Clases de héroes programadores
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

// 🏭 Función para crear héroe programador
const createHero = (name, heroClass) => {
    // Tu código aquí 🛠️
    // Retornar objeto héroe con name, class, stats copiados de heroClasses
    // Agregar: level: 1, experience: 0, victories: 0
};

// 👥 Liga de Héroes Digitales
const heroesLeague = [];

// ➕ Función para reclutar héroe
const recruitHero = (hero) => {
    // Tu código aquí 🛠️
};

// 🎯 Función de entrenamiento (aumenta stats aleatoriamente)
const trainHero = (heroName) => {
    // Tu código aquí 🛠️
    // Encontrar héroe, aumentar stats aleatoriamente entre 1-5
    // Aumentar experience en 10
};

// ⚔️ Simulador de batalla contra bug
const fightBug = (heroName, bugDifficulty) => {
    // Tu código aquí 🛠️
    // Calcular poder del héroe: (coding + debugging) / 2
    // Bug power = bugDifficulty * 10
    // Si héroe gana: +experience, +victory, mensaje épico
    // Si pierde: -health, mensaje motivacional
};

// 📊 Función para estadísticas de la liga
const getLeagueStats = () => {
    // Tu código aquí 🛠️
    // Retornar: totalHeroes, averageLevel, totalVictories, topHero
};

// 🏆 Función para ranking de héroes
const getHeroRanking = () => {
    // Tu código aquí 🛠️
    // Ordenar héroes por victories descendente, retornar top 3
};

// 📝 Función para reporte épico de la liga
const generateEpicReport = () => {
    // Tu código aquí 🛠️
    // Mostrar info detallada de todos los héroes con formato épico
};

// 🧪 Tests completamente automatizados
const testRPGSystemAutomated = () => {
    // Test 1: Crear héroe con stats correctos
    const fernanda = createHero("Fernanda", "frontend");
    recordTest("o2.5.1 creates hero with correct stats", 
        fernanda.name === "Fernanda" && 
        fernanda.coding === 90 && 
        fernanda.level === 1);
    
    // Test 2: Reclutar héroes y verificar liga
    recruitHero(fernanda);
    const mijael = createHero("Mijael", "backend");
    recruitHero(mijael);
    recordTest("o2.5.2 can recruit heroes to league", 
        heroesLeague.length === 2);
    
    // Test 3: Entrenamiento mejora stats
    const initialCoding = mijael.coding;
    trainHero("Mijael");
    recordTest("o2.5.3 training improves hero stats", 
        mijael.coding > initialCoding && mijael.experience === 10);
    
    // Test 4: Sistema de batalla funciona
    const initialVictories = fernanda.victories;
    fightBug("Fernanda", 5); // Bug fácil
    recordTest("o2.5.4 battle system works", 
        fernanda.victories >= initialVictories);
    
    // Test 5: Estadísticas de liga son correctas
    const stats = getLeagueStats();
    recordTest("o2.5.5 league stats calculation", 
        stats.totalHeroes === 2 && 
        typeof stats.averageLevel === "number");
};

// 🚀 Sistema de demostración épica
console.log('=== 🎮 ¡BIENVENIDO AL REINO DE LOS HÉROES PROGRAMADORES! ===\n');

// Crear equipo épico
const fernanda = createHero("Fernanda", "frontend");
const mijael = createHero("Mijael", "backend");
const fe = createHero("Fe", "fullstack");
const elliot = createHero("Elliot", "devops");

// Reclutar héroes
[fernanda, mijael, fe, elliot].forEach(hero => recruitHero(hero));

console.log('🏰 Héroes reclutados para salvar el Reino Digital...\n');

// Sesión de entrenamiento épica
console.log('💪 ¡SESIÓN DE ENTRENAMIENTO ÉPICA!');
["Fernanda", "Mijael", "Fe", "Elliot"].forEach(name => {
    console.log(`⚡ ${name} entra en entrenamiento intensivo...`);
    trainHero(name);
});

console.log('\n⚔️ ¡HORA DE LA BATALLA CONTRA LOS BUGS!');
// Batallas épicas
fightBug("Fernanda", 6);
fightBug("Mijael", 8);
fightBug("Fe", 7);
fightBug("Elliot", 9);

// Ejecutar tests
testRPGSystemAutomated();

// Mostrar resultados
console.log('\n=== 🧪 Resultados de Tests del Reino ===');
testResults.forEach(result => console.log(result));

// Estadísticas finales
console.log('\n=== 📊 ESTADÍSTICAS DEL REINO ===');
const stats = getLeagueStats();
console.log(`👥 Héroes totales: ${stats.totalHeroes}`);
console.log(`📈 Nivel promedio: ${stats.averageLevel.toFixed(1)}`);
console.log(`🏆 Victorias totales: ${stats.totalVictories}`);

// Ranking épico
console.log('\n=== 🏆 RANKING DE HÉROES LEGENDARIOS ===');
const ranking = getHeroRanking();
ranking.forEach((hero, index) => {
    const medals = ['🥇', '🥈', '🥉'];
    console.log(`${medals[index]} ${hero.name} - ${hero.victories} victorias (${hero.specialty})`);
});

// Reporte final épico
console.log('\n=== 📜 CRÓNICAS DEL REINO DIGITAL ===');
generateEpicReport();

console.log('\n🎉 ¡El Reino Digital está a salvo gracias a los Héroes Programadores!');
```

---

#### 💡 Tips

🏭 Usa `Object.assign({}, heroClasses[clase])` para copiar stats  
🎲 `Math.random()` para elementos aleatorios en entrenamiento  
⚔️ Compara stats para determinar ganador en batallas  
📊 `reduce()` es perfecto para calcular totales  
🏆 `sort()` ordena arrays para rankings  

---

#### 🌟 Motivación

¡Felicidades, Maestro del Código! 🎓 Has creado un sistema RPG completo que integra todo lo aprendido. Los objetos, arrays y funciones ahora bailan juntos en perfecta armonía. ¡Fernanda, Mijael, Fe, Elliot, Doky y Amorosa están listos para conquistar cualquier reino digital! 

¡Eres oficialmente un Héroe Programador de Nivel 2! 🚀👑