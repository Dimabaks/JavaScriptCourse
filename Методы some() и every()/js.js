"use strict";

const arr = [1, 2, 3, 4, -5, -10];

const someResult = arr.every(function(val) {
    return val > 0
})

console.log(someResult);