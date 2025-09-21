"use strict";

const obj = {
    fruits: ["apple", "orange", "limon", "watermelon"],
    drinks: ["juice", "tea", "coctail"],
    food: {
        soup: "borch",
        pasta: "spaghetti",
    },
};

let arr = [1,2,3,4,5,6,7];
const [a, b, c, ...others] = arr;
console.log(a,b,c,others);


function calc(...numbers) {
    let sum = 0
    for (let value of numbers) {
        sum = sum + value
    }
    console.log(sum)
}

calc(4, 6, 3 ,6, 8);