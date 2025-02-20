const prompt = require('prompt-sync')();

let A = true;  
let B = false;  
let C = false; 

let expression1 = A || !(A && B) || C;      
let expression2 = !A || (A && (B || C));       
let expression3 = (A || (B && !C)) && C;       

console.log(`A или не (A и B) или C: ${expression1}`);  
console.log(`не A или A и (B или C): ${expression2}`); 
console.log(`(A или B и не C) и C: ${expression3}`);  