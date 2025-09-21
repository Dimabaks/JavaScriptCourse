"use strict";

const arr = [1, 2, 3, 4, 5];
arr.fill(3, 1, 4)
console.log(arr);


const str = "12345";
console.log(Array.from(str, function(val, i) {
    return "Число " + val;
}));

console.log(str)