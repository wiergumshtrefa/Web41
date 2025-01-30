
function Pivko(base1, base2, height) {
    const side = Math.sqrt(Math.pow(Math.abs(base1 - base2) / 2, 2) + Math.pow(height, 2));
    return base1 + base2 + 2 * side;
  }
  
  const prompt = require('prompt-sync')();
  
  const base1 = prompt("Введите длину первого основания: ");
  const base2 = prompt("Введите длину второго основания: ");
  const height = prompt("Введите высоту: ");
  
  const per = Pivko(base1, base2, height);
  
  console.log("Периметр трапеции:", per);