"use strict";

const arr1 = ["a", "b", "c"];

for (let value of arr1) {
    console.log(value);
}

arr1.forEach(function(value, key, arr) {
    console.log(`Ключ ${key}, значение ${value} в массиве ${arr}`);
})