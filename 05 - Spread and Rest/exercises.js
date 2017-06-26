function br(){console.log('\n')};

// Execise 1
console.log('Exercise 1');

let shallowClone = arr => [...arr];
let deepCLone = arr => JSON.parse(JSON.stringify(arr));

let users = [
  {name: 'Ulises', role:'Cookie Eater'},
  {name: 'Alba', role:'Cat lover'}
];

shallowUsers = shallowClone(users);
deepUsers = deepCLone(users);

shallowUsers[1].name = 'Zippy';
deepUsers[0].role = 'Snake Eater';

console.log(`Users: ${JSON.stringify(users)}`);
console.log(`Shallow Clone: ${JSON.stringify(shallowUsers)}`);
console.log(`Deep Clone: ${JSON.stringify(deepUsers)}`);
br();

// Exercise 3
console.log('Exercise 3');

let getNullVector = () => new Array(10).fill(null);
let nullMatrix = getNullVector().map(getNullVector);

console.log(nullMatrix);
br();

// Exercise 4
let sumArgs = (...numbers) => numbers.reduce((sum, next) => sum + next);

console.log(sumArgs(57,58,2,5,93,872,93,82,69,2,96,583,93,9));
br();
