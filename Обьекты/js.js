"use strict";
//вложенные свойства обьектов
//сокращенная запись свойств

const firstName = "John";
const lastName = "Travolta";

const user = {
    firstName,
    lastName,
    age: 30,
    placeOfBirth: {
        country: "Russia",
        city: "Novgorod"
    }
}

user.placeOfBirth.country = "USA";
user.placeOfBirth["dateOfBirth"] = 1992;
delete user["placeOfBirth"].city;
console.log(user);

/* user.sex = "male"
console.log(user);

delete user.sex;
console.log(user); */

/* const answer = prompt("Напишите слово name или age");

alert(user[answer]); */