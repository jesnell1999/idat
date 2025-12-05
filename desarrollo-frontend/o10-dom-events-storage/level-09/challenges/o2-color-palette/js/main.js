// your code here 💻
// create palette object with 3 colors
// save palette as JSON string to localStorage
// load palette from localStorage and parse
// apply colors to DOM elements

// tests (run after click save button)
const runTests = () => {
  console.log('=== Tests ===');
  const saved = localStorage.getItem('palette');
  const palette = JSON.parse(saved);

  console.log(saved.includes('primary'));
  console.log(palette.primary === '#e74c3c');
  console.log(typeof saved === 'string');
  console.log(typeof palette === 'object');
  console.log(saved.includes('primary') === true);
};

// uncomment to run tests
// runTests();
