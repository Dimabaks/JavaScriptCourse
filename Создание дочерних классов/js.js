"use strict";

function Employee(firstName, lastName, age, post) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.post = post;
}

Employee.prototype.calcBirth = function() {
    console.log(new Date().getFullYear() - this.age)
};

const casier = new Employee("Ivan", "Pupkin", 26, "Casier");
console.log(casier);
casier.calcBirth();

///

function Manager(firstName, lastName, age, post, password) {
    Employee.call(this, firstName, lastName, age, post);
    this.password = password;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function() {
    console.log("Привет")
}

const manager = new Manager("Irina", "Pupkina", 33, "Manager", "Password");
console.log(manager);
manager.calcBirth();
manager.sayHello();