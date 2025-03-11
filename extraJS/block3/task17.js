const prompt = require('prompt-sync')();
const values = [false, true]; 


let userInputA = prompt("Введите значение для A (true/false):");
let userInputB = prompt("Введите значение для B (true/false):");


let A = (userInputA.toLowerCase() === 'true');
let B = (userInputB.toLowerCase() === 'true');

let expression1 = !(A) && !(B) || A; 
let expression2 = B || (!(A) && !(B));
let expression3 = B && !(A && !(B)); 

console.log(`A: ${A}, B: ${B}`);
console.log(`не A и не B или A: ${expression1}`);
console.log(`B или не A и не B: ${expression2}`);
console.log(`B и не (A и не B): ${expression3}`);