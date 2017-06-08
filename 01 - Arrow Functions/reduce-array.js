'use strict';

let arr = [1, 2, 3, 4, 5];

const sum = array => array.reduce( (acc, val) => acc + val, 0 );

console.log(sum(arr));