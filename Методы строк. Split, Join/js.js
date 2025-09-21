"use strict";

//split(" ") преобразует строку в массив и делит его по разделителю (" ");
//если в ("") убрать пробел то получится массив из каждого элемента имени, то есть он разделит все на буквы и пробелы
const newNames = 'dmitrii maria ivan igor vika';
const arrFromStr = newNames.split(" ");
console.log(arrFromStr); //['dmitrii', 'maria', 'ivan', 'igor', 'vika']

//join() преобразует массив в строку ("") в скобках указывается какой будет разделитель
const strFromArr = arrFromStr.join(" ");
console.log(strFromArr);


function capitalName(strNames) {
    const arrNames = strNames.split(" ");
    const newUpperNames = [];

    for (let n of arrNames) {
        newUpperNames.push(n[0].toUpperCase() + n.slice(1))
    }
    console.log(newUpperNames.join(' '));
}

capitalName(newNames);


const cardNum = '6543';
console.log(cardNum.padStart("16", "*")); //padEnd() то же самое только звездочки будут с конца


//repeat("") в "" указывается сколько раз повторить какую либо строку
