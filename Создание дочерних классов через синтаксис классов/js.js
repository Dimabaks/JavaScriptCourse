"use strict";

class Employee {
    constructor(firstName, lastName, age, post) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.post = post;
    }
    calcBirth() {
        console.log(new Date().getFullYear() - this.age);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, age, post, password) {
        super(firstName, lastName, age, post)
        this.password = password;
    }
    sayHello() {
        console.log("Привет");
    }
}



const casier = new Employee("Ivan", "Pupkin", 26, "Casier");
const manager = new Manager("Ivan", "Pupkin", 33, "Manager", "password");

console.log(casier);
casier.calcBirth();

console.log(manager);
manager.calcBirth();
manager.sayHello();