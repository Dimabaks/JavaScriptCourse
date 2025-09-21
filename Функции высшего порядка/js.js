"use strict";

//Функция первого класса

function oneWord(str) {
    return str.replaceAll(" ", "").toLowerCase()
}

console.log(oneWord("ывфывф  фывф ф  ф ф    фывфыВВВВВв"));

//Функция первого класса

function upperFirstLetter(str) {
    const [first, ...other] = str.split(" ");
    return [first[0].toUpperCase() + first.slice(1), ...other].join(" ")
}

console.log(upperFirstLetter("dasda as dasda as a a asdasda"))

//Функция высшего порядка

function transformer(str, fn) {
    console.log(`Это оригинальная строка: ${str}`);
    console.log(`Измененная строка: ${fn(str)}`);
}

transformer('привет', upperFirstLetter);