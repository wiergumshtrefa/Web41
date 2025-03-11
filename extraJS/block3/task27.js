const prompt = require('prompt-sync')();

function checkConditions(x, y) {
    return {
        conditionA: (x > 2 && y > 3), 
        conditionB: (x > 1 || y < 2), 
        conditionC: (x < 0 && y < 5), 
        conditionD: (x > 3 || x < 1), 
        conditionE: (x > 3 && x < 10), 
        conditionF: !(x > 2), 
        conditionG: !(x > 0 && x < 5), 
        conditionH: (10 < x && x < 20), 
        conditionI: (0 < y && y < 4 && x < 5) 
    };
}
const results = checkConditions(4, 3);
console.log(results);