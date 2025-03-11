const prompt = require('prompt-sync')();

let x = prompt('введите x: ');
let sinx = prompt('введите sinx: ');
let a = prompt('введите a:');
let n = prompt('введите n: ');
let sinA = prompt('введите sinA: ');
let cosB = prompt('введите cosB: ');

console.log(` a) 2x = ${2 * x}`);
console.log(` б) sin x = ${Math.sin(x * Math.PI / 180)}`)
console.log(` В) a^2 ${a * a}`)
console.log(` г) sqrt(x) = ${Math.sqrt(x)}`)
console.log(``)