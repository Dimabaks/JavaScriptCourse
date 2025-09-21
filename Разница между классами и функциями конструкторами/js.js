"use strict";

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

User.prototype.calcAge = function() {
    return 2037 - this.age;
}

const ivan = new User("Ivan", "Pupkin", 2002);
console.log(ivan);
console.log(ivan.calcAge());


class User1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    calcAge() {
        return 2037 - this.age;
    }
}

const anna = new User1("Anna", "Pupkina", 1995);
console.log(anna);
console.log(anna.calcAge());