let timeLeft = 1500;
let intervalId = null;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const updateDisplay = () => {
  display.textContent = formatTime(timeLeft);
};

const startTimer = () => {
  isRunning = true;
  startBtn.textContent = '⏸️ Pausar';

  setInterval(() => {
    timeLeft--;
    updateDisplay();
  }, 1000);
};

startBtn.addEventListener('click', startTimer);

updateDisplay();

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
