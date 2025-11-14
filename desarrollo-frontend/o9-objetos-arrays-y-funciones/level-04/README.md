# 📦 Nivel 4: Arrays - Las Listas Mágicas ✨

```
                                  
   __ _ _ __ _ __ __ _ _   _ ___ 
  / _` | '__| '__/ _` | | | / __|
 | (_| | |  | | | (_| | |_| \__ \
  \__,_|_|  |_|  \__,_|\__, |___/
                        __/ |    
                       |___/     
```

> **🎯 Objetivo:** Dominar arrays desde cero: crear, modificar, buscar, iterar y usar operadores modernos 🚀

---

## 🎒 Reto 1: La Mochila Mágica - Crear y Manipular Arrays

**📖 Historia:** Fernanda 🧙‍♀️ tiene una mochila mágica que guarda pociones en orden. Cada posición tiene un número (índice) que empieza en 0. Necesita crear su inventario, ver cuántas pociones tiene, acceder a la primera y última, cambiar una poción y agregar/quitar pociones con `push()` y `pop()` 💼✨

**📝 Descripción:** Domina lo básico de arrays: crear, acceder por índice, `.length`, modificar valores, `push()` y `pop()`.

**⚡ Funcionalidad:** 
- Crear array: `const arr = ['a', 'b', 'c']`
- Acceder: `arr[0]`, `arr[arr.length - 1]`
- Modificar: `arr[1] = 'nuevo'`
- `push()` - agregar al final
- `pop()` - quitar del final

**✅ Casos de prueba:**

| Operación                                  | Expected Output                                      |
| ------------------------------------------ | ---------------------------------------------------- |
| Array inicial: `['roja', 'azul', 'verde']` | `length=3`, `primera='roja'`, `última='verde'`       |
| Cambiar `'azul'` por `'dorada'`            | `arr[1]='dorada'`                                    |
| `push('morada')`                           | `['roja', 'dorada', 'verde', 'morada']`              |
| `pop()` dos veces                          | `['roja', 'dorada']`, retorna `'verde'` y `'morada'` |

**💻 Código base:**

```javascript
// 1. CREATE array with 3 potions
const potions = ['roja', 'azul', 'verde'];

console.log('Inventario inicial:', potions);
console.log('Total de pociones:', potions.length);

// 2. ACCESS first and last
const firstPotion = potions[0];
const lastPotion = potions[potions.length - 1];

console.log('Primera poción:', firstPotion);
console.log('Última poción:', lastPotion);

// 3. MODIFY: change 'azul' to 'dorada'
potions[1] = 'dorada';
console.log('Después de cambiar azul:', potions);

// 4. PUSH: add 'morada' at the end
potions.push('morada');
console.log('Después de push:', potions);

// 5. POP: remove last potion twice
const removed1 = potions.pop();
const removed2 = potions.pop();

console.log('Pociones removidas:', removed1, removed2);
console.log('Inventario final:', potions);
```

**💡 Tips:**
- 🔹 Arrays empiezan en índice 0
- 🔹 Último elemento: `arr[arr.length - 1]`
- 🔹 `push()` retorna nueva longitud
- 🔹 `pop()` retorna elemento removido
- 🔹 Ambos modifican el array original

**🚀 Motivación:** ¡Domina lo esencial de arrays con la mochila de Fernanda! 🎒✨

**📁 Carpeta:** `p1-magic-backpack/`

---

## 🚂 Reto 2: El Tren Mágico - Shift, Unshift e Includes

**📖 Historia:** Elliot ⚡ maneja el Tren Mágico con vagones: `['Vagón1', 'Vagón2', 'Vagón3']`. Los pasajeros pueden subir al frente con `unshift()` o bajar del frente con `shift()`. También necesita verificar si ciertos vagones están en el tren con `includes()` antes de venderle boletos a los pasajeros 🚂💨

**📝 Descripción:** Aprende `shift()`, `unshift()` para manipular el inicio del array, y `includes()` para buscar elementos.

**⚡ Funcionalidad:** 
- `unshift(elemento)` - agregar al inicio
- `shift()` - quitar del inicio
- `includes(elemento)` - verificar existencia (retorna `true`/`false`)

**✅ Casos de prueba:**

| Operación                                 | Expected Output                                          |
| ----------------------------------------- | -------------------------------------------------------- |
| Inicial: `['Vagón1', 'Vagón2', 'Vagón3']` | `length=3`                                               |
| `unshift('Locomotora')`                   | `['Locomotora', 'Vagón1', 'Vagón2', 'Vagón3']`           |
| `shift()`                                 | `['Vagón1', 'Vagón2', 'Vagón3']`, retorna `'Locomotora'` |
| `includes('Vagón2')`                      | `true`                                                   |
| `includes('VIP')`                         | `false`                                                  |
| `unshift('VIP')` y `includes('VIP')`      | `true`                                                   |

**💻 Código base:**

```javascript
// 1. CREATE train
const train = ['Vagón1', 'Vagón2', 'Vagón3'];

console.log('Tren inicial:', train);

// 2. UNSHIFT: add 'Locomotora' at front
train.unshift('Locomotora');
console.log('Después de unshift:', train);

// 3. SHIFT: remove first wagon
const removed = train.shift();
console.log('Vagón removido:', removed);
console.log('Después de shift:', train);

// 4. INCLUDES: check if 'Vagón2' exists
const hasVagon2 = train.includes('Vagón2');
console.log('¿Tiene Vagón2?', hasVagon2);

// 5. INCLUDES: check if 'VIP' exists
const hasVIP = train.includes('VIP');
console.log('¿Tiene VIP?', hasVIP);

// 6. Add 'VIP' and check again
train.unshift('VIP');
const hasVIPNow = train.includes('VIP');
console.log('Después de agregar VIP:', train);
console.log('¿Tiene VIP ahora?', hasVIPNow);
```

**💡 Tips:**
- 🔹 `unshift()` agrega al inicio (índice 0)
- 🔹 `shift()` quita el primero y lo retorna
- 🔹 `includes()` es más simple que `indexOf()`
- 🔹 `includes()` retorna booleano
- 🔹 shift/unshift son más lentos (reordenan índices)

**🚀 Motivación:** ¡Elliot necesita tu ayuda para manejar el tren! 🚂⚡

**📁 Carpeta:** `p2-magic-train/`

---

## 🔍 Reto 3: Detective de Números - IndexOf y Slice

**📖 Historia:** Doky 🐕 es detective y tiene una lista de números sospechosos: `[10, 25, 30, 25, 45, 30, 60]`. Necesita encontrar la POSICIÓN del primer `25` con `indexOf()`, verificar si existe el `100`, y extraer los números del medio (posición 2 a 5) con `slice()` sin alterar la lista original 🔎

**📝 Descripción:** Usa `indexOf()` para encontrar posiciones y `slice()` para extraer porciones sin modificar el array original.

**⚡ Funcionalidad:** 
- `indexOf(elemento)` - retorna índice o `-1` si no existe
- `slice(inicio, fin)` - extrae porción (fin NO incluido)
- `slice()` NO modifica el original

**✅ Casos de prueba:**

| Operación                                       | Expected Output                  |
| ----------------------------------------------- | -------------------------------- |
| `indexOf(25)` en `[10, 25, 30, 25, 45, 30, 60]` | `1` (primera aparición)          |
| `indexOf(30)`                                   | `2` (primera aparición)          |
| `indexOf(100)`                                  | `-1` (no existe)                 |
| `slice(2, 5)`                                   | `[30, 25, 45]` (índices 2, 3, 4) |
| `slice(-3)`                                     | `[45, 30, 60]` (últimos 3)       |
| Array original                                  | Sin cambios                      |

**💻 Código base:**

```javascript
// 1. CREATE suspect list
const suspects = [10, 25, 30, 25, 45, 30, 60];

console.log('Lista de sospechosos:', suspects);

// 2. INDEXOF: find first position of 25
const position25 = suspects.indexOf(25);
console.log('Primera posición de 25:', position25);

// 3. INDEXOF: find first position of 30
const position30 = suspects.indexOf(30);
console.log('Primera posición de 30:', position30);

// 4. INDEXOF: check if 100 exists
const position100 = suspects.indexOf(100);
console.log('Posición de 100:', position100);

// 5. SLICE: extract middle numbers (index 2 to 5)
const middleNumbers = suspects.slice(2, 5);
console.log('Números del medio (2 a 5):', middleNumbers);

// 6. SLICE: get last 3 numbers
const lastThree = suspects.slice(-3);
console.log('Últimos 3 números:', lastThree);

// 7. Verify original is unchanged
console.log('Lista original (sin cambios):', suspects);
```

**💡 Tips:**
- 🔹 `indexOf()` retorna `-1` si no encuentra
- 🔹 Solo encuentra la PRIMERA aparición
- 🔹 `slice(inicio, fin)` → fin NO incluido
- 🔹 `slice(-n)` → últimos n elementos
- 🔹 `slice()` crea nuevo array (inmutable)

**🚀 Motivación:** ¡Doky necesita tus habilidades de detective! 🐕🔍

**📁 Carpeta:** `p3-number-detective/`

---

## 🔄 Reto 4: Fábrica de Transformación - ForEach y Map

**📖 Historia:** Fe 👨‍🍳 tiene números que representan kilos de harina: `[5, 10, 15, 20]`. Con `forEach()` debe recorrer y SUMAR todos los kilos (solo iterar). Con `map()` debe DUPLICAR cada valor para hacer el doble de pan (crear nuevo array). ¡Map transforma, forEach solo recorre! 🍞

**📝 Descripción:** Entiende la diferencia: `forEach()` solo itera sin retornar, `map()` transforma y retorna nuevo array.

**⚡ Funcionalidad:** 
- `forEach(elemento => {...})` - itera, NO retorna
- `map(elemento => nuevoValor)` - transforma, SÍ retorna nuevo array
- Diferencia clave: forEach para efectos, map para transformaciones

**✅ Casos de prueba:**

| Input             | forEach (suma) | map (duplicar)     |
| ----------------- | -------------- | ------------------ |
| `[5, 10, 15, 20]` | `total=50`     | `[10, 20, 30, 40]` |
| `[2, 4, 6]`       | `total=12`     | `[4, 8, 12]`       |
| `[100]`           | `total=100`    | `[200]`            |

**💻 Código base:**

```javascript
// 1. CREATE flour quantities
const flourKilos = [5, 10, 15, 20];

console.log('Kilos de harina:', flourKilos);

// 2. FOREACH: sum all kilos (just iterate)
let totalKilos = 0;

flourKilos.forEach(kilos => {
  totalKilos = totalKilos + kilos;
});

console.log('Total de kilos:', totalKilos);

// 3. MAP: double each quantity (transform)
const doubledKilos = flourKilos.map(kilos => {
  return kilos * 2;
});

console.log('Kilos duplicados:', doubledKilos);
console.log('Kilos originales:', flourKilos);

// 4. MAP with shorter syntax: triple each
const tripledKilos = flourKilos.map(kilos => kilos * 3);
console.log('Kilos triplicados:', tripledKilos);

// 5. FOREACH: show each with message
console.log('\nMensajes de cada kilo:');
flourKilos.forEach(kilos => {
  console.log(`- Tenemos ${kilos} kilos`);
});
```

**💡 Tips:**
- 🔹 `forEach()` NO retorna nada (undefined)
- 🔹 `map()` SÍ retorna nuevo array
- 🔹 Usa forEach para logs, sumas, efectos
- 🔹 Usa map para transformar datos
- 🔹 Map NO modifica el original

**🚀 Motivación:** ¡Fe necesita procesar su harina eficientemente! 👨‍🍳🍞

**📁 Carpeta:** `p4-transformation-factory/`

---

## 🎯 Reto 5: Guardianes del Reino - Filter y Find

**📖 Historia:** Amorosa 💖 entrena guardianes con diferentes niveles de poder: `[45, 78, 92, 60, 88, 55, 95]`. Con `filter()` debe encontrar TODOS los guardianes con poder mayor a 70 (élite). Con `find()` debe encontrar el PRIMER guardián con poder mayor a 90 (legendario). ¡Filter devuelve varios, find solo uno! 🛡️

**📝 Descripción:** `filter()` retorna array con todos los que cumplen condición, `find()` retorna el primer elemento que cumple.

**⚡ Funcionalidad:** 
- `filter(elemento => condición)` - retorna array con TODOS
- `find(elemento => condición)` - retorna PRIMER elemento o `undefined`
- Filter siempre retorna array (puede ser vacío)

**✅ Casos de prueba:**

| Input                          | filter (>70)       | find (>90)  |
| ------------------------------ | ------------------ | ----------- |
| `[45, 78, 92, 60, 88, 55, 95]` | `[78, 92, 88, 95]` | `92`        |
| `[45, 60, 55]`                 | `[]` (vacío)       | `undefined` |
| `[80, 95, 100]`                | `[80, 95, 100]`    | `95`        |

**💻 Código base:**

```javascript
// 1. CREATE power levels
const guardians = [45, 78, 92, 60, 88, 55, 95];

console.log('Niveles de poder:', guardians);

// 2. FILTER: get ALL guardians with power > 70 (elite)
const eliteGuardians = guardians.filter(power => {
  return power > 70;
});

console.log('Guardianes élite (>70):', eliteGuardians);

// 3. FILTER: get ALL with power > 90 (legendary)
const legendaryGuardians = guardians.filter(power => power > 90);
console.log('Guardianes legendarios (>90):', legendaryGuardians);

// 4. FIND: get FIRST guardian with power > 90
const firstLegendary = guardians.find(power => power > 90);
console.log('Primer legendario (>90):', firstLegendary);

// 5. FIND: try to find power > 100 (doesn't exist)
const superGuardian = guardians.find(power => power > 100);
console.log('Guardián super (>100):', superGuardian);

// 6. FILTER: guardians between 60 and 80
const mediumGuardians = guardians.filter(power => {
  return power >= 60 && power <= 80;
});
console.log('Guardianes medios (60-80):', mediumGuardians);
```

**💡 Tips:**
- 🔹 `filter()` retorna array (puede estar vacío `[]`)
- 🔹 `find()` retorna elemento o `undefined`
- 🔹 Filter: TODOS los que cumplen
- 🔹 Find: PRIMER elemento que cumple
- 🔹 Ambos NO modifican el original

**🚀 Motivación:** ¡Amorosa necesita clasificar sus guardianes! 💖🛡️

**📁 Carpeta:** `p5-kingdom-guardians/`

---

## 🌟 Reto 6: Fusión Mágica - Spread Operator

**📖 Historia:** Los clanes mágicos deben unirse. Mijael tiene `['espada', 'escudo']`, Chocolate tiene `['arco', 'flecha']`. Con el spread operator `...` pueden COPIAR arrays y COMBINARLOS sin destruir los originales. También pueden agregar elementos nuevos al inicio o final. ¡Es la magia de la expansión! ⚡

**📝 Descripción:** Usa spread `...` para copiar y combinar arrays de forma inmutable (sin modificar originales).

**⚡ Funcionalidad:** 
- `[...array]` - copia completa
- `[...arr1, ...arr2]` - combinar arrays
- `['nuevo', ...array]` - agregar al inicio
- `[...array, 'nuevo']` - agregar al final

**✅ Casos de prueba:**

| Operación                     | Expected Output                          |
| ----------------------------- | ---------------------------------------- |
| Copiar `['espada', 'escudo']` | `['espada', 'escudo']` (nuevo array)     |
| Combinar dos clanes           | `['espada', 'escudo', 'arco', 'flecha']` |
| Agregar `'hacha'` al inicio   | `['hacha', 'espada', 'escudo']`          |
| Combinar 3 arrays             | Array con todos los elementos            |

**💻 Código base:**

```javascript
// 1. CREATE two clans
const mijaelClan = ['espada', 'escudo'];
const chocolateClan = ['arco', 'flecha'];

console.log('Clan Mijael:', mijaelClan);
console.log('Clan Chocolate:', chocolateClan);

// 2. SPREAD: copy mijaelClan
const backupClan = [...mijaelClan];

console.log('Copia de seguridad:', backupClan);

// 3. SPREAD: combine both clans
const unitedClan = [...mijaelClan, ...chocolateClan];

console.log('Clan unido:', unitedClan);

// 4. SPREAD: add 'hacha' at the beginning
const clanWithAxe = ['hacha', ...mijaelClan];

console.log('Clan con hacha al inicio:', clanWithAxe);

// 5. SPREAD: add 'lanza' at the end
const clanWithSpear = [...mijaelClan, 'lanza'];

console.log('Clan con lanza al final:', clanWithSpear);

// 6. SPREAD: combine 3 arrays
const dokyClan = ['magia', 'báculo'];
const megaClan = [...mijaelClan, ...chocolateClan, ...dokyClan];

console.log('Mega clan:', megaClan);

// 7. Verify originals are UNCHANGED
console.log('\n¿Originales sin cambios?');
console.log('Mijael:', mijaelClan);
console.log('Chocolate:', chocolateClan);
```

**💡 Tips:**
- 🔹 `...` expande elementos del array
- 🔹 NO modifica arrays originales (inmutable)
- 🔹 Crea copias superficiales rápidamente
- 🔹 Combina múltiples arrays fácilmente
- 🔹 ES6+ sintaxis moderna y limpia

**🚀 Motivación:** ¡Los clanes se unen sin perder su identidad! 🌟✨

**📁 Carpeta:** `p6-magic-fusion/`

---

## 🎁 Reto 7: Cofre del Tesoro - Destructuring Arrays

**📖 Historia:** Elliot ⚡ encontró un cofre con tesoros ordenados: `['diamante', 'rubí', 'esmeralda', 'zafiro', 'perla']`. En lugar de usar índices (`tesoros[0]`, `tesoros[1]`), usará destructuring para EXTRAER directamente en variables. También aprenderá a SALTAR elementos y capturar el RESTO con `...rest`. ¡Es extracción mágica! 💎

**📝 Descripción:** Usa destructuring `[a, b] = array` para extraer valores en variables de forma elegante.

**⚡ Funcionalidad:** 
- `[a, b, c] = array` - extraer primeros elementos
- `[primero, ...resto] = array` - primero + resto
- `[, , tercero] = array` - saltar elementos
- `[a, b] = [b, a]` - intercambiar valores

**✅ Casos de prueba:**

| Operación            | Expected Output                                                     |
| -------------------- | ------------------------------------------------------------------- |
| Extraer primeros 3   | `first='diamante'`, `second='rubí'`, `third='esmeralda'`            |
| Primero + resto      | `first='diamante'`, `rest=['rubí', 'esmeralda', 'zafiro', 'perla']` |
| Saltar y extraer 3ro | `third='esmeralda'`                                                 |
| Swap `a=5, b=10`     | `a=10, b=5`                                                         |

**💻 Código base:**

```javascript
// 1. CREATE treasure chest
const treasures = ['diamante', 'rubí', 'esmeralda', 'zafiro', 'perla'];

console.log('Cofre completo:', treasures);

// 2. DESTRUCTURING: extract first three
const [first, second, third] = treasures;

console.log('Primer tesoro:', first);
console.log('Segundo tesoro:', second);
console.log('Tercer tesoro:', third);

// 3. DESTRUCTURING: first + rest
const [firstJewel, ...restJewels] = treasures;

console.log('Primera joya:', firstJewel);
console.log('Resto de joyas:', restJewels);

// 4. DESTRUCTURING: skip first two, get third
const [, , thirdJewel] = treasures;

console.log('Tercera joya (saltando 2):', thirdJewel);

// 5. DESTRUCTURING: skip first, get second and fourth
const [, secondJewel, , fourthJewel] = treasures;

console.log('Segunda joya:', secondJewel);
console.log('Cuarta joya:', fourthJewel);

// 6. DESTRUCTURING: swap two values
let a = 5;
let b = 10;

console.log('\nAntes del swap:', 'a=' + a, 'b=' + b);

[a, b] = [b, a];

console.log('Después del swap:', 'a=' + a, 'b=' + b);

// 7. DESTRUCTURING: get first 2 and rest
const [treasure1, treasure2, ...remainingTreasures] = treasures;

console.log('\nPrimeros 2:', treasure1, treasure2);
console.log('Restantes:', remainingTreasures);
```

**💡 Tips:**
- 🔹 `[a, b] = array` extrae en variables
- 🔹 `[a, ...rest]` captura el resto en array
- 🔹 `[, , c]` usa comas para saltar
- 🔹 `[a, b] = [b, a]` swap elegante
- 🔹 ES6+ sintaxis muy legible

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Elliot domina la extracción mágica de tesoros ⚡💎✨

**📁 Carpeta:** `p7-treasure-chest/`

---

## 📊 Resumen del Nivel 4 🎯

**🎉 Has completado:**
- ✅ **Arrays básicos:** Crear `[]`, acceder `[i]`, `.length`, modificar
- ✅ **Modificación:** `push()`, `pop()`, `shift()`, `unshift()`
- ✅ **Búsqueda:** `includes()`, `indexOf()`, `slice()`
- ✅ **Iteración:** `forEach()`, `map()`, `filter()`, `find()`
- ✅ **Operadores modernos:** Spread `...`, Destructuring `[a, b]`

**⏰ Tiempo estimado:** 2-3 horas 

**🎓 Conceptos clave dominados:**
- Arrays son colecciones ordenadas (índices desde 0)
- Métodos que modifican: push, pop, shift, unshift
- Métodos que NO modifican: slice, map, filter, includes, indexOf
- forEach itera sin retornar, map transforma y retorna
- filter retorna array, find retorna elemento o undefined
- Spread crea copias inmutables
- Destructuring extrae valores elegantemente

**🔜 Próximo nivel:** 🏛️ Nivel 5 - Objects (Objetos)

---

💪 **¡Felicidades!** Has dominado los arrays y sus superpoderes. Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y Doky están orgullosos de ti. ¡Eres un maestro de las listas mágicas! 🏆✨🚀
