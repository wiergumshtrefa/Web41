const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkConditions(A, B, C) {
    return {
        conditionA: (A > 100 && B > 100), // а)
        conditionB: ((A % 2 === 0 && B % 2 !== 0) || (A % 2 !== 0 && B % 2 === 0)), // б)
        conditionV: (A > 0 || B > 0), // в)
        conditionG: (A % 3 === 0 && B % 3 === 0 && C % 3 === 0), // г)
        conditionD: ((A < 50 && B >= 50 && C >= 50) || (A >= 50 && B < 50 && C >= 50) || (A >= 50 && B >= 50 && C < 50)), // д)
        conditionE: (A < 0 || B < 0 || C < 0) // е)
    };
}

rl.question('Введите значение A: ', (inputA) => {
    const A = parseFloat(inputA);
    rl.question('Введите значение B: ', (inputB) => {
        const B = parseFloat(inputB);
        rl.question('Введите значение C: ', (inputC) => {
            const C = parseFloat(inputC);
            const results = checkConditions(A, B, C);
            console.log(results);
            rl.close();
        });
    });
});