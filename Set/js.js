"use strict";

const names = new Array(
    "Дмитрий",
    "Иван",
    "Анастасия",
    "Виктор",
    "Игорь",
    "Дмитрий",
    "Иван",
    "Анастасия"
);

const uniqNames = new Set(names);
uniqNames.add("Евгений"); //delete
console.log(...uniqNames);

const name = 'Dmitrii'
const uniqLetters = new Set(name);
console.log(uniqLetters);

for (let value of uniqLetters) {
    console.log(value);
}

/* const updateNames = Array.from(uniqNames);
console.log(updateNames);
 */