"use strict";

const arr = [];
console.log(arr);

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