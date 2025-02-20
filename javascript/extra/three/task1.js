const prompt = require('prompt-sync')();

let A = true;  
let B = false; 
let C = false; 

let expression1 = A || B; 
let expression2 = A && B; 
let expression3 = B || C;

console.log(`A или B: ${expression1}`); 
console.log(`A и B: ${expression2}`); 
console.log(`B или C: ${expression3}`); 