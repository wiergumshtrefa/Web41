const prompt = require('prompt-sync')();
const product = prompt("Введите название продукта: ");
const iconv = require('iconv-lite');


if (product){
    console.log(`Продукт "${product}" куплен.`)
} else {
    console.log("Вы не ввели название продукта.")
}

