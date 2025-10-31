// ═══════════════════════════════════════════════════════════════
// 🔧 LEVEL 2: TRANSFORMATIONS AND LOGIC - SOLUTIONS
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// 🔀 CHALLENGE 1: Explicit Conversions
// Folder: o1-explicit-conversions
// ═══════════════════════════════════════════════════════════════
function challenge01() {
  const age = '25';
  const price = '19.99';
  const isActive = 1;
  console.log('Valores originales:');
  console.log('age:', age, '- tipo:', typeof age);
  console.log('price:', price, '- tipo:', typeof price);
  console.log('isActive:', isActive, '- tipo:', typeof isActive);
  const ageNumber = Number(age);
  const priceNumber = Number(price);
  const isActiveBoolean = Boolean(isActive);
  console.log('\nValores convertidos:');
  console.log('ageNumber:', ageNumber, '- tipo:', typeof ageNumber);
  console.log('priceNumber:', priceNumber, '- tipo:', typeof priceNumber);
  console.log('isActiveBoolean:', isActiveBoolean, '- tipo:', typeof isActiveBoolean);
}

// ═══════════════════════════════════════════════════════════════
// ⚡ CHALLENGE 2: Unary Plus Operator
// Folder: o2-unary-plus
// ═══════════════════════════════════════════════════════════════
function challenge02() {
  const year = '2024';
  const pi = '3.14159';
  const width = '150px';
  const height = '200.5px';
  const yearNumber = +year;
  const piNumber = +pi;
  const widthNumber = parseInt(width);
  const heightNumber = parseFloat(height);
  console.log('year con +:', yearNumber);
  console.log('pi con +:', piNumber);
  console.log('width con parseInt:', widthNumber);
  console.log('height con parseFloat:', heightNumber);
  console.log('\nComparación:');
  console.log('parseInt vs parseFloat:');
  console.log('parseInt("200.5px"):', parseInt('200.5px'));
  console.log('parseFloat("200.5px"):', parseFloat('200.5px'));
}

// ═══════════════════════════════════════════════════════════════
// 💡 CHALLENGE 3: Truthy and Falsy
// Folder: o3-truthy-falsy
// ═══════════════════════════════════════════════════════════════
function challenge03() {
  const values = [0, '', 'Hola', null, undefined, 8, false, true, NaN, 'false'];
  console.log('Evaluando valores truthy/falsy:\n');
  values.forEach(value => {
    const type = value ? 'truthy' : 'falsy';
    console.log(`Valor: ${value} (${typeof value}) es ${type}`);
  });
  console.log('\nComparando isNaN vs Number.isNaN:');
  const testValue = 'abc';
  console.log(`isNaN('abc'):`, isNaN(testValue));
  console.log(`Number.isNaN('abc'):`, Number.isNaN(testValue));
  console.log(`Number.isNaN(NaN):`, Number.isNaN(NaN));
}

// ═══════════════════════════════════════════════════════════════
// 🎲 CHALLENGE 4: Advanced Math Operators
// Folder: o4-advanced-operators
// ═══════════════════════════════════════════════════════════════
function challenge04() {
  const number = 17;
  const divisor = 5;
  const remainder = number % divisor;
  const power = 2 ** 8;
  console.log(`${number} % ${divisor} = ${remainder}`);
  console.log(`2 ** 8 = ${power}`);
  let counter = 10;
  console.log('\nIncremento y decremento:');
  console.log('counter inicial:', counter);
  console.log('++counter:', ++counter);
  console.log('counter actual:', counter);
  console.log('counter++:', counter++);
  console.log('counter actual:', counter);
  console.log('--counter:', --counter);
  console.log('counter actual:', counter);
  console.log('counter--:', counter--);
  console.log('counter final:', counter);
  console.log('\nUso práctico del módulo:');
  const num = 17;
  console.log(`${num} es ${num % 2 === 0 ? 'par' : 'impar'}`);
}

// ═══════════════════════════════════════════════════════════════
// 🔗 CHALLENGE 5: Concatenation vs Sum
// Folder: o5-concatenation-vs-sum
// ═══════════════════════════════════════════════════════════════
function challenge05() {
  const num1 = 5;
  const num2 = 3;
  const str1 = '5';
  const str2 = '3';
  console.log('Number + Number:');
  console.log(`${num1} + ${num2} =`, num1 + num2);
  console.log('\nString + String:');
  console.log(`'${str1}' + '${str2}' =`, str1 + str2);
  console.log('\nString + Number:');
  console.log(`'${str1}' + ${num2} =`, str1 + num2);
  console.log('\nNumber + Number + String:');
  console.log(`${num1} + ${num2} + '2' =`, num1 + num2 + '2');
  console.log('\nString + Number + Number:');
  console.log(`'2' + ${num1} + ${num2} =`, '2' + num1 + num2);
  console.log('\nSolución con conversión:');
  console.log(`Number('${str1}') + Number('${str2}') =`, Number(str1) + Number(str2));
}

// ═══════════════════════════════════════════════════════════════
// ⚖️ CHALLENGE 6: Equality Comparisons
// Folder: o6-equality-comparisons
// ═══════════════════════════════════════════════════════════════
function challenge06() {
  const number = 8;
  const string = '8';
  const zero = 0;
  const emptyString = '';
  console.log('Comparaciones estrictas (===):');
  console.log(`${number} === '${string}':`, number === string);
  console.log(`${zero} === false:`, zero === false);
  console.log(`'${emptyString}' === false:`, emptyString === false);
  console.log('\nComparaciones sueltas (==):');
  console.log(`${number} == '${string}':`, number == string);
  console.log(`${zero} == false:`, zero == false);
  console.log(`'${emptyString}' == false:`, emptyString == false);
  console.log('\n⚡ SIEMPRE usa === y !== para evitar bugs');
}

// ═══════════════════════════════════════════════════════════════
// 🔀 CHALLENGE 7: If/Else Conditionals
// Folder: o7-conditionals
// ⚠️ Browser only
// ═══════════════════════════════════════════════════════════════
function challenge07() {
  const ageInput = prompt('¿Cuántos años tienes?');
  const age = +ageInput;
  if (isNaN(age) || age < 0) {
    alert('Por favor, ingresa una edad válida');
  } else if (age >= 18) {
    alert('Eres mayor de edad 👨');
  } else if (age >= 13) {
    alert('Eres adolescente 👦');
  } else {
    alert('Eres un niño 👶');
  }
}

// ═══════════════════════════════════════════════════════════════
// 🎚️ CHALLENGE 8: Switch Statement
// Folder: o8-switch-statement
// ⚠️ Browser only
// ═══════════════════════════════════════════════════════════════
function challenge08() {
  const dayInput = prompt('Ingresa un número del 1 al 7 (día de la semana):');
  const day = +dayInput;
  let dayName;
  let dayType;
  switch (day) {
    case 1:
      dayName = 'Lunes';
      dayType = 'Día laboral';
      break;
    case 2:
      dayName = 'Martes';
      dayType = 'Día laboral';
      break;
    case 3:
      dayName = 'Miércoles';
      dayType = 'Día laboral';
      break;
    case 4:
      dayName = 'Jueves';
      dayType = 'Día laboral';
      break;
    case 5:
      dayName = 'Viernes';
      dayType = 'Día laboral';
      break;
    case 6:
      dayName = 'Sábado';
      dayType = 'Fin de semana';
      break;
    case 7:
      dayName = 'Domingo';
      dayType = 'Fin de semana';
      break;
    default:
      dayName = 'Día no válido';
      dayType = '';
      break;
  }
  if (dayType) {
    alert(`${dayName} - ${dayType} 📅`);
  } else {
    alert(dayName);
  }
}

// ═══════════════════════════════════════════════════════════════
// 🎯 RUN CHALLENGES (Uncomment to test)
// ═══════════════════════════════════════════════════════════════

// challenge01();
// challenge02();
// challenge03();
// challenge04();
// challenge05();
// challenge06();
// challenge07(); // Browser only
// challenge08(); // Browser only
