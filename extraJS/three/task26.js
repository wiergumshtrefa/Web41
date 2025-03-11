const prompt = require('prompt-sync')();

function evaluateExpressions() {

    for (let X of [true, false]) {
        for (let Y of [true, false]) {
            for (let Z of [true, false]) {
                let expression1 = !(X || Y) && (!X || !Z);
                let expression2 = !(!X && Y) || (X && !Z); 
                let expression3 = X || !Y && !(X || !Z); 

                console.log(`X: ${X}, Y: ${Y}, Z: ${Z}`);
                console.log(`не (X или Y) и (не X или не Z): ${expression1}`);
                console.log(`не (не X и Y) или (X и не Z): ${expression2}`);
                console.log(`X или не Y и не (X или не Z): ${expression3}`);
                console.log('--------------------------');
            }
        }
    }
}

evaluateExpressions();