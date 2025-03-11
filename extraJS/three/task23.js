const prompt = require('prompt-sync')();

function evaluateExpressions() {

    for (let A of [true, false]) {
        for (let B of [true, false]) {
            for (let C of [true, false]) {

                let expression1 = !(A || (!B && C)) || C;
                let expression2 = !(A && !B || C) && B; 
                let expression3 = !( !A || (B && C)) || A; 
                
                console.log(`A: ${A}, B: ${B}, C: ${C}`);
                console.log(`не (A или не B и C) или C: ${expression1}`);
                console.log(`не (A и не B или C) и B: ${expression2}`);
                console.log(`не (не A или B и C) или A: ${expression3}`);
                console.log('--------------------------');
            }
        }
    }
}