"use strict";

class User {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age;
        this.birthYear = birthYear;
    }
    get birthYear () {
        return new Date().getFullYear() - this.age
    }
    set birthYear (val) {
        const year = "" + val;
        if (year.length < 4) {
            alert("Вы ввели меньше 4-х символов");
            return
        }
        this.age = new Date().getFullYear() - year;
    }
}

const anna = new User("Anna", "Pupkina", 1992);



console.log(anna);
console.log(anna.birthYear);


/* class User {
    constructor(fullName) {
        this.firstName;
        this.lastName;
        this.fullName = fullName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(val) {
        if (val.length < 3) {
            alert("Имя не корректно. Должно быть больше 3-х символов");
            return
        }
        const name = val.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

const anna = new User("Anna Pupkina");
console.log(anna); */