const prompt = require('prompt-sync')();

let X = false;  
let Y = false;  
let Z = true;   


let expression1 = X || (Y && !Z);          
let expression2 = !X && !Y;              
let expression3 = X && !Y || Z;       
let expression4 = X && (!Y || Z);        
let expression5 = !(X && Z) || Y;    
let expression6 = X || !(Y && Z);        

console.log(`X или Y и не Z: ${expression1}`);    
console.log(`не X и не Y: ${expression2}`);      
console.log(`X и не Y или Z: ${expression3}`);   
console.log(`X и (не Y или Z): ${expression4}`);   
console.log(`не (X и Z) или Y: ${expression5}`);   
console.log(`X или (не (Y и Z)): ${expression6}`);  