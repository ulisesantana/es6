function sumArgs(){
  let result = 0;
  for (var index = 0; index < arguments.length; index++) {
    result += arguments[index];
  }
  return result;
}

let arr = [];
for (var index = 0; index < 100; index++) {
  arr[index] = Math.random();
}

console.log('100 random numbers: ' + sumArgs.apply(null,arr));
console.log('100 random numbers using spread: ' + sumArgs(...arr));
console.log('100 random numbers twice plus 100: ' + sumArgs(...arr, ...arr, 100));

let spreadingStrings = 'Spreading Strings';

let charArray = [...spreadingStrings]; // The same as doing spreadingStrings.split('');

console.log(charArray);