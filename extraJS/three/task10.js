const prompt = require('prompt-sync')();

function pipisi(A, B, C) {

    A = A === 'true';
    B = B === 'true';
    C = C === 'true';

    const a = (!A || !B) && !C;
    const b = (!A || !B) && (A || B);
    const c = (A && B) || (A && C) || !C;

    return { a, b, c };
}

const A = prompt("Введите значение A (true или false): ");
const B = prompt("Введите значение B (true или false): ");
const C = prompt("Введите значение C (true или false): ");

const results = pipisi(A, B, C);

console.log("a) (не А или не В) и не С: " + results.a);
console.log("b) (не А или не В) и (А или В): " + results.b);
console.log("c) А и В или А и С или не С: " + results.c);