const prompt = require('prompt-sync')();

const values = [false, true]; 

values.forEach(A => {
    values.forEach(B => {
        let expression1 = !(A) || !(B); 
        let expression2 = A && (A || !(B)); 
        let expression3 = (!(A) || B) && B; 

        console.log(`A: ${A}, B: ${B}`);
        console.log(`не A или не B: ${expression1}`);
        console.log(`A и (A или не B): ${expression2}`);
        console.log(`(не A или B) и B: ${expression3}`);
        console.log('-------------------');
    });
});