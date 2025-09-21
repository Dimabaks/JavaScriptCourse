"use strict";

const arr = [10, 5, -2, -5, 23, -7];

const firstMinusNum = arr.find(function(num) {
    return num < 0;
})
console.log(firstMinusNum);