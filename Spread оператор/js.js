"use strict";

const obj = {
    fruits: ["apple", "orange", "limon", "watermelon"],
    drinks: ["juice", "tea", "coctail"]
};

console.log(...obj.fruits);


const str = "Hello"
console.log(...str);


const newFruit = [...obj.fruits];
console.log(newFruit);

const bigArr = [...obj.fruits, ...str, "world", ...obj.drinks];
console.log(bigArr);

function coctailMixer(drink, ing1, ing2) {
    console.log(`Вы выбрали ${drink} из ${ing1} и ${ing2}`);
}

coctailMixer("tea", ...obj.fruits);

//*** */

const arr1 = [1,2];
const arr2 = [3,4];
const combined = [...arr1, ...arr2]; // [1,2,3,4]

// Копирование массива
const copy = [...arr1]; // поверхностная копия
console.log(arr1)
console.log(copy);


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Объединение
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }

// Копирование (поверхностное)
const copyObj = { ...obj1 };
console.log(obj1);
console.log(copyObj);