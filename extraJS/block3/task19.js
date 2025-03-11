const prompt = require('prompt-sync')();

let userInputA = prompt("Введите значение для A (true/false):");
let userInputB = prompt("Введите значение для B (true/false):");

let A = (userInputA.toLowerCase() === 'true');
let B = (userInputB.toLowerCase() === 'true');

let expression1 = !( !A && !B ) && A;
let expression2 = !( !A || !B ) || A;
let expression3 = !( !A || !B ) && B; 

console.log(`A: ${A}, B: ${B}`);
console.log(`не (не A и не B) и A: ${expression1}`);
console.log(`не (не A или не B) или A: ${expression2}`);
console.log(`не (не A или не B) и B: ${expression3}`);