'use strict';

const firstName = "John";
const lastName = "Travolta";

function calcAge() {
    return 2025 - this.birthYear
}

const user = {
    firstName,
    lastName,
    birthYear: 1992,
    calcAge
}

console.log(user.calcAge());