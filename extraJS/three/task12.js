let x1 = 1, y1 = 1;
let expression1_a = (x1 === 2) && (y1 === 4);

let x2 = 1, y2 = 2;
let expression1_b = (x2 === 0) || (2 === 4) || (y2);
let expression1_c = (x2 === 0) && (2 === 4) && (y2);

let x3 = 2, y3 = 1;
let expression1_d = (x3 * y3 === 0) && (y3 > x3);
let expression1_e = (x3 * y3 === 0) || (y3 < x3);
let expression1_f = !(x3 * y3 < 0) && (y3 > x3);
let expression1_g = !(x3 * y3 < 0) || (y3 > x3);

console.log(`(x 2) и (y 4): ${expression1_a}`);
console.log(`(x 0) или (2) y: ${expression1_b}`);
console.log(`(x 0) и (2) y: ${expression1_c}`);
console.log(`(x · y 0) и (y > x): ${expression1_d}`);
console.log(`(x · y 0) или (y < x): ${expression1_e}`);
console.log(`(не (x · y < 0)) и (y > x): ${expression1_f}`);
console.log(`(не (x · y < 0)) или (y > x): ${expression1_g}`);