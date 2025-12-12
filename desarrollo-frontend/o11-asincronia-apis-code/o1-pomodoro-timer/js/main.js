let timeLeft = 1500; // 25 minutos en segundos ⏱️
let intervalId = null;
let isRunning = false;

// your code here 💻
// select elements
// create formatTime function (converts seconds to MM:SS)
// create startTimer function with setInterval
// create resetTimer function with clearInterval
// add event listeners

// tests (run after timer starts)
const runTests = () => {
  console.log('=== Tests ===');
  console.log(timeLeft === 1500);
  console.log(timeLeft === 1499);
  console.log(display.textContent === '25:00');
  console.log(typeof intervalId === 'number');
  console.log(typeof isRunning === 'boolean');
};

// uncomment to run tests
// runTests();
