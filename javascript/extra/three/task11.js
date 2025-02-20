const prompt = require('prompt-sync')();

function calculateExpressions(x, y) {
    const a = x * x + y * y < 4;
    const b = (x !== 0) || (y * y > 4);
    const c = (x !== 0) && (y * y > 4);
    const d = (x * y !== 0) && (y > x);
    const e = (x * y !== 0) || (y < x);
    const f = (!(x * y < 0)) && (y > x);
    const g = (!(x * y < 0)) || (y > x);

    return { a, b, c, d, e, f, g };
}

const x = parseFloat(prompt("Введите x: "));
const y = parseFloat(prompt("Введите y: "));

if (isNaN(x) || isNaN(y)) {
    console.log("Ошибка: Введите числовые значения для x и y.");
} else {
    const results = calculateExpressions(x, y);
    console.log(`a: ${results.a}`);
    console.log(`b: ${results.b}`);
    console.log(`c: ${results.c}`);
    console.log(`d: ${results.d}`);
    console.log(`e: ${results.e}`);
    console.log(`f: ${results.f}`);
    console.log(`g: ${results.g}`);
}