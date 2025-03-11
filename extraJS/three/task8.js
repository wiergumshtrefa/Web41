let X = false;  
let Y = true;   
let Z = false;

let expression1 = X && !(Z || Y) || !Z;        
let expression2 = !X || (X && (Y || Z));        
let expression3 = (X || (Y && !Z)) && Z;        

console.log(`X и не (Z или Y) или не Z: ${expression1}`); 
console.log(`не X или X и (Y или Z): ${expression2}`);  
console.log(`(X или Y и не Z) и Z: ${expression3}`);  