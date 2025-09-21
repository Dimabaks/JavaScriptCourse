"use strict";

const arr = [5, 5, 5, 5];

const sum = arr.reduce(function(acc, val, key, arr) {
    return acc + val
});

console.log(sum);

//

let sum2 = 0;
for (let val of arr) {
    sum2 = sum2 + val;
}
console.log(sum2);