let users = [];
let isLoading = false;

// your code here 💻
// select elements
// create async fetchUsers function that simulates API
// use setTimeout wrapped in Promise
// await the promise
// use try/catch for error handling
// show loading state
// render users to DOM

// tests (run after users load)
const runTests = () => {
  console.log('=== Tests ===');
  console.log(users.length === 3);
  console.log(users[0].name === 'Fernanda');
  console.log(isLoading === true);
  console.log(isLoading === false);
  console.log(typeof fetchUsers === 'function');
};

// uncomment to run tests
// runTests();
