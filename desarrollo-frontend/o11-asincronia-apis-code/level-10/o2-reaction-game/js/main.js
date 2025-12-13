let startTime = 0;
let reactionTime = 0;

// your code here 💻
// select elements
// create waitRandomTime function that returns a Promise
// Promise resolves after random delay (2-5 seconds)
// on start: hide start button, show instructions
// use .then() to show click button when ready
// measure reaction time on click

// tests (run after game completes)
const runTests = () => {
  console.log('=== Tests ===');
  const delay = Math.floor(Math.random() * 3000) + 2000;
  console.log(delay >= 2000 && delay <= 5000);
  console.log(typeof startTime === 'number');
  console.log(reactionTime > 0);
  console.log('resolved' === 'resolved');
  console.log(typeof Promise.resolve() === 'object');
};

// uncomment to run tests
// runTests();
