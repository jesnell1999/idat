// Test system setup
const testResults = [];
const recordTest = (testName, condition) => {
  const emoji = condition ? "✅" : "❌";
  testResults.push(`${emoji} ${testName}`);
};

// Create your magical functions here 🛠️

const greet = (name) => {
  return `¡Hola, ${name}! Bienvenido al reino digital 👋`;
};

const calculateCircleArea = (radius) => {
  return Math.PI * radius ** 2;
};

const isEven = (number) => {
  return number % 2 === 0
};

const findMax = (a, b, c) => {
  return Math.max(a, b, c)
};

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
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
console.log(`Área de círculo radio 3: ${calculateCircleArea(3)} unidades²`);
console.log(`¿12 es par? ${isEven(12)}`);
console.log(`Mayor entre 8, 15, 12: ${findMax(8, 15, 12)}`);
console.log(`25°C = ${celsiusToFahrenheit(25)}°F`);