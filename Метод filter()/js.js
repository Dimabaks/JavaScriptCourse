"use strict";

const arr = [1, -12, 22, 27, -26, -100, 9];

const filteredArr = arr.filter(function (value) {
    return value > 0;
});

console.log(filteredArr);