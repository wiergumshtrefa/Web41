const prompt = require('prompt-sync')();
const values = [false, true]; 

let userInputX = prompt("Введите значение для X (true/false):");
let userInputY = prompt("Введите значение для Y (true/false):");

let X = (userInputX.toLowerCase() === 'true');
let Y = (userInputY.toLowerCase() === 'true');

let expression1 = !(X && !Y) || X; 
let expression2 = Y && !X || !Y; 
let expression3 = !Y && !X || Y;

console.log(`X: ${X}, Y: ${Y}`);
console.log(`не (X и не Y) или X: ${expression1}`);
console.log(`Y и не X или не Y: ${expression2}`);
console.log(`не Y и не X или Y: ${expression3}`);