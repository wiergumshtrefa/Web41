const prompt = require('prompt-sync')();

const values = [false, true]; 

values.forEach(A => {
    values.forEach(B => {
        let expression1 = !(A && B); 
        let expression2 = !A || B;   
        let expression3 = A || !B; 

        console.log(`A: ${A}, B: ${B}`);
        console.log(`не (A и B): ${expression1}`);
        console.log(`не A или B: ${expression2}`);
        console.log(`A или не B: ${expression3}`);
        console.log('-------------------');
    });
});