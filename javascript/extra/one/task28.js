const prompt = require('prompt-sync')();
prompt 

let a = prompt('введите длинну ребра:');

let S = (6 * a * a);
let ob = (a * a * a);

console.log(`площадь полной поверхности куба: ${S}, объем: ${ob}`);