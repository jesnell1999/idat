let tasks = []; // array de tareas 📋

// your code here 💻
// load tasks from localStorage
// render tasks to DOM
// add submit event listener
// implement addTask function
// implement deleteTask function
// save tasks to localStorage after changes

// tests (run after adding tasks)
const runTests = () => {
  console.log('=== Tests ===');
  console.log(tasks.includes('Estudiar JS'));
  console.log(tasks.length === 2);
  console.log(tasks.length === 1);
  console.log(typeof localStorage.getItem('tasks') === 'string');
  console.log(typeof tasks === 'object');
};

// uncomment to run tests
// runTests();
