"use strict";

console.log(Number.parseInt("12px"));
console.log(Number.parseFloat("12.5324px"));

console.log(Math.max(33, 1, 1231));
console.log(Math.min(33, 1, 1231));

function calcRandom(min, max) {
    return Math.trunc(Math.random() * (max - min) + 1) + min
}
console.log(calcRandom(10,20));