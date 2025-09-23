"use strict";

const user = {
    firstName: "Dima",
    lastName: "Petrov",
    age: 30,
    get birthYear() {
        return new Date().getFullYear() - this.age;
    }
};

console.log(user.birthYear);

