const prompt = require('prompt-sync')();

function evaluateExpressions() {

    for (let A of [true, false]) {
        for (let B of [true, false]) {
            for (let C of [true, false]) {

                let expression1 = !(A && B) && (!A || !C);
                let expression2 = !(A && !B) || (A || !C);
                let expression3 = A && !B || !(A || !C); 

                console.log(`A: ${A}, B: ${B}, C: ${C}`);
                console.log(`не (A и B) и (не A или не C): ${expression1}`);
                console.log(`не (A и не B) или (A или не C): ${expression2}`);
                console.log(`A и не B или не (A или не C): ${expression3}`);
                console.log('--------------------------');
            }
        }
    }
}


evaluateExpressions();