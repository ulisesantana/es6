'use strict';
let guessMe1 = 1; 
let guessMe2 = 2;
{
    let guessMe2 = 3; 
    try { 
        console.log('A: %d %d', guessMe1, guessMe2 ); // (A) 
    } catch( _ ) {}
    console.log( 'B: %d %d', guessMe1, guessMe2 ); // (B)
}
console.log( 'C: %d %d', guessMe1, guessMe2 ); // (C)
(() => {
    var guessMe1 = 5; 
    let guessMe2 = 6; 
    console.log( 'D: %d', guessMe1 ); // (D) 
    console.log( 'E: %d %d', guessMe1, guessMe2 ); // (E)
})();
console.log( 'F: %d %d', guessMe1, guessMe2 ); // (F)