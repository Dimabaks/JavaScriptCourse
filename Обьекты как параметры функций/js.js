"use strict";

const flight = "432FRE";
const passenger = {
    name: "Dmitrii",
    passport: 2323232212132,
}

function checkIn(flightNum, passId) {
    flightNum = '111RRR'
    passId.name = "Mr " + passId.name

    if (passId.passport == 2323232212132) {
        console.log("Вы успешно прошли регистрацию")
    } else {
        console.log("Регистрация не удалась")
    }
}

function newPassport(person) {
    person.passport = Math.trunc(Math.random() * 100000000)
}

newPassport(passenger);
checkIn(flight, passenger);
