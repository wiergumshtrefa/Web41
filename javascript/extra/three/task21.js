const prompt = require('prompt-sync')();

let userInputA = prompt("Введите значение для A (true/false):");
let userInputB = prompt("Введите значение для B (true/false):");
let userInputC = prompt("Введите значение для C (true/false):");


let A = (userInputA.toLowerCase() === 'true');
let B = (userInputB.toLowerCase() === 'true');
let C = (userInputC.toLowerCase() === 'true');


let expression1 = !(A || (!B && C)); // не (A или не B и C)
let expression2 = A && !(B && !C); // A и не (B и не C)
let expression3 = !( !A || (B && C)); // не (не A или B и C)

console.log(`A: ${A}, B: ${B}, C: ${C}`);
console.log(`не (A или не B и C): ${expression1}`);
console.log(`A и не (B и не C): ${expression2}`);
console.log(`не (не A или B и C): ${expression3}`);