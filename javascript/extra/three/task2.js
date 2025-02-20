const prompt = require('prompt-sync')();

let X = false; 
let Y = true;  
let Z = false; 

let expression1 = X || Z; 
let expression2 = X && Y; 
let expression3 = X && Z; 

console.log(`X или Z: ${expression1}`); 
console.log(`X и Y: ${expression2}`); 
console.log(`X и Z: ${expression3}`); 