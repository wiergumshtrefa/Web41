const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkConditions(N) {
    return {
        conditionA: (N % 5 === 0 || N % 7 === 0), // а)
        conditionB: (N % 4 === 0 && N % 10 !== 0) // б)
    };
}

rl.question('Введите целое значение N: ', (inputN) => {
    const N = parseInt(inputN);
    const results = checkConditions(N);
    console.log(results);
    rl.close();
});