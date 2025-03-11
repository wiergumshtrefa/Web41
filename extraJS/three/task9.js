let X = true;  
let Y = false;   
let Z = false;

let expression1 = !X ||  !Y   || !Z
let expression2 = !(X || !Y) && (X || Y);        
let expression3 = X && Y || X && Z || ! Z;        

console.log (`не X или не Y или не Z: ${expression1}`); 
console.log(`не (X или Y) и (X или Y): ${expression2}`);  
console.log(`X и Y или X и Z: ${expression3}`);  