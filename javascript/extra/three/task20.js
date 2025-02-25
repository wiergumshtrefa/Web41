const prompt = require('prompt-sync')();

let userInputX = prompt("Введите значение для X (true/false):");
let userInputY = prompt("Введите значение для Y (true/false):");

let X = (userInputX.toLowerCase() === 'true');
let Y = (userInputY.toLowerCase() === 'true');

let expression1 = !(!X || Y) || !X; 
let expression2 = !(!X && !Y) && X; 
let expression3 = !(X || !Y) || !Y; 

console.log(`X: ${X}, Y: ${Y}`);
console.log(`не (не X или Y) или не X: ${expression1}`);
console.log(`не (не X и не Y) и X: ${expression2}`);
console.log(`не (X или не Y) или не Y: ${expression3}`);