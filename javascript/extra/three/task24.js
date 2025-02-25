const prompt = require('prompt-sync')();

function evaluateExpressions() {

    for (let X of [true, false]) {
        for (let Y of [true, false]) {
            for (let Z of [true, false]) {

                let expression1 = !(Y || (!X && Z)) || Z;
                let expression2 = X && !((!Y) || Z) || Y;
                let expression3 = !(X || (Y && Z)) || !X;


                
                console.log(`X: ${X}, Y: ${Y}, Z: ${Z}`);
                console.log(`не (Y или не X и Z) или Z: ${expression1}`);
                console.log(`X и не (не Y или Z) или Y: ${expression2}`);
                console.log(`не (X или Y и Z) или не X: ${expression3}`);
                console.log('--------------------------');
            }
        }
    }
}
evaluateExpressions();
