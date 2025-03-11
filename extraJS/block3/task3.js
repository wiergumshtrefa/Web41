let A = true;   
let B = false; 
let C = false;  

let expression1 = !A && B;     
let expression2 = A || !B;     
let expression3 = A && B || C;  

console.log(`не A и B: ${expression1}`);   
console.log(`A или не B: ${expression2}`);  
console.log(`A и B или C: ${expression3}`); 