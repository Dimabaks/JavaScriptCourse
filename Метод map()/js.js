"use strict";

const rub = [100, 222, 340, 454];
let usd = [];
rub.forEach((value) => {
    usd.push((value / 72).toFixed(1));
})
console.log(usd);

const usd2 = rub.map((value) => {
    return (value / 72).toFixed(2);
})
console.log(usd2);