const prompt = require('prompt-sync')();

let userInputX = prompt("Введите значение для X (true/false):");
let userInputY = prompt("Введите значение для Y (true/false):");
let userInputZ = prompt("Введите значение для Z (true/false):");

let X = (userInputX.toLowerCase() === 'true');
let Y = (userInputY.toLowerCase() === 'true');
let Z = (userInputZ.toLowerCase() === 'true');

let expression1 = !(X || (!Y && Z)); 
let expression2 = Y || (X && !Y || Z);
let expression3 = !( (!X && Y) || Z); 

console.log(`X: ${X}, Y: ${Y}, Z: ${Z}`);
console.log(`не (X или не Y и Z): ${expression1}`);
console.log(`Y или (X и не Y или Z): ${expression2}`);
console.log(`не (не X и Y или Z): ${expression3}`);