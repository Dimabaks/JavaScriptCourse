'use strict';


let someNumber = Math.floor(Math.random() * 10) + 1;
console.log(someNumber)
while(someNumber !== 10) {
    console.log(`Вам выпало число ${someNumber}`)
    someNumber = Math.floor(Math.random() * 10) + 1;
    if (someNumber === 10) {
        console.log("Вы победили, вам выпало число 10")
    }
}


/* do {
    console.log(`Строка выводится в консоль ${i} раз`)
    i++;
}
while(i <= 10)  */