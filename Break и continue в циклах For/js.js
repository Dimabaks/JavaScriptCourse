'use strict';

const arr = [
    "John",
    "Travolta",
    2023 - 1992,
    "Moscow",
    true,
    ["Anna", "Peter", "Ivan"],
    false
]

/* const arr2 = [] */

/* console.log(arr[1]); */

/* for (let i = 0; i < arr.length; i++) {
    console.log(typeof arr[i])
    arr2.push(typeof arr[i]);
}

console.log(arr2) */

/* for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") continue
    console.log(arr[i]);
} */

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") break
    console.log(arr[i]);
}