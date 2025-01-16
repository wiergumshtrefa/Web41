const prompt = require('prompt-sync')();

let x = parseInt(prompt('введите x:'));
let a = parseInt(prompt('введите a:'));
let b = parseInt(prompt('введите b:'));
let c = parseInt(prompt('введите c:'));

console.log(`а) -1 / (x * x) = ${-1 / (x * x)}`);
console.log(` б) a / (b * c) = ${a / (b * c)} `);
console.log(` в) (a / b) * c = ${(a / b) * c}`);
console.log(` г) (a + b) / 2 = ${(a + b) / 2}`);
console.log(` д)  5,45 `)
