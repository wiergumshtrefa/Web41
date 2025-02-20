let X = true;  
let Y = true;   
let Z = false;  


let expression1 = !X && Y;    
let expression2 = X || !Y;     
let expression3 = X || (Y && Z);


console.log(`не X и Y: ${expression1}`);    
console.log(`X или не Y: ${expression2}`);   
console.log(`X или Y и Z: ${expression3}`);