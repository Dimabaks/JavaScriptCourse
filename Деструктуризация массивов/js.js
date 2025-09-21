"use strict";

const arr = [
    "apple",
    "orange",
    "limon",
    "watermelon",
    "juice",
    "tea",
    "coctail"
];

/* let [fruitOne, fruitTwo, fruitThree] = arr
console.log(fruitOne, fruitTwo, fruitThree);

let a = fruitOne;
fruitOne = fruitTwo;
fruitTwo = a;


[fruitOne, fruitTwo] = [fruitTwo, fruitOne];
console.log(fruitOne, fruitTwo); */


function coctailMixer([fruit1, fruit2, , , , drink]) {
    console.log(`Вы приготовили ${fruit1} + ${fruit2} ${drink}`);
}

coctailMixer(arr)