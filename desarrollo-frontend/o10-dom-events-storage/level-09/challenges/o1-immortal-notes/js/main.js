// your code here 💻
// select textarea
// load saved note from localStorage
// add input event listener
// save to localStorage on every change

// tests (run after implementation)
const runTests = () => {
  console.log('=== Tests ===');
  console.log(noteText.value.includes('Hola'));
  console.log(localStorage.getItem('note') === 'Hola');
  console.log(noteText instanceof HTMLTextAreaElement === true);
  console.log(typeof localStorage.getItem('note') === 'string');
  console.log(noteText.value === '');
};

// uncomment to run tests
// runTests();
