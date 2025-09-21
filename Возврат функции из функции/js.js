"use strict";

function hello(hiStr) {
    return function (name) {
        console.log(`${hiStr} ${name}`);
    };
}

const greeter = hello("Привет");
greeter("Dima");

hello('Hi')("Дмитрий")