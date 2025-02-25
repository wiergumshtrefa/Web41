const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkConditions(A) {
    return {
        conditionA: (A % 2 === 0 || A % 3 === 0), // а)
        conditionB: (A % 3 !== 0 && A % 10 === 0) // б)
    };
}

rl.question('Введите целое значение A: ', (inputA) => {
    const A = parseInt(inputA);
    const results = checkConditions(A);
    console.log(results);
    rl.close();
});