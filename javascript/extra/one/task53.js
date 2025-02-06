
const prompt = require('prompt-sync')();

function calculateCost(monitor, block, keyboard, mouse, n) {
    return (monitor + block + keyboard + mouse) * n;
}
  
const monitorPrice = prompt("введите цену монитора: ");
const blockPrice = prompt("введите цену системного блока: ");
const keyboardPrice = prompt("введите цену клавиатуры: ");
const mousePrice = prompt("введите цену мышки: ");
  
console.log("3 компьютера: " + calculateCost(monitorPrice, blockPrice, keyboardPrice, mousePrice, 3));
console.log(" компьютеров: " + calculateCost(monitorPrice, blockPrice, keyboardPrice, mousePrice, 5));