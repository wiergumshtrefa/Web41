const prompt = require('prompt-sync')();


let inputA = prompt("Введите значение A (true/false): ");
let inputB = prompt("Введите значение B (true/false): ");
let inputC = prompt("Введите значение C (true/false): ");


let A = (inputA.toLowerCase() === 'true');
let B = (inputB.toLowerCase() === 'true');
let C = (inputC.toLowerCase() === 'true');


let expression1 = A || (B && !C);          
let expression2 = A && !B || C;            
let expression3 = !A && !B;               
let expression4 = A && (!B || C);         
let expression5 = !(A && C) || B;         
let expression6 = A || !(B && C);          


console.log(`A или B и не C: ${expression1}`);      
console.log(`A и не B или C: ${expression2}`);      
console.log(`не A и не B: ${expression3}`);          
console.log(`A и (не B или C): ${expression4}`);     
console.log(`не (A и C) или B: ${expression5}`); 
console.log(`A или (не (B и C)): ${expression6}`);  